import { MessageCircle, Facebook, Send, MapPin } from 'lucide-react';

export function SocialSidebar() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/5215512345678"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#8A9A8E] hover:bg-[#7A8A7E] text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all group border border-[#7A8A7E]"
        title="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
        <span className="absolute right-14 bg-[#6A7A6E] text-white px-4 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-extralight tracking-wide">
          WhatsApp
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/bulldoglovers"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#8A9A8E] hover:bg-[#7A8A7E] text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all group border border-[#7A8A7E]"
        title="Facebook"
      >
        <Facebook className="w-5 h-5" strokeWidth={1.5} />
        <span className="absolute right-14 bg-[#6A7A6E] text-white px-4 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-extralight tracking-wide">
          Facebook
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/bulldoglovers"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#8A9A8E] hover:bg-[#7A8A7E] text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all group border border-[#7A8A7E]"
        title="Instagram"
      >
        <Send className="w-5 h-5" strokeWidth={1.5} />
        <span className="absolute right-14 bg-[#6A7A6E] text-white px-4 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-extralight tracking-wide">
          Instagram
        </span>
      </a>

      {/* Location */}
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#9E8F6F] hover:bg-[#8E7F5F] text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all group border border-[#8E7F5F]"
        title="Ubicación"
      >
        <MapPin className="w-5 h-5" strokeWidth={1.5} />
        <span className="absolute right-14 bg-[#6A7A6E] text-white px-4 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-extralight tracking-wide">
          Ubicación
        </span>
      </a>
    </div>
  );
}