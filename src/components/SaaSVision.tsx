import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  CheckCircle, 
  Rocket, 
  Repeat, 
  BellRing, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface SaaSVisionProps {
  onNotifyMe: (email: string, interestedArea: string) => void;
}

export const SaaSVision: React.FC<SaaSVisionProps> = ({ onNotifyMe }) => {
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('Gestão Simples para Microempresas');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onNotifyMe(email, area);
    setIsSubmitted(true);
  };

  const saasPipeline = [
    {
      step: '01',
      icon: Search,
      title: 'Identificar Dores Reais',
      desc: 'Analisamos os estrangulamentos operacionais e queixas recorrentes de empreendedores em Malanje e Luanda.',
    },
    {
      step: '02',
      icon: CheckCircle,
      title: 'Validação no Mercado',
      desc: 'Testamos a solução diretamente com empresários reais antes de escrever linhas extensas de código.',
    },
    {
      step: '03',
      icon: Rocket,
      title: 'Construir MVP Ágil',
      desc: 'Criamos a versão mínima funcional, focada apenas nas funções que geram economia de tempo e dinheiro.',
    },
    {
      step: '04',
      icon: Repeat,
      title: 'Subscrição Acessível (SaaS)',
      desc: 'Transformamos em produto na nuvem com subscrição mensal em Kwanzas, acessível a qualquer microempresa.',
    },
  ];

  return (
    <section id="saas" className="py-20 bg-[#070B14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>DIVISÃO SAAS • EM DESENVOLVIMENTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Software que resolve problemas reais.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            A Tech Lab desenvolve soluções de software próprias concebidas para automatizar processos e descomplicar a rotina de quem empreende em Angola.
          </p>
        </div>

        {/* Methodology Flow */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">A Nossa Metodologia</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Como criamos os produtos SaaS da Tech Lab
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saasPipeline.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex flex-col p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-mono font-bold text-slate-600">{item.step}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Honest Status & Waitlist Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-slate-900 via-slate-900 to-[#0A1628] rounded-2xl border border-cyan-500/30 p-6 sm:p-10 shadow-xl">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>ESTADO ATUAL: FASE DE VALIDAÇÃO DE MVPs</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Não inventamos produtos que ainda não existem. Construímos o que o mercado precisa.
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Estamos a mapear as principais dificuldades em faturação simples, gestão de encomendas no WhatsApp e agendamentos para pequenos negócios em Angola.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Preços transparentes em Kwanzas com faturação local</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Desenvolvido para funcionar em telemóveis e computadores simples</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Acesso antecipado com condições especiais para os primeiros inscritos</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <BellRing className="w-5 h-5 text-cyan-400" />
              <h4 className="text-base font-bold text-white">Lista de Espera / Quero Ser Avisado</h4>
            </div>

            {isSubmitted ? (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs space-y-2 text-center animate-in fade-in">
                <CheckCircle className="w-8 h-8 mx-auto" />
                <p className="font-bold text-sm">Obrigado pelo seu interesse!</p>
                <p className="text-slate-300">
                  O seu e-mail foi registado na lista prioritária. Será o primeiro a testar os nossos produtos SaaS com benefícios de membro pioneiro.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="saas-interest" className="block text-xs font-medium text-slate-300 mb-1">
                    Qual área tem mais impacto no seu negócio?
                  </label>
                  <select
                    id="saas-interest"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-200 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="Gestão Simples para Microempresas">Faturação & Gestão Simples de Vendas</option>
                    <option value="Catálogo & Encomendas WhatsApp">Automatização de Pedidos no WhatsApp</option>
                    <option value="Agendamento para Barbearias e Clínicas">Agendamentos & Lembretes Automáticos</option>
                    <option value="Controle de Stock Básico">Controle Básico de Stock e Entradas/Saídas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="saas-email" className="block text-xs font-medium text-slate-300 mb-1">
                    O seu E-mail ou WhatsApp
                  </label>
                  <input
                    id="saas-email"
                    type="text"
                    required
                    placeholder="exemplo@empresa.ao ou 923 000 000"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-200 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  <span>Quero ser avisado no lançamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Sem spam. Apenas avisos relevantes sobre lançamentos de software.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
