import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Percent, 
  ArrowRight, 
  Sparkles, 
  AlertOctagon, 
  PiggyBank,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { TurnoverCalculationResult } from '../types';
import { HunterLogoWatermark } from './HunterLogoWatermark';

interface TurnoverCalculatorProps {
  onSendSimulationToContact?: (data: TurnoverCalculationResult) => void;
}

export const TurnoverCalculator: React.FC<TurnoverCalculatorProps> = ({ onSendSimulationToContact }) => {
  const [employeesCount, setEmployeesCount] = useState<number>(120);
  const [avgMonthlySalary, setAvgMonthlySalary] = useState<number>(4500);
  const [annualTurnoverRate, setAnnualTurnoverRate] = useState<number>(38);

  // Calculations
  const results = useMemo<TurnoverCalculationResult>(() => {
    const departures = Math.round(employeesCount * (annualTurnoverRate / 100));
    
    // Benchmark: Total cost of replacing a professional is ~2.8x their monthly salary
    // (Rescissions + FGTS 40% + Recruiting/Selection + Onboarding + Productivity ramp-up)
    const costPerDeparture = avgMonthlySalary * 2.8;
    const totalAnnualLoss = departures * costPerDeparture;

    // Breakdown components
    const separationCost = departures * (avgMonthlySalary * 0.9); // Rescisão, FGTS, exames
    const recruitmentAndTrainingCost = departures * (avgMonthlySalary * 0.7); // Atração, entrevistas, treinamento
    const lostProductivityCost = totalAnnualLoss - separationCost - recruitmentAndTrainingCost; // Curva de aprendizado & vaga aberta

    // Projected Hunter reduction (average 60% reduction in avoidable turnover)
    const projectedReductionPercent = 0.60;
    const potentialSavings = totalAnnualLoss * projectedReductionPercent;

    return {
      employeesCount,
      avgMonthlySalary,
      annualTurnoverRate,
      annualDepartures: departures,
      costPerDeparture,
      totalAnnualLoss,
      separationCost,
      recruitmentAndTrainingCost,
      lostProductivityCost,
      potentialSavingsWithHunter: potentialSavings,
      projectedTurnoverReduction: 60
    };
  }, [employeesCount, avgMonthlySalary, annualTurnoverRate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleExportSimulation = () => {
    if (onSendSimulationToContact) {
      onSendSimulationToContact(results);
    }
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-[#090d12] relative overflow-hidden">
      {/* Background Hunter Logo Watermark */}
      <HunterLogoWatermark position="center" size="xl" opacity={0.05} showWordmark={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D3AF37]/10 border border-[#D3AF37] text-[#D3AF37] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span>Simulador Financeiro Exclusivo Hunter</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Descubra o Custo Oculto do{' '}
            <span className="text-gold-gradient">Turnover na sua Empresa</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Cada colaborador desligado custa em média de <strong className="text-[#D3AF37]">2,5x a 3,2x</strong> o seu salário mensal em rescisões, recrutamento e perda de produtividade. Veja quanto sua empresa está perdendo todos os anos:
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-900/95 to-[#0e141c] border-2 border-[#D3AF37] p-4.5 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Sliders & Inputs */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-[#D3AF37]/30 pb-3">
                <Users className="w-5 h-5 text-[#D3AF37]" />
                <span>Parâmetros da Sua Operação</span>
              </h3>

              {/* Slider 1: Total Employees */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs gap-2">
                  <span className="font-semibold text-slate-300 leading-tight">Número de Colaboradores (Quadro Total)</span>
                  <span className="font-bold text-[#D3AF37] bg-[#D3AF37]/10 px-2.5 py-1 rounded-lg border border-[#D3AF37] text-xs sm:text-sm whitespace-nowrap">
                    {employeesCount} pessoas
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1500"
                  step="5"
                  value={employeesCount}
                  onChange={(e) => setEmployeesCount(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer white-slider-track"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-medium">
                  <span>10</span>
                  <span>500</span>
                  <span>1.000</span>
                  <span>1.500+</span>
                </div>
              </div>

              {/* Slider 2: Average Salary */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs gap-2">
                  <span className="font-semibold text-slate-300 leading-tight">Salário Médio Mensal (Bruto)</span>
                  <span className="font-bold text-[#D3AF37] bg-[#D3AF37]/10 px-2.5 py-1 rounded-lg border border-[#D3AF37] text-xs sm:text-sm whitespace-nowrap">
                    {formatCurrency(avgMonthlySalary)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="25000"
                  step="250"
                  value={avgMonthlySalary}
                  onChange={(e) => setAvgMonthlySalary(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer white-slider-track"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-medium">
                  <span>R$ 1.500</span>
                  <span>R$ 8.000</span>
                  <span>R$ 15.000</span>
                  <span>R$ 25.000</span>
                </div>
              </div>

              {/* Slider 3: Annual Turnover Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs gap-2">
                  <span className="font-semibold text-slate-300 leading-tight">Taxa de Turnover Anual Estimada</span>
                  <span className="font-bold text-red-400 bg-red-950/60 px-2.5 py-1 rounded-lg border border-[#D3AF37]/40 text-xs sm:text-sm whitespace-nowrap">
                    {annualTurnoverRate}% ao ano
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="1"
                  value={annualTurnoverRate}
                  onChange={(e) => setAnnualTurnoverRate(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer white-slider-track"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-medium">
                  <span>5% (Excelente)</span>
                  <span>25% (Média BR)</span>
                  <span>50% (Crítico)</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Quick Info note */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/70 border border-[#D3AF37]/30 text-[11px] text-slate-400 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#D3AF37] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Cálculo calibrado com padrões da <em>SHRM (Society for Human Resource Management)</em> e histórico de mais de 450 projetos executados pela Hunter RH.
                </p>
              </div>

            </div>

            {/* Right Column: Dynamic Results Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#090d12] border-2 border-[#D3AF37] p-4.5 sm:p-8 relative glow-gold text-left space-y-5 sm:space-y-6">
                
                {/* Desligamentos anuais & Prejuízo Total */}
                <div>
                  <div className="flex justify-between items-center mb-1 text-xs text-slate-400">
                    <span>Desligamentos Estimados por Ano:</span>
                    <strong className="text-white text-xs sm:text-sm">{results.annualDepartures} colaboradores</strong>
                  </div>
                  <div className="flex justify-between items-center mb-3 text-xs text-slate-400">
                    <span>Custo Médio por Desligamento:</span>
                    <strong className="text-[#D3AF37] text-xs sm:text-sm">{formatCurrency(results.costPerDeparture)}</strong>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/40 border border-[#D3AF37]/40 mb-4">
                    <span className="text-[11px] sm:text-xs font-bold text-red-300 flex items-center gap-1.5 uppercase tracking-wider mb-1">
                      <AlertOctagon className="w-4 h-4 text-[#D3AF37]" />
                      Prejuízo Financeiro Anual com Turnover:
                    </span>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-400 font-['Space_Grotesk'] leading-tight">
                      {formatCurrency(results.totalAnnualLoss)}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 mt-1 block">
                      Dinheiro que sai do caixa da sua empresa todos os anos sem gerar qualquer valor.
                    </span>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="space-y-2 border-t border-[#D3AF37]/30 pt-3 sm:pt-4 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>• Rescisões contratuais & FGTS:</span>
                    <span className="font-semibold text-slate-100">{formatCurrency(results.separationCost)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>• Atração, Seleção & Treinamento:</span>
                    <span className="font-semibold text-slate-100">{formatCurrency(results.recruitmentAndTrainingCost)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>• Vagas abertas & Produtividade:</span>
                    <span className="font-semibold text-slate-100">{formatCurrency(results.lostProductivityCost)}</span>
                  </div>
                </div>

                {/* Hunter Potential Savings Box */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#D3AF37]/15 to-slate-900 border border-[#D3AF37]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D3AF37] mb-1">
                    <PiggyBank className="w-4 h-4 text-[#D3AF37]" />
                    <span>Economia Anual com Metodologia Hunter:</span>
                  </div>
                  <div className="text-xl sm:text-3xl font-extrabold text-[#D3AF37] font-['Space_Grotesk']">
                    {formatCurrency(results.potentialSavingsWithHunter)}
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-300 mt-1 block">
                    Ao reduzir seu turnover em ~60% com RH por Competência e PCCS.
                  </span>
                </div>

                {/* Action CTA */}
                <button
                  onClick={handleExportSimulation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#B89324] to-[#967414] hover:from-[#C5A028] hover:to-[#A88318] border border-[#D3AF37] shadow-lg shadow-[#D3AF37]/20 transition-all active:scale-[0.99]"
                >
                  <Sparkles className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-white font-bold leading-tight">Levar Simulação para Diagnóstico</span>
                  <ArrowRight className="w-4 h-4 text-white flex-shrink-0" />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
