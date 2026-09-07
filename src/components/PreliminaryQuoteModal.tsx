import React from 'react';
import { X, Printer, Download, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import { TechLabLogo } from './TechLabLogo';
import { COMPANY_INFO } from '../data/techLabData';
import { SimulatorCalculationResult } from '../types';

interface PreliminaryQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: SimulatorCalculationResult;
  quoteReferenceId: string;
}

export const PreliminaryQuoteModal: React.FC<PreliminaryQuoteModalProps> = ({
  isOpen,
  onClose,
  result,
  quoteReferenceId,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const currentDateFormatted = new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-3xl bg-[#0B132B] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto print:shadow-none print:border-none print:bg-white print:text-black">
        
        {/* Modal Toolbar (hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Documento Preliminar • Ref: {quoteReferenceId}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
              title="Imprimir ou salvar como PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div id="preliminary-quote-document" className="p-6 sm:p-10 space-y-6 text-slate-200 print:text-slate-900 print:p-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 print:border-slate-300">
            <div>
              <TechLabLogo variant="header" showSlogan={false} />
              <p className="text-[11px] font-mono tracking-widest text-sky-400 print:text-sky-700 font-bold uppercase mt-1">
                {COMPANY_INFO.slogan}
              </p>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-0.5">
                {COMPANY_INFO.addressText}
              </p>
            </div>
            <div className="sm:text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 print:text-amber-800 font-mono text-[11px] font-extrabold uppercase tracking-wider mb-1">
                ESTIMATIVA — NÃO É ORÇAMENTO FINAL
              </span>
              <p className="text-xs font-mono text-slate-400 print:text-slate-600">
                Data: {currentDateFormatted}
              </p>
              <p className="text-xs font-mono text-slate-400 print:text-slate-600">
                Ref: <strong className="text-white print:text-black">{quoteReferenceId}</strong>
              </p>
            </div>
          </div>

          {/* Document Title */}
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white print:text-black tracking-tight">
              Estimativa de Projeto Preliminar
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 print:text-slate-600 mt-1">
              Documento gerado através do simulador de projetos oficial da Tech Lab para avaliação preliminar de investimento.
            </p>
          </div>

          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-100 print:border-slate-200 text-xs">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Cliente</span>
              <span className="text-sm font-bold text-white print:text-black">{result.clientName || 'Cliente Particular'}</span>
              {result.companyName && (
                <span className="text-xs text-slate-300 print:text-slate-700 block mt-0.5">
                  Empresa: {result.companyName}
                </span>
              )}
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Contactos Indicados</span>
              <span className="text-xs text-slate-300 print:text-slate-700 block">Email: {result.clientEmail || 'Não indicado'}</span>
              <span className="text-xs text-slate-300 print:text-slate-700 block mt-0.5">Tel / WhatsApp: {result.clientPhone || 'Não indicado'}</span>
            </div>
          </div>

          {/* Project Scope & Configuration */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-sky-700">
              1. Escopo & Parâmetros Selecionados
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase">Tipo</span>
                <span className="font-bold text-white print:text-black mt-0.5 block">{result.serviceLabel}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase">Complexidade</span>
                <span className="font-bold text-white print:text-black mt-0.5 block">{result.complexityLabel}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase">Escala</span>
                <span className="font-bold text-white print:text-black mt-0.5 block truncate">{result.scaleLabel}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase">Prazo Desejado</span>
                <span className="font-bold text-white print:text-black mt-0.5 block">{result.urgencyLabel}</span>
              </div>
            </div>
          </div>

          {/* Selected Features */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-sky-700">
              2. Funcionalidades & Requisitos Incluídos ({result.selectedFeatures.length})
            </h2>
            {result.selectedFeatures.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {result.selectedFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/30 border border-slate-800/60 print:border-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 print:text-sky-600 shrink-0" />
                    <span className="text-slate-200 print:text-slate-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">Configuração essencial base do serviço.</p>
            )}
          </div>

          {/* Project Description */}
          {result.projectDescription && (
            <div className="space-y-1.5">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-sky-700">
                3. Descrição Fornecida pelo Cliente
              </h2>
              <p className="text-xs text-slate-300 print:text-slate-700 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 print:bg-slate-50 print:border-slate-200 italic">
                "{result.projectDescription}"
              </p>
            </div>
          )}

          {/* Investment & Timeline Highlight Box */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-sky-950/40 to-slate-900 border-2 border-sky-500/40 print:border-slate-400 print:bg-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-mono text-sky-400 print:text-sky-800 font-bold uppercase tracking-wider block">
                  Investimento Estimado (Intervalo)
                </span>
                <div className="text-xl sm:text-2xl font-black text-white print:text-black font-mono mt-1">
                  {result.formattedRange}
                </div>
                <span className="text-[10px] text-slate-400 print:text-slate-600 block mt-0.5">
                  Valores em Kwanzas (AOA) sujeitos a validação técnica de escopo.
                </span>
              </div>
              <div className="sm:border-l sm:border-slate-800 sm:pl-4 print:border-slate-300">
                <span className="text-[11px] font-mono text-sky-400 print:text-sky-800 font-bold uppercase tracking-wider block">
                  Prazo Estimado de Execução
                </span>
                <div className="text-xl sm:text-2xl font-black text-white print:text-black font-mono mt-1">
                  {result.formattedDelivery}
                </div>
                <span className="text-[10px] text-slate-400 print:text-slate-600 block mt-0.5">
                  Contados a partir da aprovação do briefing e entrega dos conteúdos.
                </span>
              </div>
            </div>
          </div>

          {/* Official Legal Observation (Mandatory Section 12) */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 print:border-amber-400 print:bg-amber-50 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 print:text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 print:text-amber-900 space-y-1">
              <p className="font-bold">
                Observação Legal:
              </p>
              <p>
                "Este documento apresenta uma estimativa inicial e não constitui orçamento comercial definitivo.
                O valor e o cronograma finais são definidos pela Tech Lab após análise técnica e alinhamento do projeto com o cliente."
              </p>
            </div>
          </div>

          {/* Footer Contacts */}
          <div className="pt-4 border-t border-slate-800 print:border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400 print:text-slate-600">
            <div>
              <span className="font-bold text-white print:text-black block font-mono">TECH LAB — Soluções Digitais para Negócios</span>
              <span>Malanje • Luanda • Angola</span>
            </div>
            <div className="sm:text-right font-mono space-y-0.5">
              <div>WhatsApp Oficial: <strong className="text-slate-200 print:text-black">{COMPANY_INFO.whatsapp}</strong></div>
              <div>Email Oficial: <strong className="text-slate-200 print:text-black">{COMPANY_INFO.email}</strong></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
