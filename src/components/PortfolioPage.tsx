import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  HeartPulse,
  Rocket,
  LayoutDashboard,
  CalendarCheck,
  Briefcase,
  Cpu,
  Smartphone,
  ShieldCheck,
  Code2,
  Globe,
  Layers,
  Database,
  Cloud,
  Wrench,
  CheckCircle2,
  Send,
  MessageSquare,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Copy,
  Check,
  UserCheck,
  Terminal,
  Compass,
  Zap,
} from 'lucide-react';
import {
  FOUNDER_PROFILE,
  ABOUT_EXPERTISE_AREAS,
  PORTFOLIO_SERVICES,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  INDIA_BUSINESS_MARKETS,
  ENTERPRISE_SOLUTIONS_LIST,
  TRUSTED_ENTERPRISE_BRANDS,
  PORTFOLIO_TECH_STACK,
  DEVELOPMENT_PROCESS_STEPS,
  WHY_CHOOSE_AURA_FEATURES,
  PortfolioCategory,
  PortfolioProject,
  PortfolioServiceItem,
} from '../data/portfolioData';

interface PortfolioPageProps {
  onNavigate?: (path: string) => void;
  onOpenBooking?: () => void;
}

interface InquiryFormState {
  fullName: string;
  businessName: string;
  email: string;
  whatsapp: string;
  businessCategory: string;
  websiteType: string;
  projectBudget: string;
  projectDescription: string;
}

