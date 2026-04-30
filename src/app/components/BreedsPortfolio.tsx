import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { frenchieByIndex } from '@/app/media/frenchBulldogMedia';

const categories = ['Azul y lilac', 'Merle y exóticos', 'Camadas actuales', 'Lista de espera'];

type Card = { title: string; desc: string };

const lineCards: Record<number, Card[]> = {
  0: [
    { title: 'Línea blue europea', desc: 'Pedigree FCI, ojos sanos y un carácter tranquilo para la vida en casa.' },
    { title: 'Lilac e isabella', desc: 'Dilución doble con papeles claros; crías que duermen en cuarto fresco y limpio.' },
    { title: 'Blue fawn', desc: 'Cuerpo armonioso y muchas horas de cariño antes de irse contigo.' },
    { title: 'Camadas muy especiales', desc: 'Pocas camadas al año, contrato detallado y tiempo para cada familia.' },
    { title: 'Portadores chocolate', desc: 'Genética revisada y cruces pensados para evitar consanguinidad.' },
    { title: 'Ideal para ciudad', desc: 'Frenchies que se adaptan bien a departamento con paseos y rutina en casa.' },
  ],
  1: [
    { title: 'Merle con todo en regla', desc: 'Patrón estable y pruebas de salud y ADN que puedes revisar sin prisa.' },
    { title: 'Lilac merle', desc: 'Muy pocos cupos; apartamos solo cuando encajamos bien con la familia.' },
    { title: 'Perla exótica', desc: 'Entrevista previa: queremos conocerte antes de apartar.' },
    { title: 'Merle compacto', desc: 'Cachorros de tamaño equilibrado y seguimiento cercano semana a semana.' },
    { title: 'Arlequín', desc: 'Manto llamativo, siempre bajo supervisión veterinaria y descanso suficiente.' },
    { title: 'Manchas y combinaciones', desc: 'Colores especiales con protocolo de salud desde el primer día.' },
  ],
  2: [
    { title: 'Camada primavera', desc: 'Entrega entre 8 y 10 semanas con kit de bienvenida y tips de alimentación.' },
    { title: 'Camada verano', desc: 'Lista de pre-registro abierta; te avisamos cuando nazcan.' },
    { title: 'Camada otoño', desc: 'Prioridad a familias que ya nos conocen o vienen referidas.' },
    { title: 'Camada invierno', desc: 'Cupos llenos por ahora; puedes entrar a la lista para la siguiente.' },
    { title: 'Visitas con cita', desc: 'Te recibimos con calma: conoces dónde duermen, comen y juegan.' },
    { title: 'Socialización en casa', desc: 'Ruidos suaves, manos amigas y espacio limpio para que lleguen confiados.' },
  ],
  3: [
    { title: 'Lista oro', desc: 'Primera noticia cuando abrimos una camada muy buscada.' },
    { title: 'Lista plata', desc: 'Avisos por WhatsApp con tiempo de sobra para decidir.' },
    { title: 'Familias que recomiendan', desc: 'Beneficios para quienes nos traen a otra familia de confianza.' },
    { title: 'Tips para nuevos dueños', desc: 'Guías sencillas de alimentación, sueño y primeros días en tu hogar.' },
    { title: 'Comunidad de dueños', desc: 'Grupo donde se apoyan, comparten fotos y resolvemos dudas juntos.' },
    { title: 'En prensa y redes', desc: 'Entrevistas y notas donde contamos cómo es un día normal aquí.' },
  ],
};

export function BreedsPortfolio() {
  const [cat, setCat] = useState(0);
  const cards = lineCards[cat] ?? lineCards[0];

  return (
    <section id="lineas" className="bg-fw-bg-soft px-4 py-16 sm:px-5 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto flex min-w-0 max-w-[1400px] flex-col gap-10 lg:flex-row lg:gap-16">
        <aside className="min-w-0 shrink-0 lg:w-52">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red sm:mb-6">Nuestras líneas</p>
          <nav className="-mx-1 flex flex-row gap-2 overflow-x-auto px-1 pb-1 [-webkit-overflow-scrolling:touch] lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(i)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider transition-colors lg:rounded-xl lg:px-0 lg:py-3 lg:pl-4 lg:pr-6 ${
                  cat === i
                    ? 'border-fw-red bg-fw-elevated text-fw-white'
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
              {cards.map((card, idx) => (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-2xl border border-fw-border bg-fw-surface"
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${frenchieByIndex(cat * 6 + idx + 3, 1200)})`,
                    }}
                  />
                  <div className="p-6">
                    <h4 className="font-display text-lg font-bold text-fw-white">{card.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-fw-muted">{card.desc}</p>
                    <a
                      href="https://wa.me/5215527294584?text=Quiero%20información%20sobre%20sus%20líneas"
                      className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-fw-red hover:text-fw-white"
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

      <div id="cachorros" className="mx-auto mt-12 max-w-[1400px] scroll-mt-28 px-2 text-center sm:mt-16 sm:px-0">
        <a
          href="https://wa.me/5215527294584?text=Quiero%20ver%20cachorros%20disponibles"
          className="inline-flex w-full max-w-md touch-manipulation justify-center rounded-full border border-fw-red bg-fw-red px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-fw-pure-white transition-colors hover:bg-transparent hover:text-fw-red sm:w-auto sm:px-8"
        >
          Ver disponibilidad actual
        </a>
      </div>
    </section>
  );
}
