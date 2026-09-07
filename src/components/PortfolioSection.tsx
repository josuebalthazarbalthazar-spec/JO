import React from 'react';
import { ArrowUpRight, MapPin, Activity, Sprout, Check, Shield, Layers, Navigation } from 'lucide-react';

interface PortfolioSectionProps {
  onQuoteSimilar?: (projectTitle: string) => void;
  onOpenWhatsApp?: (message?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onQuoteSimilar,
  onOpenWhatsApp,
}) => {
  const handleQuote = (title: string) => {
    if (onQuoteSimilar) {
      onQuoteSimilar(title);
    } else if (onOpenWhatsApp) {
      onOpenWhatsApp(`Olá Tech Lab! Gostaria de desenvolver uma solução semelhante ao projeto "${title}".`);
    } else {
      window.open(`https://wa.me/244937656106?text=${encodeURIComponent(`Olá Tech Lab! Gostaria de desenvolver uma solução semelhante ao projeto "${title}".`)}`, '_blank');
    }
  };

  return (
    <section id="projetos" className="py-24 md:py-32 bg-[#F3F1EA] border-b border-[#D9DCE1]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D9DCE1]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#087BEF] font-semibold block mb-2">
              05 / Engenharia Demonstrativa
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-[#071426] tracking-tight">
              PROJETOS & ARQUITETURAS<span className="text-[#087BEF]">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-[#D9DCE1] text-[11px] font-mono text-[#071426] mb-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A3D]" />
              PROJETOS DEMONSTRATIVOS
            </span>
            <p className="text-sm text-[#68707C] font-normal leading-relaxed">
              Modelos funcionais concebidos para os desafios logísticos, clínicos e agrícolas reais de Angola, sem métricas fictícias.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ASYMMETRIC PORTFOLIO GRID: 1 LARGE + 1 MEDIUM + 1 VERTICAL */}
        {/* ============================================================ */}
        <div className="space-y-8">
          
          {/* ------------------------------------------------------------ */}
          {/* PROJETO PRINCIPAL GRANDE: KANDONGUEIRO+ (12 COLS WIDE CANVAS) */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-[#071426] text-white rounded-2xl border border-[#111827] p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-navy-grid opacity-25 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Info (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#111C30] text-[#20D9D2] border border-[#1E293B] text-[11px] font-mono font-semibold">
                    PROJETO DEMONSTRATIVO
                  </span>
                  <span className="text-xs font-mono text-[#68707C]">
                    MOBILIDADE URBANA & LOGÍSTICA
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white mb-3">
                    Kandongueiro+
                  </h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    Plataforma PWA ultraleve para mapeamento de lotações, rotas dinâmicas e paragens de táxis coletivos em Luanda, projetada para funcionar com baixo consumo de dados móveis e em dispositivos modestos.
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#1E293B]">
                  <span className="text-[11px] font-mono text-[#68707C] uppercase tracking-wider block">
                    Destaques de Engenharia:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#20D9D2]" />
                      <span>Cache PWA Offline-First</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#20D9D2]" />
                      <span>Roteamento Geo Local</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#20D9D2]" />
                      <span>Bundle &lt; 150kb</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#20D9D2]" />
                      <span>Bridge com WhatsApp</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleQuote('Kandongueiro+')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#087BEF] hover:bg-[#19A7FF] text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <span>SOLICITAR PROJETO NESTA LINHA</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Interface Demonstration (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-[#0B1220] rounded-xl border border-[#1E293D] p-5 sm:p-6 space-y-4">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E293D] font-mono text-xs text-[#68707C]">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-3.5 h-3.5 text-[#20D9D2]" />
                      <span className="text-white font-medium">ROTA: VIANA ⇄ BAIXA (LUANDA)</span>
                    </div>
                    <span className="text-[#20D9D2]">STATUS: MAPA ATIVO</span>
                  </div>

                  {/* Route Visualizer Simulation */}
                  <div className="p-4 rounded-lg bg-[#071426] border border-[#1E293D] space-y-4">
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-slate-200">Terminal Viana / Estalagem</span>
                      </div>
                      <span className="text-[#68707C] font-mono">08:15 AM</span>
                    </div>

                    <div className="relative pl-5 border-l-2 border-dashed border-[#087BEF] my-2 space-y-3">
                      <div className="text-[11px] font-mono text-[#94A3B8]">
                        Paragens intermediárias: Golfe II · Camama · Aeroporto
                      </div>
                      <div className="p-2.5 rounded bg-[#0B1220] text-[11px] text-[#20D9D2] font-mono flex items-center justify-between">
                        <span>LOTAÇÃO PREVISTA: 85%</span>
                        <span>TEMPO ESTIMADO: 42 MIN</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#20D9D2]" />
                        <span className="text-white font-semibold">Destino: Mutamba / Baixa</span>
                      </div>
                      <span className="text-[#20D9D2] font-mono">250 AOA</span>
                    </div>

                  </div>

                  <div className="p-3 rounded bg-[#050B14] font-mono text-[11px] text-[#68707C] flex items-center justify-between">
                    <span>ARQUITETURA DE REDE DISPONÍVEL SEM ACESSO À INTERNET PESADA</span>
                    <span className="text-[#19A7FF]">PWA 2026</span>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 2 ASYMMETRIC: 1 MEDIUM (7 COLS) + 1 VERTICAL (5 COLS) */}
          {/* ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* PROJETO SECUNDÁRIO MENOR: VITALIS (7 COLS) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D9DCE1] p-8 flex flex-col justify-between hover:border-[#071426] transition-all shadow-sm">
              <div className="space-y-5">
                
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-[#F3F1EA] text-[#071426] border border-[#D9DCE1] text-[11px] font-mono font-semibold">
                    PROJETO DEMONSTRATIVO
                  </span>
                  <span className="text-xs font-mono text-[#68707C]">
                    SAÚDE & CLÍNICAS
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Activity className="w-4 h-4" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-[#071426]">
                      Vitalis
                    </h3>
                  </div>
                  <p className="text-sm text-[#68707C] leading-relaxed">
                    Sistema em nuvem para clínicas médicas e consultórios em Luanda: agendamento de consultas com confirmação automática pelo WhatsApp, prontuário eletrónico seguro e histórico de exames.
                  </p>
                </div>

                {/* Micro UI Schema for Vitalis */}
                <div className="p-4 rounded-xl bg-[#F3F1EA] border border-[#D9DCE1] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#071426] font-semibold">
                    <span>AGENDA CLÍNICA · HOJE</span>
                    <span className="text-emerald-600">12 CONSULTAS</span>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-[#D9DCE1] flex items-center justify-between">
                    <div>
                      <div className="font-sans font-medium text-[#071426]">Dra. Amélia Neto — Pediatria</div>
                      <div className="text-[10px] text-[#68707C]">Paciente confirmado via WhatsApp</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px]">
                      CONFIRMADO
                    </span>
                  </div>
                  <div className="text-[11px] text-[#68707C]">
                    Redução de 70% nas faltas por esquecimento com lembretes automáticos.
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-4 border-t border-[#D9DCE1] flex items-center justify-between">
                <span className="text-xs font-mono text-[#68707C]">Gestão Médica</span>
                <button
                  type="button"
                  onClick={() => handleQuote('Vitalis')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#071426] hover:text-[#087BEF] transition-colors cursor-pointer"
                >
                  <span>SOLICITAR PROJETO SIMILAR</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* PROJETO TERCIÁRIO VERTICAL: AGRICONECTA (5 COLS TALL CARD) */}
            <div className="lg:col-span-5 bg-[#071426] text-white rounded-2xl border border-[#111827] p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-5">
                
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-[#111C30] text-[#FF7A3D] border border-[#1E293B] text-[11px] font-mono font-semibold">
                    PROJETO DEMONSTRATIVO
                  </span>
                  <span className="text-xs font-mono text-[#68707C]">
                    AGRO & B2B
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-[#FF7A3D]/20 text-[#FF7A3D] flex items-center justify-center">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Agriconecta
                    </h3>
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Mercado B2B conectando cooperativas agrícolas de Malanje a redes comerciais e restaurantes em Luanda. Previsão de colheitas, cotações de preços em tempo real e transporte fretado.
                  </p>
                </div>

                {/* Vertical Data Box */}
                <div className="p-4 rounded-xl bg-[#0B1220] border border-[#1E293D] space-y-3 font-mono text-xs">
                  <div className="text-[#FF7A3D] font-bold">FLUXO MALANJE ⇄ LUANDA</div>
                  <div className="space-y-2 text-[11px] text-[#94A3B8]">
                    <div className="flex justify-between border-b border-[#1E293B] pb-1">
                      <span>Mandioca / Fuba</span>
                      <span className="text-white">Capas de 50kg</span>
                    </div>
                    <div className="flex justify-between border-b border-[#1E293B] pb-1">
                      <span>Milho & Feijão</span>
                      <span className="text-white">Cotação Atualizada</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frete Consolidado</span>
                      <span className="text-[#20D9D2]">Logística Agendada</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between">
                <span className="text-xs font-mono text-[#68707C]">Agritech Nacional</span>
                <button
                  type="button"
                  onClick={() => handleQuote('Agriconecta')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF7A3D] hover:text-white transition-colors cursor-pointer"
                >
                  <span>SOLICITAR PROJETO SIMILAR</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
