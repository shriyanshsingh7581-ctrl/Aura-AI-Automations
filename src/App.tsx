import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceImpactSection } from './components/ExperienceImpactSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';
import { ServiceLandingPage } from './components/ServiceLandingPage';
import {
  HOME_SEO,
  SERVICE_PAGES,
  getHomepageJsonLd,
  getServicePageJsonLd,
} from './data/seoPages';

const VoiceSimulatorModal = lazy(() =>
  import('./components/VoiceSimulatorModal').then((m) => ({
    default: m.VoiceSimulatorModal,
  }))
);

const BookingModal = lazy(() =>
  import('./components/BookingModal').then((m) => ({
    default: m.BookingModal,
  }))
);

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '');
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [voiceSimOpen, setVoiceSimOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(() =>
    typeof window !== 'undefined'
      ? normalizePathname(window.location.pathname)
      : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (targetUrl: string) => {
    const [rawPath, hashPart] = targetUrl.split('#');
    const nextPath = normalizePathname(rawPath || '/');

    if (nextPath !== currentPath) {
      window.history.pushState({}, '', targetUrl);
      setCurrentPath(nextPath);
      if (hashPart) {
        setTimeout(() => {
          const el = document.getElementById(hashPart);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (hashPart) {
      window.history.pushState({}, '', targetUrl);
      const el = document.getElementById(hashPart);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToOriginals = () => {
    const el = document.getElementById('originals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slug = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath;
  const activeServicePage = SERVICE_PAGES[slug] || null;

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#0f172a] flex flex-col font-sans selection:bg-[#e91e63] selection:text-white">
      {/* Dynamic SEO Head & Structured Data */}
      {activeServicePage ? (
        <SeoHead
          title={activeServicePage.seoTitle}
          description={activeServicePage.metaDescription}
          canonicalUrl={activeServicePage.canonicalUrl}
          jsonLd={getServicePageJsonLd(activeServicePage)}
        />
      ) : (
        <SeoHead
          title={HOME_SEO.title}
          description={HOME_SEO.description}
          canonicalUrl={HOME_SEO.canonicalUrl}
          jsonLd={getHomepageJsonLd()}
        />
      )}

      {/* Navigation */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        {activeServicePage ? (
          <ServiceLandingPage
            page={activeServicePage}
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingOpen(true)}
            onTestVoiceAgent={() => setVoiceSimOpen(true)}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onOpenBooking={() => setBookingOpen(true)}
              onExploreOriginals={scrollToOriginals}
              onTestVoiceAgent={() => setVoiceSimOpen(true)}
            />

            {/* 2. About Us / Company Introduction Section */}
            <AboutSection
              onOpenBooking={() => setBookingOpen(true)}
            />

            {/* 2.5. Proven Impact & Milestones */}
            <ExperienceImpactSection />

            {/* 3. Core Services / Expertise */}
            <ServicesSection
              onOpenVoiceSimulator={() => setVoiceSimOpen(true)}
              onOpenBooking={() => setBookingOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 4. Featured Originals (Projects Portfolio) */}
            <ProjectsSection
              onOpenBooking={() => setBookingOpen(true)}
            />

            {/* 5. Tech Stack & Integrations */}
            <TechStackSection />

            {/* 6. Get In Touch (Contact Section) */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setBookingOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Interactive Modals (Lazy-loaded for optimal INP & bundle size) */}
      <Suspense fallback={null}>
        {voiceSimOpen && (
          <VoiceSimulatorModal
            isOpen={voiceSimOpen}
            onClose={() => setVoiceSimOpen(false)}
            onScheduleRealCall={() => {
              setVoiceSimOpen(false);
              setBookingOpen(true);
            }}
          />
        )}

        {bookingOpen && (
          <BookingModal
            isOpen={bookingOpen}
            onClose={() => setBookingOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}
