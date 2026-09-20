import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EventsShowcaseProps {
  onPlanEvent: (eventCategory: string) => void;
}

export const EventsShowcase: React.FC<EventsShowcaseProps> = ({ onPlanEvent }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const events = [
    {
      step: '01',
      category: 'WEDDINGS',
      title: 'Grand Weddings & Regal Receptions',
      tag: '500 — 2,000+ Guests',
      description:
        'Lavish multi-station royal feasts, majestic copper degh setups, live tandoor and sweet counters, with flawless hospitality for your once-in-a-lifetime union.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Shahi Dastarkhwan', 'Dum Biryani Cauldrons', 'Traditional Attire Stewards'],
    },
    {
      step: '02',
      category: 'PARTIES',
      title: 'Private Celebrations & Milestone Anniversaries',
      tag: '50 — 300 Guests',
      description:
        'From vibrant milestone birthdays to elegant family dinners, our tailored catering ensures effortless joy and delectable flavors that keep guests mingling.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Chaat Street Stalls', 'Handcrafted Canapés', 'Dessert Tablescapes'],
    },
    {
      step: '03',
      category: 'CORPORATE',
      title: 'Conferences, Seminars & Executive Galas',
      tag: '100 — 1,500 Guests',
      description:
        'Punctual, impeccably hygienic and refined culinary arrangements for summit lunches, corporate annual functions, and client banquets in Delhi-NCR.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Express Hi-Tea', 'Executive Buffet Counters', 'Formal Plated Service'],
    },
    {
      step: '04',
      category: 'SPECIAL OCCASIONS',
      title: 'Festive Feasts & Cultural Celebrations',
      tag: 'Bespoke Gatherings',
      description:
        'Custom authentic catering for Eid feasts, engagement ceremonies, qawwali evenings, and religious family gatherings crafted with reverence to taste and tradition.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      highlights: ['Old Delhi Legacy Recipes', 'Custom Clay Oven Breads', 'Bespoke Beverages'],
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const pinWrapper = pinWrapperRef.current;

      if (!section || !track || !pinWrapper) return;

      // Function to dynamically compute horizontal scroll delta
      const getScrollDistance = () => {
        const viewportWidth = window.innerWidth;
        const endPadding = viewportWidth < 768 ? 40 : 100;
        return Math.max(track.scrollWidth - viewportWidth + endPadding, 600);
      };

      // Entrance animation for header and cards when section enters viewport
      gsap.fromTo(
        pinWrapper.querySelector('.celebrations-header'),
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
          scrub: 1, // Smooth scrub matching vertical scroll
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update continuous progress bar
            if (progressLineRef.current) {
              progressLineRef.current.style.width = `${Math.min(Math.max(self.progress * 100, 2), 100)}%`;
            }
            // Update active step counter based on scroll progress
            const currentStep = Math.min(
              events.length,
              Math.max(1, Math.floor(self.progress * events.length) + 1)
            );
            setActiveStep(currentStep);
          },
        },
      });

      // 1. Smooth horizontal translation of the events track
      tl.to(
        track,
        {
          x: () => -getScrollDistance(),
          ease: 'none',
        },
        0
      );

      // 2. Parallax depth: gentle counter-movement on images inside cards
      const images = track.querySelectorAll('.event-card-image');
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

      // 3. Subtle typography breathing/connection effect on the main heading
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

    // Refresh ScrollTrigger on window resize to ensure correct pixel math
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [events.length]);

  return (
    <section
      id="celebrations-showcase"
      ref={sectionRef}
      className="relative bg-[#16050A] text-[#FAF7F2] overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4A0E17]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Pinned Viewport Container (h-screen on both Mobile and Desktop) */}
      <div
        ref={pinWrapperRef}
        className="h-screen w-full flex flex-col justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 overflow-hidden relative"
      >
        {/* TOP: Unified Header Connected to the Section */}
        <div className="celebrations-header max-w-7xl mx-auto w-full shrink-0 mb-3 sm:mb-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 border-b border-[#D4AF37]/20 pb-3 sm:pb-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-5 sm:w-6 h-[1px] bg-[#D4AF37]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  CURATED PORTFOLIO
                </span>
                <span className="w-5 sm:w-6 h-[1px] bg-[#D4AF37]" />
              </div>

              <h2
                ref={headingRef}
                className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAF7F2] uppercase"
              >
                CELEBRATIONS, SERVED ROYALLY
              </h2>
            </div>

            {/* Scroll Indicator and Step Counter */}
            <div className="flex items-center justify-between md:justify-end gap-4 text-xs font-sans">
              <div className="flex items-center gap-2 text-[#D2C5BD]">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37]/90 font-medium">
                  Scroll down to explore
                </span>
                <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
              </div>

              <div className="flex items-center gap-1 font-serif text-xs sm:text-sm font-bold tracking-widest px-2.5 py-1 bg-[#1F0910] border border-[#D4AF37]/40 text-[#D4AF37]">
                <span>0{activeStep}</span>
                <span className="text-white/40">/</span>
                <span className="text-white/60">0{events.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE: Continuous Horizontal Cards Track (Controlled exclusively via vertical scroll) */}
        <div className="w-full flex-1 flex items-center overflow-hidden py-1">
          <div
            ref={trackRef}
            className="flex flex-nowrap items-stretch gap-4 sm:gap-6 lg:gap-8 pl-1 sm:pl-2 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {events.map((event, idx) => (
              <div
                key={event.step}
                id={`celebration-card-${event.step}`}
                className="group relative w-[82vw] sm:w-[380px] md:w-[420px] lg:w-[460px] xl:w-[490px] shrink-0 bg-[#1C080E] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
              >
                {/* Controlled Card Image with subtle parallax container */}
                <div className="relative h-32 sm:h-40 md:h-44 lg:h-48 overflow-hidden bg-black/40 shrink-0">
                  <img
                    src={event.image}
                    alt={`${event.title} - Royal Caterers`}
                    className="event-card-image w-full h-full object-cover scale-110 transform transition-transform duration-700 ease-out group-hover:scale-115"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C080E] via-[#1C080E]/40 to-black/30" />

                  {/* Step & Category Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#140409]/90 backdrop-blur-sm border border-[#D4AF37]/40 text-[10px] sm:text-xs font-semibold tracking-widest text-[#D4AF37]">
                    {event.step} • {event.category}
                  </div>

                  {/* Guest Capacity Tag */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2 py-0.5 bg-[#4A0E17]/90 backdrop-blur-sm border border-[#D4AF37]/30 text-[10px] sm:text-xs font-medium text-[#FAF7F2]">
                    {event.tag}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-3.5 sm:p-4 lg:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#FAF7F2] uppercase tracking-wide group-hover:text-[#F3E5AB] transition-colors leading-snug mb-1 sm:mb-2">
                      {event.title}
                    </h3>

                    <p className="font-sans text-[11px] sm:text-xs lg:text-sm text-[#C9BFB9] leading-relaxed mb-2.5 sm:mb-3 line-clamp-2 sm:line-clamp-3">
                      {event.description}
                    </p>

                    {/* Highlights Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                      {event.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[10px] sm:text-[11px] px-2 py-0.5 bg-[#140409] border border-[#D4AF37]/20 text-[#E8DFD8]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Inquiry Button */}
                  <button
                    type="button"
                    onClick={() => onPlanEvent(event.category)}
                    className="w-full py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] text-[#16050A] hover:bg-[#F3E5AB] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  >
                    <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    <span>Inquire for {event.category}</span>
                  </button>
                </div>

                {/* Subtle Card Bottom Gold Accent Line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM: Horizontal Progress Bar Indicator */}
        <div className="max-w-7xl mx-auto w-full shrink-0 pt-2 sm:pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#D4AF37]/80 uppercase tracking-widest font-medium">
            <span>Progress</span>
          </div>

          <div className="flex-1 max-w-md h-1 bg-[#2A0F15] rounded-full overflow-hidden border border-[#D4AF37]/20">
            <div
              ref={progressLineRef}
              className="h-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full transition-all duration-75"
              style={{ width: '25%' }}
            />
          </div>

          <div className="text-[10px] sm:text-xs text-[#C9BFB9] tracking-wider uppercase font-medium">
            {events[activeStep - 1]?.category}
          </div>
        </div>
      </div>
    </section>
  );
};
