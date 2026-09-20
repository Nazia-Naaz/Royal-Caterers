export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface MenuItem {
  name: string;
  description: string;
  dietary?: 'Veg' | 'Non-Veg' | 'Chef Special' | 'Popular';
  highlight?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'WEDDINGS' | 'FOOD' | 'BUFFET' | 'EVENTS';
  image: string;
  subtitle: string;
}

export interface ReelItem {
  id: string;
  label: string;
  title: string;
  thumbnail: string;
  views?: string;
  duration?: string;
  instagramUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  event: string;
  location: string;
  rating: number;
  quote: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  mealType?: string;
  message: string;
}
