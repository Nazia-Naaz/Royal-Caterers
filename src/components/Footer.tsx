import React from 'react';
import { BRAND } from '../data/cateringData';
import { Phone, MapPin, Instagram, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#120307] text-[#FAF7F2] border-t border-[#D4AF37]/25 relative overflow-hidden">
      {/* Subtle royal pattern */}
      <div className="absolute inset-0 royal-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Royal Caterers Logo"
                className="h-12 w-12 rounded-full object-contain border border-[#D4AF37]/50 bg-[#F7F0E6] p-0.5 shrink-0 shadow-md"
              />
              <div>
                <h3 className="font-serif tracking-[0.2em] text-2xl font-bold text-[#FAF7F2] uppercase">
                  {BRAND.name}
                </h3>
                <p className="text-xs font-serif text-[#D4AF37] italic tracking-wide">
                  "{BRAND.tagline}"
                </p>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#BDB0A9] leading-relaxed max-w-md">
              Bringing royal culinary heritage, traditional wood-fired & clay pot recipes, and impeccable hospitality to celebrations across Delhi-NCR.
            </p>

            <div className="pt-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 hover:bg-[#D4AF37] hover:text-[#120307] border border-[#D4AF37]/40 text-xs font-semibold tracking-wider text-[#FAF7F2] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#120307]" />
                <span>Follow on Instagram {BRAND.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] pb-1 border-b border-[#D4AF37]/30 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C9BFB9]">
              {['Home', 'About', 'Services', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav(`#${item.toLowerCase()}`)}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] pb-1 border-b border-[#D4AF37]/30 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C9BFB9]">
              {['Weddings', 'Parties', 'Corporate Events', 'Special Events'].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#services')}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] pb-1 border-b border-[#D4AF37]/30 inline-block">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#C9BFB9]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug hover:text-[#D4AF37] transition-colors"
                  title="View on Google Maps"
                >
                  {BRAND.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${BRAND.phone1Raw}`} className="hover:text-[#D4AF37] transition-colors">
                  {BRAND.phone1}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${BRAND.phone2Raw}`} className="hover:text-[#D4AF37] transition-colors">
                  {BRAND.phone2}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9089]">
          <p>© 2026 Royal Caterers. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#C5A059] flex items-center gap-1">
              Serving with <Heart className="w-3 h-3 text-[#D4AF37] fill-current" /> in Delhi-NCR
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/5 hover:bg-[#D4AF37] hover:text-[#120307] border border-[#D4AF37]/30 transition-colors text-white cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
