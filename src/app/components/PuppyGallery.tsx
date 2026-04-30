import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Check, X } from 'lucide-react';

const puppies = [
  {
    id: 1,
    name: 'Blue Exótico',
    color: 'Blue & Tan',
    age: '8 semanas',
    price: '$48,000',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800',
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Lilac Premium',
    color: 'Lilac Fawn',
    age: '10 semanas',
    price: '$45,000',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800',
    available: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Merle Platino',
    color: 'Merle',
    age: '12 semanas',
    price: '$42,000',
    image: 'https://images.unsplash.com/photo-1583511666407-5f06533f2113?w=800',
    available: false,
    featured: false,
  },
  {
    id: 4,
    name: 'Chocolate Tan',
    color: 'Chocolate',
    age: '9 semanas',
    price: '$38,000',
    image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800',
    available: false,
    featured: false,
  },
];

const features = [
  'Vacunas al día',
  'Desparasitación completa',
  'Garantía genética',
];

export function PuppyGallery() {
  return (
    <section className="py-24 bg-slate-900" data-section="puppies">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#DC2626] rounded-lg px-6 py-2 mb-6">
            <span className="text-white font-bold text-sm tracking-widest uppercase">Disponibles Ahora</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            Nuestros<br/>
            <span className="text-[#0d7a3a]">Cachorros</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Líneas genéticas excepcionales • Entrega inmediata • Garantía total
          </p>
        </div>

        {/* Puppies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {puppies.map((puppy) => (
            <div 
              key={puppy.id}
              className={`group relative bg-neutral-900 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${ 
                puppy.featured ? 'ring-4 ring-[#DC2626]' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={puppy.image}
                  alt={puppy.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Premium Badge */}
                {puppy.featured && (
                  <div className="absolute top-4 right-4 bg-[#DC2626] rounded-lg px-4 py-2">
                    <span className="text-white font-black text-xs tracking-widest">PREMIUM</span>
                  </div>
                )}
                
                {/* Availability Badge */}
                <div className={`absolute top-4 left-4 rounded-lg px-4 py-2 ${
                  puppy.available ? 'bg-[#0d7a3a]' : 'bg-neutral-700'
                }`}>
                  <span className="text-white font-black text-xs tracking-widest flex items-center gap-2">
                    {puppy.available ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                    {puppy.available ? 'DISPONIBLE' : 'RESERVADO'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight uppercase">
                  {puppy.name}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <p className="text-white/70 font-semibold text-sm">
                    {puppy.color}
                  </p>
                  <p className="text-white/50 font-medium text-sm">
                    {puppy.age}
                  </p>
                </div>
                
                <div className="border-t-2 border-neutral-800 pt-4 mb-6">
                  <p className="text-3xl font-black text-white">
                    {puppy.price}
                  </p>
                  <p className="text-white/50 text-xs font-semibold mt-1">MXN</p>
                </div>

                <button
                  onClick={() => {
                    const footer = document.getElementById('contact');
                    footer?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  disabled={!puppy.available}
                  className={`w-full py-4 rounded-lg font-black tracking-wider uppercase text-sm transition-all ${
                    puppy.available
                      ? 'bg-[#0d7a3a] hover:bg-[#0a5a2a] text-white'
                      : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                  }`}
                >
                  {puppy.available ? 'Reservar' : 'No Disponible'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Package Info */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-neutral-800 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-black mb-12 tracking-tight uppercase text-center text-white">
              Paquete <span className="text-[#0d7a3a]">Todo Incluido</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#0d7a3a] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}