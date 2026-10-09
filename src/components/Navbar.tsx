import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AuraLogo } from './AuraLogo';
import { SocialButtonsRow } from './SocialLinks';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Company', href: '#about' },
    { label: 'Milestones', href: '#impact' },
    { label: 'Services', href: '#services' },
    { label: 'Originals', href: '#originals' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#faf9f6]/90 border-b border-slate-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Official Brand Logo */}
        <a 
          href="#" 
          className="group flex items-center whitespace-nowrap shrink-0 select-none py-1"
          aria-label="Aura AI Automations Home"
        >
          <AuraLogo height={34} />
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#e91e63] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Socials & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:flex items-center">
            <SocialButtonsRow />
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
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-[#faf9f6]/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
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
              <SocialButtonsRow />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
