import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['Blue & lilac', 'Merle & exóticos', 'Camadas actuales', 'Lista VIP'];

const projects: Record<number, { title: string; desc: string; img: string }[]> = {
  0: [
    {
      title: 'Blue Line Europea',
      desc: 'Pedigree FCI, ojos sanos y temperamento equilibrado.',
      img: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=900&q=80',
    },
    {
      title: 'Lilac & Isabella',
      desc: 'Dilución doble certificada, líneas importadas.',
      img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80',
    },
    {
      title: 'Blue fawn premium',
      desc: 'Morfología compacta y socialización indoor.',
      img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=900&q=80',
    },
    {
      title: 'Platinum showcase',
      desc: 'Colecciones limitadas con contrato extendido.',
      img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80',
    },
    {
      title: 'Chocolate carrier',
      desc: 'Genética testeada, sin consanguinidad.',
      img: 'https://images.unsplash.com/photo-1613295878076-c1edd28d4bfe?w=900&q=80',
    },
    {
      title: 'Compact standard',
      desc: 'Ideal para familia urbana con espacio moderado.',
      img: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=900&q=80',
    },
  ],
  1: [
    {
      title: 'Merle calificado',
      desc: 'Patrón estable, estudios genéticos completos.',
      img: 'https://images.unsplash.com/photo-1544966951-9dc3611c1558?w=900&q=80',
    },
    {
      title: 'Lilac merle',
      desc: 'Ultra exclusivo, cupos anuales limitados.',
      img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80',
    },
    {
      title: 'Exotic pearl',
      desc: 'Reserva con entrevista y match de familia.',
      img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80',
    },
    {
      title: 'Micro merle',
      desc: 'Formato compacto, seguimiento estrecho.',
      img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=900&q=80',
    },
    {
      title: 'Harlequin style',
      desc: 'Referencia visual tipo “proyecto firmado”.',
      img: 'https://images.unsplash.com/photo-1613295878076-c1edd28d4bfe?w=900&q=80',
    },
    {
      title: 'Signature patch',
      desc: 'Combinaciones bajo protocolo veterinario.',
      img: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=900&q=80',
    },
  ],
  2: [
    {
      title: 'Camada primavera',
      desc: 'Entrega programada 8–10 semanas con kit.',
      img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=900&q=80',
    },
    {
      title: 'Camada verano',
      desc: 'Lista de pre-registro abierta.',
      img: 'https://images.unsplash.com/photo-1613295878076-c1edd28d4bfe?w=900&q=80',
    },
    {
      title: 'Camada otoño',
      desc: 'Prioridad a familias con referencia.',
      img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80',
    },
    {
      title: 'Camada invierno',
      desc: 'Cupos cerrados — waitlist.',
      img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80',
    },
    {
      title: 'Nursery tour',
      desc: 'Visitas guiadas con cita.',
      img: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=900&q=80',
    },
    {
      title: 'Wellness room',
      desc: 'Socialización y estimulación temprana.',
      img: 'https://images.unsplash.com/photo-1544966951-9dc3611c1558?w=900&q=80',
    },
  ],
  3: [
    {
      title: 'Lista VIP oro',
      desc: 'Acceso anticipado a camadas signature.',
      img: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=900&q=80',
    },
    {
      title: 'Lista VIP plata',
      desc: 'Notificaciones priorizadas por WhatsApp.',
      img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80',
    },
    {
      title: 'Referidos',
      desc: 'Beneficios para familias que recomiendan.',
      img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=900&q=80',
    },
    {
      title: 'Corporate gifting',
      desc: 'Experiencias para equipos (bajo solicitud).',
      img: 'https://images.unsplash.com/photo-1613295878076-c1edd28d4bfe?w=900&q=80',
    },
    {
      title: 'Media kit',
      desc: 'Colaboraciones con marcas alineadas.',
      img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80',
    },
    {
      title: 'Press',
      desc: 'Apariciones y entrevistas recientes.',
      img: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=900&q=80',
    },
  ],
};

export function BreedsPortfolio() {
  const [cat, setCat] = useState(0);
  const cards = projects[cat] ?? projects[0];

  return (
    <section id="lineas" className="bg-fw-bg-soft px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 lg:flex-row lg:gap-16">
        <aside className="shrink-0 lg:w-52">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-gold">Portafolio</p>
          <nav className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(i)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider transition-colors lg:rounded-xl lg:px-0 lg:py-3 lg:pl-4 lg:pr-6 ${
                  cat === i
                    ? 'border-fw-gold bg-fw-elevated text-fw-white'
                    : 'border-transparent text-fw-muted hover:text-fw-fog'
                }`}
              >
                {c}
              </button>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-2xl border border-fw-border bg-fw-surface"
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${card.img})` }}
                  />
                  <div className="p-6">
                    <h4 className="font-display text-lg font-bold text-fw-white">{card.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-fw-muted">{card.desc}</p>
                    <a
                      href="https://wa.me/5215527294584?text=Quiero%20detalle%20de%20portafolio"
                      className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-fw-gold hover:text-fw-white"
                    >
                      Consultar →
                    </a>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div id="cachorros" className="mx-auto mt-16 max-w-[1400px] scroll-mt-28 text-center">
        <a
          href="https://wa.me/5215527294584?text=Quiero%20ver%20cachorros%20disponibles"
          className="inline-flex rounded-full border border-fw-gold bg-fw-gold px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-fw-bg transition-colors hover:bg-transparent hover:text-fw-gold"
        >
          Ver disponibilidad actual
        </a>
      </div>
    </section>
  );
}
