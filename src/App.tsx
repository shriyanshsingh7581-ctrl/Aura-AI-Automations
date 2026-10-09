import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VoiceSimulatorModal } from './components/VoiceSimulatorModal';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [voiceSimOpen, setVoiceSimOpen] = useState(false);

  const scrollToOriginals = () => {
    const el = document.getElementById('originals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#0f172a] flex flex-col font-sans selection:bg-[#e91e63] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={() => setBookingOpen(true)}
          onExploreOriginals={scrollToOriginals}
          onTestVoiceAgent={() => setVoiceSimOpen(true)}
        />

        {/* 2. About Us Section */}
        <AboutSection
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 3. Core Services / Expertise */}
        <ServicesSection
          onOpenVoiceSimulator={() => setVoiceSimOpen(true)}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 4. Featured Originals (Projects Portfolio) */}
        <ProjectsSection
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 5. Tech Stack & Integrations */}
        <TechStackSection />

        {/* 6. Get In Touch (Contact Section) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Interactive Modals */}
      <VoiceSimulatorModal
        isOpen={voiceSimOpen}
        onClose={() => setVoiceSimOpen(false)}
        onScheduleRealCall={() => {
          setVoiceSimOpen(false);
          setBookingOpen(true);
        }}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
