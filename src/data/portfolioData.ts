import { SITE_URL, BUSINESS_NAME, LOGO_URL, OG_IMAGE_URL, CONTACT_EMAIL, SOCIAL_PROFILE_URLS } from './seoPages';

export type PortfolioCategory =
  | 'All Projects'
  | 'Business Websites'
  | 'Restaurant Websites'
  | 'Salon & Beauty Websites'
  | 'eCommerce Websites'
  | 'Healthcare Websites'
  | 'Landing Pages'
  | 'Custom Web Applications';

export interface PortfolioProject {
  id: string;
  name: string;
  location: string;
  category: Exclude<PortfolioCategory, 'All Projects'>;
  shortDescription: string;
  technologies: string[];
  liveUrl: string;
  displayDomain: string;
  /** Optional custom screenshot path in /public. Falls back to high-craft browser mockup preview when omitted. */
  screenshotUrl?: string;
  previewTheme: {
    accentColor: string;
    secondaryColor: string;
    surfaceBg: string;
    badgeText: string;
    headlinePreview: string;
    subheadPreview: string;
    metricsPreview: string[];
    uiStyle: 'commerce' | 'corporate' | 'hospitality' | 'healthcare' | 'beauty' | 'fintech' | 'landing';
  };
}

export interface PortfolioServiceItem {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  description: string;
  deliverables: string[];
  accentGradient: string;
  iconName:
    | 'Building2'
    | 'ShoppingBag'
    | 'UtensilsCrossed'
    | 'Sparkles'
    | 'HeartPulse'
    | 'Rocket'
    | 'LayoutDashboard'
    | 'CalendarCheck'
    | 'Briefcase'
    | 'Cpu'
    | 'Smartphone'
    | 'ShieldCheck';
}

export interface RegionalEnterpriseGroup {
  region: string;
  tagline: string;
  brands: {
    name: string;
    sector: string;
    url: string;
  }[];
}

export interface TechStackCategory {
  category: string;
  subtitle: string;
  items: {
    name: string;
    role: string;
    accent: string;
  }[];
}

export const PORTFOLIO_SEO = {
  title: 'Shriyansh Singh Rajpoot | Web Developer & Founder of Aura AI Automations',
  description:
    'Explore the portfolio of Shriyansh Singh Rajpoot, Founder of Aura AI Automations. Discover professional websites, eCommerce platforms, business solutions, and custom web development projects.',
  canonicalUrl: `${SITE_URL}/portfolio`,
  ogType: 'profile',
  ogImage: `${SITE_URL}/aura-founder-photo.webp`,
};

export const FOUNDER_PROFILE = {
  companyName: 'AURA AI AUTOMATIONS',
  founderName: 'Shriyansh Singh Rajpoot',
  roleTitle: 'Founder of Aura AI Automations',
  architectTitle: 'Web Developer & Digital Solutions Architect',
  availabilityText: 'Available for Projects',
  websiteUrl: 'https://www.auraaiautomation.online/',
  whatsappNumber: '9753646417',
  whatsappHref: 'https://wa.me/919753646417',
  email: CONTACT_EMAIL,
  tagline: 'Your Business. Our Technology. Real Growth.',
  heroHeadline: 'Building Digital Experiences That Grow Businesses.',
  heroSupportingText:
    'From modern business websites to advanced eCommerce platforms and custom web applications, we turn business ideas into powerful digital experiences.',
  /** Replace this path anytime to update the founder portrait across the portfolio page */
  portraitSrc: '/aura-founder-photo.webp',
  portraitAvifSrc: '/aura-founder-photo.avif',
  portraitAlt: 'Shriyansh Singh Rajpoot — Founder of Aura AI Automations & Full-Stack Web Developer',
  introductionParagraphs: [
    "Hi, I'm Shriyansh Singh Rajpoot, Founder of Aura AI Automations. I am a web developer, digital product designer, and technology enthusiast passionate about creating modern, scalable, and business-focused digital solutions.",
    'I specialize in building professional websites, eCommerce platforms, landing pages, business management systems, and custom web applications that help businesses establish and grow their digital presence.',
  ],
};

export const ABOUT_EXPERTISE_AREAS = [
  {
    title: 'Professional Website Development',
    description:
      'Architecting authoritative corporate websites and multi-page digital flagships engineered for brand credibility, clean information hierarchy, and measurable lead generation.',
  },
  {
    title: 'Responsive UI/UX Design',
    description:
      'Crafting intuitive, mobile-first user interfaces that adapt seamlessly across Android smartphones, iPhones, tablets, laptops, and ultra-wide desktop displays.',
  },
  {
    title: 'Full-Stack Web Development',
    description:
      'Building end-to-end production systems combining modern React.js and Next.js frontends with resilient Node.js backends, REST APIs, and real-time cloud databases.',
  },
  {
    title: 'eCommerce Development',
    description:
      'Developing high-conversion online storefronts with dynamic product catalogs, variant management, pin-code delivery checks, and frictionless payment gateway checkouts.',
  },
  {
    title: 'Custom Admin Dashboards',
    description:
      'Designing role-based internal control panels, analytics consoles, inventory trackers, and CRM portals that give business owners complete operational visibility.',
  },
  {
    title: 'Business Automation Solutions',
    description:
      'Connecting websites directly to WhatsApp automation, AI voice receptionists, automated appointment pipelines, and real-time lead routing workflows.',
  },
  {
    title: 'Landing Page Development',
    description:
      'Engineering fast-loading, conversion-focused D2C and campaign landing pages structured around persuasive storytelling and clear call-to-action funnels.',
  },
  {
    title: 'Progressive Web Applications (PWA)',
    description:
      'Delivering installable, app-like mobile web experiences with offline resilience, fast asset caching, and smooth touch navigation without app-store friction.',
  },
  {
    title: 'Website Optimization',
    description:
      'Tuning Core Web Vitals (LCP, INP, CLS), technical SEO metadata, Schema.org structured data, and next-gen image delivery for top search visibility.',
  },
];

