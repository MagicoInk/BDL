import { ArrowRight, MessageCircle, Video, FileText, Home } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#DC2626] blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#0d7a3a] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 text-center relative">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block bg-[#DC2626] rounded-lg px-6 py-2 mb-6">
            <span className="text-white font-bold text-sm tracking-widest uppercase">Proceso Simple</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter text-white uppercase">
            4 Pasos Para<br/>
            <span className="text-[#0d7a3a]">Tu Cachorro</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Proceso transparente y profesional de principio a fin
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#0d7a3a] rounded-2xl p-8 transition-all group">
            <div className="w-16 h-16 bg-[#0d7a3a] group-hover:bg-[#DC2626] rounded-2xl mx-auto mb-6 flex items-center justify-center transition-colors">
              <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div className="text-6xl font-black text-white/10 mb-4">01</div>
            <h3 className="text-xl font-black text-white mb-3 uppercase">Contacto</h3>
            <p className="text-white/70 font-medium text-sm leading-relaxed">
              Contáctanos vía WhatsApp, teléfono o formulario
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#0d7a3a] rounded-2xl p-8 transition-all group">
            <div className="w-16 h-16 bg-[#0d7a3a] group-hover:bg-[#DC2626] rounded-2xl mx-auto mb-6 flex items-center justify-center transition-colors">
              <Video className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div className="text-6xl font-black text-white/10 mb-4">02</div>
            <h3 className="text-xl font-black text-white mb-3 uppercase">Videollamada</h3>
            <p className="text-white/70 font-medium text-sm leading-relaxed">
              Conoce a tu cachorro y nuestras instalaciones
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#0d7a3a] rounded-2xl p-8 transition-all group">
            <div className="w-16 h-16 bg-[#0d7a3a] group-hover:bg-[#DC2626] rounded-2xl mx-auto mb-6 flex items-center justify-center transition-colors">
              <FileText className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div className="text-6xl font-black text-white/10 mb-4">03</div>
            <h3 className="text-xl font-black text-white mb-3 uppercase">Reserva</h3>
            <p className="text-white/70 font-medium text-sm leading-relaxed">
              Apartado con contrato y garantías por escrito
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#0d7a3a] rounded-2xl p-8 transition-all group">
            <div className="w-16 h-16 bg-[#0d7a3a] group-hover:bg-[#DC2626] rounded-2xl mx-auto mb-6 flex items-center justify-center transition-colors">
              <Home className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div className="text-6xl font-black text-white/10 mb-4">04</div>
            <h3 className="text-xl font-black text-white mb-3 uppercase">Entrega</h3>
            <p className="text-white/70 font-medium text-sm leading-relaxed">
              Recibe a tu nuevo compañero con todo incluido
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => {
            const footer = document.getElementById('contact');
            footer?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group bg-[#DC2626] hover:bg-white text-white hover:text-black px-12 py-6 rounded-xl font-black text-lg tracking-wider uppercase transition-all inline-flex items-center gap-3"
        >
          Solicitar Información
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}