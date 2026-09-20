import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MENU_CATEGORIES } from '../data/cateringData';
import { UtensilsCrossed, Sparkles, MessageSquare, Info } from 'lucide-react';

interface MenuSectionProps {
  onDiscussMenu: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onDiscussMenu }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(MENU_CATEGORIES[0].id);
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const activeCategory =
    MENU_CATEGORIES.find((cat) => cat.id === activeCategoryId) || MENU_CATEGORIES[0];

  // GSAP animation when category changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
  }, [activeCategoryId]);

  const handleCategoryChange = (catId: string) => {
    if (catId === activeCategoryId) return;
    setActiveCategoryId(catId);
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF7F2] text-[#1F1A1B] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 royal-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#4A0E17]">
              CULINARY REPERTOIRE
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C080E] uppercase mb-3">
            A MENU MADE TO IMPRESS
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#554A4D] leading-relaxed">
            Delicately spiced, authentic royal delicacies prepared for distinguished gatherings.
          </p>
        </div>

        {/* Category Tabs / Buttons */}
        <div className="mb-10">
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar gap-1.5 sm:gap-2.5 pb-2 border-b border-[#D4AF37]/30">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  id={`menu-tab-${cat.id}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer border-b-2 ${
                    isActive
                      ? 'text-[#1C080E] font-bold border-[#4A0E17] bg-white/70 shadow-sm'
                      : 'text-[#6A5E62] border-transparent hover:text-[#1C080E] hover:bg-black/5'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Refined Restaurant-Style Menu Content Card */}
        <div className="bg-[#FFFFFF] border border-[#D4AF37]/30 shadow-xl p-6 sm:p-8 lg:p-10 relative mb-10">
          {/* Top Category Title & Subheading */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-[#E8DFD8]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                Selection
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C080E]">
                {activeCategory.name}
              </h3>
            </div>

            <div className="mt-2 sm:mt-0 inline-flex items-center gap-2 text-xs text-[#554A4D] bg-[#FAF7F2] px-3 py-1.5 border border-[#D4AF37]/30">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#4A0E17]" />
              <span>Bespoke recipes & dietary options available</span>
            </div>
          </div>

          {/* Menu Items: Refined Restaurant-Style Grid */}
          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {activeCategory.items.map((item, idx) => (
              <div
                key={`${activeCategoryId}-${idx}`}
                className="pb-4 border-b border-[#F0E6DE] last:border-b-0 md:last:border-b-0 hover:translate-x-0.5 transition-transform duration-150"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C080E] tracking-tight">
                    {item.name}
                  </h4>
                  {item.highlight && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-[#4A0E17]/10 text-[#4A0E17] border border-[#4A0E17]/20 whitespace-nowrap shrink-0">
                      <Sparkles className="w-2.5 h-2.5" />
                      {item.highlight}
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-[#5E5255] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Sample Menu Information Note */}
          <div className="mt-8 pt-5 border-t border-[#E8DFD8] flex items-start sm:items-center gap-3 text-xs text-[#6A5E62] bg-[#FAF7F2] p-3.5">
            <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 sm:mt-0" />
            <p>
              <strong className="text-[#1C080E]">Note for Hosts:</strong> The dishes shown above represent a curated sample of our most requested preparations. We craft bespoke custom menus tailored to your guest profile, gathering size, and seasonal delicacies.
            </p>
          </div>
        </div>

        {/* CTA to Discuss Custom Menu */}
        <div className="text-center">
          <button
            onClick={onDiscussMenu}
            id="menu-cta-discuss"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-widest text-[#FAF7F2] uppercase bg-[#4A0E17] hover:bg-[#34070E] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer border border-[#D4AF37]/50"
          >
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>Discuss Your Custom Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
};
