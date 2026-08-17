import React, { useState } from 'react';
import { 
  UserCheck, 
  Smile, 
  TrendingUp, 
  GraduationCap, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Layers, 
  X,
  Zap,
  Clock,
  Award
} from 'lucide-react';
import { SUBSYSTEMS_DATA } from '../data/hunterData';
import { SubsystemItem } from '../types';

import imgRecruitment from '../assets/images/quadrant_recruitment_1786748409610.jpg';
import imgClimate from '../assets/images/quadrant_climate_1786748419967.jpg';
import imgCompensation from '../assets/images/quadrant_compensation_1786748432342.jpg';
import imgTraining from '../assets/images/quadrant_training_1786748444213.jpg';
import imgPerformance from '../assets/images/quadrant_performance_1786748456633.jpg';
import imgAdvisory from '../assets/images/quadrant_advisory_1786748467490.jpg';
import imgSectionBg from '../assets/images/hunter_corporate_bg_1786747839522.jpg';

const subsystemImages: Record<string, string> = {
  'recrutamento-selecao': imgRecruitment,
  'pesquisa-clima-fit': imgClimate,
  'cargos-salarios': imgCompensation,
  'treinamento-desenvolvimento': imgTraining,
  'avaliacao-desempenho-testes': imgPerformance,
  'diagnostico-gestao': imgAdvisory,
};

interface SubsystemsSectionProps {
  onSelectSubsystemForContact?: (subsystemTitle: string) => void;
}

