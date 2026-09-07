import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';

interface DirectContactSectionProps {
  onStartProject?: () => void;
  onOpenWhatsApp?: () => void;
}

export const DirectContactSection: React.FC<DirectContactSectionProps> = ({
  onStartProject,
}) => {
  const [copiedTooltip, setCopiedTooltip] = useState<string | null>(null);

  const contactChannels = [
    {
      id: 'phone',
      title: 'Ligação Telefónica',
      actionHint: 'Clique para ligar',
      href: 'tel:+244937656106',
      icon: Phone,
      color: 'hover:border-[#087BEF] hover:text-[#087BEF]',
      badge: 'Atendimento Rápido',
      isExternal: false,
    },
    {
      id: 'whatsapp',
      title: 'Conversa WhatsApp',
      actionHint: 'Clique para abrir conversa',
      href: COMPANY_INFO.whatsappDefaultUrl,
      icon: MessageSquare,
      color: 'hover:border-[#20D9D2] hover:text-[#20D9D2]',
      badge: 'Canal Preferencial',
      isExternal: true,
    },
    {
      id: 'email',
      title: 'Correio Eletrónico',
      actionHint: 'Clique para enviar email',
      href: `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Contacto Tech Lab — Novo Projeto')}`,
      icon: Mail,
      color: 'hover:border-[#FF7A3D] hover:text-[#FF7A3D]',
      badge: 'Propostas Formais',
      isExternal: false,
    },
  ];

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#F3F1EA] text-[#071426] border-b border-[#D9DCE1] relative">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D9DCE1]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#087BEF] font-semibold block mb-2">
              06 / Contacto & Diálogo
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-[#071426] tracking-tight">
              CANAL DIRETO<span className="text-[#087BEF]">.</span>
            </h2>
          </div>
          <p className="text-sm text-[#68707C] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Inicie um contacto imediato pelos nossos canais diretos. A nossa equipa responde em minutos no horário comercial.
          </p>
        </div>

        {/* 3 Editorial Contact Icon Cards (Section 25 - Icons only, NO plaintext numbers or emails) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.isExternal ? '_blank' : undefined}
                rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                className={`p-8 rounded-2xl bg-white border border-[#D9DCE1] flex flex-col justify-between group transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer ${channel.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#F3F1EA] group-hover:bg-[#071426] group-hover:text-white text-[#071426] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F3F1EA] text-[#68707C] group-hover:text-[#071426] font-semibold">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#071426] mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-xs font-mono text-[#68707C]">
                    {channel.actionHint}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D9DCE1] flex items-center justify-between text-xs font-mono font-semibold text-[#087BEF]">
                  <span>ACEDER CANAL</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Banner: Quote CTA */}
        <div className="p-8 rounded-2xl bg-[#071426] text-white border border-[#111827] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#20D9D2] uppercase tracking-wider block">
              ESTRUTURAÇÃO COMERCIAL
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
              Prefere uma estimativa técnica detalhada?
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Preencha o nosso formulário com as especificações da sua empresa.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartProject}
            className="px-6 py-3.5 rounded-lg bg-[#087BEF] hover:bg-[#19A7FF] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            SOLICITAR ORÇAMENTO
          </button>
        </div>

      </div>
    </section>
  );
};
