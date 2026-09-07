import React, { useState } from 'react';
import { MessageSquare, X, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledText?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  prefilledText = 'Olá Tech Lab! Gostaria de obter informações sobre os serviços e solicitar um orçamento.'
}) => {
  const [copied, setCopied] = useState(false);
  const [customText, setCustomText] = useState(prefilledText);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(customText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDirectLaunch = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(customText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#0A1329] border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-7 space-y-5 shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white font-mono">Atendimento WhatsApp Oficial</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs text-slate-300">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Canal Oficial:</span>
              <span className="text-sm font-bold text-white">Atendimento WhatsApp Oficial</span>
            </div>
            <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/30">
              OPERACIONAL
            </span>
          </div>

          <div>
            <label className="block text-slate-400 font-mono mb-1.5 text-[11px]">
              Mensagem formatada para envio direto:
            </label>
            <textarea
              rows={4}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full text-xs rounded-xl bg-slate-950 border border-slate-700 text-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 font-sans resize-none"
            />
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Atendimento para clientes de Malanje, Luanda e todo o território nacional.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-3 border-t border-slate-800">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copiado para a área de transferência' : 'Copiar Mensagem'}</span>
          </button>

          <button
            type="button"
            onClick={handleDirectLaunch}
            className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-emerald-600/20"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Abrir no WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
