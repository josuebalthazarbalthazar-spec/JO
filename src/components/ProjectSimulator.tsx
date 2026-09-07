import React, { useState, useEffect, useMemo } from 'react';
import {
  Globe,
  Layout,
  ShoppingCart,
  Server,
  Smartphone,
  Cpu,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  MessageSquare,
  Mail,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';
import { DEFAULT_SIMULATOR_CONFIG, calculateSimulatorEstimate } from '../data/simulatorConfig';
import { SimulatorCalculationResult, ServiceConfigItem } from '../types';

interface ProjectSimulatorProps {
  initialServiceId?: string;
  onGoToHome?: () => void;
  onGoToQuote?: (serviceId?: string) => void;
}

export const ProjectSimulator: React.FC<ProjectSimulatorProps> = ({
  initialServiceId,
  onGoToHome,
  onGoToQuote,
}) => {
  const config = DEFAULT_SIMULATOR_CONFIG;

  // Wizard Steps: 1 to 6, then 7 for Result
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selections
  const [serviceId, setServiceId] = useState<string>(initialServiceId || 'website');
  const [complexity, setComplexity] = useState<'basico' | 'intermediario' | 'avancado' | 'empresarial'>('intermediario');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [scaleId, setScaleId] = useState<string>('');
  const [urgency, setUrgency] = useState<'sem-urgencia' | 'normal' | 'prioridade' | 'urgente'>('normal');

  // Customer Data (Step 6)
  const [clientName, setClientName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Result state
  const [calculationResult, setCalculationResult] = useState<SimulatorCalculationResult | null>(null);

  // Current active service
  const currentService: ServiceConfigItem = useMemo(() => {
    return config.services.find((s) => s.id === serviceId) || config.services[0];
  }, [config, serviceId]);

  useEffect(() => {
    if (initialServiceId && config.services.some((s) => s.id === initialServiceId)) {
      setServiceId(initialServiceId);
    }
  }, [initialServiceId, config]);

  useEffect(() => {
    if (currentService) {
      setScaleId(currentService.scaleOptions[0]?.id || '');
      const populars = currentService.features.filter((f) => f.isPopular).map((f) => f.id);
      setSelectedFeatures(populars.length > 0 ? populars : currentService.features.slice(0, 4).map((f) => f.id));
    }
  }, [currentService]);

  // Live calculation for preview
  const liveEstimate = useMemo(() => {
    try {
      return calculateSimulatorEstimate({
        serviceId,
        complexity,
        selectedFeatureIds: selectedFeatures,
        scaleId: scaleId || currentService?.scaleOptions[0]?.id || '',
        urgency,
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        projectDescription: '',
        config,
      });
    } catch {
      return null;
    }
  }, [config, serviceId, complexity, selectedFeatures, scaleId, urgency, currentService]);

  // Handle Feature toggle
  const toggleFeature = (featId: string) => {
    if (selectedFeatures.includes(featId)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featId));
    } else {
      setSelectedFeatures([...selectedFeatures, featId]);
    }
  };

  // Steps definition for product configurator
  const stepTitles = [
    { num: '01', title: 'O que vamos criar?' },
    { num: '02', title: 'Qual a complexidade?' },
    { num: '03', title: 'O que precisa?' },
    { num: '04', title: 'Qual a dimensão?' },
    { num: '05', title: 'Quando precisa?' },
    { num: '06', title: 'Como podemos contactar?' },
  ];

  // Validate contact info on step 6
  const validateContactForm = () => {
    const errors: Record<string, string> = {};
    if (!clientName.trim()) errors.name = 'Por favor indique o seu nome.';
    if (!clientPhone.trim()) errors.phone = 'Por favor indique o seu WhatsApp ou telefone.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Trigger final calculation
  const handleCalculate = () => {
    if (!validateContactForm()) return;

    const result = calculateSimulatorEstimate({
      serviceId,
      complexity,
      selectedFeatureIds: selectedFeatures,
      scaleId,
      urgency,
      clientName,
      companyName,
      clientEmail,
      clientPhone,
      projectDescription,
      config,
    });

    setCalculationResult(result);
    setCurrentStep(7);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset simulator
  const handleReset = () => {
    setCurrentStep(1);
    setComplexity('intermediario');
    setUrgency('normal');
    setClientName('');
    setCompanyName('');
    setClientPhone('');
    setClientEmail('');
    setProjectDescription('');
    setCalculationResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate WhatsApp Message (exact user requirement)
  const getWhatsAppUrl = () => {
    if (!calculationResult) return COMPANY_INFO.whatsappDefaultUrl;

    const featuresList = calculationResult.selectedFeatures.slice(0, 5).join(', ') +
      (calculationResult.selectedFeatures.length > 5 ? ` (+${calculationResult.selectedFeatures.length - 5} outras)` : '');

    const message = `Olá Tech Lab! Fiz uma simulação no vosso site e gostaria de solicitar um orçamento.

Projeto: ${calculationResult.serviceLabel}
Complexidade: ${calculationResult.complexityLabel}
Funcionalidades: ${featuresList || 'Padrão'}
Estimativa: ${calculationResult.formattedRange}
Prazo estimado: ${calculationResult.formattedDelivery}

Gostaria de receber um orçamento final.`;

    return `https://wa.me/244937656106?text=${encodeURIComponent(message)}`;
  };

  // Generate Mailto URL (exact user requirement)
  const getMailtoUrl = () => {
    if (!calculationResult) return `mailto:${COMPANY_INFO.email}`;

    const subject = 'Solicitação de orçamento — Tech Lab';
    const body = `Nome: ${clientName || 'Não informado'}
Empresa: ${companyName || 'Não informado'}
Contacto: ${clientPhone || 'Não informado'}
Email: ${clientEmail || 'Não informado'}
Tipo de projeto: ${calculationResult.serviceLabel}
Complexidade: ${calculationResult.complexityLabel}
Descrição: ${projectDescription || 'Configuração efetuada através do simulador de projetos.'}
Funcionalidades: ${calculationResult.selectedFeatures.join(', ')}
Estimativa: ${calculationResult.formattedRange}
Prazo: ${calculationResult.formattedDelivery}`;

    return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Complexity Options
  const complexityOptions = [
    {
      id: 'basico',
      label: 'Básico',
      desc: 'Estrutura direta, essencial e objetiva.',
      details: 'Ideal para lançar rápido com investimento controlado.',
    },
    {
      id: 'intermediario',
      label: 'Intermediário',
      desc: 'Mais páginas, acabamento refinado e integrações.',
      details: 'Mais recomendado para marcas que desejam autoridade comercial.',
    },
    {
      id: 'avancado',
      label: 'Avançado',
      desc: 'Funcionalidades sob medida, base de dados e automações.',
      details: 'Para empresas com fluxos operacionais ou pedidos online.',
    },
    {
      id: 'empresarial',
      label: 'Empresarial / SaaS',
      desc: 'Arquitetura de alto desempenho, área privada e segurança robusta.',
      details: 'Para startups, plataformas ou processos corporativos complexos.',
    },
  ];

  // Urgency Options
  const urgencyOptions = [
    { id: 'sem-urgencia', label: 'Sem urgência', desc: 'Podemos avançar no ritmo mais tranquilo (+ flexibilidade).' },
    { id: 'normal', label: 'Prazo normal (Recomendado)', desc: 'Ritmo padrão da Tech Lab com entregas parciais estruturadas.' },
    { id: 'prioridade', label: 'Prioridade (+18%)', desc: 'Alocação antecipada de horas de desenvolvimento.' },
    { id: 'urgente', label: 'Urgente (+35%)', desc: 'Sprint acelerado com dedicação exclusiva.' },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#F3F1EA] min-h-screen text-[#111827]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Top Breadcrumb & Title */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9DCE1] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#68707C] uppercase tracking-wider mb-2">
              <button
                onClick={onGoToHome}
                className="hover:text-[#087BEF] transition-colors cursor-pointer"
              >
                Início
              </button>
              <span>/</span>
              <span className="text-[#087BEF]">Configurador</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-heading text-[#071426] tracking-tight">
              Vamos construir a sua solução<span className="text-[#087BEF]">.</span>
            </h1>
          </div>
          <p className="text-sm text-[#68707C] max-w-md font-normal leading-relaxed">
            Configure a solução que precisa e receba uma estimativa técnica preliminar em Kwanzas (AOA) e prazo em tempo real.
          </p>
        </div>

        {/* Minimalist Progress Bar (Steps 1 to 6) */}
        {currentStep <= 6 && (
          <div className="mb-12">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {stepTitles.map((step, idx) => {
                const stepNum = idx + 1;
                const isActive = currentStep === stepNum;
                const isPassed = currentStep > stepNum;

                return (
                  <button
                    key={step.num}
                    onClick={() => stepNum < currentStep && setCurrentStep(stepNum)}
                    disabled={stepNum > currentStep}
                    className={`py-3 px-3 rounded-lg border text-left transition-all ${
                      isActive
                        ? 'bg-[#087BEF] text-white border-[#087BEF] shadow-xs'
                        : isPassed
                        ? 'bg-white text-[#111111] border-[#087BEF]/40 cursor-pointer'
                        : 'bg-white/60 text-[#68707C] border-[#E2E1DA] opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-[10px] font-mono block opacity-80">{step.num}</span>
                    <span className="text-xs font-semibold block truncate">{step.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* WIZARD: STEP 1 TO 6 (LEFT: QUESTION, RIGHT: LIVE SUMMARY) */}
        {currentStep <= 6 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: ACTIVE STEP QUESTION */}
            <div className="lg:col-span-8 bg-white rounded-xl border border-[#E2E1DA] p-6 sm:p-8 shadow-xs">
              
              {/* Step 1: Tipo de Projeto */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#087BEF] font-semibold">01 / Tipo de Projeto</span>
                    <h2 className="text-2xl font-bold font-heading text-[#111111] mt-1">
                      Que tipo de solução pretende construir?
                    </h2>
                    <p className="text-sm text-[#68707C] mt-1">
                      Selecione a categoria principal que melhor descreve o seu objetivo.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {config.services.map((srv) => {
                      const isSelected = serviceId === srv.id;
                      return (
                        <div
                          key={srv.id}
                          onClick={() => setServiceId(srv.id)}
                          className={`p-5 rounded-lg border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#087BEF] bg-[#087BEF]/5 ring-1 ring-[#087BEF]'
                              : 'border-[#E2E1DA] hover:border-[#CBD5E1] bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-heading font-bold text-base text-[#111111]">
                              {srv.label}
                            </span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-[#087BEF] bg-[#087BEF]' : 'border-[#CBD5E1]'
                              }`}
                            >
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-xs text-[#68707C] leading-relaxed">
                            {srv.shortDesc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Complexidade */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#087BEF] font-semibold">02 / Complexidade</span>
                    <h2 className="text-2xl font-bold font-heading text-[#111111] mt-1">
                      Qual é o nível de complexidade pretendido?
                    </h2>
                    <p className="text-sm text-[#68707C] mt-1">
                      O grau de personalização e regras de negócio definem a robustez necessária.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {complexityOptions.map((opt) => {
                      const isSelected = complexity === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setComplexity(opt.id as any)}
                          className={`p-5 rounded-lg border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#087BEF] bg-[#087BEF]/5 ring-1 ring-[#087BEF]'
                              : 'border-[#E2E1DA] hover:border-[#CBD5E1] bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-heading font-bold text-base text-[#111111]">
                              {opt.label}
                            </span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-[#087BEF] bg-[#087BEF]' : 'border-[#CBD5E1]'
                              }`}
                            >
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-xs font-medium text-[#111111] mb-1">
                            {opt.desc}
                          </p>
                          <p className="text-xs text-[#68707C]">
                            {opt.details}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Funcionalidades */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#087BEF] font-semibold">03 / Funcionalidades</span>
                      <h2 className="text-2xl font-bold font-heading text-[#111111] mt-1">
                        Selecione as funcionalidades necessárias
                      </h2>
                      <p className="text-sm text-[#68707C] mt-1">
                        Escolha os módulos específicos que farão parte da entrega.
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F4F3EF] text-[#087BEF] font-bold border border-[#E2E1DA]">
                      {selectedFeatures.length} selecionadas
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-h-[380px] overflow-y-auto pr-2">
                    {currentService.features.map((feat) => {
                      const isChecked = selectedFeatures.includes(feat.id);
                      return (
                        <div
                          key={feat.id}
                          onClick={() => toggleFeature(feat.id)}
                          className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                            isChecked
                              ? 'border-[#087BEF] bg-[#087BEF]/5 text-[#111111]'
                              : 'border-[#E2E1DA] hover:border-[#CBD5E1] bg-white text-[#68707C]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'border-[#087BEF] bg-[#087BEF] text-white' : 'border-[#CBD5E1]'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                            <span className="text-xs font-medium text-[#111111]">
                              {feat.name}
                            </span>
                          </div>
                          {feat.isPopular && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                              Popular
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Escala */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#087BEF] font-semibold">04 / Escala</span>
                    <h2 className="text-2xl font-bold font-heading text-[#111111] mt-1">
                      {currentService.scaleQuestion || 'Qual é a escala aproximada do projeto?'}
                    </h2>
                    <p className="text-sm text-[#68707C] mt-1">
                      A dimensão do projeto ajuda a dimensionar os esforços de arquitetura.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {currentService.scaleOptions.map((opt) => {
                      const isSelected = scaleId === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setScaleId(opt.id)}
                          className={`p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-[#087BEF] bg-[#087BEF]/5 ring-1 ring-[#087BEF]'
                              : 'border-[#E2E1DA] hover:border-[#CBD5E1] bg-white'
                          }`}
                        >
                          <span className="text-sm font-semibold text-[#111111]">
                            {opt.label}
                          </span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-[#087BEF] bg-[#087BEF]' : 'border-[#CBD5E1]'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 5: Prazo & Urgência */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#087BEF] font-semibold">05 / Prazo & Urgência</span>
                    <h2 className="text-2xl font-bold font-heading text-[#111111] mt-1">
                      Qual é a sua expectativa de entrega?
                    </h2>
                    <p className="text-sm text-[#68707C] mt-1">
                      Projetos com prazo prioritário ou acelerado têm alocação intensiva de programadores.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {urgencyOptions.map((opt) => {
                      const isSelected = urgency === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setUrgency(opt.id as any)}
                          className={`p-5 rounded-lg border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#087BEF] bg-[#087BEF]/5 ring-1 ring-[#087BEF]'
                              : 'border-[#E2E1DA] hover:border-[#CBD5E1] bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-heading font-bold text-sm text-[#111111]">
                              {opt.label}
                            </span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-[#087BEF] bg-[#087BEF]' : 'border-[#CBD5E1]'
                              }`}
                            >
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-xs text-[#68707C] leading-relaxed">
                            {opt.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 6: Dados de Contacto para Cálculo */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#087BEF] font-semibold">06 — Contacto</span>
                    <h2 className="text-2xl font-bold font-heading text-[#111111] mt-1">
                      Quem devemos contactar com esta proposta?
                    </h2>
                    <p className="text-sm text-[#68707C] mt-1">
                      Informe os dados para personalizarmos a estimativa e o envio da proposta oficial.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#111111] mb-1">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Ex: João da Silva"
                          className="w-full px-4 py-2.5 rounded-lg border border-[#D5D4CD] bg-[#F4F3EF]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                        />
                        {formErrors.name && (
                          <span className="text-xs text-red-500 mt-1 block">{formErrors.name}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#111111] mb-1">
                          Empresa ou Projeto
                        </label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Ex: Minha Loja Lda."
                          className="w-full px-4 py-2.5 rounded-lg border border-[#D5D4CD] bg-[#F4F3EF]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#111111] mb-1">
                          WhatsApp / Telefone *
                        </label>
                        <input
                          type="tel"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="Ex: +244 937 000 000"
                          className="w-full px-4 py-2.5 rounded-lg border border-[#D5D4CD] bg-[#F4F3EF]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                        />
                        {formErrors.phone && (
                          <span className="text-xs text-red-500 mt-1 block">{formErrors.phone}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#111111] mb-1">
                          Email (para envio da proposta)
                        </label>
                        <input
                          type="email"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="Ex: contacto@empresa.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-[#D5D4CD] bg-[#F4F3EF]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#111111] mb-1">
                        Notas ou requisitos específicos (opcional)
                      </label>
                      <textarea
                        rows={3}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Descreva brevemente o que pretende com o projeto..."
                        className="w-full px-4 py-2.5 rounded-lg border border-[#D5D4CD] bg-[#F4F3EF]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls inside wizard */}
              <div className="mt-8 pt-6 border-t border-[#E2E1DA] flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-5 py-2.5 rounded-lg border border-[#D5D4CD] hover:bg-[#F4F3EF] text-xs font-semibold text-[#111111] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Voltar</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onGoToHome}
                    className="px-4 py-2.5 text-xs text-[#68707C] hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                )}

                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-6 py-2.5 rounded-lg bg-[#087BEF] hover:bg-[#076FDB] text-xs font-semibold text-white transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                  >
                    <span>Próximo passo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleCalculate}
                    className="px-7 py-3 rounded-lg bg-[#087BEF] hover:bg-[#076FDB] text-xs font-bold text-white transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                  >
                    <span>Calcular estimativa</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

            {/* RIGHT COLUMN: STICKY PROJECT SUMMARY */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-[#0B1220] text-white rounded-xl border border-[#1E293D] p-6 shadow-xl space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                  <span className="text-xs font-mono tracking-widest text-[#28A9F4] uppercase font-semibold">
                    SEU PROJETO
                  </span>
                  <span className="text-[11px] font-mono text-[#68707C]">Tech Lab Estimator</span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#1E293B]/60">
                    <span className="text-[#68707C]">Solução:</span>
                    <span className="text-white font-semibold">{currentService.label}</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#1E293B]/60">
                    <span className="text-[#68707C]">Complexidade:</span>
                    <span className="text-white capitalize">{complexity}</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#1E293B]/60">
                    <span className="text-[#68707C]">Módulos:</span>
                    <span className="text-[#28A9F4]">{selectedFeatures.length} funcionalidades</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#1E293B]/60">
                    <span className="text-[#68707C]">Urgência:</span>
                    <span className="text-white capitalize">{urgency.replace('-', ' ')}</span>
                  </div>
                </div>

                {/* Live Estimator Preview Numbers */}
                <div className="pt-2 bg-[#071426] p-4 rounded-lg border border-[#1E293B] space-y-2">
                  <span className="text-[11px] text-[#94A3B8] font-mono uppercase block">
                    Estimativa Preliminar
                  </span>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-[#28A9F4] tracking-tight">
                    {liveEstimate ? liveEstimate.formattedRange : '250.000 — 400.000 Kz'}
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs border-t border-[#1E293B]">
                    <span className="text-[#68707C]">Prazo estimado:</span>
                    <span className="text-white font-semibold">
                      {liveEstimate ? liveEstimate.formattedDelivery : '3 — 5 semanas'}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-[#68707C] leading-relaxed">
                  Valores calculados em Kwanzas (AOA) com base nas premissas técnicas da Tech Lab.
                </p>

              </div>
            </div>

          </div>
        )}

        {/* STEP 7: ELEGANT RESULT SCREEN (Section 24) */}
        {currentStep === 7 && calculationResult && (
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="bg-white rounded-2xl border border-[#D9DCE1] p-8 sm:p-12 shadow-sm text-left space-y-8">
              
              {/* Header - Section 24 Title */}
              <div className="border-b border-[#D9DCE1] pb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#087BEF] font-semibold block mb-1">
                  Configuração Concluída
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#071426]">
                  Já temos um ponto de partida<span className="text-[#087BEF]">.</span>
                </h2>
                <p className="text-sm text-[#68707C] mt-1 font-normal">
                  Resumo da arquitetura preliminar dimensionada para as necessidades do seu projeto.
                </p>
              </div>

              {/* Technical Summary Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F3F1EA] p-6 rounded-xl border border-[#D9DCE1] text-xs font-mono">
                <div>
                  <span className="text-[#68707C] block mb-0.5">Projeto:</span>
                  <span className="text-[#071426] font-bold text-sm">{calculationResult.serviceLabel}</span>
                </div>
                <div>
                  <span className="text-[#68707C] block mb-0.5">Complexidade:</span>
                  <span className="text-[#071426] font-bold text-sm">{calculationResult.complexityLabel}</span>
                </div>
                <div>
                  <span className="text-[#68707C] block mb-0.5">Dimensão / Escala:</span>
                  <span className="text-[#071426] font-semibold">{calculationResult.scaleLabel}</span>
                </div>
                <div>
                  <span className="text-[#68707C] block mb-0.5">Prazo / Urgência:</span>
                  <span className="text-[#071426] font-semibold">{calculationResult.urgencyLabel}</span>
                </div>
                <div className="sm:col-span-2 pt-3 border-t border-[#D9DCE1]">
                  <span className="text-[#68707C] block mb-1">Funcionalidades incluídas ({calculationResult.selectedFeatures.length}):</span>
                  <span className="text-[#071426] font-sans text-xs leading-relaxed font-medium">
                    {calculationResult.selectedFeatures.join(' • ')}
                  </span>
                </div>
              </div>

              {/* Investment & Timeline Numbers Card (Section 24) */}
              <div className="p-8 rounded-2xl bg-[#071426] text-white border border-[#111827] grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-heading text-[#20D9D2] tracking-tight">
                    {calculationResult.formattedRange}
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8] block mt-1">
                    Estimativa inicial
                  </span>
                </div>

                <div className="sm:border-l sm:border-[#1E293B] sm:pl-8">
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {calculationResult.formattedDelivery}
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8] block mt-1">
                    Prazo previsto
                  </span>
                </div>
              </div>

              {/* Explicit Mandatory Warning - Section 24 */}
              <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Aviso:</strong> O orçamento final será definido após análise técnica.
                </span>
              </div>

              {/* CTAs - Section 24 */}
              <div className="pt-2 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Solicitar Orçamento */}
                  <button
                    type="button"
                    onClick={() => {
                      if (onGoToQuote) onGoToQuote(serviceId);
                    }}
                    className="py-3.5 px-4 rounded-lg bg-[#071426] hover:bg-[#087BEF] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Solicitar orçamento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* WhatsApp Export */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Email Export */}
                  <a
                    href={getMailtoUrl()}
                    className="py-3.5 px-4 rounded-lg bg-[#087BEF] hover:bg-[#19A7FF] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>

                </div>

                <div className="flex items-center justify-center pt-4 border-t border-[#D9DCE1]">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-mono text-[#68707C] hover:text-[#071426] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refazer</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
