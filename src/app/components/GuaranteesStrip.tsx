import { motion } from 'motion/react';
import { Shield, Heart, FileCheck, Headphones } from 'lucide-react';

const items = [
  { Icon: Shield, t: 'Genética 2 años' },
  { Icon: Heart, t: 'Salud certificada' },
  { Icon: FileCheck, t: 'Contrato legal' },
  { Icon: Headphones, t: 'Soporte vitalicio' },
];

export function GuaranteesStrip() {
  return (
    <section className="border-b border-fw-border bg-fw-elevated px-4 py-8 sm:px-5 sm:py-10 lg:px-10">
      <div className="mx-auto grid min-w-0 max-w-[1400px] grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4 md:gap-4">
        {items.map(({ Icon, t }, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex min-w-0 items-center gap-2 rounded-xl border border-fw-border bg-fw-surface/50 px-2.5 py-3 sm:gap-3 sm:px-4 sm:py-4"
          >
            <Icon className="shrink-0 text-fw-red" size={20} strokeWidth={1.25} />
            <span className="min-w-0 text-[10px] font-semibold uppercase leading-tight tracking-wide text-fw-fog break-words sm:text-xs sm:tracking-wider">
              {t}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
