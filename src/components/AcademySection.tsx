import React from 'react';
import { ArrowRight, Code, ShoppingBag, TrendingUp, Rocket, Check, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';

interface AcademySectionProps {
  onOpenWhatsApp?: (message?: string) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onOpenWhatsApp }) => {
  const courses = [
    {
      num: '01',
      title: 'Programação Web',
      category: 'Software & Engenharia',
      focus: 'Frontend & Fullstack Real',
      desc: 'Construção prática de websites, aplicações web e automações com código limpo e arquitetura profissional orientada para clientes.',
      syllabus: [
        'HTML5 Semântico, CSS & Tailwind CSS',
        'JavaScript Moderno (ES6+) & React',
        'Integrações com APIs e WhatsApp Webhook',
        'Hospedagem, domínios e entrega profissional',
      ],
      icon: Code,
    },
    {
      num: '02',
      title: 'Importação & Negócios',
      category: 'Comércio Internacional',
      focus: 'China & Mercados Globais',
      desc: 'Métodos seguros e verificados para negociar, importar tecnologia, computadores e eletrónica com fornecedores internacionais para Angola.',
      syllabus: [
        'Validação de fornecedores no Alibaba e 1688',
        'Cálculo real de fretes aéreos/marítimos e alfândega',
        'Meios de pagamento internacionais seguros',
        'Estratégia de margem, precificação e stock',
      ],
      icon: ShoppingBag,
    },
    {
      num: '03',
      title: 'Marketing Digital',
      category: 'Vendas & Aquisição',
      focus: 'Tráfego & Conversão',
      desc: 'Estratégia para atrair clientes reais no contexto de Angola através de anúncios assertivos no Meta Ads e funis diretos para o WhatsApp.',
      syllabus: [
        'Segmentação no Meta Ads para Luanda e províncias',
        'Copywriting direto e redação persuasiva',
        'Fechamento e atendimento comercial no WhatsApp',
        'Métricas reais: Custo por Lead e Retorno (ROAS)',
      ],
      icon: TrendingUp,
    },
    {
      num: '04',
      title: 'Empreendedorismo Digital',
      category: 'Gestão & Escala',
      focus: 'Operação & B2B',
      desc: 'Como estruturar uma prestação de serviços tecnológicos ou agência digital rentável, precificar propostas e gerir clientes corporativos.',
      syllabus: [
        'Elaboração de propostas comerciais de alto valor',
        'Precificação por valor vs. precificação por hora',
        'Contratos e garantias no mercado angolano',
        'Rotinas de entrega e retenção mensal',
      ],
      icon: Rocket,
    },
  ];

  const handleEnrollWhatsApp = (courseTitle: string) => {
    const msg = `Olá Tech Lab! Gostaria de obter mais informações sobre a formação "${courseTitle}" da Tech Lab Academy.`;
    if (onOpenWhatsApp) {
      onOpenWhatsApp(msg);
    } else {
      window.open(`https://wa.me/244937656106?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <section id="academy" className="py-24 md:py-32 bg-[#087BEF] text-white relative overflow-hidden border-b border-[#076FDB]">
      
      {/* Subtle technical graphic overlay */}
      <div className="absolute inset-0 bg-navy-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header: Mandated Title "APRENDA. CONSTRUA. EVOLUA." */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/20">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold block mb-2">
              04 / Tech Lab Academy
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[0.95]">
              APRENDA.<br />
              CONSTRUA.<br />
              <span className="text-[#20D9D2]">EVOLUA.</span>
            </h2>
          </div>
          <div className="text-sm sm:text-base text-white/90 max-w-md mt-6 md:mt-0 font-normal">
            <p>
              Formações práticas e sem enrolação para desenvolver competências reais de tecnologia, vendas e gestão no mercado angolano.
            </p>
          </div>
        </div>

        {/* 4 Editorial Course Modules (Magazine/Editorial modules) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.num}
                className="bg-[#071426] border border-[#0B1E38] rounded-xl p-8 transition-all duration-300 flex flex-col justify-between group hover:border-[#20D9D2]/50 shadow-lg"
              >
                <div>
                  {/* Module Header Bar */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1E293B]">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#20D9D2]">MÓDULO {c.num}</span>
                      <span className="text-[11px] font-mono text-[#68707C]">·</span>
                      <span className="text-[11px] font-mono text-[#94A3B8]">{c.focus}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111C30] text-[#19A7FF] border border-[#1E293B]">
                      {c.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#087BEF]/20 border border-[#087BEF]/40 flex items-center justify-center text-[#20D9D2] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#20D9D2] transition-colors">
                      {c.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {c.desc}
                  </p>

                  {/* Syllabus Checklist */}
                  <div className="space-y-2 pt-4 border-t border-[#1E293B]">
                    <span className="text-[11px] font-mono text-[#68707C] uppercase tracking-wider block mb-2">
                      Competências Aplicadas:
                    </span>
                    <div className="space-y-2">
                      {c.syllabus.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <Check className="w-3.5 h-3.5 text-[#20D9D2] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Module Footer CTA */}
                <div className="mt-8 pt-5 border-t border-[#1E293B] flex items-center justify-between">
                  <span className="text-[11px] text-[#68707C] font-mono">Turmas presenciais & remotas</span>
                  <button
                    type="button"
                    onClick={() => handleEnrollWhatsApp(c.title)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#20D9D2] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>CONSULTAR NO WHATSAPP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Training Strip */}
        <div className="mt-12 p-6 rounded-xl bg-[#071426] border border-[#0B1E38] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#20D9D2]/20 flex items-center justify-center text-[#20D9D2]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span className="text-sm text-white font-medium">
              Precisa de capacitação personalizada para o time da sua empresa em Angola?
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleEnrollWhatsApp('Formação Corporativa para Empresas')}
            className="px-5 py-2.5 rounded-lg bg-[#087BEF] hover:bg-[#19A7FF] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap"
          >
            FALAR COM A ACADEMY
          </button>
        </div>

      </div>
    </section>
  );
};
