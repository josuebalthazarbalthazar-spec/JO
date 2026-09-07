import React from 'react';
import { 
  ShieldCheck, 
  RefreshCw, 
  Server, 
  Lock, 
  Activity, 
  HelpCircle, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CARE_PLANS } from '../data/techLabData';
import { CarePlan } from '../types';

interface TechLabCareProps {
  onSelectCarePlan: (plan: CarePlan) => void;
  onOpenWhatsApp: () => void;
}

export const TechLabCare: React.FC<TechLabCareProps> = ({ onSelectCarePlan, onOpenWhatsApp }) => {
  return (
    <section id="care" className="py-20 bg-[#090D16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with clear philosophy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider font-semibold">
            Manutenção & Suporte Mensal
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Tech Lab Care
          </h2>
          <p className="text-emerald-400 font-semibold text-lg sm:text-xl mt-2 font-mono">
            O lançamento do website não é o fim do projeto. É o início da evolução digital.
          </p>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Um website desatualizado perde posições no Google, fica vulnerável a ataques e transmite abandono. Com o Tech Lab Care, a nossa equipa cuida da infraestrutura e manutenção contínua enquanto você se concentra em vender.
          </p>
        </div>

        {/* 3 Pillars of Care: Segurança, Velocidade, Suporte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Hospedagem & Backups</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Servidores rápidos e cópias de segurança periódicas na nuvem para garantir que os seus dados nunca se perdem.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Segurança & SSL 24/7</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Certificado HTTPS sempre ativo, monitorização contra invasões e atualizações preventivas de bibliotecas.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Atualizações de Conteúdo</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mude preços, fotos de produtos ou números de contacto sem precisar de aprender programação.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Care Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {CARE_PLANS.map((plan) => {
            const isRec = plan.isRecommended;

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all relative ${
                  isRec
                    ? 'bg-slate-900 border-2 border-emerald-400 shadow-xl shadow-emerald-500/10 md:-translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isRec && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1 shadow">
                    <Sparkles className="w-3 h-3" />
                    <span>MAIS PROCURADO</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white font-mono">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{plan.idealFor}</p>
                  </div>

                  <div className="py-3 border-y border-slate-800 mb-5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                      {plan.price}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {plan.description}
                  </p>

                  <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => onSelectCarePlan(plan)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isRec
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>Contratar {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on flexibility */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Não tem fidelização abusiva. Cancele ou altere o plano conforme o ritmo e necessidade do seu negócio.
        </div>

      </div>
    </section>
  );
};
