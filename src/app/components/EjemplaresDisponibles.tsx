import { motion } from 'motion/react';
import { frenchieByIndex } from '@/app/media/frenchBulldogMedia';

/** Actualiza esta lista cuando cambien los ejemplares en venta (textos libres). */
const ejemplares = [
  {
    id: 'e1',
    nombre: 'Macho · blue fawn',
    nota: '8 semanas · disponible',
    imgIndex: 2,
  },
  {
    id: 'e2',
    nombre: 'Hembra · lilac',
    nota: 'Disponible · lista para visita',
    imgIndex: 5,
  },
  {
    id: 'e3',
    nombre: 'Macho · merle',
    nota: 'Consultar por WhatsApp',
    imgIndex: 8,
  },
  {
    id: 'e4',
    nombre: 'Hembra · crema',
    nota: 'Próxima salida',
    imgIndex: 11,
  },
];

function waEjemplar(mensaje: string) {
  return `https://wa.me/5215527294584?text=${encodeURIComponent('Hola, me interesa: ' + mensaje)}`;
}

export function EjemplaresDisponibles() {
  return (
    <section
      id="ejemplares"
      className="scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] border-b border-fw-border bg-fw-bg px-4 py-10 sm:scroll-mt-24 sm:px-5 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto min-w-0 max-w-[1400px]">
        <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red">Inventario</p>
            <h2 className="text-pretty font-display text-xl font-bold leading-tight text-fw-white sm:text-3xl md:text-4xl">
              Ejemplares disponibles
            </h2>
            <p className="mt-2 max-w-lg text-pretty text-xs leading-relaxed text-fw-muted sm:text-sm">
              Fotos de referencia. Disponibilidad y precio por WhatsApp.
            </p>
          </div>
          <a
            href={waEjemplar('quiero saber qué ejemplares tienen disponibles')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full shrink-0 touch-manipulation items-center justify-center rounded-full border border-fw-red bg-fw-red px-5 text-[11px] font-bold uppercase tracking-[0.18em] text-fw-pure-white transition-colors hover:bg-transparent hover:text-fw-red sm:h-auto sm:w-fit sm:py-2.5 sm:tracking-[0.2em]"
          >
            Ver todo · WhatsApp
          </a>
        </div>

        {/* Móvil: carrusel horizontal con snap · tablet+: rejilla */}
        <div
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6 [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {ejemplares.map((e, i) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex w-[min(17.5rem,calc(100vw-3rem))] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-fw-border bg-fw-surface sm:w-auto sm:snap-none"
            >
              <div
                className="aspect-[4/5] min-h-[11rem] bg-cover bg-center sm:min-h-0"
                style={{ backgroundImage: `url(${frenchieByIndex(e.imgIndex, 900)})` }}
                role="img"
                aria-hidden
              />
              <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                <p className="text-pretty font-display text-[15px] font-bold leading-snug text-fw-white sm:text-base">
                  {e.nombre}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-fw-muted sm:text-xs">{e.nota}</p>
                <a
                  href={waEjemplar(e.nombre)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex min-h-11 touch-manipulation items-center justify-center rounded-full border border-fw-border py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-fw-red transition-colors active:bg-fw-red active:text-fw-pure-white sm:mt-4 sm:tracking-[0.15em] sm:hover:border-fw-red sm:hover:bg-fw-red sm:hover:text-fw-pure-white"
                >
                  Preguntar
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-4 text-center text-[11px] text-fw-muted sm:hidden">Desliza para ver más →</p>
      </div>
    </section>
  );
}
