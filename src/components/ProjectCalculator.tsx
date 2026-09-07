import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  MessageSquare, 
  Sparkles,
  Layers,
  ShieldAlert,
  ChevronRight,
  Info
} from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';

interface ProjectCalculatorProps {
  onRequestFormalQuote: (briefingSummary: string, estimatedPrice: string) => void;
  onOpenWhatsAppBriefing: (briefingText: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({
  onRequestFormalQuote,
  onOpenWhatsAppBriefing
}) => {
  // Calculator choices
  const [projectType, setProjectType] = useState<string>('website');
  const [needsEcommerce, setNeedsEcommerce] = useState<boolean>(false);
  const [needsAdminPanel, setNeedsAdminPanel] = useState<boolean>(false);
  const [needsOnlinePayments, setNeedsOnlinePayments] = useState<boolean>(false);
  const [needsWhatsApp, setNeedsWhatsApp] = useState<boolean>(true);
  const [needsUserAuth, setNeedsUserAuth] = useState<boolean>(false);
  const [budgetExpectation, setBudgetExpectation] = useState<string>('200k');

  // Compute estimate dynamically based on the 4 canonical pricing tiers
  const calculateEstimate = () => {
    // If user needs user auth or complex payments, this falls into Premium (400.000 Kz)
    if (needsUserAuth || (needsAdminPanel && needsEcommerce && needsOnlinePayments) || projectType === 'sistema') {
      return {
        tierName: 'PREMIUM (Arquitetura Avançada)',
        priceRange: '350.000 Kz — 400.000 Kz',
        suggestedPackage: 'Pacote Premium (400.000 Kz)',
        deliveryDays: '18 a 30 dias úteis',
        recommendedCare: '40.000 Kz/mês (Professional Care)',
        reason: 'O seu projeto exige arquitetura avançada, persistência de dados complexa ou autenticação de clientes/utilizadores.',
      };
    }

    // If needs admin panel or dynamic orders or e-commerce catalog
    if (needsAdminPanel || needsEcommerce || projectType === 'ecommerce') {
      return {
        tierName: 'PROFESSIONAL (Gestão e Vendas)',
        priceRange: '250.000 Kz — 300.000 Kz',
        suggestedPackage: 'Pacote Professional (300.000 Kz)',
        deliveryDays: '12 a 18 dias úteis',
        recommendedCare: '25.000 Kz/mês (Business Care)',
        reason: 'O seu projeto necessita de catálogo com pedidos dinâmicos, cotação integrada ou painel de controlo.',
      };
    }

    // If budget is standard or needs WhatsApp integration with business presentation
    if (needsWhatsApp || budgetExpectation === '200k' || budgetExpectation === '300k') {
      return {
        tierName: 'BUSINESS (Recomendado Tech Lab)',
        priceRange: '200.000 Kz',
        suggestedPackage: 'Pacote Business (200.000 Kz)',
        deliveryDays: '7 a 12 dias úteis',
        recommendedCare: '25.000 Kz/mês (Business Care)',
        reason: 'A solução mais equilibrada para exibir produtos/serviços, integrar Google Maps, WhatsApp avançado e liderar no Google.',
      };
    }

    // Default starter
    return {
      tierName: 'STARTER (Presença Digital)',
      priceRange: '100.000 Kz',
      suggestedPackage: 'Pacote Starter (100.000 Kz)',
      deliveryDays: '5 a 7 dias úteis',
      recommendedCare: '15.000 Kz/mês (Essential)',
      reason: 'Ideal para ter um website rápido, moderno e profissional com até 4 páginas e botão de WhatsApp ativo.',
    };
  };

  const estimate = calculateEstimate();

  const generateBriefingSummary = () => {
    return `Olá Tech Lab! Fiz uma simulação na calculadora do website:
- Tipo de projeto: ${projectType}
- E-commerce / Catálogo: ${needsEcommerce ? 'Sim' : 'Não'}
- Painel Administrativo: ${needsAdminPanel ? 'Sim' : 'Não'}
- Pagamentos Online: ${needsOnlinePayments ? 'Sim' : 'Não'}
- Integração WhatsApp: ${needsWhatsApp ? 'Sim' : 'Não'}
- Sistema de Utilizadores: ${needsUserAuth ? 'Sim' : 'Não'}
- Estimativa Calculada: ${estimate.suggestedPackage}
Gostaria de agendar uma reunião ou receber uma proposta formal para este projeto.`;
  };

  return (
    <section id="calculadora" className="py-20 bg-[#090D16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider font-semibold">
            Simulador Interativo
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Quanto pode custar o seu projeto?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            Responda a algumas perguntas rápidas sobre as necessidades do seu negócio para descobrir a faixa de investimento recomendada.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Questions */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* 1. Tipo de Projeto */}
            <div>
              <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2.5">
                01. Que tipo de projeto deseja construir?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'website', label: 'Website Institucional', sub: 'Apresentar empresa & serviços' },
                  { id: 'ecommerce', label: 'Catálogo / E-commerce', sub: 'Vender produtos online' },
                  { id: 'sistema', label: 'Sistema Web Sob Medida', sub: 'Gestão ou regras próprias' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'bg-emerald-500/15 border-emerald-500 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{item.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Funcionalidades Interativas */}
            <div>
              <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2.5">
                02. Que funcionalidades são necessárias?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsEcommerce}
                    onChange={(e) => setNeedsEcommerce(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 border-slate-700 bg-slate-900"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Catálogo de Produtos com Preços</span>
                    <span className="text-[11px] text-slate-400">Exibição organizada com fotos e filtros</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsAdminPanel}
                    onChange={(e) => setNeedsAdminPanel(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 border-slate-700 bg-slate-900"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Painel Administrativo</span>
                    <span className="text-[11px] text-slate-400">Autonomia para alterar dados e pedidos</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsOnlinePayments}
                    onChange={(e) => setNeedsOnlinePayments(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 border-slate-700 bg-slate-900"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Integração de Pagamentos</span>
                    <span className="text-[11px] text-slate-400">Gateways e referências multicaixa/comprovativos</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsWhatsApp}
                    onChange={(e) => setNeedsWhatsApp(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 border-slate-700 bg-slate-900"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Integração Direta com WhatsApp</span>
                    <span className="text-[11px] text-slate-400">Mensagens formatadas por produto/serviço</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={needsUserAuth}
                    onChange={(e) => setNeedsUserAuth(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 border-slate-700 bg-slate-900"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Área Privada de Clientes (Login / Autenticação)</span>
                    <span className="text-[11px] text-slate-400">Espaço restrito para cada cliente aceder aos seus dados ou histórico</span>
                  </div>
                </label>

              </div>
            </div>

            {/* 3. Orçamento Planeado */}
            <div>
              <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2.5">
                03. Qual é a sua expectativa de orçamento?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: '100k', label: '100.000 Kz' },
                  { id: '200k', label: '200.000 Kz' },
                  { id: '300k', label: '300.000 Kz' },
                  { id: '400k', label: '400.000+ Kz' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBudgetExpectation(item.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-colors text-center border cursor-pointer ${
                      budgetExpectation === item.id
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Dynamic Calculation Result & Conversion Output */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#070D18] border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl relative space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Resultado da Simulação</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ESTIMATIVA EM TEMPO REAL
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-400">Pacote Sugerido pela Tech Lab:</span>
              <h3 className="text-xl font-extrabold text-white mt-0.5 font-mono">{estimate.tierName}</h3>
              
              <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800/90">
                <span className="text-[11px] text-slate-400 font-mono block">Faixa de Investimento Inicial:</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mt-1 block">
                  {estimate.priceRange}
                </span>
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Prazo Estimado:</span>
                  <span className="font-semibold text-slate-200">{estimate.deliveryDays}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                  <span>Manutenção Recomendada:</span>
                  <span className="font-semibold text-slate-200">{estimate.recommendedCare}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
              <strong className="text-emerald-400">Porquê este pacote:</strong> {estimate.reason}
            </p>

            {/* MANDATORY LEGAL DISCLAIMER as requested by user prompt */}
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
              <p className="leading-snug">
                <strong>Aviso importante:</strong> Esta estimativa é meramente indicativa e <u>não substitui uma proposta comercial formal</u>, a qual é emitida após análise detalhada dos seus requisitos.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() => onRequestFormalQuote(generateBriefingSummary(), estimate.priceRange)}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>Solicitar Proposta Formal com Esta Estimativa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenWhatsAppBriefing(generateBriefingSummary())}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Enviar Briefing via WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
