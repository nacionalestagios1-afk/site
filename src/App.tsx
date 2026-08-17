import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { TurnoverCalculator } from './components/TurnoverCalculator';
import { MaturityQuiz } from './components/MaturityQuiz';
import { MethodologySection } from './components/MethodologySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TurnoverCalculationResult } from './types';

export default function App() {
  const [selectedSubsystem, setSelectedSubsystem] = useState<string>('');
  const [simulationSummary, setSimulationSummary] = useState<string>('');

  const handleSelectSubsystem = (title: string) => {
    setSelectedSubsystem(title);
  };

  const handleTurnoverSimulation = (calc: TurnoverCalculationResult) => {
    const formattedLoss = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(calc.totalAnnualLoss);

    const formattedSavings = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(calc.potentialSavingsWithHunter);

    const note = `Quadro: ${calc.employeesCount} colaboradores | Salário Médio: R$ ${calc.avgMonthlySalary} | Turnover: ${calc.annualTurnoverRate}% a.a. | Prejuízo Anual Estimado: ${formattedLoss} | Economia Projetada Hunter: ${formattedSavings}`;
    setSimulationSummary(note);
  };

  return (
    <div className="min-h-screen bg-[#0c1015] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#D3AF37] selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. The 6 HR Subsystems Catalog */}
        <SubsystemsSection onSelectSubsystemForContact={handleSelectSubsystem} />

        {/* 3. Interactive Turnover & Replacement Cost Calculator */}
        <TurnoverCalculator onSendSimulationToContact={handleTurnoverSimulation} />

        {/* 4. HR Maturity & Turnover Risk Assessment Quiz */}
        <MaturityQuiz />

        {/* 5. Hunter 4-Step Implementation Methodology */}
        <MethodologySection />

        {/* 6. FAQ Section */}
        <FaqSection />

        {/* 7. Contact & Diagnostic Request Form */}
        <ContactSection 
          preselectedSubsystem={selectedSubsystem} 
          simulationNote={simulationSummary} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
