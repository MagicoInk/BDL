import { motion } from 'motion/react';

const stats = [
  { n: '27+', l: 'Años de trayectoria' },
  { n: '500+', l: 'Familias felices' },
  { n: '15+', l: 'Campeones' },
  { n: '2', l: 'Años garantía salud' },
];

export function IntroPhilosophy() {
  return (
    <section
      id="nosotros"
      className="border-y border-fw-red/25 bg-fw-pure-white px-5 py-20 text-fw-bg lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
          >
            Un hogar donde nacen buenos compañeros.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="space-y-6 text-sm leading-relaxed text-fw-bg/70 md:text-base"
          >
            <p>
              Bulldog Lovers es un lugar sencillo y cuidado: pasillos limpios, cuartos frescos para las mamás y los
              cachorros, y manos que los levantan varias veces al día. Nos importa el olor a jabón, el silencio cuando
              duermen y el juego cuando despiertan.
            </p>
            <p>
              Elegimos cruces con criterio: pruebas de salud, papeles claros y tiempo para platicar con cada familia
              qué implica llevarse un frenchie. Nos importa que llegue sano y que sepas a qué atenerte en los primeros
              meses.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-fw-bg/10 pt-14 md:grid-cols-4 md:gap-4"
        >
          {stats.map((s, i) => (
            <div key={s.l} className={i > 0 ? 'md:border-l md:border-fw-bg/10 md:pl-8' : ''}>
              <div className="font-display text-4xl font-bold text-fw-red tabular-nums md:text-5xl">{s.n}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-fw-bg/55">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
