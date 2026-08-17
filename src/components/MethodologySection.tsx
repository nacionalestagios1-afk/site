import React from 'react';
import { 
  Search, 
  Cpu, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Workflow
} from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/hunterData';
import { HunterLogoWatermark } from './HunterLogoWatermark';

import imgDiagnostic from '../assets/images/method_diagnostic_1786748481202.jpg';
import imgModeling from '../assets/images/method_modeling_1786748495173.jpg';
import imgImplementation from '../assets/images/method_training_1786748508203.jpg';
import imgGovernance from '../assets/images/method_governance_1786748519949.jpg';

const methodologyImages = [
  imgDiagnostic,
  imgModeling,
  imgImplementation,
  imgGovernance
];

export const MethodologySection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      default:
        return <Workflow className="w-5 h-5" />;
    }
  };

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#090d12] relative overflow-hidden">
      {/* Background Hunter Logo Watermark */}
      <HunterLogoWatermark position="center" size="xl" opacity={0.05} showWordmark={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D3AF37]/10 border border-[#D3AF37] text-[#D3AF37] text-xs font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span>Engenharia de Implantação</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Como a Hunter Implanta seu{' '}
            <span className="text-gold-gradient">RH Estratégico</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Nossa metodologia proprietária em 4 fases garante que cada subsistema seja construído sob medida para a sua cultura, com transferência total de conhecimento para sua equipe.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const stepImg = methodologyImages[idx] || imgDiagnostic;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e141c] border border-[#D3AF37]/40 hover:border-[#D3AF37] overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 text-left shadow-lg"
              >
                {/* Corporate Image Banner for the Quadrant */}
                <div className="relative h-32 sm:h-36 w-full overflow-hidden border-b border-[#D3AF37]/40">
                  <img
                    src={stepImg}
                    alt={step.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e141c] via-[#0e141c]/50 to-transparent" />
                  
                  {/* Step number badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="text-[11px] sm:text-xs font-black font-['Space_Grotesk'] text-[#D3AF37] bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#D3AF37]">
                      FASE {step.step}
                    </span>
                  </div>

                  {/* Icon floating on bottom edge of image */}
                  <div className="absolute bottom-2 right-3 z-10">
                    <div 
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border border-[#D3AF37] shadow-lg backdrop-blur-md bg-[#D3AF37]/20 text-[#D3AF37]"
                    >
                      {getIcon(step.iconName)}
                    </div>
                  </div>
                </div>

                {/* Step content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#D3AF37] transition-colors leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-2.5 sm:pt-3 border-t border-[#D3AF37]/30 flex items-center gap-1.5 text-[11px] font-semibold text-[#D3AF37]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D3AF37]" />
                    <span>Entregável Validado</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Card */}
        <div className="mt-8 sm:mt-12 rounded-2xl bg-gradient-to-r from-[#D3AF37]/15 via-slate-900 to-slate-950 border-2 border-[#D3AF37] p-4.5 sm:p-6 md:p-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D3AF37] flex-shrink-0" />
              <span>Garantia de Adaptação & Continuidade</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Não entregamos apenas manuais estáticos: acompanhamos os primeiros 3 ciclos de execução para garantir que gestores e colaboradores vivenciem os subsistemas no dia a dia.
            </p>
          </div>

          <a
            href="#contato"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#D3AF37] hover:text-[#F3E5AB] bg-slate-950 border-2 border-[#D3AF37] hover:bg-[#D3AF37]/15 shadow-lg shadow-[#D3AF37]/10 transition-all flex-shrink-0"
          >
            <span className="text-[#D3AF37] hover:text-[#F3E5AB] font-bold">Falar com um Especialista</span>
            <ArrowRight className="w-4 h-4 text-[#D3AF37]" />
          </a>
        </div>

      </div>
    </section>
  );
};
