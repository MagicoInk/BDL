import { motion } from 'motion/react';
import { frenchieByIndex } from '@/app/media/frenchBulldogMedia';

export function FinalCTA() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-5 sm:py-24 lg:px-10 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${frenchieByIndex(11, 2000)})` }}
      />
      <div className="absolute inset-0 bg-fw-bg/80" />
      <div className="relative z-10 mx-auto min-w-0 max-w-[1100px] px-1 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl font-bold leading-tight text-fw-white sm:text-3xl md:text-4xl"
        >
          ¿Hablamos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-md text-sm leading-snug text-fw-muted sm:mt-6"
        >
          WhatsApp o visita con cita.
        </motion.p>
        <motion.a
          href="https://wa.me/5215527294584?text=Hola,%20quiero%20agendar%20con%20Bulldog%20Lovers"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex w-full max-w-xs touch-manipulation justify-center rounded-full border border-fw-red bg-fw-red px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-fw-pure-white transition-colors hover:bg-fw-pure-white hover:text-fw-red sm:mt-12 sm:w-auto sm:max-w-none sm:px-12 sm:tracking-[0.22em]"
        >
          Escribir
        </motion.a>
      </div>
    </section>
  );
}

