import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../data/cateringData';
import { Heart, PartyPopper, Briefcase, Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeStep, setActiveStep] = useState(1);

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
        return Math.max(track.scrollWidth - viewportWidth + endPadding, 550);
      };

      // Entrance reveal when section enters viewport
      gsap.fromTo(
        pinWrapper.querySelector('.services-header'),
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
              progressLineRef.current.style.width = `${Math.min(Math.max(self.progress * 100, 4), 100)}%`;
            }
            const currentStep = Math.min(
              SERVICES.length,
              Math.max(1, Math.floor(self.progress * SERVICES.length) + 1)
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
      const images = track.querySelectorAll('.service-parallax-img');
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

      // 3. Subtle heading breathing/connection animation
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
  }, []);

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 1:
        return <PartyPopper className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 2:
        return <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#16050A] text-[#FAF7F2] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4A0E17]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 royal-pattern-dark opacity-30 pointer-events-none" />

      {/* Pinned Viewport Container (h-screen on both Mobile and Desktop) */}
      <div
        ref={pinWrapperRef}
        className="h-screen w-full flex flex-col justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 overflow-hidden relative"
      >
        {/* TOP: Section Header Connected to the Pinned View */}
        <div className="services-header max-w-7xl mx-auto w-full shrink-0 mb-3 sm:mb-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 border-b border-[#D4AF37]/20 pb-3 sm:pb-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-5 sm:w-6 h-[1px] bg-[#D4AF37]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  EXCEPTIONAL CATERING
                </span>
                <span className="w-5 sm:w-6 h-[1px] bg-[#D4AF37]" />
              </div>

              <h2
                ref={headingRef}
                className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAF7F2] uppercase"
              >
                OUR CATERING SERVICES
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
                <span className="text-white/60">0{SERVICES.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE: Continuous Horizontal Services Track (Controlled exclusively via vertical scroll) */}
        <div className="w-full flex-1 flex items-center overflow-hidden py-1">
          <div
            ref={trackRef}
            className="flex flex-nowrap items-stretch gap-4 sm:gap-6 lg:gap-8 pl-1 sm:pl-2 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative w-[82vw] sm:w-[360px] md:w-[400px] lg:w-[440px] xl:w-[470px] shrink-0 bg-[#1C080E] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
              >
                {/* Controlled Compact Image with subtle parallax */}
                <div className="relative h-32 sm:h-38 md:h-42 lg:h-46 overflow-hidden bg-black/40 shrink-0">
                  <img
                    src={service.image}
                    alt={`${service.title} catering by Royal Caterers`}
                    className="service-parallax-img w-full h-full object-cover scale-110 transform transition-transform duration-700 ease-out group-hover:scale-115"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C080E] via-[#1C080E]/40 to-black/30" />

                  {/* Service Number Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#140409]/90 backdrop-blur-sm border border-[#D4AF37]/40 text-[10px] sm:text-xs font-semibold tracking-widest text-[#FAF7F2]">
                    {service.number}
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-1.5 bg-[#140409]/90 backdrop-blur-sm border border-[#D4AF37]/40">
                    {getServiceIcon(index)}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-3.5 sm:p-4 lg:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#FAF7F2] uppercase tracking-wide group-hover:text-[#F3E5AB] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mt-0.5 mb-2">
                      {service.tagline}
                    </p>

                    <p className="font-sans text-[11px] sm:text-xs lg:text-sm text-[#C9BFB9] leading-relaxed mb-2.5 line-clamp-2 sm:line-clamp-3">
                      {service.description}
                    </p>

                    {/* Compact Key Points */}
                    <ul className="space-y-1 mb-3 sm:mb-4 text-[10px] sm:text-xs text-[#E8DFD8]">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#D4AF37] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explore Service Interaction */}
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#D4AF37] group-hover:text-[#F3E5AB] transition-colors cursor-pointer"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                  </button>
                </div>

                {/* Subtle Card Bottom Gold Accent Line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM: Horizontal Progress Bar */}
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
            {SERVICES[activeStep - 1]?.title}
          </div>
        </div>
      </div>
    </section>
  );
};
