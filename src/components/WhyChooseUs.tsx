import React from 'react';
import { WHY_CHOOSE_ITEMS, BRAND } from '../data/cateringData';
import { Award, Compass, Eye, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'QUALITY':
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
      case 'VARIETY':
        return <Compass className="w-6 h-6 text-[#D4AF37]" />;
      case 'PRESENTATION':
        return <Eye className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#120307] text-[#FAF7F2] relative overflow-hidden border-t border-[#D4AF37]/20">
      <div className="absolute inset-0 royal-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4AF37]">
              OUR FOUNDATIONAL VALUES
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2] uppercase mb-4">
            WHY ROYAL CATERERS?
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#D2C5BD] leading-relaxed">
            The four pillars that define our reputation across Delhi-NCR.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#1B060D] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 flex items-center justify-center bg-[#2E0B14] border border-[#D4AF37]/40 mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(item.title)}
                </div>

                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-1">
                  {item.subtitle}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#FAF7F2] mb-3 tracking-wide group-hover:text-[#F3E5AB] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-[#C4B7B0] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D4AF37]/80">
                <span>Core Pillar 0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Brand Tagline Banner */}
        <div className="mt-16 text-center py-6 px-4 bg-[#1C080E] border border-[#D4AF37]/30 max-w-3xl mx-auto">
          <p className="font-serif text-lg sm:text-xl text-[#FAF7F2] italic">
            "{BRAND.secondaryTagline}"
          </p>
          <span className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mt-1 block">
            {BRAND.name} • Jama Masjid, Delhi-6
          </span>
        </div>
      </div>
    </section>
  );
};
