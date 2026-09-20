import { ServiceItem, MenuCategory, GalleryItem, ReelItem, TestimonialItem } from '../types';

export const BRAND = {
  name: 'Royal Caterers',
  tagline: 'Taste That Makes Every Occasion Royal',
  secondaryTagline: 'We Serve Quality. We Serve Happiness.',
  hindiTagline: 'Aapke Har Khaas Pal Ko Banayein Royal',
  phone1: '92131 52935',
  phone2: '92101 88163',
  phone1Raw: '+919213152935',
  phone2Raw: '+919210188163',
  whatsappNumber: '919213152935',
  whatsappUrl: 'https://wa.me/919213152935?text=Hello%20Royal%20Caterers%2C%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20my%20upcoming%20event.',
  address: 'Shop No. 3869, Ground Floor, Gali Hospital Wali, Kucha Battalpur Husain, Jama Masjid, Delhi-6, Delhi, India',
  landmark: 'Jama Masjid, Old Delhi - 110006',
  instagramUrl: 'https://www.instagram.com/royal_caterers61/',
  instagramHandle: '@royal_caterers61',
  experience: '2016 — 2026',
  decadeMilestone: 'A Decade of Serving Quality & Happiness',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Royal+Caterers%2C+Shop+No.+3869%2C+Ground+Floor%2C+Gali+Hospital+Wali%2C+Kucha+Battalpur+Husain%2C+Jama+Masjid%2C+Delhi-6%2C+Delhi%2C+India',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Royal+Caterers%2C+Shop+No.+3869%2C+Ground+Floor%2C+Gali+Hospital+Wali%2C+Kucha+Battalpur+Husain%2C+Jama+Masjid%2C+Delhi-6%2C+Delhi%2C+India',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'weddings',
    number: '01',
    title: 'WEDDINGS',
    tagline: 'Grand Celebrations with Regal Hospitality',
    description: 'Grand wedding catering with delicious menus, elegant presentation and professional service designed to turn your big day into an unforgettable feast.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    features: ['Custom Royal Thali & Buffet', 'Live Tawa & Barbeque Counters', 'Traditional Shahi Dastarkhwan', 'Attired Service Staff'],
  },
  {
    id: 'parties',
    number: '02',
    title: 'PARTIES',
    tagline: 'Birthdays, Anniversaries & Intimate Gatherings',
    description: 'Catering for birthdays, anniversaries, family gatherings and private celebrations with flexible menus tailored for joy, warmth, and flavor.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    features: ['Chaat & Street Food Live Stalls', 'Curated Starter Platters', 'Bespoke Dessert Stations', 'Compact Setups & Full Support'],
  },
  {
    id: 'corporate-events',
    number: '03',
    title: 'CORPORATE EVENTS',
    tagline: 'Punctual, Refined & Flawlessly Executed',
    description: 'Professional catering for meetings, conferences, office events and corporate gatherings with hygienic, timely, and executive-level culinary setups.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    features: ['Hi-Tea & Conference Buffets', 'Express Executive Lunch Boxes', 'Formal Plated Service', 'Sanitized & Certified Setup'],
  },
  {
    id: 'special-events',
    number: '04',
    title: 'SPECIAL EVENTS',
    tagline: 'Bespoke Menus for Every Cultural Occasion',
    description: 'Customized catering solutions for different celebrations, festivities, Eid gatherings, engagement ceremonies, and milestones.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    features: ['Traditional Dum Biryani Cauldrons', 'Custom Regional Specialties', 'Beverage & Mocktail Bars', 'End-to-End Event Planning'],
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'welcome-drinks',
    name: 'Welcome Drinks',
    items: [
      { name: 'Shahi Rooh Afza Sharbat with Chia & Basil', description: 'Old Delhi traditional rose nectar infused with crushed basil seeds, mint, and cold milk or lemon.', dietary: 'Veg', highlight: 'Signature Heritage' },
      { name: 'Kesar Badam Pista Thandai', description: 'Slow-simmered rich saffron milk blended with crushed almonds, pistachios, fennel, and green cardamom.', dietary: 'Veg', highlight: 'Royal Welcome' },
      { name: 'Aam Panna & Pudina Cooler', description: 'Charred raw mango cooler spiced with roasted cumin, black salt, and hand-plucked garden mint.', dietary: 'Veg' },
      { name: 'Blue Curacao Mojito & Tropical Mocktails', description: 'Refreshing sparkling fruit coolers topped with citrus zest and crushed ice for contemporary appeal.', dietary: 'Veg' },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    items: [
      { name: 'Galouti Kebab on Mini Mughlai Paratha', description: 'Melt-in-the-mouth smoked minced mutton kebabs scented with potli masala, served over ghee-crisped coin parathas.', dietary: 'Chef Special', highlight: 'Signature' },
      { name: 'Murgh Malai Tikka', description: 'Succulent boneless chicken morsels marinated in rich cream, processed cheese, cashew paste, and mild spices, chargrilled to perfection.', dietary: 'Non-Veg', highlight: 'Popular' },
      { name: 'Paneer Angara Tikka', description: 'Cubes of fresh cottage cheese marinated in hung curd, Kashmiri deghi mirch, and mustard oil, finished in charcoal tandoor.', dietary: 'Veg' },
      { name: 'Crispy Dahi Ke Sholay', description: 'Spiced hung curd and bell pepper stuffed golden pockets with mint coriander chutney.', dietary: 'Veg' },
      { name: 'Mutton Seekh Kebab Shahi', description: 'Skewered minced meat blended with brown onions, aromatic herbs, and royal spices, roasted over red-hot coals.', dietary: 'Non-Veg' },
      { name: 'Corn & Cheese Cigar Rolls', description: 'Delicate crisp spring wrappers filled with sweet corn kernels and melted mozzarella with sweet chilli dip.', dietary: 'Veg' },
    ],
  },
  {
    id: 'main-course',
    name: 'Main Course',
    items: [
      { name: 'Purani Dilli Shahi Mutton Korma', description: 'The legendary Jama Masjid style slow-cooked mutton in a rich velvety gravy of fried onions, yogurt, and aromatic kewra essence.', dietary: 'Chef Special', highlight: 'Legacy Recipe' },
      { name: 'Murgh Changezi Classic', description: 'Rich roasted chicken simmered in a luscious tomato, milk, and onion gravy infused with dried fenugreek and whole spices.', dietary: 'Non-Veg', highlight: 'Delhi-6 Classic' },
      { name: 'Dal Makhani Shahi Degh', description: 'Black lentils slow-cooked overnight with churned white butter, cream, and sun-dried tomatoes over slow charcoal heat.', dietary: 'Veg', highlight: 'Rich & Velvety' },
      { name: 'Paneer Lababdar', description: 'Fresh paneer batons simmered in a creamy, mildly spiced tomato-cashew reduction finished with grated paneer and kasuri methi.', dietary: 'Veg' },
      { name: 'Dum Ka Murgh (Hyderabadi Style)', description: 'Slow-pot sealed chicken enriched with poppy seeds, roasted cashews, and golden brown fried onions.', dietary: 'Non-Veg' },
      { name: 'Subz Miloni Handi', description: 'Seasonal garden vegetables, bell peppers, and baby corn tossed in spinach and cashew puree.', dietary: 'Veg' },
    ],
  },
  {
    id: 'rice-biryani',
    name: 'Rice & Biryani',
    items: [
      { name: 'Royal Dum Gosht Biryani', description: 'Aged long-grain Basmati rice layered with fragrant marinated meat, saffron milk, brown onions, and pure desi ghee, sealed in clay degh.', dietary: 'Chef Special', highlight: 'Signature Dish' },
      { name: 'Murgh Awadhi Dum Biryani', description: 'Fragrant chicken biryani slow-steamed under purdah dough with aromatic ittar, rose water, and whole garam masalas.', dietary: 'Non-Veg', highlight: 'Wedding Favorite' },
      { name: 'Subz Dum Biryani', description: 'Seasonal mixed vegetables, green peas, and paneer cubes infused with saffron, mint, and whole spices, served with burani raita.', dietary: 'Veg' },
      { name: 'Zafrani Pulao with Fried Cashews & Raisins', description: 'Aromatic Basmati rice tossed in clarified butter, whole cardamoms, fried nuts, and saffron threads.', dietary: 'Veg' },
    ],
  },
  {
    id: 'breads',
    name: 'Breads',
    items: [
      { name: 'Khamiri Roti (Jama Masjid Specialty)', description: 'Traditional fermented Old Delhi leavened bread, pillowy soft with a crisp golden crust straight from clay tandoor.', dietary: 'Veg', highlight: 'Authentic Delhi-6' },
      { name: 'Sheermal (Sweet Saffron Flatbread)', description: 'Traditional royal bread kneaded with pure milk, saffron, and ghee, dusted with sesame seeds.', dietary: 'Veg', highlight: 'Regal Feast' },
      { name: 'Butter Naan & Garlic Coriander Naan', description: 'Classic tandoor-baked refined flour flatbreads brushed generously with dairy butter.', dietary: 'Veg' },
      { name: 'Lachha Paratha & Pudina Paratha', description: 'Multi-layered flaky whole wheat bread cooked golden with butter and mint flakes.', dietary: 'Veg' },
    ],
  },
  {
    id: 'indo-chinese',
    name: 'Indo-Chinese',
    items: [
      { name: 'Chilli Chicken Gravy / Dry', description: 'Crisp chicken cubes tossed with diced capsicum, onions, dark soy, and green chillies.', dietary: 'Non-Veg' },
      { name: 'Chilli Paneer Hakka Style', description: 'Tender cottage cheese cubes wok-tossed with ginger, garlic, bell peppers, and oriental spices.', dietary: 'Veg' },
      { name: 'Vegetable Hakka Noodles', description: 'Wok-tossed noodles with julienned vegetables, cabbage, spring onions, and white pepper.', dietary: 'Veg' },
      { name: 'Honey Chilli Crispy Potato', description: 'Golden potato fingers glazed in roasted sesame seeds, honey, and fiery chilli garlic sauce.', dietary: 'Veg' },
    ],
  },
  {
    id: 'live-counters',
    name: 'Live Counters',
    items: [
      { name: 'Live Purani Dilli Chaat Station', description: 'Dahi Bhalla, Golgappe with 4 flavored waters (Mint, Hing, Sweet Tamarind, Raw Mango), Papdi Chaat, and Aloo Tikki fried fresh.', dietary: 'Veg', highlight: 'Interactive Stall' },
      { name: 'Live Tawa Tandoor & Kebabs Counter', description: 'Fresh hot kebabs, Rumali Roti tossed live in the air, and sizzled seekh skewers right before guests.', dietary: 'Chef Special', highlight: 'Guest Favorite' },
      { name: 'Live Pasta & Risotto Station', description: 'Choice of Penne and Fusilli tossed in Arrabbiata, Alfredo, or Creamy Pesto sauce with custom toppings.', dietary: 'Veg' },
      { name: 'Live Jalebi & Rabri Kadai', description: 'Crisp hot saffron jalebis piped directly into bubbling desi ghee, served with chilled malai rabri.', dietary: 'Veg', highlight: 'Crowd Favorite' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { name: 'Shahi Tukda Old Delhi Royal', description: 'Ghee-fried bread soaked in fragrant saffron-cardamom syrup, crowned with thick condensed rabri, silver vark, and pistachios.', dietary: 'Chef Special', highlight: 'Heritage Delicacy' },
      { name: 'Moong Dal Halwa in Pure Desi Ghee', description: 'Rich, slow-roasted split yellow lentils with mawa, roasted cashews, and saffron simmered for hours.', dietary: 'Veg', highlight: 'Winter Classic' },
      { name: 'Kesari Phirni in Clay Earthen Pots', description: 'Creamy ground rice pudding chilled in traditional sakora earthenware pots, scented with kewra and crushed nuts.', dietary: 'Veg' },
      { name: 'Hot Gulab Jamun with Ice Cream Pair', description: 'Golden mawa dumplings soaked in green cardamom syrup paired with scoops of Madagascar vanilla.', dietary: 'Veg' },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Grand Wedding Shahi Buffet Setup',
    category: 'WEDDINGS',
    subtitle: 'Lavish copper chafing dishes, floral chandeliers, and royal hospitality',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g2',
    title: 'Royal Dum Gosht Biryani Degh',
    category: 'FOOD',
    subtitle: 'Slow-cooked in sealed heavy copper vessels with pure saffron & ghee',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g3',
    title: 'Live Tawa Kebab & Starters Counter',
    category: 'BUFFET',
    subtitle: 'Sizzling Seekh, Malai Tikka and roomali rotis made fresh live',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g4',
    title: 'Elegant Banquet Table Arrangement',
    category: 'EVENTS',
    subtitle: 'Bespoke glassware, cutlery, and thematic floral centerpieces',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g5',
    title: 'Authentic Galouti Kebabs with Mint Dip',
    category: 'FOOD',
    subtitle: 'Purani Dilli culinary secrets perfected over generations',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g6',
    title: 'Exotic Mocktails & Welcome Bar',
    category: 'BUFFET',
    subtitle: 'Refreshing artisanal drinks presented with flair and style',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g7',
    title: 'Royal Dessert Display with Shahi Tukda',
    category: 'FOOD',
    subtitle: 'Sweet delicacies presented in traditional silver and brass tableware',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g8',
    title: 'Vibrant Outdoor Sangeet Celebration',
    category: 'WEDDINGS',
    subtitle: 'Flawless catering execution under open fairy light canopies',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  },
];

export const INSTAGRAM_REELS: ReelItem[] = [
  {
    id: 'reel-1',
    label: 'Wedding Celebration',
    title: '500+ Guests Grand Wedding Feast Setup in South Delhi Farmhouse',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    views: '28.4K',
    duration: '0:38',
    instagramUrl: 'https://www.instagram.com/royal_caterers61/',
  },
  {
    id: 'reel-2',
    label: 'Royal Buffet',
    title: 'Behind the Scenes: Unsealing 40kg Saffron Dum Biryani Degh',
    thumbnail: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    views: '45.1K',
    duration: '0:45',
    instagramUrl: 'https://www.instagram.com/royal_caterers61/',
  },
  {
    id: 'reel-3',
    label: 'Event Catering',
    title: 'Live Tawa & Flambé Counter in Action | Old Delhi Flavors',
    thumbnail: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
    views: '19.8K',
    duration: '0:29',
    instagramUrl: 'https://www.instagram.com/royal_caterers61/',
  },
  {
    id: 'reel-4',
    label: 'Special Occasion',
    title: 'Intimate Family Anniversary Dinner with Shahi Dastarkhwan Setup',
    thumbnail: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    views: '15.2K',
    duration: '0:34',
    instagramUrl: 'https://www.instagram.com/royal_caterers61/',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Mohammad Farhan & Family',
    role: 'Wedding Host',
    event: 'Walima Ceremony (800 Guests)',
    location: 'Chhatarpur Farms, Delhi',
    rating: 5,
    quote: 'Royal Caterers managed our son\'s Walima catering with absolute perfection. From the aroma of their Dum Mutton Biryani to the delicate Galouti Kebabs and warm Shahi Tukda, every guest walked away praising the food. Their Jama Masjid culinary heritage truly shone through.',
  },
  {
    id: 't2',
    name: 'Mrs. Ritu & Alok Singhal',
    role: 'Parents of the Bride',
    event: 'Grand Wedding Reception',
    location: 'Civil Lines, Delhi',
    rating: 5,
    quote: 'The team was punctual, hygienic, and extraordinarily polite. The live counters were a massive hit with both vegetarian and non-vegetarian guests. The presentation in authentic brassware made our reception look royal without being ostentatious.',
  },
  {
    id: 't3',
    name: 'Dr. Tariq Siddiqui',
    role: 'Family Host',
    event: 'Golden Jubilee Anniversary Party',
    location: 'Daryaganj, Delhi',
    rating: 5,
    quote: 'We have trusted Royal Caterers for two family milestones now. What sets them apart is their consistency in taste and genuine hospitality. The staff took care of our elderly guests with warmth and care. Highly recommended in Delhi-NCR!',
  },
  {
    id: 't4',
    name: 'Vikram Mehta',
    role: 'Head of Operations',
    event: 'Annual Corporate Gala Dinner',
    location: 'Aerocity, New Delhi',
    rating: 5,
    quote: 'Flawless corporate catering execution. They accommodated dietary preferences effortlessly, served hot gourmet dishes on schedule, and left the venue spotless. Very professional team and clear transparent billing.',
  },
];

export const EXPERIENCE_FEATURES = [
  {
    title: 'Quality Ingredients',
    description: 'We source farm-fresh vegetables, prime quality meats, cold-pressed oils, and hand-selected whole spices.',
    icon: 'Sparkles',
  },
  {
    title: 'Freshly Prepared Food',
    description: 'Every dish is cooked fresh for your gathering, ensuring rich aroma, authentic texture, and peak temperature.',
    icon: 'Utensils',
  },
  {
    title: 'Hygienic Preparation',
    description: 'Strict sanitation protocols, temperature-controlled transport, and attired kitchen staff following hygiene standards.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Elegant Presentation',
    description: 'Ornate copper deghs, pristine porcelain, chafing dishes, and decorative floral counter staging.',
    icon: 'Crown',
  },
  {
    title: 'Professional Service',
    description: 'Trained, uniform-clad hospitality professionals dedicated to making every guest feel celebrated.',
    icon: 'Users',
  },
  {
    title: 'Customized Menus',
    description: 'Flexible bespoke menus curated to your family tradition, regional palate, and gathering size.',
    icon: 'ClipboardList',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'QUALITY',
    subtitle: 'Culinary Precision',
    description: 'Carefully prepared food with attention to taste, traditional recipe secrets, and premium presentation that leaves a lasting impression.',
  },
  {
    title: 'VARIETY',
    subtitle: 'Expansive Flavors',
    description: 'Menus that can be customized according to the occasion, from authentic Old Delhi Mughlai feasts to contemporary global live counters.',
  },
  {
    title: 'PRESENTATION',
    subtitle: 'Regal Visual Appeal',
    description: 'Beautifully presented food, pristine copper and brass deghs, bespoke buffet setups, and elegant table styling.',
  },
  {
    title: 'SERVICE',
    subtitle: 'Warm Hospitality',
    description: 'A smooth, reliable, and professional catering experience so hosts can relax and celebrate with their loved ones.',
  },
];
