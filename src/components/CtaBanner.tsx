import React from 'react';
import { BRAND } from '../data/cateringData';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#4A0E17] text-[#FAF7F2] relative overflow-hidden border-y-2 border-[#D4AF37]">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 bg-[#1C080E]/60 border border-[#D4AF37]/50">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#F3E5AB]">
            Bespoke Event Catering Services
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] uppercase mb-6 leading-tight">
          PLANNING SOMETHING SPECIAL?
        </h2>

        <p className="font-sans text-base sm:text-xl text-[#F5EFEB] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Let Royal Caterers take care of the taste, while you enjoy the occasion.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={`tel:${BRAND.phone1Raw}`}
            id="cta-banner-call-now"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest text-[#1C080E] uppercase bg-[#D4AF37] hover:bg-[#F3E5AB] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:scale-105 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now ({BRAND.phone1})</span>
          </a>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-banner-whatsapp-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest text-[#FAF7F2] uppercase bg-[#25D366] hover:bg-[#1EBE5B] transition-all duration-300 shadow-[0_4px_25px_rgba(37,211,102,0.3)] hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
