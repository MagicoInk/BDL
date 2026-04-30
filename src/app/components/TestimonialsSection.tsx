import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const items = [
  {
    title: 'Luna — blue',
    quote:
      'Genética impecable y seguimiento real. Dos años después siguen respondiendo cada duda.',
    name: 'María González',
    place: 'CDMX',
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    title: 'Max — lilac',
    quote: 'Tercer bulldog con ellos. La diferencia con otros criadores es abismal.',
    name: 'Carlos Rodríguez',
    place: 'Monterrey',
    img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&q=80',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    title: 'Thor — merle',
    quote: 'Transparencia total: padres, papeles y entrega impecable.',
    name: 'Andrea Martínez',
    place: 'Guadalajara',
    img: 'https://images.unsplash.com/photo-1544966951-9dc3611c1558?w=400&q=80',
    avatar: 'https://i.pravatar.cc/100?img=9',
  },
  {
    title: 'Nala — isabella',
    quote: 'El contrato y la garantía nos dieron tranquilidad desde el día uno.',
    name: 'Lucía Herrera',
    place: 'Querétaro',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80',
    avatar: 'https://i.pravatar.cc/100?img=32',
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
          Lo que dicen quienes ya viven la experiencia.
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-fw-border bg-fw-surface lg:flex-row"
            >
              <div
                className="h-44 shrink-0 bg-cover bg-center lg:h-auto lg:w-2/5"
                style={{ backgroundImage: `url(${t.img})` }}
              />
              <div className="flex flex-1 flex-col p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fw-gold">{t.title}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fw-fog">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between border-t border-fw-border pt-6">
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-fw-white">{t.name}</p>
                      <p className="text-xs text-fw-muted">{t.place}</p>
                    </div>
                  </div>
                  <div className="flex text-fw-gold">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="fill-fw-gold" />
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
