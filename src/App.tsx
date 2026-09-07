import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactSection } from './components/ImpactSection';
import { ServicesSection } from './components/ServicesSection';
import { HomeSimulatorTeaser } from './components/HomeSimulatorTeaser';
import { PortfolioSection } from './components/PortfolioSection';
import { AcademySection } from './components/AcademySection';
import { AboutSection } from './components/AboutSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsAppCTA } from './components/FloatingWhatsAppCTA';
import { ProjectSimulator } from './components/ProjectSimulator';
import { DirectQuotePage } from './components/DirectQuotePage';
import { COMPANY_INFO } from './data/techLabData';

export default function App() {
  // Current view: 'home' | 'simulador' | 'orcamento'
  const [currentView, setCurrentView] = useState<string>('home');
  const [simulatorInitialService, setSimulatorInitialService] = useState<string>('website');

  // Synchronize with URL path and hash
  useEffect(() => {
    const parseLocation = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const urlParams = new URLSearchParams(window.location.search);
      const servicoParam = urlParams.get('servico');

      if (servicoParam) {
        setSimulatorInitialService(servicoParam);
      }

      if (path.includes('/simulador') || hash.includes('simulador')) {
        setCurrentView('simulador');
      } else if (path.includes('/orcamento') || hash.includes('orcamento')) {
        setCurrentView('orcamento');
      } else {
        setCurrentView('home');
      }
    };

    parseLocation();
    window.addEventListener('popstate', parseLocation);
    window.addEventListener('hashchange', parseLocation);
    return () => {
      window.removeEventListener('popstate', parseLocation);
      window.removeEventListener('hashchange', parseLocation);
    };
  }, []);

  const navigateToView = (view: string, serviceId?: string) => {
    setCurrentView(view);
    if (serviceId) {
      setSimulatorInitialService(serviceId);
    }
    const newPath = view === 'home' ? '/' : `/${view}`;
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsApp = (customText?: string) => {
    const url = customText
      ? `https://wa.me/244937656106?text=${encodeURIComponent(customText)}`
      : COMPANY_INFO.whatsappDefaultUrl;
    window.open(url, '_blank');
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      navigateToView('home');
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#111111] selection:bg-[#087BEF] selection:text-white font-sans">
      
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigateView={navigateToView}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Primary Views */}
      {currentView === 'home' && (
        <main>
          {/* 1. Hero */}
          <Hero
            onStartProject={() => navigateToView('orcamento')}
            onExploreServices={() => handleScrollToSection('#servicos')}
            onOpenWhatsApp={() => handleOpenWhatsApp()}
          />

          {/* 2. Impact Section: Da ideia à implementação */}
          <ImpactSection />

          {/* 3. Services: O que construímos (Software, Creative, Electronics, Academy) */}
          <ServicesSection
            onSelectServiceForSimulation={(serviceId) => navigateToView('simulador', serviceId)}
            onOpenWhatsApp={() => handleOpenWhatsApp('Olá Tech Lab! Gostaria de falar sobre as formações da Academy.')}
          />

          {/* 4. Home Simulator Teaser */}
          <HomeSimulatorTeaser
            onOpenSimulator={() => navigateToView('simulador')}
          />

          {/* 5. Projects / Portfolio: Kandongueiro+, Vitalis, Agriconecta */}
          <PortfolioSection
            onQuoteSimilar={(projectTitle) => navigateToView('orcamento')}
            onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
          />

          {/* 6. Tech Lab Academy (Navy) */}
          <AcademySection
            onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
          />

          {/* 7. Sobre a Tech Lab */}
          <AboutSection
            onStartProject={() => navigateToView('orcamento')}
          />

          {/* 8. Final CTA & Official Contacts */}
          <FinalCTA
            onStartProject={() => navigateToView('orcamento')}
            onOpenWhatsApp={() => handleOpenWhatsApp()}
          />
        </main>
      )}

      {currentView === 'simulador' && (
        <main>
          <ProjectSimulator
            initialServiceId={simulatorInitialService}
            onGoToHome={() => navigateToView('home')}
            onGoToQuote={(serviceId) => navigateToView('orcamento', serviceId)}
          />
        </main>
      )}

      {currentView === 'orcamento' && (
        <main>
          <DirectQuotePage
            onGoToSimulator={() => navigateToView('simulador')}
            onGoToHome={() => navigateToView('home')}
          />
        </main>
      )}

      {/* Global Navy Footer */}
      <Footer onNavigateView={navigateToView} />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsAppCTA onOpenWhatsApp={() => handleOpenWhatsApp()} />

    </div>
  );
}
