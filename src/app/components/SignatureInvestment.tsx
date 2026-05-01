import { motion } from 'motion/react';
import { frenchie } from '@/app/media/frenchBulldogMedia';

const tiers = [
  { label: 'Selecto', range: '$130k — $150k', note: 'Exótico' },
  { label: 'Alta', range: '$110k — $130k', note: 'Blue / lilac' },
  { label: 'Media-alta', range: '$95k — $110k', note: 'FCI' },
  { label: 'Entrada', range: '$80k — $95k', note: 'Línea base' },
];

export function SignatureInvestment() {
  return (
    <section id="precios" className="scroll-mt-24 relative overflow-hidden px-4 py-16 sm:px-5 sm:py-20 lg:px-10 lg:py-28">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${frenchie.signatureBg})` }} />
      <div className="absolute inset-0 bg-fw-bg/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-fw-bg via-fw-bg/70 to-transparent" />

      <div className="relative z-10 mx-auto grid min-w-0 max-w-[1400px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="min-w-0"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red">Precios</p>
          <h2 className="text-pretty font-display text-2xl font-bold leading-tight text-fw-white sm:text-3xl md:text-4xl">
            Orientativos en MXN.
          </h2>
          <p className="mt-4 max-w-sm text-pretty text-sm leading-snug text-fw-muted">
            Color, sexo y disponibilidad marcan el total. Te lo decimos por WhatsApp o en visita.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="min-w-0 divide-y divide-fw-border rounded-2xl border border-white/15 bg-fw-surface/60 backdrop-blur-md"
        >
          {tiers.map((t) => (
            <li
              key={t.label}
              className="flex flex-col gap-2 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4 md:py-6"
            >
              <div className="min-w-0">
                <p className="font-display text-base font-bold text-fw-white sm:text-lg">{t.label}</p>
                <p className="mt-0.5 text-xs leading-snug text-fw-muted">{t.note}</p>
              </div>
              <p className="shrink-0 font-display text-sm font-bold text-fw-red sm:text-base md:text-right">
                {t.range} MXN
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
