import React from 'react';
import { ArrowRight, Compass, Shield, Users, Terminal } from 'lucide-react';
import { TechLabLogo } from './TechLabLogo';

interface AboutSectionProps {
  onStartProject?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#F3F1EA] border-b border-[#D9DCE1]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#087BEF]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#087BEF] font-semibold">
                06 / Origem & Filosofia
              </span>
            </div>

            {/* Central message */}
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#071426] tracking-tight leading-tight">
              Não queremos apenas criar tecnologia.<br />
              <span className="text-[#087BEF]">
                Queremos criar tecnologia que faça sentido para quem a utiliza.
              </span>
            </h2>

            <div className="space-y-4 text-base text-[#68707C] leading-relaxed font-normal">
              <p>
                A <strong className="text-[#071426]">Tech Lab</strong> nasceu da convicção de que empresas, empreendedores e profissionais em Angola não precisam de complexidade desnecessária ou de soluções importadas sem aderência à nossa realidade. Precisam de tecnologia que funcione, seja rápida e gere receita real.
              </p>
              <p>
                Somos uma <strong className="text-[#071426]">equipa jovem de engenheiros e criativos</strong> atuando em Luanda e Malanje com operação digital em todo o país. Olhamos para cada cliente não como um número de ticket, mas como um parceiro estratégico cuja presença digital tem de comunicar autoridade e viabilizar transações comerciais.
              </p>
              <p>
                Combinamos <strong className="text-[#071426]">software sob medida, design de interfaces e capacitação técnica</strong>. Se uma funcionalidade não gera valor para o cliente ou para a sua equipa, nós não a recomendamos. Essa transparência é a base de tudo o que construímos.
              </p>
            </div>

            {/* Principles matrix */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#D9DCE1]">
              <div className="p-5 rounded-xl bg-white border border-[#D9DCE1]">
                <span className="text-xs font-mono text-[#087BEF] font-bold block mb-1">01 / RELEVÂNCIA</span>
                <span className="text-sm font-bold text-[#071426] block mb-1 font-heading">Problemas Reais</span>
                <p className="text-xs text-[#68707C] leading-relaxed">Desenvolvemos soluções focadas em resolver gargalos operacionais e comerciais de Angola.</p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#D9DCE1]">
                <span className="text-xs font-mono text-[#FF7A3D] font-bold block mb-1">02 / PREVISIBILIDADE</span>
                <span className="text-sm font-bold text-[#071426] block mb-1 font-heading">Transparência Total</span>
                <p className="text-xs text-[#68707C] leading-relaxed">Estimativas claras em Kwanzas, sem taxas ocultas e alinhamento contínuo via canais diretos.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Graphic / Visual Composition (No generic 3 cards) */}
          <div className="lg:col-span-5">
            <div className="bg-[#071426] rounded-2xl border border-[#111827] p-8 text-white relative shadow-xl space-y-6">
              
              {/* Brand Header */}
              <div className="pb-4 border-b border-[#1E293B] flex items-center justify-between">
                <TechLabLogo variant="footer" />
                <span className="text-[11px] font-mono text-[#20D9D2]">MANIFESTO 2026</span>
              </div>

              {/* Composition Schema */}
              <div className="space-y-3 font-mono text-xs text-[#94A3B8]">
                <div className="p-4 rounded-xl bg-[#0B1220] border border-[#1E293B] space-y-1">
                  <span className="text-[10px] text-[#68707C] block">// ALCANCE REGIONAL</span>
                  <div className="text-white font-sans text-sm font-semibold">Malanje · Luanda · Angola</div>
                  <div className="text-xs text-[#19A7FF]">Atendimento remoto e presencial estruturado</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1220] border border-[#1E293B] space-y-1">
                  <span className="text-[10px] text-[#68707C] block">// ENGENHARIA & DESIGN</span>
                  <div className="text-white font-sans text-sm font-semibold">Jovem, Técnica e Focada em Produto</div>
                  <div className="text-xs text-[#20D9D2]">Código limpo + Design Editorial + Conversão</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1220] border border-[#1E293B] space-y-1">
                  <span className="text-[10px] text-[#68707C] block">// LEMA OPERACIONAL</span>
                  <div className="text-white font-sans text-sm font-semibold">INOVAR • CRIAR • TRANSFORMAR</div>
                  <div className="text-xs text-[#FF7A3D]">Código proprietário sem dependências frágeis</div>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="pt-2 text-xs text-[#68707C] italic border-t border-[#1E293B] leading-relaxed">
                "A melhor tecnologia é aquela que os seus clientes usam sem atrito e que gera receita mensurável para o seu negócio."
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
