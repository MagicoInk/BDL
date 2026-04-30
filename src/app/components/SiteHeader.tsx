import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const nav = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-fw-border bg-fw-bg/85 py-4 backdrop-blur-md' : 'border-b border-transparent bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 lg:px-10">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight text-fw-white lg:text-xl">
          Bulldog<span className="text-fw-gold">Lovers</span>
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://instagram.com/bulldogloversmexico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fw-border text-fw-fog transition-colors hover:border-fw-gold hover:text-fw-gold"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://facebook.com/bulldogloversmexico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fw-border text-fw-fog transition-colors hover:border-fw-gold hover:text-fw-gold"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-fw-border text-fw-white lg:hidden"
          aria-label={open ? 'Cerrar' : 'Menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-fw-border bg-fw-bg px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-widest text-fw-fog"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
