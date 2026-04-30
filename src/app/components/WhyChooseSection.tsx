import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { frenchieGallery } from '@/app/media/frenchBulldogMedia';

const pillars = [
  {
    title: 'Hogar cuidado',
    text: 'Ambiente familiar, limpio y ordenado. Las mamás y los cachorros viven con espacio, descanso y rutinas de higiene que se notan.',
  },
  {
    title: 'Te contamos todo',
    text: 'Padres visibles, citas para visitar sin prisa y papeles desde el primer día. Sin letras chiquitas ni promesas vacías.',
  },
  {
    title: 'Te acompañamos después',
    text: 'Seguimiento veterinario, tips de alimentación y un grupo de dueños que se apoyan. No desaparecemos cuando te llevas a tu frenchie.',
  },
];

const strip = frenchieGallery.slice(0, 8);

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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-fw-border text-fw-fog transition-colors hover:border-fw-red hover:text-fw-red"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-fw-border text-fw-fog transition-colors hover:border-fw-red hover:text-fw-red"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div
            ref={scroller}
            className="flex flex-1 gap-4 overflow-x-auto pb-2 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {strip.map((src, i) => (
              <div
                key={`${i}-${src.slice(-24)}`}
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
