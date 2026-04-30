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
    <section className="relative overflow-hidden px-4 py-16 sm:px-5 sm:py-20 lg:px-10 lg:py-28">
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
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red">Inversión</p>
          <h2 className="text-pretty font-display text-2xl font-bold leading-tight text-fw-white sm:text-3xl md:text-4xl lg:text-5xl">
            Los precios cambian según la camada.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-fw-muted">
            La tabla es orientativa: al final cuenta el color, el sexo y si todavía hay cachorros. Platicamos el total
            por WhatsApp o en la visita, con calma y sin obligarte a decidir en el momento.
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
              <p className="shrink-0 font-display text-sm font-bold text-fw-red sm:text-base md:text-right">{t.range}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
