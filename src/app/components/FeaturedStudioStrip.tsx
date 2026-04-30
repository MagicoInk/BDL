import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { frenchie, frenchieVideos } from '@/app/media/frenchBulldogMedia';

const avatarUrls = [frenchie.face1, frenchie.face2, frenchie.face3] as const;

export function FeaturedStudioStrip() {
  return (
    <section className="relative px-4 py-10 sm:px-5 sm:py-12 lg:px-10">
      <div className="mx-auto min-w-0 max-w-[1400px] overflow-hidden rounded-2xl border border-fw-border md:rounded-3xl">
        <div className="relative aspect-[21/9] min-h-[280px] md:min-h-[360px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={frenchie.studioWide}
            aria-label="Bulldog francés en nuestro espacio — vídeo de muestra"
          >
            <source src={frenchieVideos.playful} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: `url(${frenchie.studioWide})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-fw-bg via-fw-bg/40 to-transparent md:bg-gradient-to-r md:from-fw-bg/90 md:via-fw-bg/35 md:to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-xl min-w-0 px-1"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-fw-red">
                Nuestro espacio
              </p>
              <h3 className="font-display text-2xl font-bold leading-tight text-fw-white sm:text-3xl md:text-5xl">
                Así es nuestro hogar
              </h3>
              <div className="mt-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-fw-border bg-fw-surface/70 px-3 py-2 backdrop-blur sm:mt-6 sm:gap-3 sm:px-4">
                <div className="flex -space-x-2">
                  {avatarUrls.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-fw-surface object-cover"
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-fw-fog">Familias que confían</span>
                <div className="flex text-fw-red">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-fw-red" />
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
