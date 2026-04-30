import { motion } from 'motion/react';

const rows = [
  {
    n: '01',
    title: 'Líneas genéticas de élite',
    desc: 'Importación de sangre europea y americana, ADN, pedigree FCI y ausencia de consanguinidad.',
    href: 'https://wa.me/5215527294584?text=Información%20sobre%20líneas%20genéticas',
    imgs: [
      'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=600&q=80',
      'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&q=80',
    ],
  },
  {
    n: '02',
    title: 'Salud y documentación',
    desc: 'Pruebas genéticas a padres, certificado veterinario, vacunas, microchip y contrato legal.',
    href: 'https://wa.me/5215527294584?text=Información%20sobre%20salud%20y%20papeles',
    imgs: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80',
      'https://images.unsplash.com/photo-1544966951-9dc3611c1558?w=500&q=80',
    ],
  },
  {
    n: '03',
    title: 'Experiencia de entrega',
    desc: 'Socialización, kit de bienvenida, seguro inicial y línea directa de asesoría de por vida.',
    href: 'https://wa.me/5215527294584?text=Quiero%20conocer%20el%20proceso%20de%20entrega',
    imgs: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80',
      'https://images.unsplash.com/photo-1613295878076-c1edd28d4bfe?w=500&q=80',
    ],
  },
];

export function ServicesNumbered() {
  return (
    <section id="servicios" className="border-b border-fw-border bg-fw-bg-soft px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-gold"
        >
          Servicios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 font-display text-3xl font-bold text-fw-white md:text-4xl"
        >
          Tres pilares, un mismo estándar.
        </motion.h2>

        <div className="divide-y divide-fw-border">
          {rows.map((row, idx) => (
            <motion.article
              key={row.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-16"
            >
              <div className="lg:col-span-2">
                <span className="font-display text-5xl font-bold text-fw-gold/90 md:text-6xl">{row.n}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-xl font-bold text-fw-white md:text-2xl">{row.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-fw-muted md:text-base">{row.desc}</p>
                <a
                  href={row.href}
                  className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.2em] text-fw-gold hover:text-fw-white"
                >
                  Saber más →
                </a>
              </div>
              <div className="flex justify-end gap-3 lg:col-span-6">
                <div
                  className="h-44 w-32 shrink-0 rounded-xl bg-cover bg-center shadow-lg md:h-52 md:w-40 lg:h-56 lg:w-44"
                  style={{ backgroundImage: `url(${row.imgs[0]})` }}
                />
                <div
                  className="h-36 w-28 translate-y-6 rounded-xl bg-cover bg-center shadow-lg md:h-44 md:w-36 lg:h-48 lg:w-36"
                  style={{ backgroundImage: `url(${row.imgs[1]})` }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
