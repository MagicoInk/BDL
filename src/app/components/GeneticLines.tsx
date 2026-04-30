import { motion } from 'motion/react';

const lines = [
  {
    name: 'Blue Line',
    image: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=800&q=80',
    description: 'Genética europea exclusiva. Campeones internacionales.',
    features: ['ADN certificado', 'Pedigree FCI', 'Sin consanguinidad'],
  },
  {
    name: 'Lilac & Isabella',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80',
    description: 'Los colores más raros y codiciados del mundo.',
    features: ['Genética dilución doble', 'Ojos claros', 'Ultra premium'],
  },
  {
    name: 'Merle Exotic',
    image: 'https://images.unsplash.com/photo-1544966951-9dc3611c1558?w=800&q=80',
    description: 'Patrones únicos imposibles de replicar.',
    features: ['Salud garantizada', 'Patrón perfecto', 'Linaje comprobado'],
  },
];

export function GeneticLines() {
  return (
    <section id="lineas" className="bg-studio-paper px-6 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-studio-muted">
            Portafolio genético
          </p>
          <h2 className="mb-6 font-serif text-4xl font-normal tracking-tight text-studio-ink md:text-6xl md:leading-[1.1]">
            Líneas de élite
          </h2>
          <div className="mb-8 h-px w-16 bg-studio-accent" />
          <p className="text-lg font-light leading-relaxed text-studio-muted">
            Importamos las mejores líneas de Europa y Estados Unidos. Cada cachorro proviene de campeones
            mundiales con salud certificada.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {lines.map((line, idx) => (
            <motion.article
              key={line.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group"
            >
              <div className="relative mb-8 aspect-[3/4] overflow-hidden border border-studio-line bg-studio-canvas">
                <img
                  src={line.image}
                  alt={line.name}
                  className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-deep/70 via-studio-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-3xl text-studio-paper">{line.name}</h3>
                </div>
              </div>

              <p className="mb-6 text-base font-light leading-relaxed text-studio-muted">{line.description}</p>

              <ul className="space-y-2.5 border-t border-studio-line pt-6">
                {line.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-studio-ink">
                    <span className="h-px w-4 shrink-0 bg-studio-accent" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
