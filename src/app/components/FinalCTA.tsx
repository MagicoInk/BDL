import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section id="contacto" className="scroll-mt-24 px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1100px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-fw-white md:text-5xl lg:text-6xl"
        >
          Cuidado premium para tu mejor amigo.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-fw-muted md:text-base"
        >
          Agenda una llamada o visita. Respondemos con el mismo rigor que pondrías en un proyecto arquitectónico: planos
          claros, tiempos reales y cero sorpresas.
        </motion.p>
        <motion.a
          href="https://wa.me/5215527294584?text=Hola,%20quiero%20agendar%20con%20Bulldog%20Lovers"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 inline-flex rounded-full bg-fw-gold px-12 py-4 text-xs font-bold uppercase tracking-[0.22em] text-fw-bg transition-colors hover:bg-fw-white"
        >
          Agendar ahora
        </motion.a>
      </div>
    </section>
  );
}