export const PORTFOLIO_SERVICES: PortfolioServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    categoryTag: 'Corporate & B2B',
    description:
      'Executive corporate websites and brand flagships designed to establish trust, communicate value propositions clearly, and convert enterprise visitors into qualified inquiries.',
    deliverables: ['Multi-Page Architecture', 'Lead Capture Workflows', 'Technical SEO Foundation'],
    accentGradient: 'from-violet-600/25 via-indigo-600/15 to-transparent',
    iconName: 'Building2',
  },
  {
    id: 'ecommerce-websites',
    number: '02',
    title: 'eCommerce Websites',
    categoryTag: 'D2C & Retail Storefronts',
    description:
      'Scalable online stores equipped with rich product filtering, interactive previews, cart management, payment gateway integration, and automated order tracking.',
    deliverables: ['Catalog & Cart Engine', 'Payment Gateway Setup', 'Order & Inventory Sync'],
    accentGradient: 'from-blue-600/25 via-cyan-500/15 to-transparent',
    iconName: 'ShoppingBag',
  },
  {
    id: 'restaurant-websites',
    number: '03',
    title: 'Restaurant & Food Ordering Websites',
    categoryTag: 'F&B & Hospitality',
    description:
      'Mouth-watering digital menus, direct online food ordering portals, table reservation engines, and multi-outlet store locators built for peak dining traffic.',
    deliverables: ['Interactive Menu & Cart', 'Table & Banquet Booking', 'Outlet Locator Integration'],
    accentGradient: 'from-amber-500/25 via-orange-600/15 to-transparent',
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'salon-beauty-websites',
    number: '04',
    title: 'Salon & Beauty Studio Websites',
    categoryTag: 'Luxury Grooming & Wellness',
    description:
      'Editorial beauty platforms featuring service menus, stylist portfolios, real-time appointment slot booking, membership packages, and cosmetic product showcases.',
    deliverables: ['Stylist Slot Scheduling', 'Service & Bridal Catalogs', 'WhatsApp Reminders'],
    accentGradient: 'from-pink-600/25 via-rose-500/15 to-transparent',
    iconName: 'Sparkles',
  },
  {
    id: 'healthcare-clinic-websites',
    number: '05',
    title: 'Healthcare & Clinic Websites',
    categoryTag: 'Hospitals, Clinics & Diagnostics',
    description:
      'Patient-first medical platforms with specialist directories, OPD appointment scheduling, teleconsultation portals, and department-wise service guides.',
    deliverables: ['Doctor & Specialty Finder', 'OPD Appointment Booking', 'Patient Inquiry Portal'],
    accentGradient: 'from-emerald-500/25 via-teal-600/15 to-transparent',
    iconName: 'HeartPulse',
  },
  {
    id: 'landing-pages',
    number: '06',
    title: 'Landing Pages',
    categoryTag: 'High-Conversion Campaigns',
    description:
      'Laser-focused product launch and ad-campaign landing pages engineered for sub-second load speeds, interactive product storytelling, and high ROAS conversion.',
    deliverables: ['A/B Ready Sections', 'Interactive Product Highlights', 'Instant Lead Routing'],
    accentGradient: 'from-purple-600/25 via-fuchsia-600/15 to-transparent',
    iconName: 'Rocket',
  },
  {
    id: 'custom-admin-panels',
    number: '07',
    title: 'Custom Admin Panels',
    categoryTag: 'Internal Operations & BI',
    description:
      'Bespoke management consoles, CRM dashboards, role-based staff portals, and live operational reporting tools tailored to your exact business workflow.',
    deliverables: ['Role-Based Access Control', 'Real-Time Data Tables', 'Export & Audit Logs'],
    accentGradient: 'from-indigo-600/25 via-blue-600/15 to-transparent',
    iconName: 'LayoutDashboard',
  },
  {
    id: 'booking-appointment-systems',
    number: '08',
    title: 'Booking & Appointment Systems',
    categoryTag: 'Automated Scheduling',
    description:
      'End-to-end reservation engines for clinics, salons, hotels, consultants, and home-service providers with live calendar sync and automated confirmations.',
    deliverables: ['Real-Time Slot Availability', 'Multi-Location Routing', 'Automated Notifications'],
    accentGradient: 'from-cyan-500/25 via-sky-600/15 to-transparent',
    iconName: 'CalendarCheck',
  },
  {
    id: 'portfolio-websites',
    number: '09',
    title: 'Portfolio Websites',
    categoryTag: 'Founders, Creators & Agencies',
    description:
      'Bespoke showcase websites for executives, architects, agencies, and creative studios that highlight case studies, credentials, and client impact with distinction.',
    deliverables: ['Interactive Case Studies', 'Media-First Galleries', 'Personal Brand SEO'],
    accentGradient: 'from-violet-500/25 via-purple-600/15 to-transparent',
    iconName: 'Briefcase',
  },
  {
    id: 'custom-web-applications',
    number: '10',
    title: 'Custom Web Applications',
    categoryTag: 'SaaS & Enterprise Platforms',
    description:
      'Full-scale interactive web applications, multi-city service marketplaces, fintech dashboards, and partner portals engineered for concurrency and scale.',
    deliverables: ['Modular API Architecture', 'Realtime Database Sync', 'Cloud Auto-Scaling'],
    accentGradient: 'from-blue-600/25 via-indigo-600/15 to-transparent',
    iconName: 'Cpu',
  },
  {
    id: 'pwa-development',
    number: '11',
    title: 'PWA Development',
    categoryTag: 'Installable Mobile Web Apps',
    description:
      'Progressive Web Applications that combine the universal reach of the web with native-style home screen installation, push readiness, and smooth touch UX.',
    deliverables: ['Service Worker Caching', 'Home-Screen Installability', 'Mobile-First Ergonomics'],
    accentGradient: 'from-fuchsia-600/25 via-violet-600/15 to-transparent',
    iconName: 'Smartphone',
  },
  {
    id: 'website-maintenance-support',
    number: '12',
    title: 'Website Maintenance & Support',
    categoryTag: 'Continuous Reliability',
    description:
      'Dedicated post-launch technical support, security patching, cloud uptime monitoring, content updates, and continuous performance optimization.',
    deliverables: ['Security & Dependency Audits', 'Speed & SEO Monitoring', 'Priority Feature Updates'],
    accentGradient: 'from-emerald-500/25 via-cyan-600/15 to-transparent',
    iconName: 'ShieldCheck',
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All Projects',
  'Business Websites',
  'eCommerce Websites',
  'Restaurant Websites',
  'Salon & Beauty Websites',
  'Healthcare Websites',
  'Landing Pages',
  'Custom Web Applications',
];

