# scribd-dl

Guarda como PDF las páginas que el visor público de Scribd muestra para un documento.

```bash
cd tools/scribd-dl
npm install
npx playwright install chromium
node scribd-dl.mjs "https://es.scribd.com/document/463859555/25-Carpeta-Minima-Odun-de-Ifa" --out descargas
```

- Admite varios enlaces a la vez y los formatos `/document/ID/slug`, `/doc/ID/...` y `/embeds/ID/content`.
- El PDF se nombra con el slug del enlace, por ejemplo `25-Carpeta-Minima-Odun-de-Ifa.pdf`.
- `--headful` abre el navegador visible para depurar.

**Límites:** solo captura lo que Scribd muestra en su visor embebido público. Las páginas que Scribd reserva para suscriptores salen vacías o borrosas (el script avisa). Si Scribd cambia el HTML de su visor, habrá que ajustar los selectores (`.outer_page`). Úsalo solo con documentos que tengas derecho a guardar.
