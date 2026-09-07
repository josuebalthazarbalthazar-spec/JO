import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, Clock } from 'lucide-react';

interface HomeSimulatorTeaserProps {
  onOpenSimulator: () => void;
}

export const HomeSimulatorTeaser: React.FC<HomeSimulatorTeaserProps> = ({ onOpenSimulator }) => {
  return (
    <section className="py-20 md:py-28 bg-[#0B1220] text-white border-b border-[#1E293D] relative overflow-hidden">
      {/* Subtle grid in dark section */}
      <div className="absolute inset-0 bg-navy-grid opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#20D9D2] font-semibold block">
              03 / Ferramenta Interativa
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading leading-tight">
              Descubra quanto pode custar o seu projeto<span className="text-[#087BEF]">.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl font-normal leading-relaxed">
              Configure a solução que pretende criar e receba uma estimativa inicial com prazos realistas e total transparência antes de falar com a nossa equipa.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenSimulator}
                className="px-7 py-3.5 rounded-lg bg-[#087BEF] hover:bg-[#19A7FF] text-white text-[15px] font-semibold tracking-wide transition-all shadow-md cursor-pointer inline-flex items-center gap-2.5 group"
              >
                <span>Simular projeto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Live Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#071426] border border-[#1E293D] rounded-xl p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E293B] mb-5">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#087BEF]" />
                  <span className="text-xs font-mono text-white font-semibold">CONFIGURADOR</span>
                </div>
                <span className="text-[11px] font-mono text-[#20D9D2]">Estimativa em Kwanzas</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between py-2 border-b border-[#1E293B]/60">
                  <span className="text-[#68707C]">Tipo de Solução</span>
                  <span className="text-white">Website / E-commerce / SaaS</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#1E293B]/60">
                  <span className="text-[#68707C]">Complexidade</span>
                  <span className="text-white">Intermediário</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#1E293B]/60">
                  <span className="text-[#68707C]">Módulos Escolhidos</span>
                  <span className="text-white">6 funcionalidades</span>
                </div>
                <div className="pt-2 flex items-center justify-between text-sm font-sans">
                  <div>
                    <span className="text-xs text-[#94A3B8] block">Estimativa preliminar</span>
                    <span className="text-lg font-black font-heading text-[#20D9D2]">250.000 — 400.000 Kz</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#94A3B8] block">Prazo estimado</span>
                    <span className="text-sm font-semibold text-white">3 — 5 semanas</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-[11px] text-[#68707C]">
                <Clock className="w-3.5 h-3.5 text-[#087BEF]" />
                <span>Simulação sem compromisso em menos de 2 minutos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
