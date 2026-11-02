import { app, BrowserWindow, ipcMain, dialog, shell } from 'electron';
import { writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseScribdUrl, safeFilename, embedUrl, PRINT_CSS } from '../lib/scribd-url.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';

let win;
let cancelled = false;

function createWindow() {
  win = new BrowserWindow({
    width: 760,
    height: 640,
    minWidth: 560,
    minHeight: 480,
    title: 'Scribd a PDF',
    backgroundColor: '#f6f5f2',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      sandbox: true,
    },
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Archivo que no pisa uno existente: nombre.pdf, nombre (2).pdf… */
async function uniquePath(dir, name) {
  const ext = path.extname(name);
  const base = name.slice(0, -ext.length);
  for (let n = 1; ; n++) {
    const p = path.join(dir, n === 1 ? name : `${base} (${n})${ext}`);
    try { await access(p); } catch { return p; }
  }
}

async function downloadOne(url, outDir, report) {
  const { id, slug } = parseScribdUrl(url);
  const viewer = new BrowserWindow({
    show: false,
    width: 1200,
    height: 1600,
    webPreferences: { sandbox: true, contextIsolation: true, offscreen: false },
  });
  try {
    report({ status: 'abriendo', detail: 'Abriendo el visor de Scribd…' });
    await viewer.loadURL(embedUrl(id), { userAgent: UA });

    const total = await viewer.webContents.executeJavaScript(`
      new Promise((resolve) => {
        const t0 = Date.now();
        (function check() {
          const n = document.querySelectorAll('.outer_page').length;
          if (n) return resolve(n);
          if (Date.now() - t0 > 30000) return resolve(0);
          setTimeout(check, 500);
        })();
      })`);
    if (!total) throw new Error('El visor no mostró páginas (¿documento privado, eliminado o no embebible?)');

    for (let i = 0; i < total; i++) {
      if (cancelled) throw new Error('Cancelado');
      report({ status: 'cargando', detail: `Cargando página ${i + 1} de ${total}`, progress: (i + 1) / total });
      await viewer.webContents.executeJavaScript(
        `document.querySelectorAll('.outer_page')[${i}]?.scrollIntoView({block:'center'})`,
      );
      await sleep(400);
    }
    await sleep(1500);

    const info = await viewer.webContents.executeJavaScript(`({
      w: document.querySelector('.outer_page').getBoundingClientRect().width,
      h: document.querySelector('.outer_page').getBoundingClientRect().height,
      missing: document.querySelectorAll('.page_missing_explanation, .blurred_page').length,
    })`);
    await viewer.webContents.insertCSS(PRINT_CSS);

    report({ status: 'generando', detail: 'Generando PDF…' });
    const pdf = await viewer.webContents.printToPDF({
      printBackground: true,
      pageSize: { width: info.w / 96, height: info.h / 96 }, // pulgadas
      margins: { marginType: 'none' },
    });

    await mkdir(outDir, { recursive: true });
    const file = await uniquePath(outDir, safeFilename(slug));
    await writeFile(file, pdf);
    const warn = info.missing
      ? ` · ${info.missing} página(s) no públicas saldrán vacías o borrosas`
      : '';
    report({ status: 'listo', detail: `${total} páginas${warn}`, file, progress: 1 });
  } finally {
    viewer.destroy();
  }
}

ipcMain.handle('choose-folder', async (_e, current) => {
  const r = await dialog.showOpenDialog(win, {
    title: 'Carpeta de destino',
    defaultPath: current || app.getPath('downloads'),
    properties: ['openDirectory', 'createDirectory'],
  });
  return r.canceled ? null : r.filePaths[0];
});

ipcMain.handle('default-folder', () => path.join(app.getPath('downloads'), 'Scribd'));
ipcMain.handle('open-path', (_e, p) => shell.openPath(p));
ipcMain.handle('show-file', (_e, p) => shell.showItemInFolder(p));
ipcMain.handle('cancel', () => { cancelled = true; });

ipcMain.handle('download', async (e, { urls, outDir }) => {
  cancelled = false;
  let ok = 0;
  for (let i = 0; i < urls.length; i++) {
    const report = (data) => e.sender.send('progress', { index: i, ...data });
    if (cancelled) { report({ status: 'error', detail: 'Cancelado' }); continue; }
    try {
      await downloadOne(urls[i], outDir, report);
      ok++;
    } catch (err) {
      report({ status: 'error', detail: err.message });
    }
  }
  return { ok, total: urls.length };
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
