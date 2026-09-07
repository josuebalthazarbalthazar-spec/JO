import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Layers, 
  HelpCircle,
  Zap,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { WEBSITE_PACKAGES } from '../data/techLabData';
import { WebsitePackage } from '../types';

interface PricingWebsitesProps {
  onSelectPackage: (pkg: WebsitePackage) => void;
  onOpenWhatsAppWithPlan: (planName: string, price: string) => void;
}

export const PricingWebsites: React.FC<PricingWebsitesProps> = ({ 
  onSelectPackage, 
  onOpenWhatsAppWithPlan 
}) => {
  const [showComparisonTable, setShowComparisonTable] = useState(false);

  const comparisonFeatures = [
    { label: 'Número Máximo de Páginas', starter: 'Até 4 páginas', business: 'Até 8 páginas', professional: 'Até 12 páginas', premium: 'Arquitetura sob medida' },
    { label: 'Design Responsivo (Mobile & Desktop)', starter: '✓', business: '✓', professional: '✓', premium: '✓' },
    { label: 'Integração Direta com WhatsApp', starter: 'Botão padrão', business: 'Avançado com mensagem', professional: 'Automação de cotação', premium: 'Totalmente integrado' },
    { label: 'Formulários de Contacto & Pedidos', starter: 'Básico (1 form)', business: 'Personalizados', professional: 'Sistema de orçamentos', premium: 'Formulários dinâmicos' },
    { label: 'Catálogo de Produtos/Serviços', starter: '—', business: '✓ Com filtros', professional: '✓ Avançado', premium: '✓ Base de dados ativa' },
    { label: 'Painel Administrativo', starter: '—', business: '—', professional: 'Básico', premium: 'Completo (CRUD)' },
    { label: 'SEO e Indexação no Google', starter: 'SEO Básico', business: 'SEO Estruturado', professional: 'SEO Avançado + CRO', premium: 'SEO Corporativo' },
    { label: 'Google Analytics & Search Console', starter: '—', business: '✓ Configurado', professional: '✓ Painel de métricas', premium: '✓ Analytics em tempo real' },
    { label: 'Área Privada de Clientes/Login', starter: '—', business: '—', professional: '—', premium: '✓ Autenticação ativa' },
    { label: 'Integração de Pagamentos', starter: '—', business: '—', professional: '—', premium: '✓ Quando aplicável' },
    { label: 'Prazo de Entrega Estimado', starter: '5–7 dias úteis', business: '7–12 dias úteis', professional: '12–18 dias úteis', premium: '18–30 dias úteis' },
    { label: 'Manutenção Tech Lab Care', starter: '15.000 Kz/mês', business: '25.000 Kz/mês', professional: '40.000 Kz/mês', premium: 'A partir de 60.000 Kz/mês' },
  ];

  return (
    <section id="websites" className="py-20 bg-[#070B14] border-t border-slate-800/80 relative">
      {/* Background glow around recommended plan */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider font-semibold">
            Serviço Principal • Preços Transparentes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Escolha o pacote ideal para o seu negócio
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            Sem preços ocultos, sem termos confusos. Valores claros em Kwanzas (Kz) com escopo e prazos definidos.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {WEBSITE_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            const isPremium = pkg.id === 'premium';

            return (
              <div
                key={pkg.id}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-[#0A1329] border-2 border-sky-400 shadow-2xl shadow-sky-500/20 xl:-translate-y-3'
                    : isPremium
                    ? 'bg-slate-900/90 border border-slate-700 hover:border-slate-600'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Highlight Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-500 text-slate-950 px-4 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MAIS ESCOLHIDO • RECOMENDADO</span>
                  </div>
                )}

                {isPremium && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-300 border border-cyan-500/30 px-3.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase">
                    ARQUITETURA AVANÇADA
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-extrabold text-white tracking-wide font-mono">{pkg.name}</h3>
                      <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                        {pkg.pages}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-400 font-medium mt-1">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="py-4 border-y border-slate-800/80 mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        Prazo: {pkg.deliveryTime}
                      </span>
                      <span>Manutenção: {pkg.maintenancePrice}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {pkg.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                      O que está incluído:
                    </span>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-5 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>Solicitar Orçamento ({pkg.name})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenWhatsAppWithPlan(pkg.name, pkg.price)}
                    className="w-full py-2 px-3 rounded-lg text-slate-400 hover:text-emerald-400 text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3 h-3 text-emerald-400" />
                    <span>Dúvidas? Falar no WhatsApp</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Toggle Comparison Table */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowComparisonTable(!showComparisonTable)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>{showComparisonTable ? 'Ocultar Tabela de Comparação' : 'Comparar Todos os Detalhes dos 4 Pacotes'}</span>
          </button>
        </div>

        {/* Detailed Comparison Table */}
        {showComparisonTable && (
          <div className="mt-8 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl animate-in fade-in duration-300">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800">
                    <th className="p-4 text-slate-300 font-bold font-mono">Funcionalidade / Critério</th>
                    <th className="p-4 text-slate-300 font-bold font-mono text-center">STARTER (100k)</th>
                    <th className="p-4 text-emerald-400 font-bold font-mono text-center bg-emerald-950/20">BUSINESS (200k) ★</th>
                    <th className="p-4 text-slate-300 font-bold font-mono text-center">PROFESSIONAL (300k)</th>
                    <th className="p-4 text-slate-300 font-bold font-mono text-center">PREMIUM (400k)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-slate-300 font-medium">{row.label}</td>
                      <td className="p-4 text-center text-slate-400">{row.starter}</td>
                      <td className="p-4 text-center text-emerald-300 font-semibold bg-emerald-950/10">{row.business}</td>
                      <td className="p-4 text-center text-slate-300">{row.professional}</td>
                      <td className="p-4 text-center text-cyan-300">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-400">
              Precisa de uma funcionalidade específica não listada? <a href="#contactos" className="text-emerald-400 underline font-semibold">Solicite um orçamento sob medida</a>.
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
