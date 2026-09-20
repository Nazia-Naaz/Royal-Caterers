import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/cateringData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF7F2] text-[#1F1A1B] relative overflow-hidden">
      <div className="absolute inset-0 royal-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#4A0E17]">
              GENUINE EXPERIENCES
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C080E] uppercase mb-4">
            WHAT OUR CLIENTS SAY
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#554A4D] leading-relaxed">
            Words of gratitude and trust from hosts across Delhi and the NCR region.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-white border border-[#D4AF37]/35 shadow-2xl p-8 sm:p-12 lg:p-16">
          {/* Decorative Quote Icon */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-[#4A0E17]/10">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24" />
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-6 text-[#D4AF37]">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          {/* Review Quote */}
          <p className="font-serif text-xl sm:text-2xl text-[#1C080E] italic leading-relaxed mb-8 relative z-10">
            "{current.quote}"
          </p>

          {/* Author Details */}
          <div className="pt-6 border-t border-[#E8DFD8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C080E]">
                {current.name}
              </h3>
              <div className="text-xs text-[#5E5255] font-medium mt-0.5">
                <span>{current.role}</span>
                <span className="mx-1.5 text-[#D4AF37]">•</span>
                <span className="text-[#4A0E17] font-semibold">{current.event}</span>
              </div>
              <div className="text-[11px] text-[#7E7275] mt-0.5">
                {current.location}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-[#D4AF37]/50 hover:border-[#4A0E17] hover:bg-[#FAF7F2] flex items-center justify-center text-[#1C080E] transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-semibold text-[#6E6265] tracking-widest min-w-[40px] text-center">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>

              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#D4AF37]/50 hover:border-[#4A0E17] hover:bg-[#FAF7F2] flex items-center justify-center text-[#1C080E] transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-[#4A0E17]' : 'w-2 bg-[#D4AF37]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
