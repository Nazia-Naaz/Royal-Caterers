import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { BRAND } from '../data/cateringData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Quick Chat */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto p-3.5 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold uppercase tracking-wider pl-0 group-hover:pl-2">
          WhatsApp Us
        </span>
      </a>

      {/* Quick Call */}
      <a
        href={`tel:${BRAND.phone1Raw}`}
        aria-label="Call Royal Caterers"
        className="pointer-events-auto p-3.5 bg-[#4A0E17] text-[#D4AF37] border border-[#D4AF37]/50 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <Phone className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold uppercase tracking-wider pl-0 group-hover:pl-2 text-[#FAF7F2]">
          Call {BRAND.phone1}
        </span>
      </a>

      {/* Book Event Pill for Mobile */}
      <button
        onClick={onOpenBooking}
        aria-label="Book Event Modal"
        className="pointer-events-auto sm:hidden px-4 py-2.5 bg-[#D4AF37] text-[#16050A] text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Event</span>
      </button>
    </aside>
  );
};
