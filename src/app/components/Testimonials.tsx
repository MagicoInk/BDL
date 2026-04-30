import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    location: 'Ciudad de México',
    text: 'Después de investigar muchos criadores, elegí Bulldog Lovers y fue la MEJOR decisión. Mi cachorro llegó saludable, socializado y con todo en regla. ¡Ya es parte de la familia!',
    rating: 5,
    puppy: 'Blue Merle',
  },
  {
    name: 'Carlos Ramírez',
    location: 'Guadalajara',
    text: 'Increíble experiencia. La transparencia y honestidad de Bulldog Lovers no tiene comparación. Mi frenchie tiene 2 años y es el perro más sano y feliz. 100% recomendado.',
    rating: 5,
    puppy: 'Fawn Tradicional',
  },
  {
    name: 'Ana Martínez',
    location: 'Monterrey',
    text: 'Tenía miedo de comprar un cachorro por internet, pero el equipo me dio toda la confianza. Video llamadas, seguimiento constante y un servicio post-venta excepcional. ¡Gracias!',
    rating: 5,
    puppy: 'Lilac Exótico',
  },
  {
    name: 'Roberto Silva',
    location: 'Puebla',
    text: 'La diferencia entre un criador profesional y uno informal se nota. 27 años de experiencia hablan por sí solos. Mi cachorro es perfecto en temperamento y salud.',
    rating: 5,
    puppy: 'Cream',
  },
  {
    name: 'Laura Hernández',
    location: 'Querétaro',
    text: 'Ya tengo mi segundo frenchie de Bulldog Lovers. Eso dice todo. Calidad, confianza y amor por lo que hacen. No busquen en otro lado.',
    rating: 5,
    puppy: 'Brindle',
  },
  {
    name: 'José Torres',
    location: 'Cancún',
    text: 'El proceso fue súper fácil. Me asesoraron en todo, respondieron todas mis preguntas y el cachorro llegó en perfectas condiciones. 5 estrellas es poco.',
    rating: 5,
    puppy: 'Pied',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-slate-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-slate-900 rounded-lg px-6 py-2 mb-6">
            <span className="text-white font-bold text-sm tracking-widest uppercase">Testimonios</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tighter uppercase">
            Familias<br/>
            <span className="text-[#16a34a]">Felices</span>
          </h2>
          
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto font-medium">
            500+ familias confían en nuestra excelencia
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-neutral-50 hover:bg-slate-900 border-2 border-neutral-200 hover:border-[#16a34a] rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-black group-hover:text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#16a34a] text-[#16a34a]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-700 group-hover:text-white/90 mb-8 leading-relaxed font-medium text-sm relative z-10 transition-colors">
                "{testimonial.text}"
              </p>

              {/* Puppy Badge */}
              <div className="inline-block bg-[#16a34a] group-hover:bg-[#DC2626] rounded-lg px-3 py-1 mb-6 transition-colors">
                <span className="text-white text-xs font-bold uppercase">{testimonial.puppy}</span>
              </div>

              {/* Author */}
              <div className="border-t-2 border-neutral-200 group-hover:border-white/20 pt-6 relative z-10 transition-colors">
                <p className="font-black text-black group-hover:text-white text-sm uppercase transition-colors">{testimonial.name}</p>
                <p className="text-xs text-neutral-600 group-hover:text-white/60 font-semibold mt-1 transition-colors">{testimonial.location}</p>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#16a34a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => {
              const footer = document.getElementById('contact');
              footer?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-slate-900 hover:bg-[#DC2626] text-white px-12 py-6 rounded-xl font-black tracking-wider uppercase text-lg transition-all"
          >
            Solicitar Información
          </button>
        </div>
      </div>
    </section>
  );
}