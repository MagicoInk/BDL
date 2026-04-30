import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Por qué Bulldog Lovers es diferente a otros criadores?',
    answer: 'Tenemos más de 27 años desde 1999, criando bulldogs franceses e ingleses en un ambiente familiar, limpio y honesto. Nuestras líneas están documentadas y los padres pasan por revisiones de salud. Cada cachorro recibe cariño, atención veterinaria y socialización suave desde que nace.',
  },
  {
    question: '¿Qué garantías ofrecen con los cachorros?',
    answer: 'Todos nuestros cachorros incluyen: certificado veterinario completo, vacunas al día, desparasitación, contrato de garantía legal, asesoría post-venta por 6 meses, kit de bienvenida premium y garantía de salud genética. Trabajamos con transparencia total.',
  },
  {
    question: '¿Tienen cachorros exóticos y tradicionales?',
    answer: 'Sí, ofrecemos ambas opciones. Tenemos bulldogs franceses tradicionales (fawn, cream, brindle, pied) y exóticos (blue, lilac, merle, tan points) todos con líneas genéticas de primera calidad para lograr frenchies compactos, saludables y de hermoso temperamento.',
  },
  {
    question: '¿Cómo es el proceso de adquisición?',
    answer: 'Es muy sencillo: 1) Contáctanos por WhatsApp, redes sociales o email. 2) Te mostramos los cachorros disponibles con fotos y videos. 3) Eliges tu favorito y hacemos el contrato. 4) Realizas la reserva. 5) Coordinas la entrega cuando el cachorro tenga la edad adecuada (8-10 semanas).',
  },
  {
    question: '¿Entregan en toda la República Mexicana?',
    answer: 'Sí, hacemos envíos seguros a toda la República Mexicana. Trabajamos con transportistas especializados en mascotas o puedes recoger personalmente en nuestra ubicación. El cachorro viaja con todos sus documentos y en las mejores condiciones.',
  },
  {
    question: '¿Qué incluye el kit de bienvenida premium?',
    answer: 'El kit incluye: alimento premium para 15 días, juguetes especiales para cachorros, manta con el olor de mamá, guía completa de cuidados y entrenamiento, y certificados de salud. Todo para que tu cachorro tenga la mejor transición a su nuevo hogar.',
  },
  {
    question: '¿Puedo visitar el criadero antes de adquirir?',
    answer: 'Por supuesto, nos encanta que conozcas nuestras instalaciones y veas cómo criamos a nuestros bulldogs. Agenda una cita y ven a conocer el ambiente familiar, limpio y profesional donde nacen nuestros cachorros. También hacemos video llamadas.',
  },
  {
    question: '¿Cuál es la inversión para adquirir un cachorro?',
    answer: 'La inversión varía según el color, línea genética y características. Los tradicionales desde $32,000 MXN y los exóticos desde $45,000 MXN. Incluye todo: vacunas, desparasitación, certificados veterinarios, garantías, kit premium y asesoría post-venta completa.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-slate-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-slate-900 rounded-lg px-6 py-2 mb-6">
            <span className="text-white font-bold text-sm tracking-widest uppercase">FAQ</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tighter uppercase">
            Preguntas<br/>
            <span className="text-[#0d7a3a]">Frecuentes</span>
          </h2>
          
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto font-medium">
            Resolvemos todas tus dudas
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#0d7a3a] shadow-lg' 
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 transition-colors group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <HelpCircle className={`w-6 h-6 flex-shrink-0 mt-1 transition-colors ${
                    openIndex === index ? 'text-[#0d7a3a]' : 'text-neutral-400 group-hover:text-black'
                  }`} />
                  <span className={`font-bold text-base transition-colors ${
                    openIndex === index ? 'text-[#0d7a3a]' : 'text-black'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-all ${
                    openIndex === index 
                      ? 'transform rotate-180 text-[#0d7a3a]' 
                      : 'text-neutral-400 group-hover:text-black'
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-8 pl-16">
                  <div className="border-l-4 border-[#0d7a3a] pl-6">
                    <p className="text-neutral-700 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0d7a3a]/10 rounded-full blur-3xl"></div>
          
          <div className="text-center relative">
            <h3 className="text-3xl font-black mb-4 uppercase text-white">
              ¿Más Preguntas?
            </h3>
            <p className="text-white/80 mb-8 font-medium text-lg">
              Estamos aquí para ayudarte 24/7
            </p>
            <button 
              onClick={() => {
                const footer = document.getElementById('contact');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#0d7a3a] hover:bg-[#DC2626] text-white px-12 py-6 rounded-xl font-black tracking-wider uppercase text-lg transition-all"
            >
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}