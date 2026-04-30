import { motion } from 'motion/react';
import { Clock, TrendingUp, Award } from 'lucide-react';

export function UrgencySection() {
  return (
    <section
      id="urgencia"
      className="relative overflow-hidden border-y border-studio-line bg-studio-deep px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,currentColor_1px,transparent_1px)] bg-[length:72px_100%] text-studio-paper"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-studio-line">
          Disponibilidad
        </p>
        <div className="grid gap-14 text-center md:grid-cols-3 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Clock className="mb-5 text-studio-accent" size={40} strokeWidth={1.25} />
            <h3 className="mb-3 font-serif text-3xl font-normal text-studio-paper md:text-4xl">
              Solo 3 cachorros
            </h3>
            <p className="max-w-xs text-sm font-light leading-relaxed text-studio-line">
              Disponibles este mes. Lista de espera activa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center border-studio-line/40 md:border-x md:px-8"
          >
            <TrendingUp className="mb-5 text-studio-accent" size={40} strokeWidth={1.25} />
            <h3 className="mb-3 font-serif text-3xl font-normal text-studio-paper md:text-4xl">
              Alta demanda
            </h3>
            <p className="max-w-xs text-sm font-light leading-relaxed text-studio-line">
              Más de 150 consultas en las últimas dos semanas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <Award className="mb-5 text-studio-accent" size={40} strokeWidth={1.25} />
            <h3 className="mb-3 font-serif text-3xl font-normal text-studio-paper md:text-4xl">
              Exclusividad
            </h3>
            <p className="max-w-xs text-sm font-light leading-relaxed text-studio-line">
              Genética única en México y Latinoamérica.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 border-t border-studio-line/30 pt-14 text-center"
        >
          <p className="mb-8 font-serif text-2xl font-light text-studio-paper md:text-3xl">
            Las mejores líneas suelen agotarse en poco tiempo
          </p>
          <motion.a
            href="https://wa.me/5215527294584?text=Quiero%20información%20urgente%20sobre%20disponibilidad"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex border border-studio-paper/90 bg-transparent px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-studio-paper transition-colors hover:bg-studio-paper hover:text-studio-deep"
          >
            Consultar disponibilidad
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
