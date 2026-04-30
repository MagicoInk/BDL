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
    <section className="border-b border-fw-border bg-fw-elevated px-5 py-10 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
        {items.map(({ Icon, t }, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-xl border border-fw-border bg-fw-surface/50 px-4 py-4"
          >
            <Icon className="shrink-0 text-fw-red" size={22} strokeWidth={1.25} />
            <span className="text-xs font-semibold uppercase tracking-wider text-fw-fog">{t}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
