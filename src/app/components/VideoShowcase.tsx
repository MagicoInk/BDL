import { motion } from 'motion/react';
import { frenchie, frenchieVideos } from '@/app/media/frenchBulldogMedia';

const clips = [
  {
    title: 'En casa',
    caption: 'Un frenchie tranquilo: buen temperamento y el cariño del día a día.',
    src: frenchieVideos.portrait,
    poster: frenchie.hero,
  },
  {
    title: 'Juegos y calma',
    caption: 'Socialización suave, espacio limpio y rutinas que se sienten en su carácter.',
    src: frenchieVideos.playful,
    poster: frenchie.studioWide,
  },
];

export function VideoShowcase() {
  return (
    <section id="videos" className="scroll-mt-24 border-y border-fw-border bg-fw-bg px-5 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red">En vídeo</p>
          <h2 className="font-display text-3xl font-bold text-fw-white md:text-4xl">Momentos cotidianos</h2>
          <p className="mt-4 text-sm leading-relaxed text-fw-muted md:text-base">
            Vídeos cortos para que veas cómo se mueven y cómo están de ánimo. Si más adelante quieres subir los tuyos,
            lo vemos contigo.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {clips.map((clip, i) => (
            <motion.figure
              key={clip.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-fw-border bg-fw-surface shadow-xl"
            >
              <div className="relative aspect-video bg-fw-elevated">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  poster={clip.poster}
                >
                  <source src={clip.src} type="video/mp4" />
                  Tu navegador no reproduce vídeo HTML5.
                </video>
              </div>
              <figcaption className="p-5">
                <p className="font-display text-lg font-bold text-fw-white">{clip.title}</p>
                <p className="mt-1 text-sm text-fw-muted">{clip.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
