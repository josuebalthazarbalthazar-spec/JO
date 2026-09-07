import React from 'react';
import { Phone, MessageSquare, Mail, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';
import { TechLabLogo } from './TechLabLogo';

interface FooterProps {
  onNavigateView?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateView }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent, sectionId?: string, view?: string) => {
    e.preventDefault();
    if (view && onNavigateView) {
      onNavigateView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onNavigateView) {
      onNavigateView('home');
      setTimeout(() => {
        if (sectionId) {
          const el = document.querySelector(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-[#071426] text-[#94A3B8] border-t border-[#111827] pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-navy-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#1E293B]">
          
          {/* Brand Identity & Institutional Summary (5 cols) */}
          <div className="md:col-span-6 space-y-4">
            <TechLabLogo variant="footer" showSlogan />
            
            <p className="text-sm text-slate-300 font-medium font-heading">
              Tech Lab — Tecnologia que move negócios.
            </p>

            <p className="text-xs text-[#68707C] leading-relaxed max-w-md font-normal">
              Estúdio de tecnologia, engenharia de software sob medida, produtos digitais, sistemas operacionais e capacitação técnica para Angola.
            </p>

            <div className="text-xs font-mono text-[#20D9D2] pt-2">
              Luanda · Malanje · Angola
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block mb-4">
              Navegação
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleNav(e, '#servicos')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  onClick={(e) => handleNav(e, '#projetos')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#academy"
                  onClick={(e) => handleNav(e, '#academy')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Tech Lab Academy
                </a>
              </li>
              <li>
                <a
                  href="/simulador"
                  onClick={(e) => handleNav(e, undefined, 'simulador')}
                  className="text-[#19A7FF] hover:text-white transition-colors block py-0.5 font-semibold"
                >
                  Simulador de Projetos
                </a>
              </li>
              <li>
                <a
                  href="/orcamento"
                  onClick={(e) => handleNav(e, undefined, 'orcamento')}
                  className="text-[#20D9D2] hover:text-white transition-colors block py-0.5 font-semibold"
                >
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Icons Only - Section 26 Mandate (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block mb-4">
              Canais de Contacto
            </span>
            <p className="text-[11px] text-[#68707C] mb-3">
              Comunicação direta com a equipa de engenharia:
            </p>

            {/* Icon Contact Row with Tooltips - NO PLAINTEXT NUMBERS OR EMAILS */}
            <div className="flex items-center gap-3">
              
              {/* Phone Icon */}
              <a
                href="tel:+244937656106"
                title="Ligar para a Tech Lab"
                className="w-10 h-10 rounded-lg bg-[#0B1220] border border-[#1E293D] hover:border-[#087BEF] hover:bg-[#087BEF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Telefone Tech Lab"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* WhatsApp Icon */}
              <a
                href={COMPANY_INFO.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir WhatsApp da Tech Lab"
                className="w-10 h-10 rounded-lg bg-[#0B1220] border border-[#1E293D] hover:border-[#25D366] hover:bg-[#25D366] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="WhatsApp Tech Lab"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Email Icon */}
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Contacto Tech Lab')}`}
                title="Enviar Email para a Tech Lab"
                className="w-10 h-10 rounded-lg bg-[#0B1220] border border-[#1E293D] hover:border-[#19A7FF] hover:bg-[#19A7FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Email Tech Lab"
              >
                <Mail className="w-4 h-4" />
              </a>

            </div>

            <div className="pt-3">
              <span className="text-[10px] font-mono text-[#68707C] block">
                Atendimento: Segunda a Sábado
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Geo Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#68707C]">
          <div>
            © {currentYear} Tech Lab Angola. Todos os direitos reservados.
          </div>
          <div className="text-[11px] text-[#94A3B8]">
            Luanda · Malanje · Angola
          </div>
        </div>

      </div>
    </footer>
  );
};