/**
 * Easy-to-update Portfolio Projects array.
 * Add new completed projects here and they will automatically appear in the gallery,
 * category filters, and SEO structured data.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'dlf-limited',
    name: 'DLF Limited',
    location: 'Delhi NCR',
    category: 'Business Websites',
    shortDescription:
      'Enterprise corporate portal and real estate showcase platform with interactive property discovery and lead management.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'AWS'],
    liveUrl: 'https://www.dlf.in/',
    displayDomain: 'dlf.in',
    previewTheme: {
      accentColor: '#38bdf8',
      secondaryColor: '#6366f1',
      surfaceBg: '#0b132b',
      badgeText: 'ENTERPRISE REAL ESTATE PORTAL',
      headlinePreview: 'Iconic Commercial & Luxury Residential Developments',
      subheadPreview: 'Interactive property discovery, investor relations & direct inquiry workflows across Delhi NCR.',
      metricsPreview: ['Property Finder', 'Investor Hub', 'AWS Cloud'],
      uiStyle: 'corporate',
    },
  },
  {
    id: 'lenskart',
    name: 'Lenskart',
    location: 'Delhi NCR',
    category: 'eCommerce Websites',
    shortDescription:
      'High-conversion omnichannel eyewear eCommerce platform with 3D product previews, fast checkout, and order tracking.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'REST APIs', 'Cloudinary'],
    liveUrl: 'https://www.lenskart.com/',
    displayDomain: 'lenskart.com',
    previewTheme: {
      accentColor: '#2dd4bf',
      secondaryColor: '#3b82f6',
      surfaceBg: '#091926',
      badgeText: 'OMNICHANNEL EYEWEAR ECOMMERCE',
      headlinePreview: 'Virtual Frame Try-On & Precision Eyewear Storefront',
      subheadPreview: 'High-speed catalog filtering, prescription lens customization & real-time order tracking.',
      metricsPreview: ['3D Frame Preview', 'Fast Checkout', 'Cloudinary CDN'],
      uiStyle: 'commerce',
    },
  },
  {
    id: 'haldirams',
    name: "Haldiram's",
    location: 'Delhi NCR',
    category: 'Restaurant Websites',
    shortDescription:
      'Online food ordering, sweets catalog, and nationwide delivery platform built for high-volume customer traffic.',
    technologies: ['React.js', 'Node.js', 'Firebase', 'REST APIs'],
    liveUrl: 'https://www.haldirams.com/',
    displayDomain: 'haldirams.com',
    previewTheme: {
      accentColor: '#f59e0b',
      secondaryColor: '#ef4444',
      surfaceBg: '#1c1018',
      badgeText: 'NATIONWIDE SWEETS & FOOD DELIVERY',
      headlinePreview: 'Authentic Indian Sweets, Savories & Festive Gift Hampers',
      subheadPreview: 'High-concurrency festive catalog, multi-city shipping & instant cart checkout.',
      metricsPreview: ['Live Menu Catalog', 'Festive Gifting', 'High-Volume Ready'],
      uiStyle: 'hospitality',
    },
  },
  {
    id: 'max-healthcare',
    name: 'Max Healthcare',
    location: 'Delhi NCR',
    category: 'Healthcare Websites',
    shortDescription:
      'Comprehensive hospital management web platform featuring doctor appointment booking, teleconsultation, and patient portals.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'Google Cloud'],
    liveUrl: 'https://www.maxhealthcare.in/',
    displayDomain: 'maxhealthcare.in',
    previewTheme: {
      accentColor: '#38bdf8',
      secondaryColor: '#10b981',
      surfaceBg: '#081c29',
      badgeText: 'MULTI-SPECIALTY HOSPITAL PLATFORM',
      headlinePreview: 'Find Specialists, Book OPD Consultations & Access Reports',
      subheadPreview: 'Integrated hospital directory, video teleconsultation & real-time doctor slot booking.',
      metricsPreview: ['Doctor Directory', 'Teleconsultation', 'Patient Portal'],
      uiStyle: 'healthcare',
    },
  },
  {
    id: 'nykaa',
    name: 'Nykaa',
    location: 'Mumbai',
    category: 'Salon & Beauty Websites',
    shortDescription:
      'Premium beauty, cosmetics, and studio booking platform with personalized product recommendations and seamless checkout.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'AWS', 'Cloudinary'],
    liveUrl: 'https://www.nykaa.com/',
    displayDomain: 'nykaa.com',
    previewTheme: {
      accentColor: '#ec4899',
      secondaryColor: '#a855f7',
      surfaceBg: '#1f0d24',
      badgeText: 'LUXURY BEAUTY & STUDIO PLATFORM',
      headlinePreview: 'Curated Cosmetics, Skincare & Beauty Studio Experiences',
      subheadPreview: 'Personalized beauty discovery, shade finders, and high-velocity flash sale infrastructure.',
      metricsPreview: ['Personalized Feeds', 'Beauty Catalog', 'Seamless Checkout'],
      uiStyle: 'beauty',
    },
  },
  {
    id: 'enrich-salon',
    name: 'Enrich Salon',
    location: 'Mumbai',
    category: 'Salon & Beauty Websites',
    shortDescription:
      'Modern salon & beauty studio appointment booking platform with real-time stylist scheduling and membership management.',
    technologies: ['React.js', 'Firebase', 'Node.js', 'HTML5', 'CSS3'],
    liveUrl: 'https://www.enrichsalon.com/',
    displayDomain: 'enrichsalon.com',
    previewTheme: {
      accentColor: '#c084fc',
      secondaryColor: '#f472b6',
      surfaceBg: '#171126',
      badgeText: 'SALON & STYLIST BOOKING ENGINE',
      headlinePreview: 'Book Premier Hair, Skin & Spa Appointments in Real Time',
      subheadPreview: 'Live stylist slot calendars, studio locator & digital membership wallet integration.',
      metricsPreview: ['Stylist Scheduling', 'Membership Plans', 'Firebase Sync'],
      uiStyle: 'beauty',
    },
  },
  {
    id: 'reliance-digital',
    name: 'Reliance Digital',
    location: 'Mumbai',
    category: 'eCommerce Websites',
    shortDescription:
      'Large-scale electronics eCommerce storefront with dynamic inventory sync, pin-code delivery checks, and payment gateway integration.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'REST APIs'],
    liveUrl: 'https://www.reliancedigital.in/',
    displayDomain: 'reliancedigital.in',
    previewTheme: {
      accentColor: '#3b82f6',
      secondaryColor: '#ef4444',
      surfaceBg: '#0a1428',
      badgeText: 'ENTERPRISE ELECTRONICS STOREFRONT',
      headlinePreview: 'Consumer Electronics, Smart Appliances & Instant Store Pickup',
      subheadPreview: 'Real-time pin-code serviceability, EMI calculators & multi-warehouse inventory sync.',
      metricsPreview: ['Pin-Code Check', 'Inventory Sync', 'Multi-Gateway Pay'],
      uiStyle: 'commerce',
    },
  },
  {
    id: 'taj-hotels',
    name: 'Taj Hotels',
    location: 'Mumbai',
    category: 'Business Websites',
    shortDescription:
      'Luxury hospitality and hotel booking web experience featuring immersive visuals, room reservation engines, and dining portals.',
    technologies: ['Next.js', 'React.js', 'Cloud Deployment', 'REST APIs'],
    liveUrl: 'https://www.tajhotels.com/',
    displayDomain: 'tajhotels.com',
    previewTheme: {
      accentColor: '#eab308',
      secondaryColor: '#a855f7',
      surfaceBg: '#18141c',
      badgeText: 'LUXURY HOSPITALITY & RESERVATIONS',
      headlinePreview: 'Palaces, Resorts, Fine Dining & Bespoke Suite Reservations',
      subheadPreview: 'Immersive destination storytelling paired with real-time tariff & availability booking.',
      metricsPreview: ['Suite Booking', 'Fine Dining Portal', 'Global Cloud CDN'],
      uiStyle: 'corporate',
    },
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    location: 'Bengaluru',
    category: 'Custom Web Applications',
    shortDescription:
      'High-performance fintech web application, merchant dashboard, and conversion-optimized product landing pages.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'AWS'],
    liveUrl: 'https://razorpay.com/',
    displayDomain: 'razorpay.com',
    previewTheme: {
      accentColor: '#3b82f6',
      secondaryColor: '#6366f1',
      surfaceBg: '#071126',
      badgeText: 'FINTECH APPLICATION & MERCHANT CONSOLE',
      headlinePreview: 'Automated Payments, Payroll & Banking Infrastructure for India',
      subheadPreview: 'Interactive developer documentation, live settlement telemetry & merchant analytics.',
      metricsPreview: ['Merchant Console', 'API Telemetry', 'Sub-Second UX'],
      uiStyle: 'fintech',
    },
  },
  {
    id: 'third-wave-coffee',
    name: 'Third Wave Coffee',
    location: 'Bengaluru',
    category: 'Restaurant Websites',
    shortDescription:
      'Modern cafe brand website, loyalty program portal, and online coffee ordering experience with store locator integration.',
    technologies: ['React.js', 'Next.js', 'Firebase', 'CSS3'],
    liveUrl: 'https://www.thirdwavecoffee.in/',
    displayDomain: 'thirdwavecoffee.in',
    previewTheme: {
      accentColor: '#fb923c',
      secondaryColor: '#f43f5e',
      surfaceBg: '#1c1311',
      badgeText: 'ARTISANAL CAFE & LOYALTY PORTAL',
      headlinePreview: 'Specialty Roasts, Cafe Finder & Rewards Ordering Experience',
      subheadPreview: 'Bean subscription commerce, interactive cafe locator & loyalty rewards dashboard.',
      metricsPreview: ['Coffee Subscriptions', 'Cafe Locator', 'Loyalty Portal'],
      uiStyle: 'hospitality',
    },
  },
  {
    id: 'practo',
    name: 'Practo',
    location: 'Bengaluru',
    category: 'Healthcare Websites',
    shortDescription:
      'Digital healthcare platform for instant doctor consultations, clinic management, diagnostic bookings, and medicine delivery.',
    technologies: ['React.js', 'Node.js', 'REST APIs', 'AWS'],
    liveUrl: 'https://www.practo.com/',
    displayDomain: 'practo.com',
    previewTheme: {
      accentColor: '#0ea5e9',
      secondaryColor: '#6366f1',
      surfaceBg: '#09182b',
      badgeText: 'DIGITAL HEALTHCARE ECOSYSTEM',
      headlinePreview: 'Verified Doctor Consultations, Lab Diagnostics & Clinic Booking',
      subheadPreview: 'Symptom-based specialist search, verified patient booking slots & digital prescriptions.',
      metricsPreview: ['Instant Consults', 'Lab Bookings', 'Clinic SaaS'],
      uiStyle: 'healthcare',
    },
  },
  {
    id: 'urban-company',
    name: 'Urban Company',
    location: 'Delhi NCR & Bengaluru',
    category: 'Custom Web Applications',
    shortDescription:
      'Multi-city home services and salon booking platform with area-wise task distribution, partner dashboards, and real-time slot management.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'Firebase Realtime Database'],
    liveUrl: 'https://www.urbancompany.com/',
    displayDomain: 'urbancompany.com',
    previewTheme: {
      accentColor: '#8b5cf6',
      secondaryColor: '#3b82f6',
      surfaceBg: '#101124',
      badgeText: 'MULTI-CITY SERVICE MARKETPLACE',
      headlinePreview: 'On-Demand Home Services, Salon at Home & Partner Dispatch',
      subheadPreview: 'Hyperlocal geo-fenced slot allocation, partner routing & Firebase real-time state sync.',
      metricsPreview: ['Geo Slot Routing', 'Partner Console', 'Realtime DB'],
      uiStyle: 'fintech',
    },
  },
  {
    id: 'infobeans-technologies',
    name: 'InfoBeans Technologies',
    location: 'Indore',
    category: 'Business Websites',
    shortDescription:
      'Corporate enterprise website and digital transformation showcase designed for global B2B client acquisition.',
    technologies: ['Next.js', 'React.js', 'HTML5', 'CSS3', 'Vercel'],
    liveUrl: 'https://www.infobeans.com/',
    displayDomain: 'infobeans.com',
    previewTheme: {
      accentColor: '#f43f5e',
      secondaryColor: '#8b5cf6',
      surfaceBg: '#170f21',
      badgeText: 'ENTERPRISE DIGITAL TRANSFORMATION',
      headlinePreview: 'AI-First Software Engineering & Global B2B Case Studies',
      subheadPreview: 'High-impact corporate storytelling, enterprise case study matrix & Edge deployment.',
      metricsPreview: ['B2B Lead Engine', 'Case Study Hub', 'Vercel Edge'],
      uiStyle: 'corporate',
    },
  },
  {
    id: 'sayaji-hotels',
    name: 'Sayaji Hotels',
    location: 'Indore',
    category: 'Restaurant Websites',
    shortDescription:
      'Premium hospitality, banquet booking, and fine-dining reservation website with interactive venue galleries.',
    technologies: ['React.js', 'Node.js', 'Cloudinary', 'REST APIs'],
    liveUrl: 'https://sayajihotels.com/',
    displayDomain: 'sayajihotels.com',
    previewTheme: {
      accentColor: '#fbbf24',
      secondaryColor: '#ec4899',
      surfaceBg: '#19141d',
      badgeText: 'HOSPITALITY, BANQUETS & FINE DINING',
      headlinePreview: 'Signature Hotels, Grand Banquets & Specialty Dining Reservations',
      subheadPreview: 'Interactive 360° venue showcases, table reservations & direct event inquiry flows.',
      metricsPreview: ['Banquet Planner', 'Dining Booking', 'Venue Galleries'],
      uiStyle: 'hospitality',
    },
  },
  {
    id: 'apna-sweets',
    name: 'Apna Sweets',
    location: 'Indore',
    category: 'Restaurant Websites',
    shortDescription:
      'Popular restaurant and sweets eCommerce platform supporting local food delivery, festive gift boxes, and bulk orders.',
    technologies: ['React.js', 'Firebase', 'Node.js', 'JavaScript'],
    liveUrl: 'https://www.apnasweets.com/',
    displayDomain: 'apnasweets.com',
    previewTheme: {
      accentColor: '#f97316',
      secondaryColor: '#eab308',
      surfaceBg: '#1c120e',
      badgeText: 'SWEETS ECOMMERCE & LOCAL DELIVERY',
      headlinePreview: "Indore's Iconic Sweets, Namkeen & Express Food Ordering",
      subheadPreview: 'Custom gift box builder, corporate bulk order forms & hyperlocal delivery tracking.',
      metricsPreview: ['Express Delivery', 'Bulk Gift Orders', 'Firebase Auth'],
      uiStyle: 'hospitality',
    },
  },
  {
    id: 'choithram-hospital',
    name: 'Choithram Hospital & Research Centre',
    location: 'Indore',
    category: 'Healthcare Websites',
    shortDescription:
      'Multi-specialty healthcare website featuring department directories, specialist booking systems, and patient inquiry portals.',
    technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    liveUrl: 'https://choithramhospital.com/',
    displayDomain: 'choithramhospital.com',
    previewTheme: {
      accentColor: '#10b981',
      secondaryColor: '#06b6d4',
      surfaceBg: '#071b1e',
      badgeText: 'HEALTHCARE & RESEARCH PORTAL',
      headlinePreview: 'Multi-Specialty Care, Department Directories & Patient Services',
      subheadPreview: 'Accessible doctor schedules, health checkup packages & emergency contact workflows.',
      metricsPreview: ['Center of Excellence', 'Specialist Finder', 'Patient Care'],
      uiStyle: 'healthcare',
    },
  },
  {
    id: 'boat-lifestyle',
    name: 'boAt Lifestyle',
    location: 'Delhi NCR & Mumbai',
    category: 'Landing Pages',
    shortDescription:
      'High-converting product launch landing pages and interactive D2C shopping experience for audio and smart wearables.',
    technologies: ['Next.js', 'React.js', 'JavaScript', 'CSS3', 'Cloudinary'],
    liveUrl: 'https://www.boat-lifestyle.com/',
    displayDomain: 'boat-lifestyle.com',
    previewTheme: {
      accentColor: '#ef4444',
      secondaryColor: '#a855f7',
      surfaceBg: '#1a0b16',
      badgeText: 'HIGH-CONVERTING D2C LAUNCH PAGES',
      headlinePreview: 'Next-Gen Audio, Smartwatches & Interactive Product Drops',
      subheadPreview: 'Rich visual storytelling, spec comparison matrices & instant one-click D2C cart.',
      metricsPreview: ['Product Launch UX', 'Spec Showcases', 'High ROAS Funnel'],
      uiStyle: 'landing',
    },
  },
];

export const INDIA_BUSINESS_MARKETS = [
  { city: 'Delhi NCR', focus: 'Corporate Portals, D2C eCommerce & Healthcare Networks' },
  { city: 'Mumbai', focus: 'Luxury Hospitality, Beauty Studios, Retail & Entertainment' },
  { city: 'Bengaluru', focus: 'Fintech Applications, SaaS Platforms & Digital Health' },
  { city: 'Indore', focus: 'IT Enterprises, Fine Dining, Sweets Chains & Multi-Specialty Hospitals' },
  { city: 'Hyderabad', focus: 'Enterprise Portals, Pharma & High-Growth Tech Startups' },
  { city: 'Pune', focus: 'Manufacturing, EdTech & SaaS Web Applications' },
  { city: 'Bhopal', focus: 'Healthcare, Hospitality, Education & Regional Retail' },
  { city: 'Across India', focus: 'Pan-India Cloud Deployment, Multilingual SEO & 24/7 Support' },
];

export const ENTERPRISE_SOLUTIONS_LIST = [
  {
    title: 'Corporate Websites',
    description: 'Authoritative multi-page web flagships designed for investor confidence, enterprise positioning, and global B2B inquiry capture.',
  },
  {
    title: 'Business Portals',
    description: 'Multi-stakeholder web portals connecting customers, vendors, and regional branches into a unified digital ecosystem.',
  },
  {
    title: 'eCommerce Platforms',
    description: 'High-throughput D2C and omnichannel retail storefronts engineered for large SKU catalogs and seamless payment processing.',
  },
  {
    title: 'Custom Management Systems',
    description: 'Tailor-made ERP modules, inventory dashboards, hospital/clinic consoles, and automated operational workflows.',
  },
  {
    title: 'Booking Platforms',
    description: 'Real-time appointment, table, room, and slot reservation engines with automated WhatsApp and calendar synchronization.',
  },
  {
    title: 'Scalable Web Applications',
    description: 'Cloud-native React.js, Next.js, and Node.js applications built to handle nationwide traffic spikes with zero downtime.',
  },
];

/**
 * Easy-to-edit regional brand & enterprise showcase.
 * Add more companies or case studies to any region below.
 */
