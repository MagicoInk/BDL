import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

const faqs = [
  {
    question: '¿Cuál es el precio de sus cachorros?',
    answer:
      'Depende de línea, color y sexo. Rangos típicos entre $80,000 y $150,000 MXN en exóticos premium. Cotización personalizada por WhatsApp.',
  },
  {
    question: '¿Qué incluye la compra?',
    answer:
      'Pedigree FCI, certificado de salud, vacunas, desparasitación, microchip, contrato, kit de bienvenida y acceso a comunidad privada.',
  },
  {
    question: '¿Puedo visitar antes de comprar?',
    answer: 'Sí, con cita. Conoces a los padres, el hogar donde crecen y cómo los cuidamos día a día.',
  },
  {
    question: '¿Envían a otros estados?',
    answer: 'Sí, con transportadora certificada IATA y documentación completa.',
  },
  {
    question: '¿Garantías de salud?',
    answer: 'Garantía genética 2 años con opción de reembolso o reemplazo según contrato.',
  },
  {
    question: '¿Cómo es el apartado?',
    answer: '50% para apartar, saldo previo a entrega. Contrato que ampara ambas partes.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-fw-bg-soft px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red">FAQ</p>
          <h2 className="font-display text-3xl font-bold text-fw-white md:text-4xl">Preguntas frecuentes</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-0 border-b border-fw-border bg-transparent px-0"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-fw-fog hover:no-underline hover:text-fw-red data-[state=open]:text-fw-red">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-fw-muted">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/5215527294584?text=Tengo%20más%20preguntas"
            className="inline-flex rounded-full border border-fw-red bg-fw-red px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-fw-pure-white transition-colors hover:bg-fw-pure-white hover:text-fw-red"
          >
            Escribir por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
