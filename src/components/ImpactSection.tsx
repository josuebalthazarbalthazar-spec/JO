import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const stages = [
    { name: 'IDEIA', desc: 'Identificação de problemas e oportunidades' },
    { name: 'ESTRATÉGIA', desc: 'Arquitetura comercial e objetivos' },
    { name: 'DESIGN', desc: 'Interface, identidade e ergonomia' },
    { name: 'TECNOLOGIA', desc: 'Software rápido, seguro e escalável' },
    { name: 'RESULTADO', desc: 'Clientes atendidos e negócios gerados' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F3F1EA] border-b border-[#D9DCE1]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Top Header with spacious editorial design */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#087BEF] font-semibold block mb-3">
            01 / Da ideia à implementação
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#071426] leading-tight mb-6">
            Uma ideia só começa a gerar valor quando se transforma em algo que pode ser usado<span className="text-[#087BEF]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68707C] leading-relaxed">
            Não criamos tecnologia por capricho ou código sem propósito. Construímos a ponte técnica entre a visão do empreendedor e a experiência real dos seus clientes em Angola.
          </p>
        </div>

        {/* Impact Flow Sequence: IDEIA → ESTRATÉGIA → DESIGN → TECNOLOGIA → RESULTADO */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4 relative">
          {stages.map((stage, idx) => (
            <div
              key={stage.name}
              className="p-6 rounded-xl bg-white border border-[#D9DCE1] hover:border-[#071426] transition-colors flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#68707C]">0{idx + 1}</span>
                  {idx < stages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#D9DCE1] group-hover:text-[#087BEF] transition-colors hidden md:block" />
                  )}
                </div>
                <h3 className="text-base font-bold font-heading text-[#071426] tracking-wide mb-2 group-hover:text-[#087BEF] transition-colors">
                  {stage.name}
                </h3>
                <p className="text-xs text-[#68707C] leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F3F1EA]">
                <div
                  className={`h-1 rounded-full ${
                    idx === stages.length - 1
                      ? 'bg-[#087BEF]'
                      : 'bg-[#D9DCE1] group-hover:bg-[#087BEF]/50 transition-colors'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
