import { motion } from 'motion/react';
import { frenchieByIndex } from '@/app/media/frenchBulldogMedia';

const rows = [
  {
    n: '01',
    title: 'Líneas con historia clara',
    desc: 'Sangre europea y americana, ADN, pedigree FCI y cruces pensados para evitar consanguinidad.',
    href: 'https://wa.me/5215527294584?text=Información%20sobre%20líneas%20genéticas',
  },
  {
    n: '02',
    title: 'Salud y documentación',
    desc: 'Pruebas genéticas a padres, certificado veterinario, vacunas, microchip y contrato legal.',
    href: 'https://wa.me/5215527294584?text=Información%20sobre%20salud%20y%20papeles',
  },
  {
    n: '03',
    title: 'Entrega y primeros días',
    desc: 'Socialización en casa, kit de bienvenida, seguro inicial y un número al que puedes escribir después.',
    href: 'https://wa.me/5215527294584?text=Quiero%20conocer%20el%20proceso%20de%20entrega',
  },
];

/** Grid 12 columnas: número | texto | imágenes (misma estructura en header y filas). */
const gridTemplate = 'grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0';

export function ServicesNumbered() {
  return (
    <section
      id="servicios"
      className="border-b border-fw-border bg-fw-bg-soft px-5 py-20 pb-28 lg:px-10 lg:pb-24 lg:pt-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Cabecera alineada con la columna de texto (cols 3–12), hueco cols 1–2 = ancho del número) */}
        <header className={`${gridTemplate} mb-0 items-end border-b border-fw-border pb-10 lg:pb-12`}>
          <div className="hidden lg:col-span-2 lg:block" aria-hidden />
          <div className="lg:col-span-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red"
            >
              Servicios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl font-display text-3xl font-bold leading-tight text-fw-white md:text-4xl"
            >
              Tres cosas que no negociamos.
            </motion.h2>
          </div>
        </header>

        <div className="divide-y divide-fw-border lg:mt-4">
          {rows.map((row, idx) => (
            <motion.article
              key={row.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className={`${gridTemplate} items-center py-12 lg:py-14`}
            >
              {/* Número: misma columna que el hueco del header */}
              <div className="flex items-center lg:col-span-2 lg:min-h-[11rem] lg:items-center">
                <span className="font-display text-5xl font-bold leading-none text-fw-red/90 tabular-nums md:text-6xl">
                  {row.n}
                </span>
              </div>

              {/* Texto */}
              <div className="flex min-w-0 flex-col justify-center lg:col-span-4">
                <h3 className="font-display text-xl font-bold text-fw-white md:text-2xl">{row.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-fw-muted md:text-base">{row.desc}</p>
                <a
                  href={row.href}
                  className="mt-6 inline-flex w-fit text-xs font-bold uppercase tracking-[0.2em] text-fw-red transition-colors hover:text-fw-white"
                >
                  Saber más →
                </a>
              </div>

              {/* Imágenes: contenedor acotado, sin desbordar; margen para FAB WhatsApp */}
              <div className="min-w-0 pr-14 sm:pr-16 lg:col-span-6 lg:pr-4">
                <div className="mx-auto grid w-full max-w-full grid-cols-2 gap-3 sm:max-w-md lg:ml-auto lg:mr-0 lg:max-w-[min(100%,20rem)]">
                  <div
                    className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-fw-elevated shadow-lg ring-1 ring-fw-border"
                    style={{ backgroundImage: `url(${frenchieByIndex(idx * 2, 720)})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    role="img"
                    aria-hidden
                  />
                  <div
                    className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-fw-elevated shadow-lg ring-1 ring-fw-border"
                    style={{
                      backgroundImage: `url(${frenchieByIndex(idx * 2 + 1, 720)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    role="img"
                    aria-hidden
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
