import { motion } from 'motion/react';
import { frenchieByIndex } from '@/app/media/frenchBulldogMedia';

export function FinalCTA() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden px-5 py-24 lg:px-10 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${frenchieByIndex(11, 2000)})` }}
      />
      <div className="absolute inset-0 bg-fw-bg/80" />
      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-fw-white md:text-5xl lg:text-6xl"
        >
          ¿Quieres platicar con nosotros?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-fw-muted md:text-base"
        >
          Mándanos un WhatsApp o pide una visita con cita. Te decimos qué cachorros hay, cuándo estarían listos y qué
          trae incluido el precio, sin meterte prisa.
        </motion.p>
        <motion.a
          href="https://wa.me/5215527294584?text=Hola,%20quiero%20agendar%20con%20Bulldog%20Lovers"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 inline-flex rounded-full border border-fw-red bg-fw-red px-12 py-4 text-xs font-bold uppercase tracking-[0.22em] text-fw-pure-white transition-colors hover:bg-fw-pure-white hover:text-fw-red"
        >
          Agendar ahora
        </motion.a>
      </div>
    </section>
  );
}