function renderServiceIcon(iconName: PortfolioServiceItem['iconName']) {
  const iconProps = { className: 'w-5 h-5 text-sky-400' };
  switch (iconName) {
    case 'Building2':
      return <Building2 {...iconProps} />;
    case 'ShoppingBag':
      return <ShoppingBag {...iconProps} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    case 'HeartPulse':
      return <HeartPulse {...iconProps} />;
    case 'Rocket':
      return <Rocket {...iconProps} />;
    case 'LayoutDashboard':
      return <LayoutDashboard {...iconProps} />;
    case 'CalendarCheck':
      return <CalendarCheck {...iconProps} />;
    case 'Briefcase':
      return <Briefcase {...iconProps} />;
    case 'Cpu':
      return <Cpu {...iconProps} />;
    case 'Smartphone':
      return <Smartphone {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
  }
}

/**
 * High-resolution interactive browser window preview for each project.
 * Supports custom screenshot images if `project.screenshotUrl` is set,
 * and renders a rich domain-accurate visual preview with zero broken images.
 */
const ProjectBrowserPreview: React.FC<{ project: PortfolioProject }> = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const { previewTheme } = project;

  return (
    <div
      className="relative w-full h-56 sm:h-60 overflow-hidden border-b border-white/[0.08] select-none group/preview"
      style={{ backgroundColor: previewTheme.surfaceBg }}
    >
      {/* Ambient Radial Spotlight */}
      <div
        className="absolute -top-20 -right-16 w-64 h-64 rounded-full blur-3xl opacity-35 pointer-events-none transition-transform duration-500 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle, ${previewTheme.accentColor}, ${previewTheme.secondaryColor}, transparent 70%)`,
        }}
      />
      <div
        className="absolute -bottom-24 -left-16 w-60 h-60 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${previewTheme.secondaryColor}, transparent 70%)`,
        }}
      />

      {/* Browser Top Chrome Bar */}
      <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 bg-[#050814]/90 border-b border-white/[0.08] backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.07] text-[11px] font-mono text-slate-300 max-w-[200px] sm:max-w-[240px] truncate">
          <Globe className="w-3 h-3 text-sky-400 shrink-0" />
          <span className="truncate">{project.displayDomain}</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
          {project.location}
        </span>
      </div>

      {/* Optional Custom Screenshot Image or Custom UI Mockup */}
      {project.screenshotUrl && !imgError ? (
        <img
          src={project.screenshotUrl}
          alt={`${project.name} (${project.location}) — ${project.category} built by Shriyansh Singh Rajpoot`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-[calc(100%-38px)] object-cover object-top transition-transform duration-500 group-hover:scale-103"
        />
      ) : (
        <div className="relative z-10 p-4 sm:p-5 h-[calc(100%-38px)] flex flex-col justify-between">
          {/* Simulated Website Header & Hero Mockup */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span
                className="text-[10px] font-mono font-semibold tracking-wider uppercase"
                style={{ color: previewTheme.accentColor }}
              >
                {previewTheme.badgeText}
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                {project.name}
              </span>
            </div>

            <h4 className="font-display text-base sm:text-lg font-bold text-white leading-snug line-clamp-2 mb-1.5 group-hover:text-sky-200 transition-colors">
              {previewTheme.headlinePreview}
            </h4>
            <p className="text-xs text-slate-300/85 line-clamp-2 leading-relaxed">
              {previewTheme.subheadPreview}
            </p>
          </div>

          {/* Simulated UI Modules Strip */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-slate-300 font-medium">
              {previewTheme.metricsPreview.map((metric, idx) => (
                <React.Fragment key={metric}>
                  {idx > 0 && <span className="text-slate-600">·</span>}
                  <span>{metric}</span>
                </React.Fragment>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-1 text-[11px] font-semibold shrink-0"
              style={{ color: previewTheme.accentColor }}
            >
              <span>Live</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All Projects');
  const [selectedCity, setSelectedCity] = useState<string>('All Locations');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Inquiry Form State
  const [formState, setFormState] = useState<InquiryFormState>({
    fullName: '',
    businessName: '',
    email: '',
    whatsapp: '',
    businessCategory: 'Corporate / Business Services',
    websiteType: 'Business Website',
    projectBudget: '₹25,000 – ₹75,000',
    projectDescription: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [inquiryReady, setInquiryReady] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const cityFilters = ['All Locations', 'Delhi NCR', 'Mumbai', 'Bengaluru', 'Indore'];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All Projects' || project.category === selectedCategory;
      const matchesCity =
        selectedCity === 'All Locations' ||
        project.location.toLowerCase().includes(selectedCity.toLowerCase());
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesCity && matchesSearch;
    });
  }, [selectedCategory, selectedCity, searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (
      !onNavigate ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }
    e.preventDefault();
    onNavigate(path);
  };

  const validateInquiryForm = () => {
    const errors: Record<string, string> = {};
    if (!formState.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!formState.businessName.trim()) {
      errors.businessName = 'Please enter your business or organization name';
    }
    if (!formState.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formState.whatsapp.trim()) {
      errors.whatsapp = 'Please enter your WhatsApp or phone number';
    }
    if (!formState.projectDescription.trim() || formState.projectDescription.trim().length < 10) {
      errors.projectDescription = 'Please share a brief overview of your project requirements';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const formattedProjectBrief = useMemo(() => {
    return [
      `Hello Shriyansh (Aura AI Automations),`,
      `I would like to discuss a new web development project:`,
      ``,
      `• Full Name: ${formState.fullName}`,
      `• Business Name: ${formState.businessName}`,
      `• Email: ${formState.email}`,
      `• WhatsApp Number: ${formState.whatsapp}`,
      `• Business Category: ${formState.businessCategory}`,
      `• Website Type Required: ${formState.websiteType}`,
      `• Estimated Budget: ${formState.projectBudget}`,
      `• Project Description: ${formState.projectDescription}`,
    ].join('\n');
  }, [formState]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInquiryForm()) return;
    setInquiryReady(true);
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(formattedProjectBrief);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setCopiedBrief(false);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/919753646417?text=${encodeURIComponent(
    formattedProjectBrief
  )}`;
  const emailInquiryUrl = `mailto:${FOUNDER_PROFILE.email}?subject=${encodeURIComponent(
    `New Project Inquiry — ${formState.businessName || formState.fullName} (${formState.websiteType})`
  )}&body=${encodeURIComponent(formattedProjectBrief)}`;

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 selection:bg-violet-600 selection:text-white overflow-x-hidden">
      {/* =====================================================================
          1 & 2. HERO SECTION – PREMIUM DEVELOPER & AGENCY INTRODUCTION
      ====================================================================== */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 border-b border-white/[0.08] overflow-hidden">
        {/* Subtle Ambient Agency Spotlights */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/4 -translate-x-1/2 w-[540px] h-[540px] rounded-full bg-violet-600/18 blur-[130px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-10 w-[480px] h-[480px] rounded-full bg-sky-500/15 blur-[130px] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Brand Identity, Headline, Credentials & Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Brand Identity Kicker */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-sky-400">
                <span className="font-bold tracking-wider uppercase text-white">
                  {FOUNDER_PROFILE.companyName}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{FOUNDER_PROFILE.tagline}</span>
              </div>

              {/* Main Hero Headline */}
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                {FOUNDER_PROFILE.heroHeadline}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                {FOUNDER_PROFILE.heroSupportingText}
              </p>

              {/* Founder Identity & Credentials Block */}
              <div className="pt-2 pb-1 border-y border-white/[0.08] py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    Founder &amp; Lead Developer
                  </div>
                  <div className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                    {FOUNDER_PROFILE.founderName}
                  </div>
                  <div className="text-xs sm:text-sm text-sky-400 font-medium mt-0.5">
                    {FOUNDER_PROFILE.roleTitle}
                  </div>
                </div>

                <div className="sm:border-l sm:border-white/[0.08] sm:pl-5 flex flex-col justify-center">
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {FOUNDER_PROFILE.architectTitle}
                  </div>
                  <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{FOUNDER_PROFILE.availabilityText} — Pan-India &amp; Global</span>
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => scrollToSection('featured-projects')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 text-white font-bold text-sm sm:text-base shadow-[0_12px_32px_rgba(99,102,241,0.35)] transition-all cursor-pointer whitespace-nowrap shrink-0 group"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('project-inquiry')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm sm:text-base border border-white/[0.14] transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Let&apos;s Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Developer Portrait Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-md rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 sm:p-5 border border-white/[0.12] shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                {/* Clean Studio Frame for the Founder's Photograph */}
                <div className="relative bg-white rounded-2xl p-3 sm:p-4 overflow-hidden flex items-center justify-center h-80 sm:h-96">
                  <picture className="w-full h-full flex items-center justify-center">
                    <source srcSet={FOUNDER_PROFILE.portraitAvifSrc} type="image/avif" />
                    <source srcSet={FOUNDER_PROFILE.portraitSrc} type="image/webp" />
                    <img
                      src={FOUNDER_PROFILE.portraitSrc}
                      alt={FOUNDER_PROFILE.portraitAlt}
                      width={1024}
                      height={1536}
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-contain object-center select-none"
                    />
                  </picture>
                </div>

                {/* Portrait Caption Footer */}
                <div className="pt-4 px-1 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-display text-base sm:text-lg font-bold text-white">
                      {FOUNDER_PROFILE.founderName}
                    </div>
                    <div className="text-xs text-slate-400">
                      {FOUNDER_PROFILE.roleTitle} · {FOUNDER_PROFILE.architectTitle}
                    </div>
                  </div>
                  <a
                    href={FOUNDER_PROFILE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-semibold text-sky-400 transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-Width Key Highlights Strip Below Hero Split */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Delivered Portfolio</div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white mt-1 tabular-nums">
                17+ Featured Flagships
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Delhi NCR · Mumbai · Bengaluru · Indore</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Core Architecture</div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                React, Next.js &amp; Node
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Full-stack &amp; cloud-native systems</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Service Capabilities</div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white mt-1 tabular-nums">
                12 Specialized Verticals
              </div>
              <div className="text-xs text-slate-400 mt-0.5">eCommerce, Healthcare, SaaS &amp; Hospitality</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Direct Leadership</div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Founder-Led Delivery
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Shriyansh Singh Rajpoot</div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. FOUNDER INTRODUCTION & ABOUT ME SECTION
      ====================================================================== */}
      <section id="about-founder" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#080C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
                01. Founder &amp; Lead Architect
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
                style={{ textWrap: 'balance' }}
              >
                About {FOUNDER_PROFILE.founderName}
              </h2>
              <p className="text-sm text-slate-400 mt-3">
                {FOUNDER_PROFILE.roleTitle} · {FOUNDER_PROFILE.tagline}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
              {FOUNDER_PROFILE.introductionParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-slate-200 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <span>
                  Founder &amp; Developer: <strong className="text-white">{FOUNDER_PROFILE.founderName}</strong>
                </span>
                <span>
                  Company: <strong className="text-white">Aura AI Automations</strong>
                </span>
              </div>
            </div>
          </div>

          {/* 9 Core Expertise Areas Grid */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Core Engineering &amp; Product Expertise
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Nine specialized disciplines powering high-converting business websites and scalable applications.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ABOUT_EXPERTISE_AREAS.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-violet-500/40 p-6 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-sky-400 tabular-nums">
                        0{idx + 1}
                      </span>
                      <Code2 className="w-4 h-4 text-violet-400" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-300/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. MY SERVICES SECTION (12 PREMIUM SERVICE CARDS)
      ====================================================================== */}
      <section id="portfolio-services" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#060913]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
              02. Specialized Digital Capabilities
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Web Development &amp; Digital Solutions We Deliver
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              End-to-end design, engineering, and deployment tailored to your industry—from high-converting business websites to custom enterprise web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#0B1022] border border-white/[0.08] hover:border-sky-400/40 p-6 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Visual Preview Header */}
                <div
                  className={`rounded-xl bg-gradient-to-br ${service.accentGradient} border border-white/[0.07] p-4 mb-5 flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#060913]/90 border border-white/[0.1] flex items-center justify-center">
                      {renderServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 tabular-nums">
                        SERVICE {service.number}
                      </div>
                      <div className="text-xs font-semibold text-sky-300">
                        {service.categoryTag}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300/90 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                {/* Unboxed Deliverables Metadata */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  {service.deliverables.map((deliv, i) => (
                    <React.Fragment key={deliv}>
                      {i > 0 && <span aria-hidden="true">·</span>}
                      <span>{deliv}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. FEATURED PROJECTS / MY PORTFOLIO (17 COMPLETED PROJECTS)
      ====================================================================== */}
      <section id="featured-projects" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#080C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
                03. Featured Projects &amp; Live Deployments
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Featured Projects Delivered Across India
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                Explore completed web platforms, eCommerce storefronts, hospitality portals, healthcare systems, and custom web applications built and delivered by{' '}
                <strong className="text-white">{FOUNDER_PROFILE.founderName}</strong> &amp;{' '}
                <strong className="text-white">Aura AI Automations</strong> across Delhi NCR, Mumbai, Bengaluru, and Indore.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search brand, city, or tech..."
                  aria-label="Search portfolio projects"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Bar (Functional Buttons) */}
          <div className="space-y-3 mb-10">
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar"
            >
              {PORTFOLIO_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600 to-sky-500 text-white shadow-sm'
                        : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.07]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Secondary City Filter Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <span className="text-xs text-slate-400 mr-1 whitespace-nowrap">Region:</span>
                {cityFilters.map((city) => {
                  const active = selectedCity === city;
                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setSelectedCity(city)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40'
                          : 'text-slate-400 hover:text-slate-200 bg-white/[0.02] border border-white/[0.06]'
                      }`}
                    >
                      {city}
                    </button>
                  );
                })}
              </div>

              <div className="text-xs text-slate-400 font-mono tabular-nums">
                Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} live projects
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-12 text-center space-y-4">
              <p className="text-base text-slate-300">
                No projects matched your current filter combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All Projects');
                  setSelectedCity('All Locations');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group rounded-2xl bg-[#0B1022] border border-white/[0.09] hover:border-sky-400/50 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-[0_14px_34px_rgba(0,0,0,0.35)]"
                >
                  <div>
                    {/* Visual Browser Preview */}
                    <ProjectBrowserPreview project={project} />

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Unboxed Category & Location Metadata */}
                      <div className="flex items-center gap-2 text-xs text-sky-400 font-medium mb-2">
                        <span>{project.category}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          {project.location}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                        {project.name}{' '}
                        <span className="text-sm font-normal text-slate-400">
                          ({project.location})
                        </span>
                      </h3>

                      {/* Short Description */}
                      <p className="text-sm text-slate-300/90 leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>

                      {/* Technologies Used (Clean Unboxed Typography with Separators) */}
                      <div className="pt-3 border-t border-white/[0.08]">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-200">
                          {project.technologies.map((tech, idx) => (
                            <React.Fragment key={tech}>
                              {idx > 0 && <span className="text-slate-600">·</span>}
                              <span>{tech}</span>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Explicit Live Website URL */}
                      <div className="mt-3 text-xs font-mono text-slate-400 truncate">
                        Live URL:{' '}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-400 hover:underline"
                        >
                          {project.liveUrl}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action Buttons: Live Website & View Project */}
                  <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 text-white text-xs font-bold transition-all whitespace-nowrap shrink-0"
                    >
                      <span>Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white text-xs font-semibold transition-all whitespace-nowrap shrink-0"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          6. ENTERPRISE & BUSINESS SOLUTIONS ("Digital Solutions for Businesses Across India")
      ====================================================================== */}
      <section id="enterprise-solutions" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#060913]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
              04. Pan-India Enterprise Delivery
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Digital Solutions for Businesses Across India
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              We build modern digital experiences for startups, growing businesses, and established organizations. Our solutions are designed to meet different business requirements, from local businesses to enterprise-level digital platforms.
            </p>
          </div>

          {/* 6 Enterprise-Ready Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {ENTERPRISE_SOLUTIONS_LIST.map((sol) => (
              <div
                key={sol.title}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 hover:border-violet-500/40 transition-colors"
              >
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {sol.title}
                </h3>
                <p className="text-sm text-slate-300/90 leading-relaxed">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>

          {/* Major Business Markets Served Across India */}
          <div className="rounded-2xl bg-[#0B1022] border border-white/[0.08] p-6 sm:p-8 mb-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Major Business Markets We Serve
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Delivering localized SEO, high-speed cloud hosting, and custom web platforms across key Indian hubs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INDIA_BUSINESS_MARKETS.map((market) => (
                <div
                  key={market.city}
                  className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4"
                >
                  <div className="flex items-center gap-2 font-display text-base font-bold text-white mb-1">
                    <Compass className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{market.city}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {market.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trusted By Leading Brands & Enterprises We Have Worked With */}
          <div>
            <div className="max-w-3xl mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Trusted By Leading Brands &amp; Enterprises We Have Worked With
              </h3>
              <p className="text-sm sm:text-base text-slate-400 mt-2">
                Click any brand card below to explore the live web platforms built and supported across Delhi NCR, Mumbai, Bengaluru, and Indore.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {TRUSTED_ENTERPRISE_BRANDS.map((group) => (
                <div
                  key={group.region}
                  className="rounded-2xl bg-[#0B1022] border border-white/[0.09] p-6 sm:p-7"
                >
                  <div className="border-b border-white/[0.08] pb-4 mb-5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display text-xl font-bold text-white">
                        {group.region}
                      </h4>
                      <span className="text-xs font-mono text-sky-400">
                        {group.brands.length} Live Platforms
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{group.tagline}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.brands.map((brand) => (
                      <a
                        key={brand.name}
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/brand rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-sky-400/50 p-3.5 transition-all flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <div className="font-display text-sm font-bold text-white group-hover/brand:text-sky-300 transition-colors truncate">
                            {brand.name}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate mt-0.5">
                            {brand.sector}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/brand:text-sky-400 group-hover/brand:translate-x-0.5 group-hover/brand:-translate-y-0.5 transition-transform shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. TECHNOLOGY STACK SECTION
      ====================================================================== */}
      <section id="portfolio-tech-stack" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#080C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
              05. Modern Engineering Stack
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Technology Stack &amp; Cloud Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              We use battle-tested frontend frameworks, real-time databases, and global edge infrastructure to build fast, maintainable products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_TECH_STACK.map((stackGroup, idx) => (
              <div
                key={stackGroup.category}
                className="rounded-2xl bg-[#0B1022] border border-white/[0.08] p-6 sm:p-7"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-sky-400">
                    {idx === 0 && <Layers className="w-4 h-4" />}
                    {idx === 1 && <Database className="w-4 h-4" />}
                    {idx === 2 && <Cloud className="w-4 h-4" />}
                    {idx === 3 && <Wrench className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {stackGroup.category}
                    </h3>
                    <p className="text-xs text-slate-400">{stackGroup.subtitle}</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stackGroup.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-3.5 flex items-start gap-3"
                    >
                      <Terminal
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: tech.accent }}
                      />
                      <div>
                        <div className="font-display text-sm font-bold text-white">
                          {tech.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {tech.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. MY DEVELOPMENT PROCESS TIMELINE (01 – 06)
      ====================================================================== */}
      <section id="development-process" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#060913]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
              06. How We Work
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              My Development Process
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              A transparent, milestone-driven six-stage engineering workflow from initial discovery to production launch and long-term support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVELOPMENT_PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-[#0B1022] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-2xl font-extrabold text-sky-400 tabular-nums">
                      {item.step}
                    </span>
                    <span className="text-xs font-mono text-slate-500 uppercase">
                      Stage {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. WHY CHOOSE AURA AI AUTOMATIONS?
      ====================================================================== */}
      <section id="why-choose-aura" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#080C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
              07. The Aura Advantage
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Why Choose Aura AI Automations?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              We combine agency-grade design polish with disciplined full-stack engineering so your digital platform becomes a lasting competitive asset.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE_AURA_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/40 p-6 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-400/25 flex items-center justify-center text-sky-400 mb-4">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-300/90 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. PROJECT INQUIRY SECTION (CLIENT INQUIRY FORM)
      ====================================================================== */}
      <section id="project-inquiry" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#060913]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
              08. Start Your Digital Transformation
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Project Inquiry &amp; Custom Proposal
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Share your business details and project goals below. Work directly with{' '}
              <strong className="text-white">{FOUNDER_PROFILE.founderName}</strong> to architect and launch your website or custom application.
            </p>
          </div>

          <div className="rounded-3xl bg-[#0B1022] border border-white/[0.1] p-6 sm:p-8 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <form onSubmit={handleInquirySubmit} noValidate className="space-y-5">
              {/* Row 1: Full Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="portfolio-fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Full Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="portfolio-fullName"
                    type="text"
                    value={formState.fullName}
                    onChange={(e) => {
                      setFormState({ ...formState, fullName: e.target.value });
                      if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                    }}
                    placeholder="e.g. Rajesh Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors ${
                      formErrors.fullName ? 'border-rose-500' : 'border-white/[0.1]'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-xs text-rose-400 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="portfolio-businessName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Business Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="portfolio-businessName"
                    type="text"
                    value={formState.businessName}
                    onChange={(e) => {
                      setFormState({ ...formState, businessName: e.target.value });
                      if (formErrors.businessName)
                        setFormErrors({ ...formErrors, businessName: '' });
                    }}
                    placeholder="e.g. Apex Enterprises Pvt. Ltd."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors ${
                      formErrors.businessName ? 'border-rose-500' : 'border-white/[0.1]'
                    }`}
                  />
                  {formErrors.businessName && (
                    <p className="text-xs text-rose-400 mt-1">{formErrors.businessName}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Email Address & WhatsApp Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="portfolio-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Email Address <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="portfolio-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => {
                      setFormState({ ...formState, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                    }}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors ${
                      formErrors.email ? 'border-rose-500' : 'border-white/[0.1]'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-rose-400 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="portfolio-whatsapp"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    WhatsApp Number <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="portfolio-whatsapp"
                    type="tel"
                    value={formState.whatsapp}
                    onChange={(e) => {
                      setFormState({ ...formState, whatsapp: e.target.value });
                      if (formErrors.whatsapp) setFormErrors({ ...formErrors, whatsapp: '' });
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors ${
                      formErrors.whatsapp ? 'border-rose-500' : 'border-white/[0.1]'
                    }`}
                  />
                  {formErrors.whatsapp && (
                    <p className="text-xs text-rose-400 mt-1">{formErrors.whatsapp}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Business Category, Website Type Required & Project Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label
                    htmlFor="portfolio-businessCategory"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Business Category
                  </label>
                  <select
                    id="portfolio-businessCategory"
                    value={formState.businessCategory}
                    onChange={(e) =>
                      setFormState({ ...formState, businessCategory: e.target.value })
                    }
                    className="w-full px-3.5 py-3 rounded-xl bg-[#11172E] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="Corporate / Business Services">Corporate / Business Services</option>
                    <option value="Retail & D2C eCommerce">Retail &amp; D2C eCommerce</option>
                    <option value="Restaurant, Cafe & Hospitality">Restaurant, Cafe &amp; Hospitality</option>
                    <option value="Salon, Spa & Beauty Studio">Salon, Spa &amp; Beauty Studio</option>
                    <option value="Healthcare, Clinic & Hospital">Healthcare, Clinic &amp; Hospital</option>
                    <option value="Real Estate & Construction">Real Estate &amp; Construction</option>
                    <option value="Fintech, SaaS & Startups">Fintech, SaaS &amp; Startups</option>
                    <option value="Education & Coaching">Education &amp; Coaching</option>
                    <option value="Other Industry">Other Industry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="portfolio-websiteType"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Website Type Required
                  </label>
                  <select
                    id="portfolio-websiteType"
                    value={formState.websiteType}
                    onChange={(e) =>
                      setFormState({ ...formState, websiteType: e.target.value })
                    }
                    className="w-full px-3.5 py-3 rounded-xl bg-[#11172E] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="eCommerce Website">eCommerce Website</option>
                    <option value="Restaurant & Food Ordering Website">Restaurant &amp; Food Ordering Website</option>
                    <option value="Salon & Beauty Studio Website">Salon &amp; Beauty Studio Website</option>
                    <option value="Healthcare & Clinic Website">Healthcare &amp; Clinic Website</option>
                    <option value="Landing Page">High-Converting Landing Page</option>
                    <option value="Custom Admin Panel">Custom Admin Panel / CRM</option>
                    <option value="Booking & Appointment System">Booking &amp; Appointment System</option>
                    <option value="Portfolio Website">Portfolio Website</option>
                    <option value="Custom Web Application">Custom Web Application</option>
                    <option value="PWA Development">Progressive Web App (PWA)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="portfolio-projectBudget"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Project Budget
                  </label>
                  <select
                    id="portfolio-projectBudget"
                    value={formState.projectBudget}
                    onChange={(e) =>
                      setFormState({ ...formState, projectBudget: e.target.value })
                    }
                    className="w-full px-3.5 py-3 rounded-xl bg-[#11172E] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="₹15,000 – ₹35,000">₹15,000 – ₹35,000</option>
                    <option value="₹35,000 – ₹75,000">₹35,000 – ₹75,000</option>
                    <option value="₹75,000 – ₹1,50,000">₹75,000 – ₹1,50,000</option>
                    <option value="₹1,50,000 – ₹3,00,000+">₹1,50,000 – ₹3,00,000+</option>
                    <option value="Custom Enterprise Scope">Custom Enterprise Scope</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Project Description */}
              <div>
                <label
                  htmlFor="portfolio-projectDescription"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Project Description <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="portfolio-projectDescription"
                  rows={4}
                  value={formState.projectDescription}
                  onChange={(e) => {
                    setFormState({ ...formState, projectDescription: e.target.value });
                    if (formErrors.projectDescription)
                      setFormErrors({ ...formErrors, projectDescription: '' });
                  }}
                  placeholder="Tell us about your project goals, features needed (e.g., online payments, appointment booking, admin panel), and desired launch timeline..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-y ${
                    formErrors.projectDescription ? 'border-rose-500' : 'border-white/[0.1]'
                  }`}
                />
                {formErrors.projectDescription && (
                  <p className="text-xs text-rose-400 mt-1">{formErrors.projectDescription}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 text-white font-bold text-sm sm:text-base shadow-[0_12px_32px_rgba(99,102,241,0.35)] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Start Your Project</span>
                </button>
              </div>
            </form>

            {/* Honest Direct Dispatch Panel once validated */}
            {inquiryReady && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-6 border-t border-white/[0.1] rounded-2xl bg-white/[0.03] p-5 sm:p-6 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      Your Project Brief is Ready for Direct Founder Review
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Choose your preferred channel below to send this structured inquiry directly to{' '}
                      <strong className="text-white">{FOUNDER_PROFILE.founderName}</strong> on WhatsApp ({FOUNDER_PROFILE.whatsappNumber}) or via Email:
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp (9753646417)</span>
                  </a>

                  <a
                    href={emailInquiryUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold transition-colors whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email ({FOUNDER_PROFILE.email})</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Copied Brief</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-300" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. CONTACT SECTION (DIRECT FOUNDER & AGENCY DETAILS)
      ====================================================================== */}
      <section id="portfolio-contact" className="py-20 md:py-24 bg-[#080C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0F1734] via-[#0B1022] to-[#080C1A] border border-white/[0.1] p-8 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                  09. Direct Contact Details
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Ready to Build Your Next Digital Flagship?
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                  Connect directly with Founder &amp; Lead Developer{' '}
                  <strong className="text-white">{FOUNDER_PROFILE.founderName}</strong> for custom website development, eCommerce engineering, and enterprise digital solutions.
                </p>

                {/* Explicit Contact Details Grid */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4">
                    <div className="text-xs text-slate-400">Company</div>
                    <div className="font-display font-bold text-white mt-0.5">
                      Aura AI Automations
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4">
                    <div className="text-xs text-slate-400">Founder &amp; Developer</div>
                    <div className="font-display font-bold text-white mt-0.5">
                      {FOUNDER_PROFILE.founderName}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4">
                    <div className="text-xs text-slate-400">Official Website</div>
                    <a
                      href="https://www.auraaiautomation.online/"
                      onClick={(e) => handleInternalLink(e, '/')}
                      className="font-mono text-xs sm:text-sm font-semibold text-sky-400 hover:underline mt-0.5 block truncate"
                    >
                      https://www.auraaiautomation.online/
                    </a>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4">
                    <div className="text-xs text-slate-400">WhatsApp Direct</div>
                    <a
                      href={FOUNDER_PROFILE.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-bold text-emerald-400 hover:underline mt-0.5 block tabular-nums"
                    >
                      {FOUNDER_PROFILE.whatsappNumber}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column Action Buttons */}
              <div className="lg:col-span-5 flex flex-col gap-3.5">
                <a
                  href={FOUNDER_PROFILE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact on WhatsApp ({FOUNDER_PROFILE.whatsappNumber})</span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('project-inquiry')}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 text-white font-bold text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>

                <a
                  href="/"
                  onClick={(e) => handleInternalLink(e, '/')}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white font-semibold text-sm sm:text-base transition-all whitespace-nowrap"
                >
                  <Globe className="w-4 h-4 text-sky-400" />
                  <span>Visit Main Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
