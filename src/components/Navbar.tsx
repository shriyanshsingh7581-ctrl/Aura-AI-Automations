import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AuraLogo } from './AuraLogo';
import { SocialButtonsRow } from './SocialLinks';
import { ALL_SERVICE_PAGES_LIST } from '../data/seoPages';

interface NavbarProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath = '/' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isPortfolioPage = currentPath === '/portfolio';

  const navLinks = [
    { label: 'Company', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Our Portfolio', href: '/portfolio' },
    { label: 'Originals', href: '/#originals' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

    const isSamePageHash =
      (window.location.pathname === '/' || window.location.pathname === '') &&
      href.startsWith('/#');

    if (isSamePageHash) {
      const targetId = href.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    e.preventDefault();
    onNavigate(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all border-b ${
        isPortfolioPage
          ? 'bg-[#060913]/90 border-white/[0.08]'
          : 'bg-[#faf9f6]/90 border-slate-200/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Official Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="group flex items-center whitespace-nowrap shrink-0 select-none py-1"
          aria-label="Aura AI Automations Home"
        >
          <AuraLogo height={34} theme={isPortfolioPage ? 'dark' : 'light'} />
        </a>

        {/* Zone 2: Concise single-line text links */}
        <nav
          aria-label="Primary Navigation"
          className={`hidden md:flex items-center gap-8 text-sm font-medium ${
            isPortfolioPage ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = link.href === '/portfolio' && isPortfolioPage;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-transform after:origin-left ${
                  isPortfolioPage
                    ? isActive
                      ? 'text-sky-400 font-semibold after:bg-sky-400 after:scale-x-100'
                      : 'hover:text-white after:bg-sky-400 after:scale-x-0 hover:after:scale-x-100'
                    : isActive
                    ? 'text-[#e91e63] font-semibold after:bg-[#e91e63] after:scale-x-100'
                    : 'hover:text-slate-900 after:bg-[#e91e63] after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Socials & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:flex items-center">
            <SocialButtonsRow darkTheme={isPortfolioPage} />
          </div>

          <a
            href="https://app.auraai.sbs"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e91e63] hover:bg-[#d81557] active:scale-98 rounded-full transition-all shadow-[0_4px_16px_rgba(233,30,99,0.35)] whitespace-nowrap shrink-0 group cursor-pointer"
          >
            <span>Create Voice Calling Agent</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isPortfolioPage
                ? 'text-slate-200 hover:bg-white/10'
                : 'text-slate-700 hover:bg-slate-200/60'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 ${
            isPortfolioPage
              ? 'border-white/10 bg-[#060913]/95 text-slate-200'
              : 'border-slate-200 bg-[#faf9f6]/95 text-slate-700'
          }`}
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isPortfolioPage
                    ? 'text-slate-200 hover:text-white hover:bg-white/10'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className={`pt-2 border-t ${
              isPortfolioPage ? 'border-white/10' : 'border-slate-200/80'
            }`}
          >
            <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1.5">
              Dedicated AI Solutions
            </span>
            <div className="grid grid-cols-1 gap-1">
              {ALL_SERVICE_PAGES_LIST.map((sp) => (
                <a
                  key={sp.slug}
                  href={sp.path}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, sp.path);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                    isPortfolioPage
                      ? 'text-slate-300 hover:text-sky-400 hover:bg-white/5'
                      : 'text-slate-700 hover:text-[#e91e63] hover:bg-pink-50/60'
                  }`}
                >
                  {sp.shortTitle}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2 space-y-3">
            <a
              href="https://app.auraai.sbs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#e91e63] hover:bg-[#d81557] rounded-full shadow-md shadow-pink-500/25"
            >
              <span>Create Voice Calling Agent</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center pt-1">
              <SocialButtonsRow darkTheme={isPortfolioPage} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
