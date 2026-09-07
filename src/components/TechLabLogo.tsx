import React, { useState } from 'react';

interface TechLabLogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'card' | 'hero' | 'large';
  showSlogan?: boolean;
}

export const TechLabLogo: React.FC<TechLabLogoProps> = ({ 
  className = '', 
  variant = 'header',
  showSlogan = false 
}) => {
  const [imgError, setImgError] = useState(false);

  // Height sizing according to instructions:
  // Desktop Header: between 40px and 55px (e.g., h-11 = 44px, sm:h-12 = 48px)
  // Mobile: proportional, unclipped, readable
  let sizeClasses = 'h-11 sm:h-12 w-auto object-contain';

  if (variant === 'header') {
    sizeClasses = 'h-10 sm:h-12 md:h-[48px] max-h-[55px] w-auto object-contain';
  } else if (variant === 'footer') {
    sizeClasses = 'h-12 sm:h-14 w-auto object-contain';
  } else if (variant === 'large' || variant === 'hero') {
    sizeClasses = 'h-16 sm:h-20 w-auto object-contain';
  } else if (variant === 'card') {
    sizeClasses = 'h-10 sm:h-12 w-auto object-contain';
  }

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      {!imgError ? (
        <img
          src="/techlab-logo.jpg"
          alt="TECH LAB — Inovar • Criar • Transformar"
          referrerPolicy="no-referrer"
          className={`${sizeClasses} rounded-md transition-opacity duration-200`}
          onError={() => setImgError(true)}
        />
      ) : (
        /* High-fidelity Vector Fallback preserving exact brand symbols, colors, TL monogram & typography */
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0A1329] border border-[#38BDF8]/40 p-2 flex items-center justify-center shadow-lg shadow-[#0284C7]/20">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-white">
              {/* Stylized geometric TL Monogram */}
              <path d="M15 25 H85 V40 H58 V85 H42 V40 H15 Z" fill="#38BDF8" />
              <path d="M42 45 H75 V85 H42 Z" fill="#0284C7" fillOpacity="0.85" />
              <circle cx="78" cy="25" r="7" fill="#38BDF8" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-mono">TECH LAB</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0A1329] text-[#38BDF8] font-mono border border-[#0284C7]/30">AO</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold tracking-wider uppercase font-mono">
              INOVAR • CRIAR • TRANSFORMAR
            </span>
          </div>
        </div>
      )}

      {showSlogan && !imgError && (
        <span className="text-[10px] sm:text-[11px] text-slate-400 font-semibold tracking-widest uppercase font-mono mt-1">
          INOVAR • CRIAR • TRANSFORMAR
        </span>
      )}
    </div>
  );
};
