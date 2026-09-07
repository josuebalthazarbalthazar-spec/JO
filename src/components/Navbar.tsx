import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { TechLabLogo } from './TechLabLogo';
import { COMPANY_INFO } from '../data/techLabData';

interface NavbarProps {
  currentView?: string;
  onNavigateView?: (view: string) => void;
  onOpenWhatsApp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView = 'home',
  onNavigateView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', sectionId: '#servicos' },
    { label: 'Projetos', sectionId: '#projetos' },
    { label: 'Academy', sectionId: '#academy' },
    { label: 'Sobre', sectionId: '#sobre' },
    { label: 'Contacto', sectionId: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentView !== 'home' && onNavigateView) {
      onNavigateView('home');
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (view: string) => {
    setMobileMenuOpen(false);
    if (onNavigateView) {
      onNavigateView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F3F1EA]/95 backdrop-blur-md py-3.5 border-b border-[#D9DCE1]'
          : 'bg-[#F3F1EA] py-5 border-b border-[#E3E1D8]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Left: Logo Tech Lab */}
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="flex items-center text-left cursor-pointer group focus:outline-none"
          aria-label="Tech Lab — Página Inicial"
        >
          <TechLabLogo variant="navbar" />
        </button>

        {/* Center: Essential Editorial Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.sectionId}
              onClick={(e) => handleLinkClick(e, item.sectionId)}
              className="text-sm font-medium text-[#68707C] hover:text-[#071426] transition-colors relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#087BEF] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
          <button
            type="button"
            onClick={() => handleNavigate('simulador')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentView === 'simulador' ? 'text-[#087BEF] font-semibold' : 'text-[#68707C] hover:text-[#071426]'
            }`}
          >
            Simulador
          </button>
        </nav>

        {/* Right Group: Icons Only (Phone, WhatsApp, Email) + CTA */}
        <div className="hidden sm:flex items-center gap-4">
          
          {/* Group of Icons: strictly no text, phone or email visible */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white border border-[#D9DCE1]">
            
            {/* Phone Icon */}
            <a
              href="tel:+244937656106"
              className="w-8 h-8 rounded flex items-center justify-center text-[#68707C] hover:text-[#071426] hover:bg-[#F3F1EA] transition-colors relative group"
              aria-label="Ligar para a Tech Lab"
              title="Ligar para a Tech Lab"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#071426] text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-sm">
                Ligar
              </span>
            </a>

            {/* WhatsApp Icon */}
            <a
              href={COMPANY_INFO.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded flex items-center justify-center text-[#68707C] hover:text-[#25D366] hover:bg-[#F3F1EA] transition-colors relative group"
              aria-label="Falar com a Tech Lab pelo WhatsApp"
              title="Falar com a Tech Lab pelo WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#071426] text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-sm">
                WhatsApp
              </span>
            </a>

            {/* Email Icon */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-8 h-8 rounded flex items-center justify-center text-[#68707C] hover:text-[#087BEF] hover:bg-[#F3F1EA] transition-colors relative group"
              aria-label="Enviar email para a Tech Lab"
              title="Enviar email para a Tech Lab"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#071426] text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-sm">
                Email
              </span>
            </a>

          </div>

          {/* CTA: "Começar projeto" */}
          <button
            type="button"
            onClick={() => handleNavigate('orcamento')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#071426] hover:bg-[#087BEF] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
          >
            <span>Começar projeto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Mobile Actions: WhatsApp Icon + Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={COMPANY_INFO.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white border border-[#D9DCE1] flex items-center justify-center text-[#25D366]"
            aria-label="Falar com a Tech Lab pelo WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#071426] hover:bg-white/80 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D9DCE1] bg-[#F3F1EA] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-medium text-base">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.sectionId}
                onClick={(e) => handleLinkClick(e, item.sectionId)}
                className="text-[#071426] hover:text-[#087BEF] py-2 border-b border-[#E3E1D8]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => handleNavigate('simulador')}
              className="text-left text-[#071426] hover:text-[#087BEF] py-2 border-b border-[#E3E1D8] font-medium"
            >
              Simulador de Projetos
            </button>
          </nav>

          {/* Direct Icons Group in Mobile */}
          <div className="pt-3 flex items-center justify-around border-t border-[#D9DCE1]">
            <a
              href="tel:+244937656106"
              className="p-3 rounded-lg bg-white border border-[#D9DCE1] text-[#071426]"
              aria-label="Ligar para a Tech Lab"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={COMPANY_INFO.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white border border-[#D9DCE1] text-[#25D366]"
              aria-label="Falar com a Tech Lab pelo WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="p-3 rounded-lg bg-white border border-[#D9DCE1] text-[#087BEF]"
              aria-label="Enviar email para a Tech Lab"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => handleNavigate('orcamento')}
            className="w-full py-3.5 rounded-lg bg-[#071426] text-white text-sm font-semibold tracking-wide text-center"
          >
            Começar projeto
          </button>
        </div>
      )}
    </header>
  );
};
