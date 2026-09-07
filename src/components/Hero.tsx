import React from 'react';
import { ArrowRight, Terminal, Cpu, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
  onOpenWhatsApp?: () => void;
  onOpenSimulator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreServices,
  onOpenSimulator,
}) => {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 bg-[#F3F1EA] overflow-hidden border-b border-[#D9DCE1]">
      
      {/* Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 bg-editorial-grid opacity-60 pointer-events-none" />

      {/* Decorative Brand Accent Lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-[#D9DCE1]/70 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 left-12 w-px h-full bg-[#D9DCE1]/40 pointer-events-none hidden xl:block" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Meta Bar / Editorial Monospace Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D9DCE1]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-[#071426] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20D9D2] animate-pulse" />
              <span>ESTÚDIO DE TECNOLOGIA</span>
            </span>
            <span className="text-xs font-mono text-[#68707C]">
              LUANDA · MALANJE · OPERAÇÃO DIGITAL
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-[#68707C]">
            <span className="text-[#FF7A3D] font-medium">[MVP COMERCIAL]</span>
            <span>BUILD 2026.04</span>
          </div>
        </div>

        {/* Grand Expressive Typographic Composition (Section 8) */}
        <div className="mb-12 max-w-5xl">
          <h1 className="font-heading tracking-tight text-[#071426] leading-[0.98] select-none">
            <span className="block text-3xl sm:text-5xl lg:text-6xl font-light text-[#68707C] tracking-normal mb-1">
              TECNOLOGIA QUE
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl font-black text-[#071426] uppercase">
              TRANSFORMA
            </span>
            <span className="block text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#087BEF]">
              IDEIAS EM NEGÓCIOS<span className="text-[#20D9D2]">.</span>
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#68707C] max-w-2xl font-normal leading-relaxed">
            Desenvolvemos software sob medida, produtos digitais, identidade de marca e automação para empresas e empreendedores que constroem o futuro de Angola.
          </p>
        </div>

        {/* Asymmetric Composition: CTAs + Bespoke Geometric Visual Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Actions & Value Blocks */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Action Buttons (Section 27 & 28) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onStartProject}
                className="px-6 py-4 rounded-lg bg-[#071426] hover:bg-[#087BEF] text-white text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Começar projeto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onOpenSimulator || onExploreServices}
                className="px-6 py-4 rounded-lg bg-transparent hover:bg-[#071426]/5 border border-[#071426] text-[#071426] text-sm font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Simular projeto</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Editorial Quick Metrics Matrix */}
            <div className="pt-6 border-t border-[#D9DCE1] grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#68707C] block">01 / ENGENHARIA</span>
                <span className="text-base font-bold text-[#071426] block">Código Proprietário</span>
                <p className="text-xs text-[#68707C]">Sem templates descartáveis ou dependências lentas.</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-[#68707C] block">02 / COMERCIAL</span>
                <span className="text-base font-bold text-[#071426] block">Foco em Conversão</span>
                <p className="text-xs text-[#68707C]">Estruturado para vender no contexto do mercado angolano.</p>
              </div>
            </div>

            {/* Sub-quote */}
            <div className="p-4 rounded-lg bg-white border border-[#D9DCE1] flex items-center justify-between">
              <div className="text-xs font-mono text-[#68707C]">
                Estimativas transparentes em Kwanzas (AOA)
              </div>
              <span className="text-xs font-mono font-semibold text-[#087BEF]">
                SEM SURPRESAS
              </span>
            </div>

          </div>

          {/* Right Column (7 Cols): Custom Geometric System (Section 9) */}
          <div className="lg:col-span-7">
            <div className="bg-[#071426] rounded-xl border border-[#111827] p-6 sm:p-8 text-white relative shadow-xl overflow-hidden">
              
              {/* Subtle matrix pattern */}
              <div className="absolute inset-0 bg-navy-grid opacity-30 pointer-events-none" />

              {/* Graphic Header: Terminal & Pixel Motifs */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E293D] relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF7A3D]" />
                  <div className="w-3 h-3 rounded-full bg-[#20D9D2]" />
                  <div className="w-3 h-3 rounded-full bg-[#087BEF]" />
                  <span className="text-xs font-mono text-[#94A3B8] ml-2">TECH_LAB_CORE.sys</span>
                </div>

                {/* Pixel Grid Motif inspired by Tech Lab logo */}
                <div className="grid grid-cols-4 gap-1 opacity-80">
                  <div className="w-2 h-2 bg-[#087BEF]" />
                  <div className="w-2 h-2 bg-[#20D9D2]" />
                  <div className="w-2 h-2 bg-transparent border border-white/20" />
                  <div className="w-2 h-2 bg-[#087BEF]" />
                  <div className="w-2 h-2 bg-[#20D9D2]" />
                  <div className="w-2 h-2 bg-[#087BEF]" />
                  <div className="w-2 h-2 bg-[#FF7A3D]" />
                  <div className="w-2 h-2 bg-transparent" />
                </div>
              </div>

              {/* Architecture Blueprint Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 font-mono text-xs">
                
                {/* Node 1: Software Stack */}
                <div className="p-4 rounded-lg bg-[#0B1220] border border-[#1E293D] space-y-2">
                  <div className="flex items-center justify-between text-[#68707C]">
                    <span>// 01_SOFTWARE</span>
                    <span className="text-[#20D9D2]">ACTIVE</span>
                  </div>
                  <div className="text-white font-sans text-sm font-semibold">
                    Web & Sistemas Web
                  </div>
                  <div className="text-[#94A3B8] text-[11px] leading-relaxed font-mono">
                    React · TypeScript · Tailwind · APIs REST · WhatsApp Bridge
                  </div>
                </div>

                {/* Node 2: Creative Design */}
                <div className="p-4 rounded-lg bg-[#0B1220] border border-[#1E293D] space-y-2">
                  <div className="flex items-center justify-between text-[#68707C]">
                    <span>// 02_CREATIVE</span>
                    <span className="text-[#FF7A3D]">BRANDING</span>
                  </div>
                  <div className="text-white font-sans text-sm font-semibold">
                    Design & Identidade
                  </div>
                  <div className="text-[#94A3B8] text-[11px] leading-relaxed font-mono">
                    Design Systems · UI/UX Editorial · Conversão Comercial
                  </div>
                </div>

                {/* Node 3: Electronics & Hardware */}
                <div className="p-4 rounded-lg bg-[#0B1220] border border-[#1E293D] space-y-2">
                  <div className="flex items-center justify-between text-[#68707C]">
                    <span>// 03_HARDWARE</span>
                    <span className="text-[#087BEF]">AUTOMATION</span>
                  </div>
                  <div className="text-white font-sans text-sm font-semibold">
                    Eletrónica & IoT
                  </div>
                  <div className="text-[#94A3B8] text-[11px] leading-relaxed font-mono">
                    Circuitos · Sensores · Painéis de Monitorização Remota
                  </div>
                </div>

                {/* Node 4: Academy */}
                <div className="p-4 rounded-lg bg-[#0B1220] border border-[#1E293D] space-y-2">
                  <div className="flex items-center justify-between text-[#68707C]">
                    <span>// 04_ACADEMY</span>
                    <span className="text-[#20D9D2]">TRAINING</span>
                  </div>
                  <div className="text-white font-sans text-sm font-semibold">
                    Capacitação Prática
                  </div>
                  <div className="text-[#94A3B8] text-[11px] leading-relaxed font-mono">
                    Programação · Importação · Marketing · Empreendedorismo
                  </div>
                </div>

              </div>

              {/* Bottom Technical Status Bar */}
              <div className="mt-4 pt-4 border-t border-[#1E293D] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#68707C] relative z-10">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#087BEF]" />
                  <span>DISPONIBILIDADE IMEDIATA PARA NOVOS BRIEFINGS</span>
                </div>
                <div className="text-[#20D9D2]">
                  MALANJE & LUANDA
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
