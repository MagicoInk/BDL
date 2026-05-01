import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { frenchie, frenchieByIndex } from '@/app/media/frenchBulldogMedia';

const items = [
  {
    title: 'Luna — blue',
    quote: 'Fotos cada semana y siguen contestando al día, dos años después.',
    name: 'María González',
    place: 'México',
    img: frenchieByIndex(2, 900),
    avatar: frenchie.face1,
  },
  {
    title: 'Max — lilac',
    quote: 'Tercer perro con ellos. Conocen a sus animales y no dan vueltas.',
    name: 'Carlos Rodríguez',
    place: 'Monterrey',
    img: frenchieByIndex(4, 900),
    avatar: frenchie.face2,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="border-b border-fw-border bg-fw-bg px-4 py-14 sm:px-5 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto min-w-0 max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 max-w-xl font-display text-xl font-bold text-fw-white sm:mb-10 sm:text-2xl"
        >
          Testimonios
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
                className="h-40 shrink-0 bg-cover bg-center sm:h-44 lg:h-auto lg:w-2/5"
                style={{ backgroundImage: `url(${t.img})` }}
              />
              <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fw-red">{t.title}</p>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-fw-fog">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex flex-col gap-3 border-t border-fw-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <img src={t.avatar} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />
                    <div className="min-w-0">
                      <p className="break-words text-sm font-semibold text-fw-white">{t.name}</p>
                      <p className="text-xs text-fw-muted">{t.place}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 text-fw-red">
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
