import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { frenchieByIndex } from '@/app/media/frenchBulldogMedia';

const puppies = [
  {
    name: 'Blue Prince',
    color: 'Blue Solid',
    gender: 'Macho',
    status: 'Disponible',
    price: 'Inversión premium',
  },
  {
    name: 'Lilac Princess',
    color: 'Lilac Fawn',
    gender: 'Hembra',
    status: 'Reservada',
    price: 'Inversión premium',
  },
  {
    name: 'Merle King',
    color: 'Blue Merle',
    gender: 'Macho',
    status: 'Disponible',
    price: 'Inversión premium',
  },
  {
    name: 'Isabella Queen',
    color: 'Isabella Tan',
    gender: 'Hembra',
    status: 'Disponible',
    price: 'Inversión premium',
  },
  {
    name: 'Platinum Duke',
    color: 'Platinum',
    gender: 'Macho',
    status: 'Lista de espera',
    price: 'Inversión premium',
  },
  {
    name: 'Exotic Pearl',
    color: 'Lilac Merle',
    gender: 'Hembra',
    status: 'Próximamente',
    price: 'Inversión premium',
  },
];

function statusStyles(status: string) {
  if (status === 'Disponible') return 'border-studio-accent/40 bg-studio-canvas text-studio-accent';
  if (status === 'Reservada') return 'border-studio-line bg-studio-paper text-studio-muted';
  return 'border-studio-line bg-studio-deep text-studio-paper';
}

export function PuppyShowcase() {
  return (
    <section id="cachorros" className="border-y border-studio-line bg-studio-canvas px-6 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-studio-muted">
            Colección actual
          </p>
          <h2 className="mb-6 font-serif text-4xl font-normal tracking-tight text-studio-ink md:text-6xl">
            Cachorros disponibles
          </h2>
          <div className="mx-auto mb-6 h-px w-12 bg-studio-accent" />
          <p className="mx-auto max-w-2xl text-lg font-light text-studio-muted">
            Cada cachorro es único. Agenda visita para conocerlos en persona.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {puppies.map((puppy, idx) => (
            <motion.div
              key={puppy.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="group border border-studio-line bg-studio-paper transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-studio-canvas">
                <img
                  src={frenchieByIndex(idx + 18, 800)}
                  alt={puppy.name}
                  className="h-full w-full object-cover transition-transform duration-[1s] group-hover:scale-[1.04]"
                />
                <div className="absolute right-4 top-4">
                  <span
                    className={`border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${statusStyles(puppy.status)}`}
                  >
                    {puppy.status}
                  </span>
                </div>
                {puppy.status === 'Disponible' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-studio-deep/0 transition-all duration-300 group-hover:bg-studio-deep/35">
                    <Heart
                      className="text-studio-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      size={40}
                      strokeWidth={1.25}
                    />
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="mb-2 font-serif text-2xl text-studio-ink">{puppy.name}</h3>
                <div className="mb-4 space-y-0.5 text-sm font-light text-studio-muted">
                  <div>{puppy.color}</div>
                  <div>{puppy.gender}</div>
                </div>
                <div className="border-t border-studio-line pt-5">
                  <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-studio-accent">
                    {puppy.price}
                  </div>
                  {puppy.status === 'Disponible' && (
                    <a
                      href={`https://wa.me/5215527294584?text=Quiero%20información%20sobre%20${puppy.name}`}
                      className="block w-full border border-studio-ink py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-studio-ink transition-colors hover:bg-studio-ink hover:text-studio-paper"
                    >
                      Consultar
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-studio-line bg-studio-paper px-8 py-14 text-center md:px-16"
        >
          <h3 className="mb-3 font-serif text-2xl text-studio-ink md:text-3xl">¿No encuentras lo que buscas?</h3>
          <p className="mx-auto mb-8 max-w-xl text-base font-light text-studio-muted">
            Hay camadas en camino. Únete a la lista de espera VIP.
          </p>
          <motion.a
            href="https://wa.me/5215527294584?text=Quiero%20unirme%20a%20la%20lista%20de%20espera%20VIP"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex border border-studio-ink bg-studio-ink px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-studio-paper transition-colors hover:bg-studio-paper hover:text-studio-ink"
          >
            Lista de espera VIP
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
