import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { frenchie, frenchieByIndex } from '@/app/media/frenchBulldogMedia';

const items = [
  {
    title: 'Luna — blue',
    quote:
      'Nos mandaron fotos cada semana. A los dos años todavía les escribo por la comida y me contestan al día.',
    name: 'María González',
    place: 'México',
    img: frenchieByIndex(2, 900),
    avatar: frenchie.face1,
  },
  {
    title: 'Max — lilac',
    quote: 'Es el tercer perro que sacamos aquí. Se nota que conocen a sus animales y no andan con vueltas.',
    name: 'Carlos Rodríguez',
    place: 'Monterrey',
    img: frenchieByIndex(4, 900),
    avatar: frenchie.face2,
  },
  {
    title: 'Thor — merle',
    quote: 'Vimos a los papás, revisamos papeles en la mesa y la entrega fue sin correr. Así da gusto.',
    name: 'Andrea Martínez',
    place: 'Guadalajara',
    img: frenchieByIndex(6, 900),
    avatar: frenchie.face3,
  },
  {
    title: 'Nala — isabella',
    quote: 'El contrato estaba claro y la garantía nos quitó el miedo de primerizos con un cachorro caro.',
    name: 'Lucía Herrera',
    place: 'Querétaro',
    img: frenchieByIndex(8, 900),
    avatar: frenchie.face4,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="border-b border-fw-border bg-fw-bg px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-xl font-display text-3xl font-bold leading-tight text-fw-white md:text-4xl lg:text-5xl"
        >
          Comentarios de familias que ya se fueron a casa con su cachorro.
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-fw-surface lg:flex-row"
            >
              <div
                className="h-44 shrink-0 bg-cover bg-center lg:h-auto lg:w-2/5"
                style={{ backgroundImage: `url(${t.img})` }}
              />
              <div className="flex flex-1 flex-col p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fw-red">{t.title}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fw-fog">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between border-t border-fw-border pt-6">
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-fw-white">{t.name}</p>
                      <p className="text-xs text-fw-muted">{t.place}</p>
                    </div>
                  </div>
                  <div className="flex text-fw-red">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="fill-fw-red" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
