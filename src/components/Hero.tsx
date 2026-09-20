import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Utensils, Calendar } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMenu }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Slow background zoom
      gsap.fromTo(
        bgImageRef.current,
        { scale: 1.15 },
        { scale: 1.0, duration: 2.2, ease: 'power2.out' }
      );

      // Gold line animation
      tl.fromTo(
        goldLineRef.current,
        { width: '0%', opacity: 0 },
        { width: '120px', opacity: 1, duration: 1 }
      );

      // Badge entrance
      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );

      // Main heading staggered entrance
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 1 },
          '-=0.4'
        );
      }

      // Subtitle fade-up
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );

      // CTA fade-up
      tl.fromTo(
        ctaGroupRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const aboutSec = document.querySelector('#about');
    if (aboutSec) {
      aboutSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#16050A]"
    >
      {/* Background Image with Slow Zoom & Luxury Vignette */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 z-0 bg-cover bg-center transform will-change-transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Deep Burgundy & Charcoal Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16050A] via-[#1C080E]/75 to-[#16050A]/85" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#16050A]/50 to-[#16050A]/95" />
        <div className="absolute inset-0 royal-pattern-dark opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 sm:py-36">
        {/* Heritage Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 border border-[#D4AF37]/40 bg-[#1C080E]/80 backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#F3E5AB]">
            Delhi-6 Authentic Royal Catering • Est. Jama Masjid
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* Decorative Gold Line */}
        <div className="flex justify-center mb-6">
          <div ref={goldLineRef} className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF7F2] uppercase leading-[1.1] mb-6"
        >
          <span className="block drop-shadow-md">TASTE THAT MAKES</span>
          <span className="block mt-1 sm:mt-2 text-[#D4AF37] font-semibold tracking-wide drop-shadow-lg">
            EVERY OCCASION ROYAL
          </span>
        </h1>

        {/* Supporting Tagline / Text */}
        <p
          ref={subtitleRef}
          className="font-sans text-base sm:text-lg md:text-xl font-normal tracking-wide text-[#E8DFD8] max-w-2xl mx-auto mb-10 text-balance"
        >
          Weddings <span className="text-[#D4AF37] mx-1">•</span> Parties{' '}
          <span className="text-[#D4AF37] mx-1">•</span> Corporate Events{' '}
          <span className="text-[#D4AF37] mx-1">•</span> Special Occasions
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaGroupRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onOpenBooking}
            id="hero-cta-plan-event"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-widest text-[#1C080E] uppercase bg-[#D4AF37] hover:bg-[#F3E5AB] transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.55)] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Plan Your Event</span>
          </button>

          <button
            onClick={onExploreMenu}
            id="hero-cta-explore-menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-widest text-[#FAF7F2] uppercase bg-transparent hover:bg-white/10 border border-[#D4AF37]/60 hover:border-[#D4AF37] transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#D4AF37]" />
            <span>Explore Our Menu</span>
          </button>
        </div>

        {/* Decade Milestone Subtle Tag */}
        <div className="mt-12 text-xs tracking-[0.2em] text-[#C5A059] uppercase opacity-90">
          2016 — 2026 • A Decade of Serving Quality & Happiness
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <div className="w-6 h-9 border border-[#D4AF37]/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
