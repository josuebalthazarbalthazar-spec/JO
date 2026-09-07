import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Clock, 
  Check, 
  ArrowRight,
  ExternalLink,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';
import { TechLabLogo } from './TechLabLogo';

interface ContactFormProps {
  initialProjectType?: string;
  initialBudget?: string;
  initialDescription?: string;
  onOpenWhatsApp: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialProjectType = 'Website',
  initialBudget = '200.000 Kz (Business Recomendado)',
  initialDescription = '',
}) => {
  const [activeTab, setActiveTab] = useState<'orcamento' | 'contacto'>('orcamento');

  // Budget Form State
  const [budgetForm, setBudgetForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProjeto: initialProjectType,
    orcamento: initialBudget,
    descricao: initialDescription,
  });
  const [budgetSubmitted, setBudgetSubmitted] = useState(false);
  const [budgetRef, setBudgetRef] = useState('');

  // Contact Message Form State
  const [contactForm, setContactForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const projectOptions = [
    'Website Institucional',
    'Catálogo / E-commerce',
    'Sistema Web Sob Medida',
    'SaaS / Software como Serviço',
    'Manutenção Tech Lab Care',
    'Consultoria / Outro',
  ];

  const budgetOptions = [
    '100.000 Kz (Starter)',
    '200.000 Kz (Business Recomendado)',
    '300.000 Kz (Professional)',
    '400.000 Kz (Premium)',
    'Ainda a definir com a Tech Lab',
  ];

  // Helper to validate and send Budget via WhatsApp
  const handleBudgetWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!budgetForm.nome || !budgetForm.email || !budgetForm.telefone || !budgetForm.descricao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const message = `Olá Tech Lab! Quero solicitar um orçamento para um projeto.
*Nome:* ${budgetForm.nome}
*Email:* ${budgetForm.email}
*Telefone/WhatsApp:* ${budgetForm.telefone}
*Tipo de Projeto:* ${budgetForm.tipoProjeto}
*Orçamento:* ${budgetForm.orcamento}
*Descrição:* ${budgetForm.descricao}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setBudgetRef('TL-' + Math.floor(100000 + Math.random() * 900000));
    setBudgetSubmitted(true);
  };

  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!budgetForm.nome || !budgetForm.email || !budgetForm.telefone || !budgetForm.descricao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    const refCode = 'TL-' + Math.floor(100000 + Math.random() * 900000);
    setBudgetRef(refCode);
    setBudgetSubmitted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <section id="orcamento" className="py-20 bg-[#070D1A] border-t border-slate-800/80 relative">
      <div id="contactos" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Tech Lab Logo */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <div className="mb-4">
            <TechLabLogo variant="card" showSlogan />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>ATENDIMENTO OFICIAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Solicitar Orçamento & Contacto
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Preencha os detalhes do seu projeto ou fale diretamente connosco através dos canais oficiais da Tech Lab.
          </p>

          {/* Tab Selector: Orçamento vs Mensagem de Contacto */}
          <div className="mt-8 flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800 max-w-md w-full">
            <button
              type="button"
              onClick={() => setActiveTab('orcamento')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'orcamento'
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Formulário de Orçamento
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('contacto')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'contacto'
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Mensagem de Contacto
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Direct Channels */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-2xl bg-[#0A1329] border border-slate-800 shadow-xl space-y-5">
              <div>
                <h3 className="text-base font-bold text-white">Canais de Atendimento Oficial</h3>
                <p className="text-xs text-slate-400 mt-1">Tech Lab — Soluções Digitais para Negócios</p>
              </div>
              
              <div className="space-y-3.5 text-xs text-slate-300">
                
                {/* Official WhatsApp Card */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold text-white text-xs">WhatsApp Oficial</span>
                  </div>
                  <div className="text-sm font-bold text-emerald-400">
                    Atendimento Direto via WhatsApp
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Solicitação de orçamento, informações, atendimento geral e inscrições.
                  </p>
                  <a
                    href={COMPANY_INFO.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-1"
                  >
                    <span>Abrir WhatsApp direto</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Official Email Card */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2.5 text-sky-400">
                    <Mail className="w-4 h-4" />
                    <span className="font-bold text-white text-xs">Email Oficial</span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-slate-200 break-all">
                    {COMPANY_INFO.email}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Envio de propostas formais, documentação e contratos.
                  </p>
                  <a
                    href={COMPANY_INFO.mailtoUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors pt-1"
                  >
                    <span>Enviar email direto</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Explicit requirement 5: Button "Prefiro falar pelo WhatsApp" */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400 block mb-2 font-medium">Tem urgência ou prefere não preencher formulários?</span>
                <a
                  href={COMPANY_INFO.whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/25 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Prefiro falar pelo WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Service & Operational Coverage */}
            <div className="p-4 rounded-xl bg-[#0A1329]/60 border border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Atendimento Ágil: Malanje & Luanda</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Operação 100% digital e remota. Respostas comerciais com prontidão profissional no mesmo dia útil.
              </p>
            </div>

          </div>

          {/* Right Column: Dynamic Form (Budget or Contact) */}
          <div className="lg:col-span-7 bg-[#0A1329] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {/* TAB 1: FORMULÁRIO DE ORÇAMENTO */}
            {activeTab === 'orcamento' && (
              <>
                {budgetSubmitted ? (
                  <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-sky-400 border border-slate-700">
                        REFERÊNCIA: {budgetRef}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2">Pedido de Orçamento Registado!</h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Obrigado, <strong>{budgetForm.nome}</strong>. A Tech Lab recebeu a sua solicitação para <strong>{budgetForm.tipoProjeto}</strong>.
                      </p>
                    </div>

                    {/* Direct WhatsApp acceleration */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left space-y-3">
                      <p className="text-xs text-slate-300">
                        Deseja acelerar a análise? Fale agora com a equipa técnica através do WhatsApp oficial:
                      </p>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(`Olá Tech Lab! Acabei de submeter o pedido de orçamento ${budgetRef} para ${budgetForm.tipoProjeto}. Gostaria de confirmar a receção.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Avisar no WhatsApp</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setBudgetSubmitted(false);
                        setBudgetForm({
                          nome: '',
                          email: '',
                          telefone: '',
                          tipoProjeto: 'Website Institucional',
                          orcamento: '200.000 Kz (Business Recomendado)',
                          descricao: '',
                        });
                      }}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Submeter outro pedido
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBudgetSubmit} className="space-y-4">
                    <div className="border-b border-slate-800 pb-3 mb-2">
                      <h3 className="text-lg font-bold text-white">Formulário de Orçamento</h3>
                      <p className="text-xs text-slate-400">Preencha todos os campos obrigatórios (*) para gerar a sua proposta personalizada.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nome */}
                      <div>
                        <label htmlFor="budgetNome" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Nome *
                        </label>
                        <input
                          id="budgetNome"
                          type="text"
                          required
                          placeholder="Ex: Manuel António"
                          value={budgetForm.nome}
                          onChange={(e) => setBudgetForm({ ...budgetForm, nome: e.target.value })}
                          className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="budgetEmail" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Email *
                        </label>
                        <input
                          id="budgetEmail"
                          type="email"
                          required
                          placeholder="Ex: manuel@empresa.ao"
                          value={budgetForm.email}
                          onChange={(e) => setBudgetForm({ ...budgetForm, email: e.target.value })}
                          className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Telefone */}
                      <div>
                        <label htmlFor="budgetTelefone" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          id="budgetTelefone"
                          type="tel"
                          required
                          placeholder="Ex: +244 937 000 000"
                          value={budgetForm.telefone}
                          onChange={(e) => setBudgetForm({ ...budgetForm, telefone: e.target.value })}
                          className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600"
                        />
                      </div>

                      {/* Tipo de projeto */}
                      <div>
                        <label htmlFor="budgetTipo" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Tipo de projeto *
                        </label>
                        <select
                          id="budgetTipo"
                          value={budgetForm.tipoProjeto}
                          onChange={(e) => setBudgetForm({ ...budgetForm, tipoProjeto: e.target.value })}
                          className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-200 px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                        >
                          {projectOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Orçamento */}
                    <div>
                      <label htmlFor="budgetValor" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Orçamento estimado *
                      </label>
                      <select
                        id="budgetValor"
                        value={budgetForm.orcamento}
                        onChange={(e) => setBudgetForm({ ...budgetForm, orcamento: e.target.value })}
                        className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-200 px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Descrição */}
                    <div>
                      <label htmlFor="budgetDescricao" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Descrição do projeto *
                      </label>
                      <textarea
                        id="budgetDescricao"
                        rows={4}
                        required
                        placeholder="Descreva o que o seu negócio necessita, objetivos principais e se possui referências..."
                        value={budgetForm.descricao}
                        onChange={(e) => setBudgetForm({ ...budgetForm, descricao: e.target.value })}
                        className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white p-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600 resize-y"
                      />
                    </div>

                    {/* Section 10 Requirement: Após o preenchimento, oferecer duas opções: "Enviar pedido" e "Enviar pelo WhatsApp" */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-600/25 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Enviar pedido</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleBudgetWhatsApp}
                        className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/25 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enviar pelo WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center pt-2">
                      Canal oficial: <strong className="text-slate-300">WhatsApp Oficial</strong> • Email: <strong className="text-slate-300">{COMPANY_INFO.email}</strong>
                    </p>
                  </form>
                )}
              </>
            )}

            {/* TAB 2: FORMULÁRIO DE CONTACTO (Section 11) */}
            {activeTab === 'contacto' && (
              <>
                {contactSubmitted ? (
                  <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Mensagem Enviada!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Obrigado pelo seu contacto, <strong>{contactForm.nome}</strong>. A nossa equipa entrará em contacto muito brevemente.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
                      }}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer pt-3"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="border-b border-slate-800 pb-3 mb-2">
                      <h3 className="text-lg font-bold text-white">Formulário de Contacto</h3>
                      <p className="text-xs text-slate-400">Envie a sua dúvida ou mensagem direta para a Tech Lab.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nome */}
                      <div>
                        <label htmlFor="contactNome" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Nome *
                        </label>
                        <input
                          id="contactNome"
                          type="text"
                          required
                          placeholder="O seu nome completo"
                          value={contactForm.nome}
                          onChange={(e) => setContactForm({ ...contactForm, nome: e.target.value })}
                          className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contactEmail" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Email *
                        </label>
                        <input
                          id="contactEmail"
                          type="email"
                          required
                          placeholder="o.seu.email@exemplo.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Telefone/WhatsApp */}
                      <div>
                        <label htmlFor="contactTelefone" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          id="contactTelefone"
                          type="tel"
                          required
                          placeholder="+244 937 000 000"
                          value={contactForm.telefone}
                          onChange={(e) => setContactForm({ ...contactForm, telefone: e.target.value })}
                          className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600"
                        />
                      </div>

                      {/* Assunto */}
                      <div>
                        <label htmlFor="contactAssunto" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Assunto *
                        </label>
                        <input
                          id="contactAssunto"
                          type="text"
                          required
                          placeholder="Ex: Dúvida sobre Pacote Business"
                          value={contactForm.assunto}
                          onChange={(e) => setContactForm({ ...contactForm, assunto: e.target.value })}
                          className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label htmlFor="contactMensagem" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Mensagem *
                      </label>
                      <textarea
                        id="contactMensagem"
                        rows={4}
                        required
                        placeholder="Escreva a sua mensagem..."
                        value={contactForm.mensagem}
                        onChange={(e) => setContactForm({ ...contactForm, mensagem: e.target.value })}
                        className="w-full text-xs rounded-xl bg-slate-900 border border-slate-700 text-white p-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-slate-600 resize-y"
                      />
                    </div>

                    {/* Botão Enviar mensagem */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-600/25 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar mensagem</span>
                    </button>

                    {/* Section 11 requirement: "Ou fale diretamente connosco" */}
                    <div className="mt-6 pt-4 border-t border-slate-800 text-center space-y-2">
                      <span className="text-xs font-medium text-slate-400 block">
                        Ou fale diretamente connosco:
                      </span>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
                        <a
                          href={COMPANY_INFO.whatsappDefaultUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Atendimento via WhatsApp</span>
                        </a>
                        <span className="text-slate-600 hidden sm:inline">•</span>
                        <a
                          href={COMPANY_INFO.mailtoUrl}
                          className="text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email: {COMPANY_INFO.email}</span>
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