export const SubsystemsSection: React.FC<SubsystemsSectionProps> = ({ onSelectSubsystemForContact }) => {
  const [selectedSubsystem, setSelectedSubsystem] = useState<SubsystemItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'Smile':
        return <Smile className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  const handleSelectForContact = (title: string) => {
    if (onSelectSubsystemForContact) {
      onSelectSubsystemForContact(title);
    }
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedSubsystem(null);
  };

  return (
    <section id="subsistemas" className="py-20 md:py-28 bg-[#0c1015] relative overflow-hidden">
      {/* Background Image with clear luxury styling */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={imgSectionBg}
          alt="Corporate Office Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-65 brightness-125 contrast-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1015]/50 via-[#0c1015]/35 to-[#0c1015]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0c1015_85%)]" />
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#D3AF37]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#D3AF37]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D3AF37]/10 border border-[#D3AF37] text-[#D3AF37] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span>Engenharia Completa de Gestão de Pessoas</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Implantação Especializada de Todos os{' '}
            <span className="text-gold-gradient">Subsistemas de RH</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            A Hunter estrutura processos integrados de ponta a ponta. Cada subsistema atua em sinergia para blindar sua empresa contra a rotatividade de pessoal e alavancar a produtividade.
          </p>
        </div>

        {/* 6 Subsystems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {SUBSYSTEMS_DATA.map((subsystem) => {
            const cardImg = subsystemImages[subsystem.id] || imgRecruitment;
            return (
              <div
                key={subsystem.id}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#10161e]/95 border border-[#D3AF37]/40 hover:border-[#D3AF37] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D3AF37]/10"
              >
                {/* Corporate Image Banner for the Quadrant */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden border-b border-[#D3AF37]/40">
                  <img
                    src={cardImg}
                    alt={subsystem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center brightness-115 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10161e] via-[#10161e]/30 to-transparent" />
                  
                  {/* Category Pill and Number overlay on the image */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#D3AF37] text-[#D3AF37] shadow-md">
                      {subsystem.category}
                    </span>
                    <span className="text-xs sm:text-sm font-black font-['Space_Grotesk'] text-[#D3AF37] bg-black/80 px-2 py-0.5 rounded-md border border-[#D3AF37]/60">
                      {subsystem.number}
                    </span>
                  </div>

                  {/* Icon floating on bottom edge of image */}
                  <div className="absolute bottom-2 left-3 sm:left-4 z-10">
                    <div 
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border border-[#D3AF37] shadow-lg backdrop-blur-md bg-[#D3AF37]/20 text-[#D3AF37]"
                    >
                      {getIcon(subsystem.iconName)}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4.5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Subsystem Title */}
                    <h3 className="text-base sm:text-xl font-extrabold text-white mb-2 group-hover:text-[#D3AF37] transition-colors leading-snug">
                      {subsystem.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {subsystem.summary}
                    </p>

                    {/* Key Benefits Preview */}
                    <div className="space-y-2 mb-4 sm:mb-5 border-t border-[#D3AF37]/30 pt-3">
                      {subsystem.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D3AF37] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions & Impact Badge */}
                  <div className="pt-3 border-t border-[#D3AF37]/30">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#D3AF37] bg-[#D3AF37]/10 px-2 py-0.5 rounded border border-[#D3AF37]/40">
                        ⚡ {subsystem.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedSubsystem(subsystem)}
                        className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-slate-800/90 hover:bg-[#D3AF37] hover:text-black border border-[#D3AF37]/50 hover:border-[#D3AF37] transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Ver Escopo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleSelectForContact(subsystem.title)}
                        title="Solicitar proposta para este subsistema"
                        className="p-2.5 rounded-xl bg-[#D3AF37] hover:bg-[#B89324] text-black font-bold border border-[#D3AF37] transition-all flex items-center justify-center"
                      >
                        <Sparkles className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Modal / Detailed Drawer for Full Subsystem View */}
        {selectedSubsystem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0e141c] border-2 border-[#D3AF37] p-4 sm:p-8 shadow-2xl shadow-black text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSubsystem(null)}
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full text-[#D3AF37] hover:text-white bg-slate-800/80 hover:bg-[#D3AF37]/20 border border-[#D3AF37]/40 transition-all"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4 pr-10">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border border-[#D3AF37] bg-[#D3AF37]/20 text-[#D3AF37] flex-shrink-0"
                >
                  {getIcon(selectedSubsystem.iconName)}
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#D3AF37] uppercase tracking-widest block">
                    Subsistema {selectedSubsystem.number} • {selectedSubsystem.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-tight">
                    {selectedSubsystem.title}
                  </h3>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6 bg-slate-950/50 p-3.5 sm:p-4 rounded-xl border border-[#D3AF37]/30">
                {selectedSubsystem.detailedDescription}
              </p>

              {/* Grid with Deliverables & Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                
                {/* Entregáveis Concretos */}
                <div className="space-y-2.5 bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border border-[#D3AF37]/30">
                  <h4 className="text-xs font-bold text-[#D3AF37] uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#D3AF37]" />
                    Entregáveis do Projeto
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedSubsystem.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefícios Estratégicos */}
                <div className="space-y-2.5 bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border border-[#D3AF37]/30">
                  <h4 className="text-xs font-bold text-[#D3AF37] uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#D3AF37]" />
                    Ganhos Estratégicos
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedSubsystem.keyBenefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D3AF37] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Turnover & Methodology Highlight Banner */}
              <div className="rounded-xl bg-gradient-to-r from-[#D3AF37]/15 to-slate-900 p-3.5 sm:p-4 border border-[#D3AF37]/40 mb-5 space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D3AF37]">
                  <Zap className="w-4 h-4 text-[#D3AF37]" />
                  <span>Impacto Direto no Combate ao Turnover:</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedSubsystem.turnoverImpact}
                </p>
                <div className="text-[11px] text-slate-400 pt-1">
                  <strong>Metodologia Aplicada:</strong> {selectedSubsystem.methodologyHighlight}
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 sm:gap-3 pt-2">
                <button
                  onClick={() => setSelectedSubsystem(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-[#D3AF37]/40"
                >
                  Voltar
                </button>

                <button
                  onClick={() => handleSelectForContact(selectedSubsystem.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#D3AF37] to-[#B89324] hover:from-[#E2C45E] hover:to-[#D3AF37] border border-[#D3AF37] shadow-md shadow-[#D3AF37]/20"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Solicitar Proposta para este Subsistema</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

