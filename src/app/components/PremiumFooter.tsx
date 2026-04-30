import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export function PremiumFooter() {
  return (
    <footer className="border-t border-fw-border bg-fw-bg px-4 py-14 sm:px-5 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid min-w-0 max-w-[1400px] gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-fw-red">Contacto</p>
          <ul className="space-y-4 text-sm text-fw-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-fw-red" size={18} />
              Ciudad de México, México
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-fw-red" size={18} />
              <a href="https://wa.me/5215527294584" className="hover:text-fw-white">
                +52 1 55 2729 4584
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-fw-red" size={18} />
              <a href="mailto:contacto@bulldoglovers.mx" className="hover:text-fw-white">
                contacto@bulldoglovers.mx
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display text-xl font-bold text-fw-white">
            Bulldog<span className="text-fw-red">Lovers</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fw-muted">
            Criamos bulldog francés con tiempo y limpieza. Si nos escribes, te contestamos; cuando te llevas al cachorro,
            el trato no se corta ahí.
          </p>
        </div>

        <div>
          <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-fw-red">
            <Clock size={14} /> Horarios
          </p>
          <ul className="space-y-2 text-sm text-fw-muted">
            <li>Lun — Sáb · 10:00 — 20:00</li>
            <li>Dom · 11:00 — 18:00</li>
            <li className="text-xs text-fw-red">Visitas solo con cita</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-fw-red">Social</p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/bulldogloversmexico"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-fw-border text-fw-fog hover:border-fw-red hover:text-fw-red"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com/bulldogloversmexico"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-fw-border text-fw-fog hover:border-fw-red hover:text-fw-red"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://youtube.com/@bulldogloversmexico"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-fw-border text-fw-fog hover:border-fw-red hover:text-fw-red"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t border-fw-border px-2 pb-[max(5rem,env(safe-area-inset-bottom,0px)+3rem)] pt-8 text-center text-xs leading-relaxed text-fw-muted sm:mt-14">
        © {new Date().getFullYear()} Bulldog Lovers México · FCI · Federación Canófila Mexicana
      </div>
    </footer>
  );
}
