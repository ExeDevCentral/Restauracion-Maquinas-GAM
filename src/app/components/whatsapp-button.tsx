import { MessageCircle } from 'lucide-react';
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
    <button
      onClick={handleClick}
      type="button"
      aria-label="Contactar por WhatsApp al Taller GAM"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[var(--vintage-dark)] hover:bg-[#26221E] text-[var(--vintage-cream)] border border-[var(--vintage-gold)]/35 hover:border-[var(--vintage-gold)]/80 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-[var(--vintage-gold)]/60 cursor-pointer"
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
  );
}
