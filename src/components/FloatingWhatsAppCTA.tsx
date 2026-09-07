import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';

interface FloatingWhatsAppCTAProps {
  onOpenWhatsApp?: () => void;
}

export const FloatingWhatsAppCTA: React.FC<FloatingWhatsAppCTAProps> = ({ onOpenWhatsApp }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="p-2.5 rounded-lg bg-[#071426] text-white hover:bg-[#0B1220] border border-[#1E293D] shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#087BEF]"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BE5A] text-white font-semibold text-xs sm:text-sm shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
        aria-label="Falar no WhatsApp com a Tech Lab"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>Falar no WhatsApp</span>
      </a>

    </div>
  );
};
