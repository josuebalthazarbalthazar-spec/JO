import React, { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  Layers, 
  Wrench, 
  Check, 
  ArrowRight, 
  Clock, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { BUSINESS_PILLARS } from '../data/techLabData';
import { BusinessPillar } from '../types';

interface ServicesPillarsProps {
  onGoToWebsites: () => void;
  onGoToSaaS: () => void;
  onOpenContact: (type: string) => void;
  onSimulateService?: (serviceId: string) => void;
}

export const ServicesPillars: React.FC<ServicesPillarsProps> = ({ 
  onGoToWebsites, 
  onGoToSaaS,
  onOpenContact,
  onSimulateService 
}) => {
  const [selectedPillar, setSelectedPillar] = useState<string>('digital-services');

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'digital-services':
        return Globe;
      case 'saas':
        return Layers;
      case 'electronics':
        return Cpu;
      case 'tech-repair':
        return Wrench;
      default:
        return Globe;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 uppercase tracking-wider">
              Áreas de Atuação
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Os 4 Pilares da Tech Lab
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Uma estrutura tecnológica pensada para cobrir todas as etapas da maturidade digital do seu negócio.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-2 rounded-lg border border-emerald-500/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Prioridade Atual: Negócios Digitais & Websites</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {BUSINESS_PILLARS.map((pillar) => {
            const IconComp = getPillarIcon(pillar.id);
            const isDigital = pillar.id === 'digital-services';
            const isSaaS = pillar.id === 'saas';

            return (
              <div
                key={pillar.id}
                className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 relative ${
                  isDigital
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-500/40 shadow-xl shadow-emerald-950/20'
                    : isSaaS
                    ? 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                    : 'bg-slate-950/60 border border-slate-800/60 opacity-90'
                }`}
              >
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isDigital
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : isSaaS
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        pillar.status === 'active'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : pillar.status === 'in-development'
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {pillar.status === 'active' ? 'Ativo' : pillar.status === 'in-development' ? 'Em Breve' : 'Futuramente'}
                    </span>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pillar.shortDescription}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-400">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDigital ? 'text-emerald-400' : 'text-slate-500'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pillar Action Button */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {onSimulateService && (
                    <button
                      type="button"
                      onClick={() => {
                        const targetId =
                          pillar.id === 'digital-services'
                            ? 'website'
                            : pillar.id === 'saas'
                            ? 'sistema'
                            : pillar.id === 'electronics'
                            ? 'electronics'
                            : 'electronics';
                        onSimulateService(targetId);
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-sky-500/30 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      <span>Simular este serviço</span>
                    </button>
                  )}

                  {isDigital ? (
                    <button
                      type="button"
                      onClick={onGoToWebsites}
                      className="w-full py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Ver Pacotes de Websites</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : isSaaS ? (
                    <button
                      type="button"
                      onClick={onGoToSaaS}
                      className="w-full py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Conhecer Visão SaaS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onOpenContact(pillar.title)}
                      className="w-full py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-800 cursor-pointer"
                    >
                      <span>Registar Interesse</span>
                      <Clock className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Clear transparent disclosure */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex items-start sm:items-center gap-3">
          <div className="p-1.5 rounded-md bg-slate-800 text-slate-300 shrink-0">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <strong className="text-slate-200">Foco e Transparência:</strong> A operação inicial da Tech Lab está 100% concentrada em <span className="text-emerald-400 font-medium">Digital Services e Websites</span>. As áreas de Eletrónicos e Reparação Técnica serão disponibilizadas sob encomenda e em etapas futuras de expansão.
          </div>
        </div>

      </div>
    </section>
  );
};
