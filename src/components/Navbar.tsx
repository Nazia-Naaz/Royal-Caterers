import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Phone, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { BRAND } from '../data/cateringData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile navigation open/close
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (mobileMenuOpen && mobileNavRef.current) {
      document.body.style.overflow = 'hidden';
      if (!prefersReducedMotion) {
        gsap.fromTo(
          mobileNavRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
        );
        if (mobileLinksRef.current) {
          gsap.fromTo(
            mobileLinksRef.current.children,
            { opacity: 0, x: -15 },
            { opacity: 1, x: 0, stagger: 0.05, duration: 0.3, ease: 'power2.out', delay: 0.1 }
          );
        }
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const mobileNavLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 75;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#16050A]/95 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b border-[#D4AF37]/30'
          : 'bg-gradient-to-b from-[#16050A]/95 via-[#16050A]/80 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* DESKTOP HEADER (LOGO ON FAR LEFT, ALL NAV ITEMS + BOOK EVENT ON FAR RIGHT) */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* FAR LEFT: Royal Caterers Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="brand-logo flex items-center gap-3 focus:outline-none transition-transform duration-300 hover:scale-105 shrink-0"
            title="Royal Caterers - Home"
          >
            <img
              src="/assets/logo.png"
              alt="Royal Caterers Logo"
              className="h-12 xl:h-14 w-auto max-w-[65px] object-contain rounded-full shadow-[0_3px_15px_rgba(0,0,0,0.4)] border border-[#D4AF37]/40 bg-[#F7F0E6] p-0.5 transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-lg xl:text-xl font-bold text-[#FAF7F2] uppercase leading-tight">
                Royal Caterers
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#D4AF37] uppercase font-medium">
                Taste • Quality • Trust
              </span>
            </div>
          </a>

          {/* FAR RIGHT: Navigation Links + Book Event Button */}
          <div className="flex items-center space-x-6 xl:space-x-8">
            <nav className="flex items-center space-x-5 xl:space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs xl:text-sm font-medium tracking-[0.18em] uppercase text-[#FAF7F2]/90 hover:text-[#D4AF37] transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Compact Book Event Button */}
            <button
              onClick={onOpenBooking}
              id="navbar-cta-button"
              className="inline-flex items-center justify-center px-4 xl:px-5 py-2 text-xs font-semibold tracking-[0.18em] text-[#16050A] uppercase transition-all duration-300 bg-[#D4AF37] hover:bg-[#F3E5AB] hover:shadow-[0_0_18px_rgba(212,175,55,0.45)] cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Book Event</span>
            </button>
          </div>
        </div>

        {/* MOBILE HEADER (LOGO ON LEFT, HAMBURGER ON RIGHT) */}
        <div className="flex lg:hidden items-center justify-between w-full">
          {/* Logo on Left */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="brand-logo flex items-center gap-2.5 focus:outline-none"
          >
            <img
              src="/assets/logo.png"
              alt="Royal Caterers Logo"
              className="h-10 sm:h-11 w-auto max-w-[48px] object-contain rounded-full shadow-md border border-[#D4AF37]/50 bg-[#F7F0E6] p-0.5"
            />
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.15em] text-sm sm:text-base font-bold text-[#FAF7F2] uppercase leading-none">
                Royal Caterers
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase font-medium mt-0.5">
                Taste • Quality • Trust
              </span>
            </div>
          </a>

          {/* Right Mobile Actions: Book CTA + Hamburger */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-[#16050A] uppercase bg-[#D4AF37] hover:bg-[#F3E5AB] transition-colors cursor-pointer"
            >
              Book Event
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              id="navbar-mobile-menu-toggle"
              aria-label="Open navigation menu"
              className="p-2 text-[#FAF7F2] hover:text-[#D4AF37] focus:outline-none cursor-pointer border border-[#D4AF37]/30 bg-white/5"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN RESPONSIVE MOBILE NAVIGATION PANEL */}
      {mobileMenuOpen && (
        <div
          ref={mobileNavRef}
          id="mobile-navigation-panel"
          className="fixed inset-0 z-50 bg-[#140409]/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-8 max-h-[100vh] overflow-y-auto box-border"
          style={{ boxSizing: 'border-box' }}
        >
          {/* Top Row: Brand & Obvious Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/25 shrink-0">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/logo.png"
                alt="Royal Caterers Logo"
                className="h-10 w-10 rounded-full object-contain border border-[#D4AF37]/50 bg-[#F7F0E6] p-0.5"
              />
              <span className="font-serif tracking-[0.2em] text-base font-bold text-[#FAF7F2] uppercase">
                ROYAL CATERERS
              </span>
            </div>

            {/* Clearly Visible Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              id="mobile-menu-close-button"
              aria-label="Close mobile navigation"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#4A0E17] text-[#FAF7F2] hover:text-[#D4AF37] border border-[#D4AF37]/40 text-xs uppercase tracking-wider font-semibold cursor-pointer transition-colors"
            >
              <span>Close</span>
              <X className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* Menu Links */}
          <div ref={mobileLinksRef} className="py-6 flex flex-col space-y-3 sm:space-y-4 my-auto">
            {mobileNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg sm:text-xl font-serif font-medium tracking-wider text-[#FAF7F2] hover:text-[#D4AF37] py-1.5 border-b border-white/5 flex items-center justify-between transition-colors group"
              >
                <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]/50 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3 shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 text-center text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#16050A] uppercase bg-[#D4AF37] hover:bg-[#F3E5AB] transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>

            <a
              href={`tel:${BRAND.phone1Raw}`}
              className="w-full py-2.5 text-center text-xs text-[#E8DFD8] hover:text-[#D4AF37] bg-white/5 border border-white/10 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Direct Call: {BRAND.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