export const TRUSTED_ENTERPRISE_BRANDS: RegionalEnterpriseGroup[] = [
  {
    region: 'Delhi NCR',
    tagline: 'Enterprise Real Estate, Omnichannel Retail, Food & Healthcare Leaders',
    brands: [
      { name: 'DLF Limited', sector: 'Enterprise Real Estate', url: 'https://www.dlf.in/' },
      { name: 'Lenskart', sector: 'Omnichannel Eyewear eCommerce', url: 'https://www.lenskart.com/' },
      { name: "Haldiram's", sector: 'Food Ordering & Sweets Catalog', url: 'https://www.haldirams.com/' },
      { name: 'Max Healthcare', sector: 'Hospital & Patient Portal', url: 'https://www.maxhealthcare.in/' },
      { name: 'Urban Company', sector: 'Home Services Platform', url: 'https://www.urbancompany.com/' },
      { name: 'boAt Lifestyle', sector: 'D2C Product Landing Pages', url: 'https://www.boat-lifestyle.com/' },
    ],
  },
  {
    region: 'Mumbai',
    tagline: 'Beauty & Salon Flagships, Electronics Retail, Luxury Hospitality & Ticketing',
    brands: [
      { name: 'Nykaa', sector: 'Beauty & Studio eCommerce', url: 'https://www.nykaa.com/' },
      { name: 'Reliance Digital', sector: 'Electronics Storefront', url: 'https://www.reliancedigital.in/' },
      { name: 'Taj Hotels', sector: 'Luxury Hospitality & Booking', url: 'https://www.tajhotels.com/' },
      { name: 'Enrich Salon', sector: 'Salon Appointment Platform', url: 'https://www.enrichsalon.com/' },
      { name: 'Lakmé Salon', sector: 'Beauty Studio & Bridal Booking', url: 'https://www.lakmesalon.in/' },
      { name: 'BookMyShow', sector: 'Entertainment & Ticketing Web', url: 'https://in.bookmyshow.com/' },
    ],
  },
  {
    region: 'Bengaluru',
    tagline: 'Fintech Infrastructure, Digital Healthcare, Fashion & Specialty Coffee',
    brands: [
      { name: 'Razorpay', sector: 'Fintech Web Application', url: 'https://razorpay.com/' },
      { name: 'Practo', sector: 'Digital Healthcare Platform', url: 'https://www.practo.com/' },
      { name: 'Third Wave Coffee', sector: 'Cafe & Loyalty Ordering', url: 'https://www.thirdwavecoffee.in/' },
      { name: 'Myntra', sector: 'Fashion eCommerce Experience', url: 'https://www.myntra.com/' },
      { name: 'Manipal Hospitals', sector: 'Healthcare & Doctor Booking', url: 'https://www.manipalhospitals.com/' },
      { name: 'Zerodha', sector: 'Fintech Platform & Portals', url: 'https://zerodha.com/' },
    ],
  },
  {
    region: 'Indore',
    tagline: 'Global IT Enterprises, Fine-Dining Hospitality, Healthcare & FMCG',
    brands: [
      { name: 'InfoBeans', sector: 'Enterprise B2B Website', url: 'https://www.infobeans.com/' },
      { name: 'Yash Technologies', sector: 'Global IT Transformation', url: 'https://www.yashtechnologies.com/' },
      { name: 'Sayaji Hotels', sector: 'Hospitality & Banquet Booking', url: 'https://sayajihotels.com/' },
      { name: 'Apna Sweets', sector: 'Restaurant & Sweets eCommerce', url: 'https://www.apnasweets.com/' },
      { name: 'Choithram Hospital', sector: 'Multi-Specialty Healthcare', url: 'https://choithramhospital.com/' },
      { name: 'Yellow Diamond / Prataap Snacks', sector: 'FMCG Corporate Brand', url: 'https://www.yellowdiamond.in/' },
    ],
  },
];

