#!/usr/bin/env node
/**
 * scribd-dl — guarda como PDF las páginas que el visor público (embed) de
 * Scribd muestra para un documento.
 *
 * Uso:
 *   node scribd-dl.mjs <url-de-scribd> [más urls...] [--out carpeta] [--headful]
 *
 * Acepta enlaces del tipo:
 *   https://es.scribd.com/document/463859555/25-Carpeta-Minima-Odun-de-Ifa
 *   https://www.scribd.com/doc/463859555/...
 *   https://www.scribd.com/embeds/463859555/content
 *
 * Solo captura lo que Scribd ya muestra públicamente en el visor embebido;
 * no evade el muro de pago ni descifra nada. Úsalo con documentos que tengas
 * derecho a guardar.
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseScribdUrl, safeFilename, embedUrl as toEmbedUrl, PRINT_CSS } from './lib/scribd-url.mjs';

export { parseScribdUrl, safeFilename };

function parseArgs(argv) {
  const opts = { urls: [], out: '.', headful: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out' || a === '-o') opts.out = argv[++i];
    else if (a === '--headful') opts.headful = true;
    else if (a === '--help' || a === '-h') opts.help = true;
    else opts.urls.push(a);
  }
  return opts;
}

async function download(browser, url, outDir) {
  const { id, slug } = parseScribdUrl(url);
  const embedUrl = toEmbedUrl(id);
  const file = path.resolve(outDir, safeFilename(slug));

  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  try {
    console.log(`→ ${id}: abriendo ${embedUrl}`);
    await page.goto(embedUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.waitForSelector('.outer_page', { timeout: 30_000 }).catch(() => {
      throw new Error('El visor no mostró páginas (¿documento privado, eliminado o no embebible?)');
    });

    // Las páginas se cargan de forma diferida: llevar cada una a la vista.
    const total = await page.locator('.outer_page').count();
    console.log(`  ${total} páginas en el visor; cargando…`);
    for (let i = 0; i < total; i++) {
      await page.locator('.outer_page').nth(i).scrollIntoViewIfNeeded();
      await page.waitForTimeout(350);
    }
    await page.waitForLoadState('networkidle', { timeout: 30_000 }).catch(() => {});

    // Medidas de la primera página para dimensionar el PDF.
    const size = await page.evaluate(() => {
      const p = document.querySelector('.outer_page');
      const r = p.getBoundingClientRect();
      return { w: Math.round(r.width), h: Math.round(r.height) };
    });

    // Dejar solo las páginas: quitar barras, banners y márgenes.
    await page.addStyleTag({ content: PRINT_CSS });

    const missing = await page.locator('.page_missing_explanation, .blurred_page').count();
    if (missing) console.warn(`  Aviso: ${missing} página(s) no están disponibles públicamente y saldrán vacías o borrosas.`);

    await page.pdf({
      path: file,
      width: `${size.w}px`,
      height: `${size.h}px`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log(`  ✔ guardado en ${file}`);
    return file;
  } finally {
    await page.close();
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || opts.urls.length === 0) {
    console.log('Uso: node scribd-dl.mjs <url-de-scribd> [más urls...] [--out carpeta] [--headful]');
    process.exit(opts.help ? 0 : 1);
  }

  const { chromium } = await import('playwright');
  await mkdir(opts.out, { recursive: true });
  const browser = await chromium.launch({ headless: !opts.headful });

  let failed = 0;
  try {
    for (const url of opts.urls) {
      try {
        await download(browser, url, opts.out);
      } catch (err) {
        failed++;
        console.error(`  ✘ ${url}: ${err.message}`);
      }
    }
  } finally {
    await browser.close();
  }
  process.exit(failed ? 1 : 0);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) main();
