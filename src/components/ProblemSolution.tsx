import React from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Store, 
  UtensilsCrossed, 
  Scissors, 
  Briefcase, 
  Rocket, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

interface ProblemSolutionProps {
  onOpenCalculator: () => void;
  onGoToPackages: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenCalculator, onGoToPackages }) => {
  const targetProfiles = [
    { icon: Rocket, label: 'Quem está a lançar um negócio', desc: 'Precisa de credibilidade rápida para conquistar os primeiros clientes sem gastar fortunas.' },
    { icon: ShoppingBag, label: 'Lojas e Retalho', desc: 'Querem catálogo online organizado e fechar pedidos no WhatsApp com rapidez.' },
    { icon: UtensilsCrossed, label: 'Restaurantes e Espaços', desc: 'Cardápios digitais interativos, localização no Google Maps e reservas ágeis.' },
    { icon: Scissors, label: 'Salões e Barbearias', desc: 'Apresentação profissional de serviços, tabela de preços clara e agendamentos simples.' },
    { icon: Briefcase, label: 'Profissionais Liberais e Consultores', desc: 'Autoridade profissional, captação de leads qualificados e propostas claras.' },
    { icon: Store, label: 'Prestadores de Serviços e PMEs', desc: 'Sair do improviso das mensagens perdidas e ter um canal comercial profissional 24h.' },
  ];

  const commonPainPoints = [
    {
      problem: 'Dependência exclusiva de redes sociais',
      impact: 'Algoritmos instáveis, mensagens perdidas no Direct e clientes que desistem pela demora na resposta.',
      solution: 'Website próprio com catálogo e redirecionamento direto para WhatsApp com mensagem formatada.',
    },
    {
      problem: 'Preços astronómicos ou propostas confusas',
      impact: 'Agências tradicionais cobram milhões ou apresentam orçamentos sem prazos nem escopos claros.',
      solution: 'Pacotes fechados e transparentes entre 100.000 Kz e 400.000 Kz, com prazos exatos de 5 a 30 dias.',
    },
    {
      problem: 'Websites abandonados após a entrega',
      impact: 'O desenvolvedor desaparece, o site fica sem atualizações e surgem erros técnicos.',
      solution: 'Planos Tech Lab Care a partir de 15.000 Kz/mês garantindo manutenção, backups e suporte contínuo.',
    },
  ];

  return (
    <section className="py-20 bg-[#0B0F19] border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            Para Empreendedores & Pequenos Negócios
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Sabemos o que custa construir um negócio em Angola.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Ter uma presença digital profissional não deve ser um processo complicado, caro ou inacessível. A Tech Lab pega na sua visão e transforma-a numa ferramenta real de vendas.
          </p>
        </div>

        {/* Who we build for */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 font-mono text-center">
            Projetado para quem precisa de resultados comerciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetProfiles.map((profile, idx) => {
              const IconComp = profile.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{profile.label}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{profile.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison: The Old Way vs The Tech Lab Way */}
        <div className="mt-12 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">O Nosso Compromisso</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Chega de promessas vazias e websites esquecidos.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commonPainPoints.map((item, index) => (
              <div key={index} className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-rose-400 text-xs font-semibold">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{item.problem}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.impact}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Como a Tech Lab resolve:</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Quer saber exatamente quanto fica para o seu modelo de negócio?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenCalculator}
                className="w-full sm:w-auto text-xs px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700"
              >
                Simular Projeto
              </button>
              <button
                type="button"
                onClick={onGoToPackages}
                className="w-full sm:w-auto text-xs px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Ver os 4 Pacotes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