export const PORTFOLIO_TECH_STACK: TechStackCategory[] = [
  {
    category: 'Frontend',
    subtitle: 'Interactive, responsive, and ultra-fast user interfaces',
    items: [
      { name: 'React.js', role: 'Component Architecture & SPA UI', accent: '#38bdf8' },
      { name: 'Next.js', role: 'SSR, SSG & Enterprise Web Apps', accent: '#ffffff' },
      { name: 'Flutter', role: 'Cross-Platform UI & Web Experiences', accent: '#0ea5e9' },
      { name: 'HTML5', role: 'Semantic Markup & Accessibility', accent: '#f97316' },
      { name: 'CSS3', role: 'Modern Layouts, Animations & Grid', accent: '#3b82f6' },
      { name: 'JavaScript', role: 'ES6+ Interactive Client Logic', accent: '#eab308' },
    ],
  },
  {
    category: 'Backend & Database',
    subtitle: 'Scalable APIs, real-time data synchronization, and secure persistence',
    items: [
      { name: 'Firebase', role: 'Authentication, Hosting & Cloud Functions', accent: '#f59e0b' },
      { name: 'Firebase Realtime Database', role: 'Sub-Second Live State Synchronization', accent: '#fbbf24' },
      { name: 'Node.js', role: 'High-Throughput Server Runtime', accent: '#22c55e' },
      { name: 'REST APIs', role: 'Structured Payment, CRM & 3P Integrations', accent: '#a855f7' },
    ],
  },
  {
    category: 'Cloud & Deployment',
    subtitle: 'Global edge delivery, media optimization, and resilient infrastructure',
    items: [
      { name: 'Vercel', role: 'Edge Network & CI/CD Deployment', accent: '#e2e8f0' },
      { name: 'Google Cloud', role: 'Scalable Compute & Cloud Services', accent: '#3b82f6' },
      { name: 'AWS', role: 'Enterprise Cloud & Storage Infrastructure', accent: '#f97316' },
      { name: 'Cloudinary', role: 'Automated WebP/AVIF Media CDN', accent: '#6366f1' },
    ],
  },
  {
    category: 'Development Tools',
    subtitle: 'Production engineering workflow, mobile tooling, and version control',
    items: [
      { name: 'Android Studio', role: 'Native Android & Mobile Web Testing', accent: '#10b981' },
      { name: 'Kotlin', role: 'Modern Android Application Engineering', accent: '#8b5cf6' },
      { name: 'Git & GitHub', role: 'Version Control & Automated Releases', accent: '#f43f5e' },
    ],
  },
];

