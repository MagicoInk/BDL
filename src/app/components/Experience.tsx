import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { number: '27', label: 'Años de experiencia', sublabel: 'Criando bulldogs de élite' },
  { number: '500+', label: 'Familias felices', sublabel: 'México y Latinoamérica' },
  { number: '100%', label: 'Satisfacción', sublabel: 'Garantía y acompañamiento' },
  { number: '15+', label: 'Campeones', sublabel: 'Exposiciones internacionales' },
];

const commitments = [
  'Genética europea certificada con pedigree FCI completo',
  'Pruebas genéticas de salud para todos los padres',
  'Socialización temprana desde el día uno',
  'Entrega con vacunas, desparasitación y microchip',
  'Contrato legal con garantías por escrito',
  'Seguimiento y asesoría veterinaria de por vida',
];

export function Experience() {
  return (
    <section id="experiencia" className="border-y border-studio-line bg-studio-canvas px-6 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-studio-muted">
              El estudio
            </p>
            <h2 className="mb-8 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-studio-ink md:text-5xl lg:text-6xl">
              Más de dos décadas de excelencia
            </h2>
            <div className="mb-10 h-px w-14 bg-studio-accent" />
            <p className="mb-14 text-lg font-light leading-relaxed text-studio-muted">
              Desde 1998, Bulldog Lovers México ha sido referente en crianza responsable de bulldogs franceses de
              líneas exclusivas. Pasión, rigor y transparencia en cada camada.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.06 }}
                >
                  <div className="mb-1 font-serif text-4xl text-studio-accent md:text-5xl">{stat.number}</div>
                  <div className="text-sm font-medium text-studio-ink">{stat.label}</div>
                  <div className="mt-1 text-xs font-light uppercase tracking-wider text-studio-muted">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="space-y-0"
          >
            <h3 className="mb-10 font-serif text-2xl text-studio-ink md:text-3xl">Compromiso contigo</h3>
            {commitments.map((commitment, idx) => (
              <motion.div
                key={commitment}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="flex gap-4 border-b border-studio-line py-5 first:pt-0"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-studio-accent" size={22} strokeWidth={1.25} />
                <p className="text-base font-light leading-relaxed text-studio-muted">{commitment}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
