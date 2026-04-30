import { motion } from 'motion/react';
import { frenchieByIndex } from '@/app/media/frenchBulldogMedia';

const lines = [
  {
    name: 'Blue Line',
    description: 'Sangre europea con trayectoria en exposición y salud documentada.',
    features: ['ADN certificado', 'Pedigree FCI', 'Cruces sin consanguinidad'],
  },
  {
    name: 'Lilac & Isabella',
    description: 'Tonos suaves y poco comunes, siempre con tiempo y espacio en casa.',
    features: ['Dilución doble clara', 'Ojos sanos', 'Cuidado diario'],
  },
  {
    name: 'Merle Exotic',
    description: 'Mantos que enamoran, con prioridad absoluta al bienestar del cachorro.',
    features: ['Salud revisada', 'Patrón estable', 'Papeles en orden'],
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
            Nuestras líneas
          </p>
          <h2 className="mb-6 font-serif text-4xl font-normal tracking-tight text-studio-ink md:text-6xl md:leading-[1.1]">
            Sangre cuidada, familia feliz
          </h2>
          <div className="mb-8 h-px w-16 bg-studio-accent" />
          <p className="text-lg font-light leading-relaxed text-studio-muted">
            Elegimos padres en Europa y Estados Unidos con historial claro. Cada cachorro nace en un ambiente limpio,
            con revisiones veterinarias y el cariño que merece antes de llegar a tu hogar.
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
                  src={frenchieByIndex(idx + 5, 1000)}
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
