import { MessageCircle, Gem, Wrench, MapPin } from 'lucide-react';
import { useCallback } from 'react';

interface WhatsAppButtonProps {
  readonly phoneNumber: string;
  readonly message?: string;
}

export function WhatsAppButton({
  phoneNumber,
  message = "¡Hola! Quisiera consultar sobre el servicio de restauración de máquinas de escribir o piezas del taller.",
}: WhatsAppButtonProps) {
  const handleClick = useCallback(() => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  }, [phoneNumber, message]);

  return (
    <>
      {/* Desktop Floating Button (>= md) */}
      <button
        onClick={handleClick}
        type="button"
        aria-label="Contactar por WhatsApp al Taller GAM"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3 px-4 py-3 bg-[var(--vintage-dark)] hover:bg-[#26221E] text-[var(--vintage-cream)] border border-[var(--vintage-gold)]/35 hover:border-[var(--vintage-gold)]/80 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-[var(--vintage-gold)]/60 cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>

        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-[var(--vintage-gold)] group-hover:text-emerald-400 transition-colors" />
          <span className="text-xs sm:text-sm font-sans font-medium tracking-tight text-[var(--vintage-cream)]">
            WhatsApp Taller
          </span>
        </div>
      </button>

      {/* Mobile Only Ergonomic Bottom Dock (< md) — Minimalista, bien espaciado, sin superponerse */}
      <nav
        aria-label="Navegación rápida móvil del Taller GAM"
        className="md:hidden fixed bottom-3 inset-x-3 z-50 select-none pb-[env(safe-area-inset-bottom)]"
      >
        <div className="mx-auto max-w-md rounded-2xl border border-[var(--vintage-gold)]/35 bg-[var(--vintage-dark)]/95 backdrop-blur-xl shadow-[0_14px_36px_rgba(0,0,0,0.65)] p-1.5 grid grid-cols-4 items-center gap-1.5 font-sans">
          <a
            href="#catalogo"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[var(--vintage-cream)]/90 hover:text-[var(--vintage-gold)] active:scale-95 transition-all"
          >
            <Gem className="w-4 h-4 text-[var(--vintage-gold)]" />
            <span className="text-[10px] font-semibold mt-1 leading-none">Creaciones</span>
          </a>

          <a
            href="#restauracion"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[var(--vintage-cream)]/90 hover:text-[var(--vintage-gold)] active:scale-95 transition-all"
          >
            <Wrench className="w-4 h-4 text-[var(--vintage-gold)]" />
            <span className="text-[10px] font-semibold mt-1 leading-none">Máquinas</span>
          </a>

          <a
            href="#contacto"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[var(--vintage-cream)]/90 hover:text-[var(--vintage-gold)] active:scale-95 transition-all"
          >
            <MapPin className="w-4 h-4 text-[var(--vintage-gold)]" />
            <span className="text-[10px] font-semibold mt-1 leading-none">Taller GAM</span>
          </a>

          <button
            type="button"
            onClick={handleClick}
            aria-label="Escribir por WhatsApp"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[var(--vintage-gold)] text-[var(--vintage-dark)] font-bold shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-bold mt-1 leading-none">WhatsApp</span>
          </button>
        </div>
      </nav>
    </>
  );
}
