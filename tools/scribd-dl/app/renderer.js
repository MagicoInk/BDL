const $ = (id) => document.getElementById(id);
const urlsEl = $('urls'), folderEl = $('folder'), jobsEl = $('jobs');
const goBtn = $('go'), cancelBtn = $('cancel'), summaryEl = $('summary');
const URL_RE = /scribd\.com\/(?:document|doc|read|book|presentation|embeds)\/\d+/i;

const load = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const save = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

(async () => {
  folderEl.value = load('folder') || (await window.scribd.defaultFolder());
})();

$('choose').onclick = async () => {
  const dir = await window.scribd.chooseFolder(folderEl.value);
  if (dir) { folderEl.value = dir; save('folder', dir); }
};
$('open').onclick = () => window.scribd.openPath(folderEl.value);
cancelBtn.onclick = () => { window.scribd.cancel(); cancelBtn.disabled = true; };

const LABELS = { espera: 'En espera', abriendo: 'Abriendo', cargando: 'Cargando', generando: 'Generando', listo: 'Listo', error: 'Error' };

function jobItem(url) {
  const li = document.createElement('li');
  li.className = 'job espera';
  li.innerHTML = '<div class="top"><span class="badge"></span><span class="url"></span></div><div class="bar"><i></i></div><div class="detail"></div>';
  li.querySelector('.url').textContent = url;
  li.querySelector('.badge').textContent = LABELS.espera;
  return li;
}

window.scribd.onProgress(({ index, status, detail, progress, file }) => {
  const li = jobsEl.children[index];
  if (!li) return;
  li.className = `job ${status}`;
  li.querySelector('.badge').textContent = LABELS[status] || status;
  li.querySelector('.detail').textContent = detail || '';
  if (progress != null) li.querySelector('.bar i').style.width = `${Math.round(progress * 100)}%`;
  if (file) {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = 'Mostrar archivo';
    a.onclick = (e) => { e.preventDefault(); window.scribd.showFile(file); };
    li.querySelector('.detail').append(' · ', a);
  }
});

goBtn.onclick = async () => {
  const lines = urlsEl.value.split(/\s+/).map((s) => s.trim()).filter(Boolean);
  const urls = [...new Set(lines.filter((s) => URL_RE.test(s)))];
  const bad = lines.filter((s) => !URL_RE.test(s));
  if (!urls.length) {
    summaryEl.textContent = 'No hay enlaces válidos de Scribd.';
    return;
  }
  jobsEl.replaceChildren(...urls.map(jobItem));
  summaryEl.textContent = bad.length ? `${bad.length} línea(s) ignorada(s): no son enlaces de Scribd.` : '';
  goBtn.disabled = urlsEl.disabled = true;
  cancelBtn.hidden = false; cancelBtn.disabled = false;
  try {
    const { ok, total } = await window.scribd.download(urls, folderEl.value);
    summaryEl.textContent = `${ok} de ${total} guardado(s).`;
  } finally {
    goBtn.disabled = urlsEl.disabled = false;
    cancelBtn.hidden = true;
  }
};
