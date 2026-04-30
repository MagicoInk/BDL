import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { frenchie, frenchieVideos } from '@/app/media/frenchBulldogMedia';

export function HeroFourthWall() {
  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-1 bg-fw-red lg:w-1.5" aria-hidden />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.35]"
        autoPlay
        muted
        loop
        playsInline
        poster={frenchie.hero}
        aria-hidden
      >
        <source src={frenchieVideos.portrait} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${frenchie.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-fw-bg/90 via-fw-bg/55 to-fw-bg/95" />
      <div className="absolute inset-0 bg-emerald-950/25 mix-blend-multiply" />

      <div className="relative z-10 flex min-h-[100dvh] min-w-0 flex-col px-4 pb-10 pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:px-5 lg:px-10 lg:pb-14 lg:pt-[calc(8rem+env(safe-area-inset-top,0px))]">
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 text-center sm:px-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-fw-red"
          >
            Exclusivo · México
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="font-display text-[clamp(2.75rem,12vw,8.5rem)] font-extrabold leading-[0.88] tracking-[-0.04em] text-white/40 sm:text-[11vw] md:text-[9vw] lg:text-[7.5rem] xl:text-[8.5rem]"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
          >
            BULLDOG
            <br />
            <span className="text-fw-red/80">LOVERS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 max-w-lg text-pretty text-sm font-light leading-relaxed text-fw-fog md:text-base"
          >
            Líneas europeas, papeles en regla y seguimiento cuando lo necesites. Cada camada crece en un hogar
            tranquilo y limpio hasta el día en que te lo llevas.
          </motion.p>
        </div>

        <div className="mx-auto grid w-full min-w-0 max-w-[1400px] gap-8 max-lg:max-w-full lg:grid-cols-3 lg:items-end lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:justify-self-start"
          >
            <p className="font-display text-sm font-bold text-fw-red">#VidaConPatas</p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-fw-muted">
              Salud, cariño y orden: eso es lo que buscamos todos los días.
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
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/40 bg-fw-surface/50 text-fw-pure-white backdrop-blur">
              <ChevronDown className="animate-bounce" size={18} />
            </span>
          </motion.a>

          <motion.a
            href="#cachorros"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex gap-4 rounded-2xl border-2 border-white/25 bg-fw-surface/85 p-4 shadow-2xl backdrop-blur-md lg:max-w-sm lg:justify-self-end"
          >
            <div
              className="h-20 w-24 shrink-0 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${frenchie.heroCard})` }}
            />
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fw-red">Destacado</p>
              <p className="truncate font-display text-lg font-bold text-fw-white">Próxima camada</p>
              <span className="mt-1 text-xs font-medium text-fw-red underline-offset-2 hover:underline">
                Ver cachorros →
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
