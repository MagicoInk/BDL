import { ArrowRight, Heart, Award, Shield, Play, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1680189708723-ea3b9c3c9918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBidWxsZG9nJTIwcHVwcHklMjBjbG9zZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDYxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1746647396708-607eea988270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBidWxsZG9nJTIwcHVwcHklMjBzaXR0aW5nJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MDYxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1749369258918-982fbb4610f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBidWxsZG9nJTIwcHVwcHklMjBwbGF5aW5nJTIwY3JlYW0lMjBjb2xvcnxlbnwxfHx8fDE3NzA2MTYxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1664474205071-82d0b93bdca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBidWxsZG9nJTIwcHVwcHklMjBicm93biUyMGJyaW5kbGV8ZW58MXx8fHwxNzcwNjE2MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const footer = document.getElementById('contact');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPuppies = () => {
    const puppies = document.querySelector('[data-section="puppies"]');
    puppies?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="relative bg-white">
      {/* Main Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Brand Name */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-neutral-900">Bulldog Lovers</h2>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
                Cachorros de<br />
                <span className="text-[#0d7a3a]">Bulldog Francés</span><br />
                Premium
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl">
                Líneas genéticas excepcionales de campeones internacionales. 
                27 años de experiencia garantizan la salud y calidad de cada cachorro.
              </p>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 mb-8">
                <Heart className="w-4 h-4 text-[#0d7a3a] fill-[#0d7a3a]" />
                <span className="text-sm font-semibold text-neutral-900 tracking-wide">
                  Criadores Certificados
                </span>
              </div>

              {/* Key Points */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0d7a3a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-[#0d7a3a]" />
                  </div>
                  <p className="text-neutral-700">Garantía de salud y pureza certificada</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0d7a3a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-[#0d7a3a]" />
                  </div>
                  <p className="text-neutral-700">Paquete completo: vacunas, microchip y pedigrí</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0d7a3a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 text-[#0d7a3a]" />
                  </div>
                  <p className="text-neutral-700">Asesoría personalizada de por vida</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10 pb-10 border-b border-neutral-200">
                <div>
                  <div className="text-4xl font-bold text-neutral-900 mb-1">24</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide">Años</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-neutral-900 mb-1">500+</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide">Familias</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-neutral-900 mb-1">100%</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide">Garantía</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToPuppies}
                  className="group bg-[#0d7a3a] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-neutral-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Ver Cachorros Disponibles
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={scrollToContact}
                  className="border-2 border-neutral-300 text-neutral-900 px-8 py-4 rounded-lg font-semibold text-base hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-300"
                >
                  Solicitar Información
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main Image Carousel */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`Bulldog Premium ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all ${
                          index === currentSlide 
                            ? 'w-8 bg-white' 
                            : 'w-1 bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-5 h-5 text-neutral-900" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="w-5 h-5 text-neutral-900" />
                    </button>
                  </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {galleryImages.slice(0, 3).map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`relative aspect-square overflow-hidden transition-all ${
                        currentSlide === index 
                          ? 'ring-2 ring-[#0d7a3a] ring-offset-2' 
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video & Gallery Section */}
      <div className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#0d7a3a] rounded-lg px-6 py-2 mb-6">
              <span className="text-white font-bold text-sm tracking-widest uppercase">Galería Visual</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Conoce Nuestros<br/>
              <span className="text-[#0d7a3a]">Cachorros</span>
            </h2>
          </div>

          {/* Video Placeholder + Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* Main Video/Image */}
            <div className="relative h-[500px] lg:h-[600px] bg-neutral-900 group overflow-hidden">
              <ImageWithFallback
                src={galleryImages[0]}
                alt="Video Principal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-[#DC2626] hover:bg-[#0d7a3a] flex items-center justify-center transition-all cursor-pointer group-hover:scale-110">
                  <Play className="w-10 h-10 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4">
                <p className="text-white font-semibold text-lg">Video: Nuestros Cachorros Premium</p>
                <p className="text-white/70 text-sm font-medium">Mira cómo criamos a nuestros bulldogs</p>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-6">
              {galleryImages.slice(1, 5).map((img, index) => (
                <div 
                  key={index}
                  className="relative h-[285px] lg:h-[291px] group overflow-hidden cursor-pointer"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Cachorro ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-[#0d7a3a] px-3 py-1 inline-block mb-2">
                        <span className="text-white text-xs font-black uppercase">Premium</span>
                      </div>
                      <p className="text-white font-bold text-sm">Cachorro #{index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram-style Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {galleryImages.map((img, index) => (
              <div 
                key={index}
                className="relative aspect-square group overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-xs font-bold">Ver más</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}