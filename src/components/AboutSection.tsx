import React from 'react';
import { Award, Clock, MapPin, HeartHandshake } from 'lucide-react';
import { BRAND } from '../data/cateringData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#FAF7F2] text-[#1F1A1B] overflow-hidden">
      {/* Background Royal Subtle Pattern */}
      <div className="absolute inset-0 royal-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Premium Image with Decorative Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 shadow-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#FAF7F2]">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Caterers culinary buffet and wedding feast presentation"
                className="w-full h-[460px] sm:h-[540px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Overlay Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#1C080E]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#FAF7F2] flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">Authentic Old Delhi Craft</div>
                  <div className="text-sm font-serif font-medium mt-0.5">Jama Masjid Culinary Excellence</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#FAF7F2]/80">Since</div>
                  <div className="text-lg font-serif font-bold text-[#D4AF37]">2016</div>
                </div>
              </div>
            </div>

            {/* Decorative Offset Gold Frame */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37]/35 -z-0 pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 bg-[#4A0E17]/10 -z-0" />
          </div>

          {/* Right Column: Editorial Typography & Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#4A0E17] uppercase">
                WELCOME TO ROYAL CATERERS
              </span>
            </div>

            {/* Heading in Hindi / Romanized Hindi */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C080E] leading-[1.2] mb-6">
              Aapke Har Khaas Pal Ko Banayein Royal
            </h2>

            {/* Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#4A4244] leading-relaxed mb-6">
              Royal Caterers brings delicious food, elegant presentation and professional catering services together to make every celebration memorable. From weddings and private parties to corporate gatherings and special occasions, our focus is on serving quality food and creating a smooth experience for every guest.
            </p>

            {/* Brand Statement Callout Box */}
            <div className="my-4 p-6 bg-[#4A0E17] text-[#FAF7F2] border-l-4 border-[#D4AF37] shadow-md">
              <div className="text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-1">
                Our Core Philosophy
              </div>
              <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#FAF7F2]">
                WE SERVE QUALITY. WE SERVE HAPPINESS.
              </p>
            </div>

            {/* Decade Milestone Verification */}
            <div className="flex items-center gap-3 pt-2 text-[#4A0E17]">
              <div className="p-2 bg-[#D4AF37]/15 rounded-none border border-[#D4AF37]/40">
                <Clock className="w-5 h-5 text-[#4A0E17]" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-[#1C080E] block">
                  {BRAND.experience}
                </span>
                <span className="text-xs text-[#5E5254] font-medium tracking-wide">
                  {BRAND.decadeMilestone}
                </span>
              </div>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E8DFD8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-[#1C080E] uppercase tracking-wider">Old Delhi Heritage</div>
                  <div className="text-xs text-[#6B5E62] mt-0.5">Jama Masjid original recipes & flavors</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-[#1C080E] uppercase tracking-wider">Seamless Hosting</div>
                  <div className="text-xs text-[#6B5E62] mt-0.5">Warm, attentive, end-to-end hospitality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
