import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

const faqs = [
  {
    question: '¿Precio?',
    answer: 'Según línea y color, unos $80k–$150k MXN. Cifra exacta por WhatsApp.',
  },
  {
    question: '¿Qué incluye?',
    answer: 'FCI, salud, vacunas, chip, contrato, kit, grupo de dueños.',
  },
  {
    question: '¿Visita?',
    answer: 'Sí, con cita.',
  },
  {
    question: '¿Apartado?',
    answer: '50% apartado, saldo antes de entrega. Por contrato.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-fw-bg-soft px-4 py-14 sm:px-5 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto min-w-0 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-10"
        >
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-fw-red">FAQ</p>
          <h2 className="font-display text-xl font-bold text-fw-white sm:text-2xl">Lo básico</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-0 border-b border-fw-border bg-transparent px-0"
            >
              <AccordionTrigger className="touch-manipulation break-words py-4 pr-2 text-left text-base font-semibold text-fw-fog hover:no-underline hover:text-fw-red data-[state=open]:text-fw-red sm:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-fw-muted sm:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center sm:mt-10"
        >
          <a
            href="https://wa.me/5215527294584?text=Tengo%20una%20duda%20sobre%20Bulldog%20Lovers"
            className="inline-flex touch-manipulation rounded-full border border-fw-red bg-fw-red px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-fw-pure-white transition-colors hover:bg-fw-pure-white hover:text-fw-red"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
