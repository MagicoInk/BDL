import { motion } from 'motion/react';

const stats = [
  { n: '27+', l: 'Años' },
  { n: '500+', l: 'Familias' },
  { n: 'FCI', l: 'Pedigree' },
  { n: '2', l: 'Años garantía' },
];

export function IntroPhilosophy() {
  return (
    <section
      id="nosotros"
      className="border-y border-fw-red/25 bg-fw-pure-white px-4 py-12 text-fw-bg sm:px-5 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto min-w-0 max-w-[900px] text-center lg:max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-pretty font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl"
        >
          Frenchie con pedigree, hogar limpio y años de oficio. Platicamos antes de apartar.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-fw-bg/10 pt-8 sm:mt-10 sm:max-w-2xl sm:grid-cols-4 sm:gap-4 sm:pt-10"
        >
          {stats.map((s, i) => (
            <div key={s.l} className={`min-w-0 ${i > 0 ? 'sm:border-l sm:border-fw-bg/10 sm:pl-6 md:pl-8' : ''}`}>
              <div className="font-display text-2xl font-bold text-fw-red tabular-nums sm:text-3xl md:text-4xl">{s.n}</div>
              <div className="mt-1 text-[10px] font-medium uppercase leading-snug tracking-wider text-fw-bg/55 sm:text-xs">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
