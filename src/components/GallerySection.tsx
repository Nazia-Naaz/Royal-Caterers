import React, { useEffect, useRef, useState } from 'react';
import { GALLERY_ITEMS } from '../data/cateringData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const GallerySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);

  const filters = ['ALL', 'WEDDINGS', 'FOOD', 'BUFFET', 'EVENTS'];

  const filteredItems =
    activeFilter === 'ALL'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const pinWrapper = pinWrapperRef.current;

      if (!section || !track || !pinWrapper) return;

      const getScrollDistance = () => {
        const viewportWidth = window.innerWidth;
        const endPadding = viewportWidth < 768 ? 36 : 96;
        return Math.max(track.scrollWidth - viewportWidth + endPadding, 600);
      };

      // Entrance reveal when section enters viewport
      gsap.fromTo(
        pinWrapper.querySelector('.gallery-header'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Core Vertical-to-Horizontal Pinned Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: pinWrapper,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressLineRef.current) {
              progressLineRef.current.style.width = `${Math.min(Math.max(self.progress * 100, 3), 100)}%`;
            }
            const currentStep = Math.min(
              filteredItems.length,
              Math.max(1, Math.floor(self.progress * filteredItems.length) + 1)
            );
            setActiveStep(currentStep);
          },
        },
      });

      // 1. Horizontal track movement driven by vertical scroll
      tl.to(
        track,
        {
          x: () => -getScrollDistance(),
          ease: 'none',
        },
        0
      );

      // 2. Parallax depth on images inside cards
      const images = track.querySelectorAll('.gallery-parallax-img');
      if (images.length > 0) {
        tl.to(
          images,
          {
            xPercent: 12,
            ease: 'none',
          },
          0
        );
      }

      // 3. Subtle heading breathing animation
      if (headingRef.current) {
        tl.to(
          headingRef.current,
          {
            letterSpacing: '0.04em',
            opacity: 0.95,
            ease: 'none',
          },
          0
        );
      }
    }, sectionRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [filteredItems.length]);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-[#16050A] text-[#FAF7F2] overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4A0E17]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 royal-pattern-dark opacity-30 pointer-events-none" />

      {/* Pinned Viewport Container (h-screen on both Mobile and Desktop) */}
      <div
        ref={pinWrapperRef}
        className="h-screen w-full flex flex-col justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 overflow-hidden relative"
      >
        {/* TOP: Section Header Connected to the Pinned View */}
        <div className="gallery-header max-w-7xl mx-auto w-full shrink-0 mb-2 sm:mb-3">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 border-b border-[#D4AF37]/20 pb-2.5 sm:pb-3.5">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-5 sm:w-6 h-[1px] bg-[#D4AF37]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  VISUAL CHRONICLES
                </span>
                <span className="w-5 sm:w-6 h-[1px] bg-[#D4AF37]" />
              </div>

              <h2
                ref={headingRef}
                className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAF7F2] uppercase"
              >
                A GLIMPSE OF OUR EVENTS
              </h2>
            </div>

            {/* Filter Pills and Step Counter */}
            <div className="flex flex-wrap items-center justify-between md:justify-end gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    id={`gallery-filter-${filter.toLowerCase()}`}
                    onClick={() => {
                      setActiveFilter(filter);
                      requestAnimationFrame(() => ScrollTrigger.refresh());
                    }}
                    className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      activeFilter === filter
                        ? 'bg-[#D4AF37] text-[#16050A] shadow-md border border-[#D4AF37]'
                        : 'bg-[#1F0910] text-[#D2C5BD] hover:text-[#FAF7F2] hover:bg-[#2A0D16] border border-[#D4AF37]/30'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[#D2C5BD]">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37]/90 font-medium">
                  Scroll down
                </span>
                <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
              </div>

              <div className="flex items-center gap-1 font-serif text-xs sm:text-sm font-bold tracking-widest px-2.5 py-1 bg-[#1F0910] border border-[#D4AF37]/40 text-[#D4AF37]">
                <span>{activeStep < 10 ? `0${activeStep}` : activeStep}</span>
                <span className="text-white/40">/</span>
                <span className="text-white/60">
                  {filteredItems.length < 10 ? `0${filteredItems.length}` : filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE: Continuous Horizontal Gallery Track (Controlled exclusively via vertical scroll) */}
        <div className="w-full flex-1 flex items-center overflow-hidden py-1">
          <div
            ref={trackRef}
            className="flex flex-nowrap items-stretch gap-4 sm:gap-6 lg:gap-8 pl-1 sm:pl-2 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`gallery-card-${item.id}`}
                onClick={() => openLightbox(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openLightbox(item);
                }}
                className="group relative w-[76vw] sm:w-[320px] md:w-[360px] lg:w-[390px] xl:w-[420px] shrink-0 bg-[#1C080E] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] cursor-pointer"
              >
                {/* Controlled Image Frame with parallax container */}
                <div className="relative h-44 sm:h-52 md:h-60 lg:h-68 overflow-hidden bg-black/50 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-parallax-img w-full h-full object-cover scale-110 transform transition-transform duration-700 ease-out group-hover:scale-118"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C080E] via-[#1C080E]/40 to-black/30" />

                  {/* Category Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#140409]/90 backdrop-blur-sm border border-[#D4AF37]/40 text-[10px] sm:text-xs font-semibold tracking-widest text-[#D4AF37]">
                    {item.category}
                  </div>

                  {/* View Full Image Icon */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-[#D4AF37] text-[#16050A] opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-3.5 sm:p-4 lg:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#FAF7F2] uppercase tracking-wide group-hover:text-[#F3E5AB] transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>

                    <p className="font-sans text-[11px] sm:text-xs text-[#C9BFB9] leading-relaxed line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Click prompt */}
                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    <span>View High-Res Photo</span>
                    <span className="text-[#F3E5AB] group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </div>
                </div>

                {/* Bottom Gold Accent */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM: Horizontal Progress Bar Indicator */}
        <div className="max-w-7xl mx-auto w-full shrink-0 pt-2 sm:pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#D4AF37]/80 uppercase tracking-widest font-medium">
            <span>Scroll Progress</span>
          </div>

          <div className="flex-1 max-w-md h-1 bg-[#2A0F15] rounded-full overflow-hidden border border-[#D4AF37]/20">
            <div
              ref={progressLineRef}
              className="h-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full transition-all duration-75"
              style={{ width: '12%' }}
            />
          </div>

          <div className="text-[10px] sm:text-xs text-[#C9BFB9] tracking-wider uppercase font-medium">
            {filteredItems[activeStep - 1]?.category || 'EVENTS'}
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2.5 text-white/80 hover:text-[#D4AF37] bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 text-white/80 hover:text-[#D4AF37] bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 text-white/80 hover:text-[#D4AF37] bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center text-center">
            <div className="relative max-h-[62vh] overflow-hidden border border-[#D4AF37]/50 shadow-2xl mb-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[62vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="text-center px-4">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37] mb-1">
                <Sparkles className="w-3 h-3" />
                {selectedItem.category} • Royal Caterers
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF7F2] mb-1">
                {selectedItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D2C5BD] max-w-xl mx-auto">
                {selectedItem.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
