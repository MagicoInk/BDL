import { motion } from 'motion/react';

const stats = [
  { n: '27+', l: 'Años de trayectoria' },
  { n: '500+', l: 'Familias felices' },
  { n: '15+', l: 'Campeones' },
  { n: '100%', l: 'Compromiso' },
];

export function IntroPhilosophy() {
  return (
    <section id="nosotros" className="border-b border-fw-border bg-fw-bg px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-fw-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
          >
            Criando compañeros que se sienten como en casa.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="space-y-6 text-sm leading-relaxed text-fw-muted md:text-base"
          >
            <p>
              Bulldog Lovers nace de la misma obsesión por el detalle que un estudio de arquitectura: proporciones,
              salud, temperamento y una experiencia clara desde el primer contacto.
            </p>
            <p>
              Seleccionamos cruces con pruebas genéticas, pedigree internacional y crianza indoor con socialización
              temprana. Tu cachorro no es un producto: es un proyecto de vida compartido.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-fw-border pt-14 md:grid-cols-4 md:gap-4"
        >
          {stats.map((s, i) => (
            <div key={s.l} className={i > 0 ? 'md:border-l md:border-fw-border md:pl-8' : ''}>
              <div className="font-display text-4xl font-bold text-fw-white md:text-5xl">{s.n}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-fw-muted">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
