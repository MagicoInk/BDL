import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const nav = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#videos', label: 'Vídeos' },
  { href: '#lineas', label: 'Líneas' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        scrolled ? 'border-b border-fw-border bg-fw-bg/85 py-4 backdrop-blur-md' : 'border-b border-transparent bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex min-w-0 max-w-[1400px] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-5 lg:px-10">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight text-fw-white lg:text-xl">
          Bulldog<span className="text-fw-red">Lovers</span>
        </a>

        <nav className="hidden flex-1 justify-center gap-8 lg:flex xl:gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fw-fog/90 transition-colors hover:text-fw-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="https://wa.me/5215527294584?text=Hola,%20Bulldog%20Lovers"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden border-2 border-fw-pure-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-fw-pure-white transition-colors hover:border-fw-red hover:bg-fw-red lg:inline-flex"
        >
          Reservar
        </motion.a>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://instagram.com/bulldogloversmexico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fw-border text-fw-fog transition-colors hover:border-fw-red hover:text-fw-red"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://facebook.com/bulldogloversmexico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fw-border text-fw-fog transition-colors hover:border-fw-red hover:text-fw-red"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full border border-fw-border text-fw-white lg:hidden"
          aria-label={open ? 'Cerrar' : 'Menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-fw-border bg-fw-bg px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 sm:px-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="touch-manipulation rounded-lg py-3.5 text-sm font-semibold uppercase tracking-widest text-fw-fog active:bg-fw-elevated"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <motion.a
              href="https://wa.me/5215527294584?text=Hola,%20Bulldog%20Lovers"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="mt-3 touch-manipulation rounded-full border-2 border-fw-red bg-fw-red px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.18em] text-fw-pure-white"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
