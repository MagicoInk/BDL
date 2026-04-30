import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingSocial() {
  return (
    <motion.a
      href="https://wa.me/5215527294584?text=Hola,%20Bulldog%20Lovers"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-50 flex h-14 w-14 touch-manipulation items-center justify-center rounded-full border-2 border-fw-pure-white/30 bg-fw-surface/95 text-[#7bc87a] shadow-2xl ring-2 ring-fw-red/40 backdrop-blur-md hover:border-fw-red/60 max-[380px]:bottom-4 max-[380px]:right-4 bottom-[max(1.5rem,env(safe-area-inset-bottom,0px)+0.5rem)] right-[max(1.5rem,env(safe-area-inset-right,0px)+0.5rem)]"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={1.5} />
    </motion.a>
  );
}
