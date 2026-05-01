import { motion } from 'motion/react';

const pillars = [
  { title: 'Hogar', text: 'Limpio y con espacio.' },
  { title: 'Claridad', text: 'Padres, visita con cita, papeles.' },
  { title: 'Después', text: 'Seguimiento y grupo de dueños.' },
];

export function WhyChooseSection() {
  return (
    <section id="por-que" className="scroll-mt-24 border-b border-fw-border bg-fw-bg px-4 py-12 sm:px-5 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto min-w-0 max-w-[1400px]">
        <h2 className="mb-8 font-display text-xl font-bold text-fw-white sm:mb-10 sm:text-2xl">Por qué aquí</h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-display text-base font-bold text-fw-white">{p.title}</h3>
              <p className="mt-1 text-sm text-fw-muted">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