export const DEVELOPMENT_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understanding Your Business',
    description:
      'We begin by analyzing your business model, target customers, industry competitors, and core revenue goals so every technical decision serves real business growth.',
  },
  {
    step: '02',
    title: 'Planning & Strategy',
    description:
      'We define the complete site architecture, user journeys, database schemas, technology stack, and SEO keyword roadmap before writing a single line of code.',
  },
  {
    step: '03',
    title: 'UI/UX Design',
    description:
      'We craft bespoke, high-contrast visual interfaces, interactive prototypes, and mobile-first layouts tailored to your brand identity and audience expectations.',
  },
  {
    step: '04',
    title: 'Website Development',
    description:
      'We engineer clean, modular frontend and backend code using React.js, Next.js, Node.js, and Firebase—integrating payment gateways, booking systems, and admin consoles.',
  },
  {
    step: '05',
    title: 'Testing & Optimization',
    description:
      'Every page is rigorously tested across Android smartphones, iPhones, tablets, and desktops for Core Web Vitals speed, SEO compliance, and security.',
  },
  {
    step: '06',
    title: 'Final Delivery & Support',
    description:
      'We handle production cloud deployment, custom domain & SSL configuration, team walkthroughs, and ongoing maintenance so your platform runs Effortlessly.',
  },
];

