import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/hunterData';
import { HunterLogoWatermark } from './HunterLogoWatermark';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#090d12] relative overflow-hidden">
      {/* Background Hunter Logo Watermark */}
      <HunterLogoWatermark position="center" size="xl" opacity={0.05} showWordmark={true} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D3AF37]/10 border border-[#D3AF37] text-[#D3AF37] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tire suas Dúvidas sobre o{' '}
            <span className="text-gold-gradient">RH por Competência</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Entenda como a implantação dos subsistemas funciona na prática e qual o retorno esperado para a sua empresa.
          </p>
        </div>

        {/* Accordion items */}
        <div className="space-y-4 text-left">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'bg-slate-900/90 border-2 border-[#D3AF37] shadow-lg shadow-black/40'
                    : 'bg-slate-900/50 border border-[#D3AF37]/30 hover:border-[#D3AF37]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-2">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#D3AF37] text-black' : 'bg-slate-800 text-[#D3AF37] border border-[#D3AF37]/40'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#D3AF37]/30 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-[#D3AF37]/10 via-slate-900 to-slate-900 border-2 border-[#D3AF37]">
          <h3 className="text-base font-bold text-white mb-2">
            Sua dúvida não está listada aqui?
          </h3>
          <p className="text-xs text-slate-300 mb-4 max-w-xl mx-auto">
            Nossos consultores seniores de RH estão à disposição para analisar o cenário específico da sua organização.
          </p>
          <a
            href="https://wa.me/5531996290458?text=Ol%C3%A1%21+Tenho+uma+d%C3%BAvida+sobre+os+subsistemas+de+RH+da+Hunter+e+gostaria+de+falar+com+um+consultor."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-[#D3AF37] hover:text-[#F3E5AB] bg-slate-950 border-2 border-[#D3AF37] hover:bg-[#D3AF37]/15 shadow-md shadow-[#D3AF37]/10 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span className="text-[#D3AF37] hover:text-[#F3E5AB] font-bold">Falar com um Consultor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
