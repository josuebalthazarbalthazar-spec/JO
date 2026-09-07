import React, { useState } from 'react';
import { MessageSquare, Mail, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';

interface DirectQuotePageProps {
  onGoToSimulator?: () => void;
  onGoToHome?: () => void;
}

export const DirectQuotePage: React.FC<DirectQuotePageProps> = ({
  onGoToHome,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Website Profissional');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('200.000 Kz – 400.000 Kz');

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypeOptions = [
    'Website Profissional',
    'Loja Online / E-commerce',
    'Sistema Web Personalizado / SaaS',
    'Automação & Integração WhatsApp',
    'Design & Identidade Visual',
    'Eletrónica & Automação IoT',
    'Outro Projeto Sob Medida',
  ];

  const budgetOptions = [
    'Até 150.000 Kz',
    '150.000 Kz – 300.000 Kz',
    '300.000 Kz – 500.000 Kz',
    '500.000 Kz – 1.000.000 Kz',
    'Acima de 1.000.000 Kz',
    'A definir com análise técnica',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Por favor indique o seu nome.';
    if (!whatsapp.trim()) errs.whatsapp = 'Por favor indique o seu WhatsApp ou número de contacto.';
    if (!description.trim()) errs.description = 'Por favor descreva sucintamente a ideia ou necessidade.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getWhatsAppUrl = () => {
    const message = `Olá Tech Lab! Gostaria de solicitar um orçamento para o meu projeto.

Nome: ${name}
Empresa: ${company || 'Não informada'}
WhatsApp: ${whatsapp}
Email: ${email || 'Não informado'}
Tipo de projeto: ${projectType}
Orçamento estimado: ${budget}

Descrição da necessidade:
${description}

Aguardo o vosso contacto e proposta técnica.`;

    return `https://wa.me/244937656106?text=${encodeURIComponent(message)}`;
  };

  const getMailtoUrl = () => {
    const subject = 'Solicitação de orçamento — Tech Lab';
    const body = `Nome: ${name}
Empresa: ${company || 'Não informada'}
Contacto: ${whatsapp}
Email: ${email || 'Não informado'}
Tipo de projeto: ${projectType}
Orçamento estimado: ${budget}

Descrição:
${description}`;

    return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="py-12 md:py-24 bg-[#F3F1EA] min-h-screen text-[#071426]">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#68707C]">
          <button
            onClick={onGoToHome}
            className="hover:text-[#087BEF] transition-colors cursor-pointer"
          >
            Início
          </button>
          <span>/</span>
          <span className="text-[#087BEF]">Solicitar Orçamento</span>
        </div>

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#087BEF] font-semibold block mb-2">
            Proposta Comercial
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-[#071426] tracking-tight leading-tight">
            Vamos transformar a sua ideia em projeto<span className="text-[#087BEF]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#68707C] mt-3 leading-relaxed font-normal">
            Conte-nos o que precisa. Nós analisamos os requisitos e entramos em contacto com uma estimativa técnica.
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white rounded-2xl border border-[#D9DCE1] p-8 sm:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nome e Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#071426] mb-1.5 uppercase tracking-wide">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="O seu nome"
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCE1] bg-[#F3F1EA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                  />
                  {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#071426] mb-1.5 uppercase tracking-wide">
                    Empresa / Marca
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nome da sua empresa (opcional)"
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCE1] bg-[#F3F1EA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                  />
                </div>
              </div>

              {/* Contactos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#071426] mb-1.5 uppercase tracking-wide">
                    WhatsApp ou Telefone *
                  </label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="ex: +244 9..."
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCE1] bg-[#F3F1EA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                  />
                  {errors.whatsapp && <span className="text-xs text-red-500 mt-1 block">{errors.whatsapp}</span>}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#071426] mb-1.5 uppercase tracking-wide">
                    Email para envio da proposta
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCE1] bg-[#F3F1EA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                  />
                </div>
              </div>

              {/* Tipo de Projeto e Orçamento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#071426] mb-1.5 uppercase tracking-wide">
                    Tipo de projeto
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCE1] bg-[#F3F1EA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                  >
                    {projectTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#071426] mb-1.5 uppercase tracking-wide">
                    Orçamento previsto (AOA)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCE1] bg-[#F3F1EA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Descrição */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#071426] mb-1.5 uppercase tracking-wide">
                  Descrição do projeto e necessidades *
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Explique o que precisa: objetivos, número de páginas aproximadas, funcionalidades chave..."
                  className="w-full px-4 py-3 rounded-lg border border-[#D9DCE1] bg-[#F3F1EA]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                />
                {errors.description && <span className="text-xs text-red-500 mt-1 block">{errors.description}</span>}
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D9DCE1]">
                <div className="text-xs font-mono text-[#68707C]">
                  Atendimento oficial em Luanda, Malanje e todo o território angolano.
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#071426] hover:bg-[#087BEF] text-white text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Solicitar orçamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Envio Options: No plaintext numbers or emails */
          <div className="bg-white rounded-2xl border border-[#D9DCE1] p-8 sm:p-12 shadow-sm space-y-6">
            
            <div className="flex items-center gap-3 text-emerald-600">
              <CheckCircle2 className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-heading text-[#071426]">
                Pedido de Orçamento Pronto para Envio
              </h2>
            </div>

            <p className="text-sm text-[#68707C] leading-relaxed">
              O seu pedido foi preparado com sucesso. Para garantirmos uma resposta rápida pela equipa técnica da Tech Lab, envie diretamente pelo canal da sua preferência:
            </p>

            <div className="bg-[#F3F1EA] p-5 rounded-xl border border-[#D9DCE1] text-xs font-mono space-y-1.5 text-[#071426]">
              <div><strong>Cliente:</strong> {name} {company ? `(${company})` : ''}</div>
              <div><strong>Contacto:</strong> {whatsapp}</div>
              <div><strong>Tipo de Projeto:</strong> {projectType}</div>
              <div><strong>Investimento Previsto:</strong> {budget}</div>
            </div>

            {/* Direct Send CTAs: strictly NO plaintext phone numbers or email addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-lg bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar pelo WhatsApp</span>
              </a>

              <a
                href={getMailtoUrl()}
                className="py-3.5 px-5 rounded-lg bg-[#087BEF] hover:bg-[#19A7FF] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar por Email</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#D9DCE1] flex justify-between items-center text-xs">
              <button
                onClick={() => setSubmitted(false)}
                className="text-[#68707C] hover:text-[#071426] flex items-center gap-1.5 cursor-pointer font-mono"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Editar dados do formulário</span>
              </button>

              <button
                onClick={onGoToHome}
                className="font-semibold text-[#087BEF] hover:underline cursor-pointer"
              >
                Voltar à página inicial
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