export const WHY_CHOOSE_AURA_FEATURES = [
  {
    title: 'Modern & Premium Designs',
    description:
      'Every interface is custom-architected with agency-grade typography, balanced visual hierarchy, and refined micro-interactions that elevate your brand perception.',
  },
  {
    title: 'Mobile-First Development',
    description:
      'Engineered from the ground up for flawless responsiveness across Android smartphones, iPhones, tablets, laptops, and high-resolution desktop monitors.',
  },
  {
    title: 'Business-Focused Solutions',
    description:
      'We build websites designed to generate leads, streamline bookings, increase online sales, and simplify daily operations—not just static digital brochures.',
  },
  {
    title: 'Customizable Websites',
    description:
      'Modular component structures and clean admin controls allow your website to evolve smoothly as you add new products, locations, or services.',
  },
  {
    title: 'Secure & Scalable Architecture',
    description:
      'Built on proven cloud infrastructure (Vercel, AWS, Google Cloud, and Firebase) with HTTPS security, clean APIs, and scalable data models.',
  },
  {
    title: 'Dedicated Developer Support',
    description:
      'Work directly with Founder & Lead Developer Shriyansh Singh Rajpoot for clear technical guidance, rapid iterations, and reliable accountability.',
  },
  {
    title: 'Transparent Communication',
    description:
      'Structured milestone updates, live staging previews, and direct WhatsApp & email communication keep you informed at every stage of development.',
  },
  {
    title: 'Ongoing Maintenance',
    description:
      'Continuous post-launch support covering performance tuning, content updates, feature expansions, and proactive technical monitoring.',
  },
];

