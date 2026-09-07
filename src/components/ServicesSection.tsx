import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Code, Palette, Cpu, Check, Layers, Monitor, ShoppingCart, Smartphone, Sparkles, Activity } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForSimulation?: (serviceId: string) => void;
  onOpenWhatsApp?: () => void;
  onStartQuote?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForSimulation,
  onStartQuote,
}) => {
  const [activeSoftwareTab, setActiveSoftwareTab] = useState<'web' | 'systems' | 'ecommerce' | 'apps'>('web');

  const softwareExamples = {
    web: {
      tag: 'WEB PLATFORMS',
      title: 'Websites Institucionais & Landing Pages de Alta Performance',
      description: 'Construídos para carregar em menos de 1 segundo mesmo em conexões móveis angolanas, com SEO técnico e conversão direta para canais comerciais.',
      specs: ['Next.js / React Moderno', 'Carregamento instantâneo', 'SEO estruturado para Angola', 'Integração direta de contacto'],
      mockupType: 'browser',
    },
    systems: {
      tag: 'SYSTEMS & SAAS',
      title: 'Sistemas Web de Gestão Interna & Painéis Operacionais',
      description: 'Substitua planilhas manuais e processos dispersos por plataformas centrais seguras: controle de faturamento, estoque, funcionários e relatórios.',
      specs: ['Bancos de dados relacionais', 'Painéis analíticos em tempo real', 'Exportação de relatórios PDF/Excel', 'Controle de acesso por permissão'],
      mockupType: 'dashboard',
    },
    ecommerce: {
      tag: 'E-COMMERCE',
      title: 'Lojas Virtuais & Catálogos Digitais com Pagamentos Locais',
      description: 'Catálogos dinâmicos integrados com WhatsApp e fluxos prontos para o mercado de Luanda e províncias, facilitando pedidos e comprovação de transferências.',
      specs: ['Catálogo sincronizado', 'Checkout simplificado', 'Geração de pedido no WhatsApp', 'Gestão simplificada de estoque'],
      mockupType: 'store',
    },
    apps: {
      tag: 'MOBILE & APPS',
      title: 'Aplicações Web Progressivas (PWA) & Mobile',
      description: 'Interfaces móveis intuitivas que funcionam como apps instaláveis, sem a fricção de download em lojas pesadas e consumindo o mínimo de dados.',
      specs: ['Instalação direta no telemóvel', 'Suporte a modo offline parcial', 'Notificações e alertas diretos', 'Consumo mínimo de pacotes de dados'],
      mockupType: 'mobile',
    },
  };

  return (
    <div id="servicos" className="border-b border-[#D9DCE1]">
      
      {/* ============================================================ */}
      {/* 16. OVERVIEW / EDITORIAL INTRO — ASYMMETRIC MAGAZINE LAYOUT */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-[#F3F1EA] border-b border-[#D9DCE1] relative">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D9DCE1]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#087BEF] font-semibold block mb-2">
                02 / Portfólio de Capacidades
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-[#071426] tracking-tight">
                O QUE CONSTRUÍMOS<span className="text-[#087BEF]">.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#68707C] max-w-md mt-4 md:mt-0 font-normal">
              Engenharia sólida, design expressivo e eletrónica aplicada, organizados em quatro pilares estruturais para transformar negócios.
            </p>
          </div>

          {/* Asymmetric Editorial Pillars Summary (Magazine feel) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* 01 SOFTWARE (Large dominant block - 6 cols) */}
            <div className="md:col-span-6 bg-[#071426] text-white p-8 rounded-xl border border-[#111827] flex flex-col justify-between group hover:border-[#087BEF]/60 transition-all">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-mono font-bold text-[#087BEF]">01</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0B1220] text-[#20D9D2] border border-[#1E293D]">
                    CORE PRODUCT
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mb-3">
                  SOFTWARE
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                  Construímos produtos digitais sob medida: websites institucionais, e-commerces, sistemas operacionais e plataformas SaaS de alta velocidade.
                </p>
              </div>
              <a
                href="#software-detail"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#20D9D2] hover:text-white transition-colors"
              >
                <span>VER ESPECIFICAÇÕES TÉCNICAS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 02 CREATIVE (Medium block - 6 cols) */}
            <div className="md:col-span-6 bg-white p-8 rounded-xl border border-[#D9DCE1] flex flex-col justify-between group hover:border-[#071426] transition-all">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-mono font-bold text-[#071426]">02</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F3F1EA] text-[#FF7A3D] font-medium border border-[#D9DCE1]">
                    BRAND & UI/UX
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#071426] tracking-tight mb-3">
                  CREATIVE
                </h3>
                <p className="text-sm text-[#68707C] leading-relaxed mb-6 font-normal">
                  Identidade corporativa, sistemas visuais, design de interfaces UI/UX e ativos de comunicação digital pensados para conferir autoridade imediata.
                </p>
              </div>
              <a
                href="#creative-detail"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#071426] hover:text-[#087BEF] transition-colors"
              >
                <span>EXPLORAR DESIGN SYSTEM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 03 ELECTRONICS (4 cols) */}
            <div className="md:col-span-6 lg:col-span-7 bg-[#0B1220] text-white p-8 rounded-xl border border-[#1E293D] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-[#20D9D2]">03</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#071426] text-[#20D9D2]">
                    HARDWARE & IOT
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-heading mb-2">
                  ELECTRONICS
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Automação física, integração de sensores, circuitos dedicados e soluções técnicas para conectar o mundo físico às plataformas digitais.
                </p>
              </div>
              <a
                href="#electronics-detail"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#20D9D2] hover:text-white transition-colors"
              >
                <span>VER DIAGRAMAS TÉCNICOS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 04 ACADEMY (5 cols) */}
            <div className="md:col-span-6 lg:col-span-5 bg-[#087BEF] text-white p-8 rounded-xl flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-white">04</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/20 text-white">
                    EDUCATION
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-heading mb-2 text-white">
                  ACADEMY
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Formações imersivas orientadas ao mercado angolano: programação web, importação técnica, marketing digital e novos negócios.
                </p>
              </div>
              <a
                href="#academy"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-white hover:underline transition-all"
              >
                <span>CONHECER FORMAÇÕES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 17. SEÇÃO SOFTWARE — FUNDO NAVY (#071426) & INTERFACE MOCKUPS */}
      {/* ============================================================ */}
      <section id="software-detail" className="py-24 md:py-32 bg-[#071426] text-white relative overflow-hidden border-b border-[#1E293D]">
        <div className="absolute inset-0 bg-navy-grid opacity-30 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1E293B]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#20D9D2] font-semibold block mb-2">
                01 / Engenharia de Software
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
                CONSTRUÍMOS PRODUTOS DIGITAIS SÓLIDOS.
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                type="button"
                onClick={onStartQuote}
                className="px-5 py-3 rounded-lg bg-[#087BEF] hover:bg-[#19A7FF] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Construir um produto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sub-discipline Tabs: WEB, SYSTEMS, E-COMMERCE, APPS */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#1E293B]">
            {(['web', 'systems', 'ecommerce', 'apps'] as const).map((tab) => {
              const isActive = activeSoftwareTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveSoftwareTab(tab)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-mono font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#087BEF] text-white shadow-sm'
                      : 'bg-[#0B1220] text-[#94A3B8] hover:text-white border border-[#1E293D]'
                  }`}
                >
                  {tab === 'web' && 'WEB'}
                  {tab === 'systems' && 'SYSTEMS'}
                  {tab === 'ecommerce' && 'E-COMMERCE'}
                  {tab === 'apps' && 'APPS'}
                </button>
              );
            })}
          </div>

          {/* Software Content Showcase: Specs Left + Technical Interface Mockup Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0B1220] border border-[#1E293D] text-[11px] font-mono text-[#20D9D2]">
                <Activity className="w-3.5 h-3.5" />
                <span>{softwareExamples[activeSoftwareTab].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
                {softwareExamples[activeSoftwareTab].title}
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {softwareExamples[activeSoftwareTab].description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#1E293B]">
                <span className="text-[11px] font-mono text-[#68707C] uppercase tracking-wider block">
                  Padrões de Engenharia:
                </span>
                {softwareExamples[activeSoftwareTab].specs.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#20D9D2] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onSelectServiceForSimulation?.('website')}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#19A7FF] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Simular este tipo de solução no configurador</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Technical Mockup Card (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#0B1220] rounded-xl border border-[#1E293D] p-5 sm:p-7 shadow-2xl space-y-4">
                
                {/* Browser/Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1E293D] font-mono text-xs text-[#68707C]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A3D]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#20D9D2]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#087BEF]" />
                  </div>
                  <span className="text-[11px] text-[#94A3B8] truncate max-w-[200px] sm:max-w-none">
                    https://app.techlab.ao/{activeSoftwareTab}
                  </span>
                  <span className="text-[10px] text-[#20D9D2]">200 OK</span>
                </div>

                {/* Dynamic Micro-Interface Representation */}
                <div className="p-4 rounded-lg bg-[#071426] border border-[#1E293D] space-y-4">
                  
                  {/* Top Bar of interface */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded bg-[#087BEF]/20 border border-[#087BEF]/40 flex items-center justify-center text-[#19A7FF]">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">TECH LAB CORE ENGINE</div>
                        <div className="text-[10px] text-[#68707C] font-mono">Angola Datacenter · Latency: 18ms</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      OPERACIONAL
                    </span>
                  </div>

                  {/* Visual Data Matrix inside Mockup */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded bg-[#0B1220] border border-[#1E293D] space-y-1">
                      <span className="text-[10px] font-mono text-[#68707C]">REQUISIÇÕES</span>
                      <div className="text-sm font-bold text-white font-mono">14.2k/dia</div>
                      <div className="text-[9px] text-[#20D9D2]">WhatsApp + Webhook</div>
                    </div>

                    <div className="p-3 rounded bg-[#0B1220] border border-[#1E293D] space-y-1">
                      <span className="text-[10px] font-mono text-[#68707C]">CONVERSÃO</span>
                      <div className="text-sm font-bold text-[#FF7A3D] font-mono">+38.4%</div>
                      <div className="text-[9px] text-[#94A3B8]">vs. fluxo manual</div>
                    </div>

                    <div className="p-3 rounded bg-[#0B1220] border border-[#1E293D] space-y-1">
                      <span className="text-[10px] font-mono text-[#68707C]">UPTIME</span>
                      <div className="text-sm font-bold text-emerald-400 font-mono">99.98%</div>
                      <div className="text-[9px] text-[#94A3B8]">Infraestrutura segura</div>
                    </div>
                  </div>

                  {/* Code snippet inside mockup */}
                  <div className="p-3 rounded bg-[#050B14] border border-[#1E293D] font-mono text-[11px] text-[#94A3B8] space-y-1 overflow-x-auto">
                    <div className="text-[#68707C]">// Inicialização do serviço Tech Lab</div>
                    <div><span className="text-[#19A7FF]">const</span> <span className="text-white">clientProject</span> = <span className="text-[#20D9D2]">new</span> <span className="text-yellow-400">TechLabEngine</span>({'{'}</div>
                    <div className="pl-4">region: <span className="text-emerald-400">'AO-LUA-01'</span>,</div>
                    <div className="pl-4">paymentBridges: [<span className="text-emerald-400">'Multicaixa Express'</span>, <span className="text-emerald-400">'WhatsApp'</span>],</div>
                    <div className="pl-4">scale: <span className="text-[#FF7A3D]">'enterprise-ready'</span></div>
                    <div>{'}'});</div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 18. SEÇÃO CREATIVE — FUNDO OFF-WHITE (#F3F1EA) COM LARANJA ACCENT */}
      {/* ============================================================ */}
      <section id="creative-detail" className="py-24 md:py-32 bg-[#F3F1EA] text-[#071426] relative border-b border-[#D9DCE1]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D9DCE1]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF7A3D] font-semibold block mb-2">
                02 / Estúdio Criativo & Design System
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#071426] tracking-tight">
                IDENTIDADE VISUAL QUE GERA AUTORIDADE.
              </h2>
            </div>
            <p className="text-sm text-[#68707C] max-w-md mt-4 md:mt-0 font-normal">
              Não fazemos apenas layouts bonitos. Construímos sistemas de design coerentes para que a sua empresa seja percebida como líder de mercado.
            </p>
          </div>

          {/* 4 Editorial Creative Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Block 1: Branding */}
            <div className="p-6 rounded-xl bg-white border border-[#D9DCE1] hover:border-[#FF7A3D] transition-colors space-y-4">
              <span className="text-xs font-mono text-[#FF7A3D] font-bold block">01 / MARCA</span>
              <h3 className="text-lg font-bold font-heading text-[#071426]">Identidade Visual & Logos</h3>
              <p className="text-xs text-[#68707C] leading-relaxed">
                Logomarcas com fundamentação tipográfica, manuais de marca completos, paletas de cores calibradas e ativos vetorizados.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#071426]">
                Entregas: SVG · AI · PDF · PNG
              </div>
            </div>

            {/* Block 2: UI/UX */}
            <div className="p-6 rounded-xl bg-white border border-[#D9DCE1] hover:border-[#087BEF] transition-colors space-y-4">
              <span className="text-xs font-mono text-[#087BEF] font-bold block">02 / PRODUTO</span>
              <h3 className="text-lg font-bold font-heading text-[#071426]">Design UI/UX de Interfaces</h3>
              <p className="text-xs text-[#68707C] leading-relaxed">
                Prototipagem interativa em alta fidelidade, arquitetura de informação e fluxos de navegação sem pontos de atrito.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#071426]">
                Figma · Design Systems · Wireframes
              </div>
            </div>

            {/* Block 3: Social Media */}
            <div className="p-6 rounded-xl bg-white border border-[#D9DCE1] hover:border-[#071426] transition-colors space-y-4">
              <span className="text-xs font-mono text-[#68707C] font-bold block">03 / COMUNICAÇÃO</span>
              <h3 className="text-lg font-bold font-heading text-[#071426]">Social Media & Campanhas</h3>
              <p className="text-xs text-[#68707C] leading-relaxed">
                Templates editáveis para redes sociais, criativos de alta conversão para anúncios e materiais digitais de suporte comercial.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#071426]">
                Carrosséis · Banners · Catálogos
              </div>
            </div>

            {/* Block 4: Design Editorial */}
            <div className="p-6 rounded-xl bg-white border border-[#D9DCE1] hover:border-[#FF7A3D] transition-colors space-y-4">
              <span className="text-xs font-mono text-[#FF7A3D] font-bold block">04 / CORPORATIVO</span>
              <h3 className="text-lg font-bold font-heading text-[#071426]">Materiais de Apresentação</h3>
              <p className="text-xs text-[#68707C] leading-relaxed">
                Propostas comerciais, apresentações para investidores e relatórios institucionais com acabamento editorial de padrão internacional.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#071426]">
                Pitch Decks · Relatórios · PDF Interativo
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 19. SEÇÃO ELECTRONICS — NAVY + CIRCUITOS + DIAGRAMAS + CIANO */}
      {/* ============================================================ */}
      <section id="electronics-detail" className="py-24 md:py-32 bg-[#0B1220] text-white relative overflow-hidden border-b border-[#1E293D]">
        <div className="absolute inset-0 bg-navy-noise opacity-40 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1E293B]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#20D9D2] font-semibold block mb-2">
                03 / Hardware & Automação Aplicada
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
                CONECTAMOS O MUNDO FÍSICO AO DIGITAL.
              </h2>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-md mt-4 md:mt-0 font-normal">
              Eletrónica técnica, monitorização remota e soluções de automação para negócios que operam além do ecrã.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Technical Circuit Schematic Block (7 Cols) */}
            <div className="lg:col-span-7 bg-[#071426] rounded-xl border border-[#1E293D] p-6 sm:p-8 font-mono text-xs space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                <span className="text-[#20D9D2]">// SCHEMATIC_MAP_v2.0</span>
                <span className="text-[#68707C]">STATUS: HARDWARE_LINKED</span>
              </div>

              {/* Schematic Diagram Flow */}
              <div className="space-y-4">
                
                {/* Flow Node 1 */}
                <div className="p-4 rounded bg-[#0B1220] border border-[#1E293D] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#68707C]">ENTRADA FÍSICA</span>
                    <div className="text-white font-sans text-sm font-semibold">Sensores de Campo & Periféricos</div>
                    <div className="text-[11px] text-[#94A3B8]">Temperatura · Fluxo · Contagem · Acessos biométricos</div>
                  </div>
                  <span className="text-xs text-[#20D9D2] font-mono">01_INPUT</span>
                </div>

                <div className="text-center text-[#20D9D2] font-mono text-xs">
                  ↓ [ BARRAMENTO RS485 / WI-FI / LORA ]
                </div>

                {/* Flow Node 2 */}
                <div className="p-4 rounded bg-[#0B1220] border border-[#087BEF]/40 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#087BEF]">PROCESSAMENTO CENTRAL</span>
                    <div className="text-white font-sans text-sm font-semibold">Microcontroladores & Edge Gateway</div>
                    <div className="text-[11px] text-[#94A3B8]">Filtragem local, segurança de dados e telemetria</div>
                  </div>
                  <span className="text-xs text-[#087BEF] font-mono">02_CORE</span>
                </div>

                <div className="text-center text-[#20D9D2] font-mono text-xs">
                  ↓ [ PROTOCOLO MQTT / REST API ENCRYPTED ]
                </div>

                {/* Flow Node 3 */}
                <div className="p-4 rounded bg-[#0B1220] border border-[#20D9D2]/40 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#20D9D2]">INTERFACE & DECISÃO</span>
                    <div className="text-white font-sans text-sm font-semibold">Dashboard Web Tech Lab & Alertas WhatsApp</div>
                    <div className="text-[11px] text-[#94A3B8]">Acompanhamento em tempo real para tomada de decisão</div>
                  </div>
                  <span className="text-xs text-[#20D9D2] font-mono">03_OUTPUT</span>
                </div>

              </div>

            </div>

            {/* Practical Pillars (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-lg bg-[#071426] border border-[#1E293D] space-y-2">
                <span className="text-xs font-mono text-[#20D9D2]">01. AUTOMAÇÃO COMERCIAL</span>
                <h3 className="text-base font-bold font-heading text-white">Controle de Ambientes & Máquinas</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Automação para escritórios, clínicas e armazéns com controle programável e economia de energia.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#071426] border border-[#1E293D] space-y-2">
                <span className="text-xs font-mono text-[#20D9D2]">02. SUPORTE & INFRAESTRUTURA</span>
                <h3 className="text-base font-bold font-heading text-white">Postos de Trabalho & Redes</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Planeamento estruturado de redes corporativas, dimensionamento de servidores e estações em Luanda e Malanje.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#071426] border border-[#1E293D] space-y-2">
                <span className="text-xs font-mono text-[#20D9D2]">03. CONSULTORIA TÉCNICA</span>
                <h3 className="text-base font-bold font-heading text-white">Avaliação de Hardware</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Diagnóstico imparcial antes de compras volumosas de tecnologia, evitando investimentos incompatíveis.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
