import { AlertCircle } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <div className="bg-[#DC2626] text-white py-4 px-4 text-center sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-center gap-3 max-w-7xl mx-auto">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <p className="text-sm md:text-base font-black tracking-wider uppercase">
          🔥 Solo 2 cachorros premium disponibles • Reserva ahora
        </p>
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}