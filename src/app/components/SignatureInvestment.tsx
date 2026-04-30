import { motion } from 'motion/react';

const tiers = [
  { label: 'Colección maestra', range: '$130k — $150k MXN', note: 'Exóticos ultra premium' },
  { label: 'Línea signature', range: '$110k — $130k MXN', note: 'Blue / lilac seleccionados' },
  { label: 'Prestige', range: '$95k — $110k MXN', note: 'Genética certificada FCI' },
  { label: 'Exclusive', range: '$80k — $95k MXN', note: 'Entrada a líneas elite' },
];

const BG =
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=2400&q=80';

export function SignatureInvestment() {
  return (
    <section className="relative overflow-hidden px-5 py-20 lg:px-10 lg:py-28">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }} />
      <div className="absolute inset-0 bg-fw-bg/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-fw-bg via-fw-bg/70 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-gold">Inversión</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-fw-white md:text-4xl lg:text-5xl">
            Diseños signature en cada camada.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-fw-muted">
            Rangos orientativos según color, sexo y línea. Cotización final tras evaluación y disponibilidad.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="divide-y divide-fw-border rounded-2xl border border-fw-border bg-fw-surface/60 backdrop-blur-md"
        >
          {tiers.map((t) => (
            <li key={t.label} className="flex flex-col gap-1 px-6 py-5 md:flex-row md:items-center md:justify-between md:py-6">
              <div>
                <p className="font-display text-lg font-bold text-fw-white">{t.label}</p>
                <p className="text-xs text-fw-muted">{t.note}</p>
              </div>
              <p className="font-display text-fw-gold md:text-right">{t.range}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
