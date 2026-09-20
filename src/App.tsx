import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MenuSection } from './components/MenuSection';
import { ExperienceFeatures } from './components/ExperienceFeatures';
import { EventsShowcase } from './components/EventsShowcase';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('Weddings');
  const autoPopupTriggered = useRef(false);

  // Auto-open the Book Event modal 1.2 seconds after website initial load
  useEffect(() => {
    let hasShown = false;
    try {
      hasShown = sessionStorage.getItem('royal_caterers_auto_popup_shown') === 'true';
    } catch {
      // In case iframe sandboxing restricts sessionStorage
      hasShown = autoPopupTriggered.current;
    }

    if (!hasShown && !autoPopupTriggered.current) {
      autoPopupTriggered.current = true;
      const timer = setTimeout(() => {
        setBookingModalOpen(true);
        try {
          sessionStorage.setItem('royal_caterers_auto_popup_shown', 'true');
        } catch {
          // ignore storage error
        }
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenBooking = (eventType = 'Weddings') => {
    setSelectedEventType(eventType);
    setBookingModalOpen(true);
  };

  const handleExploreMenu = () => {
    const el = document.querySelector('#menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscussMenu = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking('Custom Menu Consultation');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F1A1B] overflow-x-hidden selection:bg-[#4A0E17] selection:text-[#F3E5AB]">
      {/* Sticky Luxury Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking('General Inquiry')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking('Grand Event')}
          onExploreMenu={handleExploreMenu}
        />

        {/* About / Intro Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* Dedicated Restaurant-Style Menu Section */}
        <MenuSection onDiscussMenu={handleDiscussMenu} />

        {/* Features / Experience Commitment */}
        <ExperienceFeatures />

        {/* Events Showcase (GSAP Horizontal on Desktop, Stacked on Mobile) */}
        <EventsShowcase onPlanEvent={(category) => handleOpenBooking(category)} />

        {/* Gallery with Filters and Lightbox */}
        <GallerySection />

        {/* Why Choose Royal Caterers (Core Values) */}
        <WhyChooseUs />

        {/* Client Reviews / Testimonial Slider */}
        <ReviewsSection />

        {/* High-Impact Full Width CTA Banner */}
        <CtaBanner />

        {/* Contact Section, Map & Enquiry Form */}
        <ContactSection />
      </main>

      {/* Royal Caterers Footer */}
      <Footer />

      {/* Floating Quick Action Contacts */}
      <FloatingActions onOpenBooking={() => handleOpenBooking('Instant Booking')} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialEventType={selectedEventType}
      />
    </div>
  );
}
