const URL_RE =
  /scribd\.com\/(?:document|doc|read|book|presentation|embeds)\/(\d+)(?:\/([^/?#]+))?/i;

/** Extrae { id, slug } de un enlace de Scribd o lanza un error. */
export function parseScribdUrl(input) {
  const m = String(input).match(URL_RE);
  if (!m) throw new Error(`No parece un enlace de documento de Scribd: ${input}`);
  const id = m[1];
  const slug = m[2] && m[2] !== 'content' ? decodeURIComponent(m[2]) : `scribd-${id}`;
  return { id, slug };
}

/** Nombre de archivo seguro a partir del slug. */
export function safeFilename(slug) {
  const clean = slug
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 150);
  return `${clean || 'documento'}.pdf`;
}

export const embedUrl = (id) => `https://www.scribd.com/embeds/${id}/content`;

/** CSS que deja solo las páginas del visor, una por hoja. */
export const PRINT_CSS = `
  .toolbar_top, .toolbar_bottom, .mobile_overlay, .promo_div, .auto_promo,
  .between_page_module, .page_missing_explanation, [class*="banner"],
  [class*="Promo"], header, footer { display: none !important; }
  html, body, .document_scroller, .document_container {
    margin: 0 !important; padding: 0 !important; overflow: visible !important;
    height: auto !important; position: static !important; background: #fff !important;
  }
  .outer_page_container { padding: 0 !important; margin: 0 !important; }
  .outer_page {
    margin: 0 !important; border: 0 !important; box-shadow: none !important;
    page-break-after: always; break-after: page;
  }
  .outer_page:last-child { page-break-after: auto; break-after: auto; }
`;
