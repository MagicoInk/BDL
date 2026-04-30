import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const IMG =
  'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=2000&q=85';

export function FeaturedStudioStrip() {
  return (
    <section className="relative px-5 py-12 lg:px-10">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl border border-fw-border md:rounded-3xl">
        <div className="relative aspect-[21/9] min-h-[280px] md:min-h-[360px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-fw-bg via-fw-bg/40 to-transparent md:bg-gradient-to-r md:from-fw-bg/90 md:via-fw-bg/35 md:to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-fw-gold">
                Nuestro espacio
              </p>
              <h3 className="font-display text-3xl font-bold text-fw-white md:text-5xl">Bulldog Lovers Studio</h3>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-fw-border bg-fw-surface/70 px-4 py-2 backdrop-blur">
                <div className="flex -space-x-2">
                  {['https://i.pravatar.cc/80?img=12', 'https://i.pravatar.cc/80?img=32', 'https://i.pravatar.cc/80?img=45'].map(
                    (src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="h-8 w-8 rounded-full border-2 border-fw-surface object-cover"
                      />
                    ),
                  )}
                </div>
                <span className="text-xs font-medium text-fw-fog">Familias que confían</span>
                <div className="flex text-fw-gold">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-fw-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
