import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, MessageCircle, CheckCircle2, Crown, Send } from 'lucide-react';
import gsap from 'gsap';
import { BRAND } from '../data/cateringData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialEventType = 'Weddings',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    eventType: initialEventType,
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync initialEventType when changed
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      eventType: initialEventType || 'Weddings',
    }));
  }, [initialEventType]);

  // GSAP animation for opening & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion && backdropRef.current && modalRef.current) {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: 'power2.out' }
        );
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && backdropRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          onClose();
          setSubmitted(false);
        },
      });
    } else {
      onClose();
      setSubmitted(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = `*Event Booking Request for Royal Caterers*%0A%0A*Name:* ${encodeURIComponent(
      formData.name || 'Not provided'
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone || 'Not provided'
    )}%0A*Event Type:* ${encodeURIComponent(
      formData.eventType
    )}%0A*Date:* ${encodeURIComponent(
      formData.eventDate || 'TBD'
    )}%0A*Estimated Guests:* ${encodeURIComponent(
      formData.guestCount || 'TBD'
    )}%0A*Notes:* ${encodeURIComponent(formData.message || 'None')}`;
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      id="inquiry-modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6"
      style={{ boxSizing: 'border-box' }}
    >
      {/* Centered responsive modal container */}
      <div
        ref={modalRef}
        id="inquiry-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#1C080E] text-[#FAF7F2] border border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-sm p-4 sm:p-6 md:p-8 flex flex-col"
        style={{
          width: 'min(92vw, 600px)',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxSizing: 'border-box',
        }}
      >
        {/* Clearly Visible Top-Right Close Button */}
        <button
          onClick={handleClose}
          id="inquiry-modal-close-button"
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1 px-2.5 py-1 bg-[#2C0D15] hover:bg-[#4A0E17] text-[#D4AF37] hover:text-[#F3E5AB] border border-[#D4AF37]/50 rounded-sm text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
        >
          <span className="hidden sm:inline">Close</span>
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5 sm:mb-6 pr-8 sm:pr-0">
          <div className="inline-flex items-center justify-center p-2 bg-[#2D0D15] border border-[#D4AF37]/40 text-[#D4AF37] mb-2 rounded-sm">
            <Crown className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#FAF7F2] uppercase tracking-wide">
            Book Your Royal Event
          </h3>
          <p className="text-[11px] sm:text-xs text-[#C5B8B1] mt-1 max-w-md mx-auto">
            Share your celebration plans. Our team will tailor a bespoke royal culinary experience for your guests.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2]">
              Inquiry Received Successfully!
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#D1C6C0] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#FAF7F2]">{formData.name}</strong>. Our head catering coordinator will call you at <strong className="text-[#D4AF37]">{formData.phone}</strong> shortly to discuss menus.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp Fast-Track</span>
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 bg-[#2C0D15] hover:bg-[#3D121D] text-[#FAF7F2] border border-[#D4AF37]/40 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Desktop 2-column for Name & Phone, Mobile single column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label
                  htmlFor="modal-name"
                  className="block text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Tariq Khan"
                  className="w-full box-border px-3.5 py-2.5 bg-[#140409] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#FAF7F2] placeholder-[#8A7C75] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  className="block text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 92131 52935"
                  className="w-full box-border px-3.5 py-2.5 bg-[#140409] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#FAF7F2] placeholder-[#8A7C75] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
            </div>

            {/* Desktop 2-column for Event Type & Guests, Mobile single column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label
                  htmlFor="modal-eventType"
                  className="block text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1"
                >
                  Event Type *
                </label>
                <select
                  id="modal-eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full box-border px-3.5 py-2.5 bg-[#140409] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="Weddings">Weddings</option>
                  <option value="Parties">Parties / Birthdays</option>
                  <option value="Corporate Events">Corporate Events</option>
                  <option value="Special Events">Special Events</option>
                  <option value="Walima / Reception">Walima / Reception</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="modal-guestCount"
                  className="block text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1"
                >
                  Number of Guests *
                </label>
                <input
                  type="text"
                  id="modal-guestCount"
                  name="guestCount"
                  required
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="e.g. 500 Guests"
                  className="w-full box-border px-3.5 py-2.5 bg-[#140409] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#FAF7F2] placeholder-[#8A7C75] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
            </div>

            {/* Event Date */}
            <div>
              <label
                htmlFor="modal-eventDate"
                className="block text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1"
              >
                Event Date
              </label>
              <input
                type="date"
                id="modal-eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full box-border px-3.5 py-2.5 bg-[#140409] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="modal-message"
                className="block text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1"
              >
                Message / Preferred Dishes
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share any special preferences (e.g., Dum Biryani, Galouti Kebabs, Live Chaat counters, dietary requests)..."
                className="w-full box-border px-3.5 py-2 bg-[#140409] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#FAF7F2] placeholder-[#8A7C75] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
              />
            </div>

            {/* Submit & WhatsApp buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                id="modal-send-inquiry-button"
                className="flex-1 py-3 px-4 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#16050A] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                id="modal-whatsapp-button"
                className="py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
