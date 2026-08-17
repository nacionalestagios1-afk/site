import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de tirar dúvidas com um consultor da Hunter Recursos Humanos Inteligentes sobre a implantação de subsistemas de RH e combate ao turnover.'
    );
    window.open(`https://wa.me/5531996290458?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div 
          onClick={handleOpenWhatsApp}
          className="cursor-pointer hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 border-2 border-[#D3AF37] text-white text-xs shadow-xl backdrop-blur-md hover:bg-slate-800 transition-all group"
        >
          <span className="group-hover:text-[#D3AF37] transition-colors font-medium">
            👋 Dúvidas? Fale com nosso consultor
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-[#D3AF37] ml-1 p-0.5 rounded"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="group relative w-14 h-14 rounded-full bg-[#0e141c] border-2 border-[#D3AF37] text-[#D3AF37] hover:text-black hover:bg-[#D3AF37] flex items-center justify-center shadow-2xl shadow-[#D3AF37]/30 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Iniciar conversa no WhatsApp"
      >
        {/* Pulse ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3AF37] opacity-20"></span>

        <MessageSquare className="w-7 h-7 drop-shadow" />

        {/* Small live badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D3AF37] border-2 border-[#0c1015] rounded-full"></span>
      </button>
    </div>
  );
};
