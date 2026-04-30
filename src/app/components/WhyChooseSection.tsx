import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pillars = [
  {
    title: 'Diseño consciente',
    text: 'Cada cruce planificado: salud, morfología y bienestar antes que tendencias.',
  },
  {
    title: 'Proceso transparente',
    text: 'Padres visibles, instalaciones con cita y documentos desde el día uno.',
  },
  {
    title: 'Detalle obsesivo',
    text: 'Seguimiento veterinario, nutrición y comunidad privada de dueños.',
  },
];

const strip = [
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80',
  'https://images.unsplash.com/photo-1613295878076-c1edd28d4bfe?w=800&q=80',
  'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=800&q=80',
  'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80',
  'https://images.unsplash.com/photo-1544966951-9dc3611c1558?w=800&q=80',
];

export function WhyChooseSection() {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section className="border-b border-fw-border bg-fw-bg px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="font-display text-lg font-bold text-fw-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fw-muted">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-fw-border text-fw-fog transition-colors hover:border-fw-gold hover:text-fw-gold"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-fw-border text-fw-fog transition-colors hover:border-fw-gold hover:text-fw-gold"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div
            ref={scroller}
            className="flex flex-1 gap-4 overflow-x-auto pb-2 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {strip.map((src) => (
              <div
                key={src}
                className="h-48 w-72 shrink-0 rounded-2xl bg-cover bg-center shadow-lg md:h-56 md:w-80"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
