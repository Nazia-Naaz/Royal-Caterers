import React, { useEffect, useRef } from 'react';
import { EXPERIENCE_FEATURES } from '../data/cateringData';
import { Sparkles, Utensils, ShieldCheck, Crown, Users, ClipboardList } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#D4AF37]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <ClipboardList className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#1F0910] text-[#FAF7F2] relative overflow-hidden border-y border-[#D4AF37]/20"
    >
      <div className="absolute inset-0 royal-pattern-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4AF37]">
              OUR COMMITMENT
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2] uppercase leading-tight">
            QUALITY YOU CAN TASTE.
            <span className="block text-[#D4AF37] mt-1 sm:mt-2">
              SERVICE YOU CAN TRUST.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* 6 Features Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {EXPERIENCE_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#16050A]/70 border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#4A0E17]/80 border border-[#D4AF37]/40 mb-6 group-hover:scale-110 transition-transform">
                {getFeatureIcon(feature.icon)}
              </div>

              <h3 className="font-serif text-xl font-bold text-[#FAF7F2] mb-3 group-hover:text-[#F3E5AB] transition-colors">
                {feature.title}
              </h3>

              <p className="font-sans text-sm text-[#C4B7B0] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
