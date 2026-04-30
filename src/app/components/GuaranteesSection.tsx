import { motion } from 'motion/react';
import { Shield, Heart, FileCheck, Headphones } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: 'Garantía genética',
    description:
      'Certificamos la salud genética de todos nuestros cachorros. Si detectamos algún problema hereditario en los primeros 2 años, te devolvemos el 100% de tu inversión o te damos un reemplazo.',
    details: ['Pruebas genéticas completas', 'Certificado de salud veterinario', 'Pedigree FCI internacional'],
  },
  {
    icon: Heart,
    title: 'Garantía de salud',
    description:
      'Todos nuestros cachorros son entregados con excelente salud, vacunados y desparasitados. Incluimos el primer mes de seguro médico veterinario sin costo.',
    details: ['Vacunas al día', 'Desparasitación completa', 'Revisión veterinaria pre-entrega'],
  },
  {
    icon: FileCheck,
    title: 'Contrato legal',
    description:
      'Todo por escrito. Firmamos un contrato legal que protege tus derechos como comprador y especifica todas nuestras garantías de forma clara y transparente.',
    details: ['Documento notariado', 'Garantías por escrito', 'Compromiso de crianza ética'],
  },
  {
    icon: Headphones,
    title: 'Soporte de por vida',
    description:
      'Nunca estarás solo. Asesoría veterinaria, nutricional y de comportamiento durante toda la vida de tu bulldog. Línea directa por WhatsApp.',
    details: ['Asesoría veterinaria gratuita', 'Grupo privado de propietarios', 'Seguimiento continuo'],
  },
];

export function GuaranteesSection() {
  return (
    <section id="garantias" className="bg-studio-deep px-6 py-28 text-studio-paper lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-studio-line">
            Tranquilidad
          </p>
          <h2 className="mb-6 font-serif text-4xl font-normal tracking-tight md:text-6xl">Garantías claras</h2>
          <div className="mx-auto mb-6 h-px w-12 bg-studio-accent" />
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-studio-line">
            Tu inversión está protegida. Ofrecemos garantías sólidas porque confiamos en la calidad de nuestras
            líneas.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {guarantees.map((guarantee, idx) => {
            const Icon = guarantee.icon;
            return (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-studio-line/25 bg-studio-deep/80 p-10 transition-colors hover:border-studio-accent/50"
              >
                <Icon className="mb-6 text-studio-accent" size={40} strokeWidth={1.25} />
                <h3 className="mb-4 font-serif text-2xl text-studio-paper md:text-3xl">{guarantee.title}</h3>
                <p className="mb-6 text-base font-light leading-relaxed text-studio-line">{guarantee.description}</p>
                <ul className="space-y-2.5">
                  {guarantee.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-sm text-studio-line">
                      <span className="h-px w-3 shrink-0 bg-studio-accent" aria-hidden />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border border-studio-line/30 bg-studio-ink/40 px-8 py-14 text-center md:px-16"
        >
          <h3 className="mb-4 font-serif text-2xl md:text-3xl">Invierte con confianza</h3>
          <p className="mx-auto mb-8 max-w-2xl text-base font-light text-studio-line">
            Somos referentes en México en garantías transparentes. Tu tranquilidad es prioridad.
          </p>
          <motion.a
            href="https://wa.me/5215527294584?text=Quiero%20conocer%20más%20sobre%20las%20garantías"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex border border-studio-paper px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-studio-paper transition-colors hover:bg-studio-paper hover:text-studio-deep"
          >
            Conocer garantías
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