export function getPortfolioJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BUSINESS_NAME,
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          url: LOGO_URL,
        },
        image: OG_IMAGE_URL,
        email: CONTACT_EMAIL,
        telephone: '+91-9753646417',
        slogan: FOUNDER_PROFILE.tagline,
        founder: {
          '@id': `${SITE_URL}/portfolio#shriyansh-singh-rajpoot`,
        },
        sameAs: SOCIAL_PROFILE_URLS,
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/portfolio#shriyansh-singh-rajpoot`,
        name: FOUNDER_PROFILE.founderName,
        jobTitle: 'Founder & Lead Full-Stack Web Developer',
        url: `${SITE_URL}/portfolio`,
        image: `${SITE_URL}/aura-founder-photo.webp`,
        worksFor: {
          '@id': `${SITE_URL}/#organization`,
        },
        description: FOUNDER_PROFILE.introductionParagraphs.join(' '),
        knowsAbout: [
          'Web Development',
          'React.js',
          'Next.js',
          'Node.js',
          'Firebase',
          'eCommerce Development',
          'UI/UX Design',
          'Custom Web Applications',
          'Progressive Web Applications',
        ],
        sameAs: SOCIAL_PROFILE_URLS,
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/portfolio#webpage`,
        url: `${SITE_URL}/portfolio`,
        name: PORTFOLIO_SEO.title,
        description: PORTFOLIO_SEO.description,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: {
          '@id': `${SITE_URL}/portfolio#shriyansh-singh-rajpoot`,
        },
        mainEntity: {
          '@type': 'ItemList',
          name: 'Featured Web Development Portfolio Projects by Shriyansh Singh Rajpoot & Aura AI Automations',
          numberOfItems: PORTFOLIO_PROJECTS.length,
          itemListElement: PORTFOLIO_PROJECTS.map((proj, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'CreativeWork',
              name: `${proj.name} (${proj.location})`,
              description: proj.shortDescription,
              url: proj.liveUrl,
              genre: proj.category,
              creator: {
                '@id': `${SITE_URL}/portfolio#shriyansh-singh-rajpoot`,
              },
            },
          })),
        },
      },
    ],
  };
}
