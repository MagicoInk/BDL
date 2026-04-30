import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0d7a3a] blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DC2626] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24 relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-5xl font-black tracking-tighter text-white mb-4 uppercase">
              BULLDOG<br/>
              <span className="text-[#0d7a3a]">LOVERS</span>
            </h3>
            <p className="text-lg font-semibold text-white/80 mb-6 tracking-wider uppercase">
              México
            </p>
            <p className="text-white/70 leading-relaxed mb-8 font-medium max-w-md">
              Desde 1999 criando bulldogs franceses de calidad excepcional. 27 años de experiencia nos respaldan.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/bulldoglovers.mx/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#DC2626] rounded-xl flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/bulldogloversmx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#DC2626] rounded-xl flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/525512345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#0d7a3a] rounded-xl flex items-center justify-center transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-6 tracking-wider uppercase text-white">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0d7a3a] flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="font-semibold text-white text-sm">Ciudad de México</p>
                  <p className="text-white/60 text-xs mt-1">México</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0d7a3a] flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="font-semibold text-white text-sm">WhatsApp</p>
                  <p className="text-white/60 text-xs mt-1">Disponible 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0d7a3a] flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="font-semibold text-white text-sm">Email</p>
                  <p className="text-white/60 text-xs mt-1">info@bulldoglovers.mx</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-lg font-black mb-6 tracking-wider uppercase text-white">Acciones</h4>
            <div className="space-y-3">
              <button className="w-full bg-[#0d7a3a] hover:bg-[#0a5a2a] text-white px-6 py-4 rounded-xl font-black tracking-wider uppercase text-sm transition-all flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                WhatsApp
              </button>
              <button className="w-full bg-transparent border-2 border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-6 py-4 rounded-xl font-black tracking-wider uppercase text-sm transition-all">
                Ver Cachorros
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-semibold tracking-wide">
              © 2025 Bulldog Lovers México • Todos los derechos reservados
            </p>
            <div className="flex items-center gap-2 bg-[#0d7a3a] rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <p className="text-white text-xs font-bold tracking-wider uppercase">
                27 años de experiencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}