import React from 'react';
import { COMPANY_STATS } from '../data/hunterData';
import corporateHeroImage from '../assets/images/hunter_corporate_bg_1786747839522.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#0c1015]">
      
      {/* Top Banner: Image behind Logo and Initial Headline */}
      <div className="relative w-full pt-24 pb-10 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#D3AF37]/30">
        {/* Background Image behind Logo and Initial Headline */}
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
          <img
            src={corporateHeroImage}
            alt="Ambiente Corporativo de Alta Performance Hunter RH"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-75 contrast-100 opacity-25"
          />
          {/* Executive Overlay Gradients - Dark, sleek and corporate */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070a0e]/85 via-[#0c1015]/75 to-[#0c1015]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a0e]/80 via-transparent to-[#070a0e]/80" />
        </div>

        {/* Main Initial Headline (Positioned over the top image) */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-snug sm:leading-[1.15] max-w-4xl mx-auto drop-shadow-lg">
            Transforme Pessoas em Resultados com{' '}
            <span className="text-gold-gradient">
              RH por Competência
            </span>
          </h1>
        </div>
      </div>

      {/* Main Content: Placed Below The Image */}
      <div className="pt-8 pb-14 sm:pt-10 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Phrase Placed Directly Below The Image */}
            <div className="max-w-3xl mx-auto">
              <p className="text-sm sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal">
                Especialistas na implantação completa de todos os subsistemas de Recursos Humanos:{' '}
                <strong className="text-[#D3AF37] font-semibold">
                  Cargos e Salários, Pesquisa de Clima, Recrutamento & Seleção, T&D e Avaliação de Desempenho
                </strong>
                . Estanque perdas financeiras e construa equipes de alta performance.
              </p>
            </div>

          </div>

          {/* Company Stats Bar - Optimized cards for mobile and desktop */}
          <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#D3AF37]/30 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            {COMPANY_STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-[#D3AF37]/30 flex flex-col justify-center space-y-1 shadow-sm"
              >
                <div className="text-2xl sm:text-4xl font-extrabold text-gold-gradient font-['Space_Grotesk',sans-serif]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 leading-tight">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
