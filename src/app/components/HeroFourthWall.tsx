import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const HERO_IMG =
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=2400&q=85';

export function HeroFourthWall() {
  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-fw-bg/90 via-fw-bg/55 to-fw-bg/95" />
      <div className="absolute inset-0 bg-emerald-950/25 mix-blend-multiply" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col px-5 pb-10 pt-28 lg:px-10 lg:pb-14 lg:pt-32">
        <div className="flex flex-1 flex-col items-center justify-center px-2 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-fw-gold"
          >
            Criadero exclusivo · CDMX
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="font-display text-[13vw] font-extrabold leading-[0.88] tracking-[-0.04em] text-white/25 sm:text-[11vw] md:text-[9vw] lg:text-[7.5rem] xl:text-[8.5rem]"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}
          >
            BULLDOG
            <br />
            <span className="text-white/35">LOVERS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 max-w-lg text-sm font-light leading-relaxed text-fw-fog md:text-base"
          >
            Líneas europeas, documentación FCI y acompañamiento de por vida. Cada camada pensada como un proyecto
            único.
          </motion.p>
        </div>

        <div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-3 lg:items-end lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:justify-self-start"
          >
            <p className="font-display text-sm font-bold text-fw-gold">#VidaConPatas</p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-fw-muted">
              Inspiración, salud y diseño de experiencias para tu familia.
            </p>
          </motion.div>

          <motion.a
            href="#nosotros"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col items-center gap-2 justify-self-center text-fw-muted"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-fw-border bg-fw-surface/60 backdrop-blur">
              <ChevronDown className="animate-bounce" size={18} />
            </span>
          </motion.a>

          <motion.a
            href="#cachorros"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex gap-4 rounded-2xl border border-fw-border bg-fw-surface/80 p-4 shadow-2xl backdrop-blur-md lg:max-w-sm lg:justify-self-end"
          >
            <div
              className="h-20 w-24 shrink-0 rounded-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1613295878076-c1edd28d4bfe?w=400&q=80)',
              }}
            />
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fw-gold">Destacado</p>
              <p className="truncate font-display text-lg font-bold text-fw-white">Camada premium</p>
              <span className="mt-1 text-xs font-medium text-fw-gold underline-offset-2 hover:underline">
                Ver cachorros →
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
