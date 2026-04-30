import { motion } from 'motion/react';
import { frenchie } from '@/app/media/frenchBulldogMedia';

const tiers = [
  { label: 'Lo más selecto', range: '$130k — $150k MXN', note: 'Exóticos muy buscados' },
  { label: 'Gama alta', range: '$110k — $130k MXN', note: 'Blue y lilac elegidos con tiempo' },
  { label: 'Gama media-alta', range: '$95k — $110k MXN', note: 'Genética con respaldo FCI' },
  { label: 'Punto de partida', range: '$80k — $95k MXN', note: 'Primera entrada a nuestras líneas' },
];

export function SignatureInvestment() {
  return (
    <section className="relative overflow-hidden px-5 py-20 lg:px-10 lg:py-28">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${frenchie.signatureBg})` }} />
      <div className="absolute inset-0 bg-fw-bg/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-fw-bg via-fw-bg/70 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red">Inversión</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-fw-white md:text-4xl lg:text-5xl">
            Los precios cambian según la camada.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-fw-muted">
            La tabla es orientativa: al final cuenta el color, el sexo y si todavía hay cachorros. Platicamos el total
            por WhatsApp o en la visita, con calma y sin obligarte a decidir en el momento.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="divide-y divide-fw-border rounded-2xl border border-white/15 bg-fw-surface/60 backdrop-blur-md"
        >
          {tiers.map((t) => (
            <li key={t.label} className="flex flex-col gap-1 px-6 py-5 md:flex-row md:items-center md:justify-between md:py-6">
              <div>
                <p className="font-display text-lg font-bold text-fw-white">{t.label}</p>
                <p className="text-xs text-fw-muted">{t.note}</p>
              </div>
              <p className="font-display text-fw-red md:text-right">{t.range}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
