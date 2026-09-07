import React from 'react';
import { ArrowRight, Phone, MessageSquare, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';

interface FinalCTAProps {
  onStartProject: () => void;
  onOpenWhatsApp: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject, onOpenWhatsApp }) => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#071426] text-white border-b border-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Editorial CTA Block */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20D9D2]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#20D9D2] font-semibold">
              07 / Próximo Passo
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[0.98]">
            TEM UMA IDEIA<span className="text-[#087BEF]">?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#94A3B8] mt-4 max-w-xl leading-relaxed font-normal">
            Vamos descobrir juntos o que é tecnicamente e comercialmente viável construir.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
            <button
              type="button"
              onClick={onStartProject}
              className="px-8 py-4 rounded-lg bg-[#087BEF] hover:bg-[#19A7FF] text-white text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Começar um projeto</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="px-8 py-4 rounded-lg bg-[#0B1220] hover:bg-[#111C30] border border-[#1E293D] text-white text-sm font-medium transition-colors cursor-pointer flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4 text-[#20D9D2]" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Section 25: Direct Contact Channels — ICONS ONLY with tooltips, NO plaintext phone/email */}
        <div className="pt-12 border-t border-[#1E293B]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#68707C] uppercase tracking-wider block">
                CANAIS DE CONTACTO DIRETOS
              </span>
              <p className="text-xs text-[#94A3B8]">
                Selecione o canal de sua preferência para iniciar atendimento imediato:
              </p>
            </div>

            {/* Icon Contact Row */}
            <div className="flex items-center gap-4">
              
              {/* Phone Icon */}
              <a
                href="tel:+244937656106"
                title="Ligar para a Tech Lab (abre discador)"
                className="w-12 h-12 rounded-xl bg-[#0B1220] border border-[#1E293D] hover:border-[#087BEF] hover:bg-[#087BEF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm group"
                aria-label="Ligar via telefone"
              >
                <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              {/* WhatsApp Icon */}
              <a
                href={COMPANY_INFO.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir conversa no WhatsApp"
                className="w-12 h-12 rounded-xl bg-[#0B1220] border border-[#1E293D] hover:border-[#25D366] hover:bg-[#25D366] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm group"
                aria-label="Conversar no WhatsApp"
              >
                <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              {/* Email Icon */}
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Contacto Tech Lab')}`}
                title="Enviar mensagem por Email"
                className="w-12 h-12 rounded-xl bg-[#0B1220] border border-[#1E293D] hover:border-[#20D9D2] hover:bg-[#20D9D2] hover:text-[#071426] text-[#94A3B8] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
                aria-label="Enviar email"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
