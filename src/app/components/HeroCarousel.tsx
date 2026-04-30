import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { frenchieByIndex } from '@/app/media/frenchBulldogMedia';

const slides = [
  {
    type: 'image',
    url: frenchieByIndex(0, 1920),
    title: 'Bulldog francés con sangre cuidada',
    subtitle: 'Más de veintisiete años criando con cariño, orden en casa y papeles que respaldan cada camada.',
  },
  {
    type: 'image',
    url: frenchieByIndex(2, 1920),
    title: 'Cachorros exóticos muy especiales',
    subtitle: 'Sangre internacional bien documentada: te mostramos todo con la puerta abierta y sin rodeos.',
  },
  {
    type: 'image',
    url: frenchieByIndex(4, 1920),
    title: 'Blue, lilac y merle',
    subtitle: 'Colores poco comunes, siempre con pruebas de salud y pedigree FCI que puedes revisar.',
  },
  {
    type: 'image',
    url: frenchieByIndex(6, 1920),
    title: 'Garantía y acompañamiento',
    subtitle: 'Contrato claro y una línea abierta para dudas el día que haga falta: no te dejamos solo.',
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-studio-canvas lg:min-h-0 lg:h-[min(100dvh,920px)]"
    >
      <div className="grid min-h-[100dvh] lg:min-h-0 lg:h-[min(100dvh,920px)] lg:grid-cols-[minmax(0,42%)_1fr]">
        {/* Panel editorial — tono hogar, calma y confianza */}
        <div className="order-2 flex flex-col justify-center border-studio-line px-6 py-14 pt-28 sm:px-10 lg:order-1 lg:border-r lg:px-12 lg:py-20 lg:pt-24 xl:pl-16">
          <p className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-studio-muted">
            Exclusivo · México
          </p>
          <div className="mb-8 h-px w-12 bg-studio-accent" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="mb-6 max-w-xl font-serif text-4xl font-normal leading-[1.08] tracking-tight text-studio-ink sm:text-5xl lg:text-[2.65rem] xl:text-5xl">
                {slides[current].title}
              </h1>
              <p className="mb-10 max-w-md text-base font-light leading-relaxed text-studio-muted lg:text-lg">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
          <motion.a
            href="https://wa.me/5215527294584?text=Hola,%20quiero%20información%20sobre%20sus%20cachorros%20de%20bulldog%20francés"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="inline-flex w-fit items-center border border-studio-ink bg-studio-ink px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-studio-paper transition-colors hover:bg-studio-paper hover:text-studio-ink"
          >
            Reservar consulta
          </motion.a>
          <div className="mt-12 flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Diapositiva ${idx + 1}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(idx);
                }}
                className={`h-px transition-all duration-500 ${
                  idx === current ? 'w-10 bg-studio-accent' : 'w-6 bg-studio-line hover:bg-studio-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Imagen a pantalla — tratamiento suave tipo editorial */}
        <div className="relative order-1 min-h-[42vh] lg:order-2 lg:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="absolute inset-0"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[current].url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-deep/55 via-studio-deep/15 to-transparent lg:bg-gradient-to-l lg:from-studio-deep/40 lg:via-transparent lg:to-transparent" />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 border border-studio-line/80 bg-studio-paper/90 p-2.5 text-studio-ink transition-colors hover:bg-studio-ink hover:text-studio-paper lg:left-6"
            aria-label="Anterior"
          >
            <ChevronLeft size={22} strokeWidth={1.25} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 border border-studio-line/80 bg-studio-paper/90 p-2.5 text-studio-ink transition-colors hover:bg-studio-ink hover:text-studio-paper lg:right-6"
            aria-label="Siguiente"
          >
            <ChevronRight size={22} strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </section>
  );
}
