import { Shield, Heart, Trophy, Star, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const benefits = [
  {
    icon: Trophy,
    title: 'Líneas Genéticas de Élite',
    description: 'Genotipos y fenotipos excepcionales para lograr frenchies compactos, con excelente temperamento y bonito físico.',
  },
  {
    icon: Heart,
    title: 'Crianza en Ambiente Familiar',
    description: 'Nuestros cachorros crecen en un entorno honesto, transparente y responsable lleno de amor.',
  },
  {
    icon: Shield,
    title: 'Salud Garantizada',
    description: 'Cachorros inteligentes, simpáticos, amorosos y protectores. Increíbles compañeros ideales para tu familia.',
  },
  {
    icon: Star,
    title: 'Colores Tradicionales y Exóticos',
    description: 'Ofrecemos tanto bulldogs franceses tradicionales como exóticos de colores únicos desde hace años.',
  },
  {
    icon: Users,
    title: '+27 Años de Experiencia',
    description: 'Criamos bulldog inglés y francés de calidad desde 1999. Nuestra experiencia es tu garantía.',
  },
  {
    icon: Sparkles,
    title: 'Cachorros Únicos',
    description: 'Cada cachorro es especial, seleccionado con los más altos estándares de calidad y bienestar.',
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0d7a3a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative h-[600px] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBidWxsZG9nJTIwZmFtaWx5JTIwaG9tZXxlbnwxfHx8fDE3NzA1MTcyODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="French Bulldog Family"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                <div className="bg-white/95 backdrop-blur-sm p-4 text-center rounded-xl shadow-lg">
                  <div className="text-3xl font-black text-black">24</div>
                  <div className="text-xs font-bold text-neutral-600 uppercase">Años</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-4 text-center rounded-xl shadow-lg">
                  <div className="text-3xl font-black text-black">500+</div>
                  <div className="text-xs font-bold text-neutral-600 uppercase">Familias</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-4 text-center rounded-xl shadow-lg">
                  <div className="text-3xl font-black text-black">100%</div>
                  <div className="text-xs font-bold text-neutral-600 uppercase">Calidad</div>
                </div>
              </div>
            </div>

            {/* Accent Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#DC2626] -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#0d7a3a] -z-10"></div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block bg-slate-900 rounded-lg px-6 py-2 mb-6">
              <span className="text-white font-bold text-sm tracking-widest uppercase">Por qué elegirnos</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter uppercase leading-tight">
              Excelencia<br/>
              <span className="text-[#0d7a3a]">Garantizada</span>
            </h2>
            
            <p className="text-xl text-neutral-700 mb-12 font-medium leading-relaxed">
              Más de dos décadas criando bulldogs franceses de élite con estándares incomparables de calidad y profesionalismo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-[#0d7a3a] flex items-center justify-center flex-shrink-0 transition-colors">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-black mb-2 uppercase">Líneas de Élite</h3>
                  <p className="text-neutral-600 font-medium">Genética excepcional certificada</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-[#0d7a3a] flex items-center justify-center flex-shrink-0 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-black mb-2 uppercase">Garantía Total</h3>
                  <p className="text-neutral-600 font-medium">Salud y bienestar garantizados</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-[#0d7a3a] flex items-center justify-center flex-shrink-0 transition-colors">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-black mb-2 uppercase">Ambiente Familiar</h3>
                  <p className="text-neutral-600 font-medium">Crianza con amor y dedicación</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-neutral-50 hover:bg-slate-900 p-8 rounded-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-[#0d7a3a] rounded-l-2xl transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                
                <div className="relative">
                  <Icon className="w-12 h-12 text-black group-hover:text-[#0d7a3a] mb-6 transition-colors" strokeWidth={1.5} />
                  
                  <h3 className="text-xl font-black mb-4 text-black group-hover:text-white uppercase transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-neutral-600 group-hover:text-white/80 font-medium leading-relaxed transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button 
            onClick={() => {
              const footer = document.getElementById('contact');
              footer?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative bg-[#DC2626] hover:bg-slate-900 text-white px-12 py-6 rounded-xl font-black text-lg tracking-wider uppercase transition-all inline-flex items-center gap-3"
          >
            Consultar Disponibilidad
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}