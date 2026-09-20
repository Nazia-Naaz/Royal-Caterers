import React, { useState } from 'react';
import { BRAND } from '../data/cateringData';
import { Phone, MessageCircle, Instagram, MapPin, Send, CheckCircle2, Clock, Navigation, ExternalLink } from 'lucide-react';
import { BookingFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    eventType: 'Weddings',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Catering Enquiry for Royal Caterers*%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A*Event Type:* ${encodeURIComponent(formData.eventType)}%0A*Event Date:* ${encodeURIComponent(formData.eventDate || 'TBD')}%0A*Guests:* ${encodeURIComponent(formData.guestCount || 'TBD')}%0A*Message:* ${encodeURIComponent(formData.message || 'None')}`;
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] text-[#1F1A1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#4A0E17]">
              START A CONVERSATION
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C080E] uppercase mb-4">
            LET'S MAKE YOUR EVENT ROYAL
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#554A4D] leading-relaxed">
            Reach out to our master culinary team to discuss dates, bespoke menu tastings, and custom banquet setups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information, Address & Quick Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Brand Address Card */}
              <div className="p-6 sm:p-8 bg-white border border-[#D4AF37]/40 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#4A0E17] text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C5A059] block">
                      Main Office & Kitchen Location
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C080E] uppercase tracking-wide">
                      {BRAND.name}
                    </h3>
                  </div>
                </div>

                {/* Clearly Highlighted Address Details */}
                <div className="p-4 bg-[#FAF7F2] border border-[#D4AF37]/30 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#4A0E17] mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span>Official Address:</span>
                  </div>
                  <p className="font-sans text-sm sm:text-base font-semibold text-[#1C080E] leading-relaxed">
                    Shop No. 3869, Ground Floor, Gali Hospital Wali, Kucha Battalpur Husain, Jama Masjid, Delhi-6, Delhi, India
                  </p>
                  <p className="text-xs text-[#7A6E72] mt-2 font-medium">
                    Landmark: Jama Masjid, Old Delhi - 110006
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#4A0E17] font-medium mb-5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Open for Event Consultations & Tastings 7 Days a Week</span>
                </div>

                {/* View on Google Maps & Get Directions Action Buttons */}
                <div className="pt-3 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4A0E17] hover:bg-[#60131e] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>View on Google Maps</span>
                  </a>
                  <a
                    href={BRAND.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#D4AF37]/50 text-[#1C080E] text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:border-[#D4AF37] cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#4A0E17]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Direct Calling & Contact Links */}
              <div className="p-8 bg-white border border-[#D4AF37]/40 shadow-lg space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#1C080E] uppercase tracking-wider mb-2">
                  Direct Inquiries
                </h4>

                <div className="space-y-3">
                  <a
                    href={`tel:${BRAND.phone1Raw}`}
                    className="flex items-center justify-between p-3.5 bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#D4AF37]/30 text-[#1C080E] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#4A0E17] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#4A0E17] transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-sm block text-[#1C080E]">{BRAND.phone1}</span>
                        <span className="text-[10px] text-[#7A6E72] uppercase tracking-wider block">Primary Catering Helpline</span>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[#4A0E17] font-bold group-hover:text-[#D4AF37] transition-colors">Call Now</span>
                  </a>

                  <a
                    href={`tel:${BRAND.phone2Raw}`}
                    className="flex items-center justify-between p-3.5 bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#D4AF37]/30 text-[#1C080E] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#4A0E17] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#4A0E17] transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-sm block text-[#1C080E]">{BRAND.phone2}</span>
                        <span className="text-[10px] text-[#7A6E72] uppercase tracking-wider block">Secondary Support Line</span>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[#4A0E17] font-bold group-hover:text-[#D4AF37] transition-colors">Call Now</span>
                  </a>

                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#165B2E] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span className="font-medium text-sm">WhatsApp Inquiry</span>
                    </div>
                    <span className="text-xs uppercase tracking-wider font-bold">Chat Live</span>
                  </a>

                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-gradient-to-r from-[#833ab4]/10 to-[#fd1d1d]/10 hover:opacity-90 border border-[#fd1d1d]/30 text-[#833ab4] transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <Instagram className="w-4 h-4 text-[#E1306C]" />
                      <span className="font-medium text-sm">{BRAND.instagramHandle}</span>
                    </div>
                    <span className="text-xs uppercase tracking-wider font-bold">Follow</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Embed / Button */}
              <div className="border border-[#D4AF37]/40 overflow-hidden shadow-lg bg-white">
                <div className="p-3 bg-[#FAF7F2] border-b border-[#D4AF37]/20 flex items-center justify-between text-xs font-semibold text-[#1C080E]">
                  <span className="truncate pr-2">Location: Jama Masjid, Delhi-6</span>
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A0E17] hover:text-[#D4AF37] font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 shrink-0"
                  >
                    <span>View on Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
                <div className="relative group">
                  <iframe
                    title="Royal Caterers Jama Masjid Location"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent('Royal Caterers, Shop No. 3869, Ground Floor, Gali Hospital Wali, Kucha Battalpur Husain, Jama Masjid, Delhi-6, Delhi, India')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="190"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-3 bg-[#FAF7F2] border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-2">
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#D4AF37]/40 text-[#1C080E] text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#4A0E17]" />
                    <span>View on Google Maps</span>
                  </a>
                  <a
                    href={BRAND.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-[#4A0E17] hover:bg-[#60131e] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-white border border-[#D4AF37]/40 shadow-2xl relative">
              <div className="mb-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-1">
                  Online Consultation
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C080E]">
                  Request an Event Proposal
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#6A5E62] mt-1">
                  Fill in your requirements below. Our catering director will contact you with custom menu options and pricing.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#FAF7F2] border border-[#D4AF37] text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                  <h4 className="font-serif text-2xl font-bold text-[#1C080E]">
                    Thank You, {formData.name || 'Valued Guest'}!
                  </h4>
                  <p className="font-sans text-sm text-[#4A4244] max-w-md mx-auto">
                    Your enquiry for <strong>{formData.eventType}</strong> has been received. Our team will call you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs font-semibold tracking-wider uppercase"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward via WhatsApp for Instant Response</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          eventType: 'Weddings',
                          eventDate: '',
                          guestCount: '',
                          message: '',
                        });
                      }}
                      className="text-xs text-[#4A0E17] hover:underline"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#1C080E] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Khan"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D4AF37]/40 focus:border-[#4A0E17] focus:bg-white text-[#1C080E] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#1C080E] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 92131 52935"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D4AF37]/40 focus:border-[#4A0E17] focus:bg-white text-[#1C080E] text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Event Type */}
                    <div>
                      <label htmlFor="contact-event-type" className="block text-xs font-semibold uppercase tracking-wider text-[#1C080E] mb-2">
                        Event Type *
                      </label>
                      <select
                        id="contact-event-type"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D4AF37]/40 focus:border-[#4A0E17] focus:bg-white text-[#1C080E] text-sm focus:outline-none transition-colors"
                      >
                        <option value="Weddings">Weddings</option>
                        <option value="Parties">Parties / Birthdays</option>
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Special Events">Special Events</option>
                        <option value="Walima / Reception">Walima / Reception</option>
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label htmlFor="contact-event-date" className="block text-xs font-semibold uppercase tracking-wider text-[#1C080E] mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="contact-event-date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D4AF37]/40 focus:border-[#4A0E17] focus:bg-white text-[#1C080E] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label htmlFor="contact-guest-count" className="block text-xs font-semibold uppercase tracking-wider text-[#1C080E] mb-2">
                        Number of Guests *
                      </label>
                      <input
                        type="text"
                        id="contact-guest-count"
                        name="guestCount"
                        required
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="e.g. 500 Guests"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D4AF37]/40 focus:border-[#4A0E17] focus:bg-white text-[#1C080E] text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#1C080E] mb-2">
                      Specific Requirements / Preferred Menu Dishes
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your venue, special preferences (e.g. Dum Biryani, Galouti Kebabs, live counters, pure vegetarian counters, timings)..."
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D4AF37]/40 focus:border-[#4A0E17] focus:bg-white text-[#1C080E] text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      id="contact-form-submit"
                      className="w-full sm:flex-1 py-4 px-6 text-xs sm:text-sm font-semibold tracking-widest text-[#FAF7F2] uppercase bg-[#4A0E17] hover:bg-[#34070E] transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                      <span>{sending ? 'Submitting...' : 'Submit Enquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto py-4 px-6 text-xs sm:text-sm font-semibold tracking-widest text-[#FAF7F2] uppercase bg-[#25D366] hover:bg-[#1EBE5B] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Fast-Track</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
