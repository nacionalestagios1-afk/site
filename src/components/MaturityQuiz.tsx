import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  AlertTriangle, 
  ShieldCheck, 
  Award,
  Zap,
  Layers
} from 'lucide-react';
import { QUIZ_QUESTIONS, QUIZ_RESULT_LEVELS } from '../data/hunterData';
import { QuizResultLevel } from '../types';
import imgQuizBg from '../assets/images/bg_office_exec_1786750531369.jpg';

interface MaturityQuizProps {
  onCompleteQuiz?: (result: QuizResultLevel, score: number) => void;
}

export const MaturityQuiz: React.FC<MaturityQuizProps> = ({ onCompleteQuiz }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: number, points: number) => {
    const updatedAnswers = { ...selectedAnswers, [questionId]: points };
    setSelectedAnswers(updatedAnswers);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      if (onCompleteQuiz) {
        const totalScore = Object.values(updatedAnswers).reduce<number>((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
        const result = getResultLevel(totalScore);
        onCompleteQuiz(result, totalScore);
      }
    }
  };

  const calculateTotalScore = () => {
    return Object.values(selectedAnswers).reduce<number>((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
  };

  const getResultLevel = (score: number): QuizResultLevel => {
    const found = QUIZ_RESULT_LEVELS.find(lvl => score >= lvl.minScore && score <= lvl.maxScore);
    return found || QUIZ_RESULT_LEVELS[0];
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const totalScore = calculateTotalScore();
  const finalResult = getResultLevel(totalScore);

  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-[#0c1015] relative overflow-hidden">
      {/* Background Image with dark luxury overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={imgQuizBg}
          alt="Executive Assessment Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-20 brightness-75 contrast-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1015]/90 via-[#0c1015]/80 to-[#0c1015]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0c1015_80%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D3AF37]/10 border border-[#D3AF37] text-[#D3AF37] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span>Diagnóstico Rápido e Gratuito</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Descubra o Nível de Maturidade do{' '}
            <span className="text-gold-gradient">RH da sua Empresa</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Responda a 5 perguntas objetivas sobre os subsistemas da sua empresa e receba um raio-X instantâneo do risco de turnover com recomendações práticas da Hunter.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0e141c] border-2 border-[#D3AF37] p-4.5 sm:p-8 md:p-10 shadow-2xl relative">
          
          {!isCompleted ? (
            <div className="space-y-5 sm:space-y-6">
              
              {/* Progress Bar & Header */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-[#D3AF37]/30 pb-3 sm:pb-4 gap-2">
                <span className="font-semibold text-[#D3AF37] text-left leading-tight">
                  Pergunta {currentStep + 1} de {totalQuestions}: {currentQuestion.category}
                </span>
                <span className="font-bold font-['Space_Grotesk'] text-[#D3AF37] whitespace-nowrap">
                  {Math.round(((currentStep + 1) / totalQuestions) * 100)}%
                </span>
              </div>

              <div className="w-full bg-slate-800 h-2 sm:h-2.5 rounded-full overflow-hidden border border-[#D3AF37]/30">
                <div 
                  className="bg-gradient-to-r from-[#D3AF37] to-[#B89324] h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="space-y-1.5 py-1 sm:py-2 text-left">
                <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
                  {currentQuestion.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {currentQuestion.description}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQuestion.id, option.points)}
                    className="w-full text-left p-3.5 sm:p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-[#D3AF37]/40 hover:border-[#D3AF37] transition-all flex items-start gap-3 group active:scale-[0.99]"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#D3AF37]/20 group-hover:bg-[#D3AF37] group-hover:text-black text-[#D3AF37] border border-[#D3AF37] font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                      {option.label}
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <p className="text-xs sm:text-sm text-slate-200 group-hover:text-white font-medium leading-snug">
                        {option.text}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Footer */}
              {currentStep > 0 && (
                <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-[#D3AF37]/30 text-xs">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-slate-400 hover:text-[#D3AF37] font-semibold py-1 px-2 -ml-2 rounded-lg"
                  >
                    ← Pergunta Anterior
                  </button>
                  <span className="text-[10px] sm:text-[11px] text-slate-500">
                    Hunter RH Intelligence Quiz
                  </span>
                </div>
              )}

            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300 text-left">
              
              {/* Top Result Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#D3AF37]/30 pb-5 sm:pb-6">
                <div>
                  <span className="inline-block text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full border border-[#D3AF37] bg-[#D3AF37]/20 text-[#D3AF37] mb-2">
                    {finalResult.status} (Pontuação: {totalScore}/20)
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                    {finalResult.title}
                  </h3>
                </div>

                <div className="text-left sm:text-right bg-slate-900/60 sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-[#D3AF37]/30">
                  <span className="text-xs text-slate-400 block">Risco de Turnover:</span>
                  <span className={`text-lg sm:text-xl font-bold font-['Space_Grotesk'] ${
                    finalResult.turnoverRisk === 'Alto' ? 'text-red-400' :
                    finalResult.turnoverRisk === 'Moderado' ? 'text-[#D3AF37]' : 'text-emerald-400'
                  }`}>
                    {finalResult.turnoverRisk}
                  </span>
                </div>
              </div>

              {/* Analysis Description */}
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-[#D3AF37]/30">
                {finalResult.description}
              </p>

              {/* Priority Subsystems & Action Plan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Subsistemas prioritários */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-[#D3AF37]/30 space-y-2.5 sm:space-y-3">
                  <h4 className="text-xs font-bold text-[#D3AF37] uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D3AF37]" />
                    Subsistemas Prioritários Recomendados
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {finalResult.prioritySubsystems.map((sub, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#D3AF37] flex-shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plano de Ação Imediato */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-[#D3AF37]/30 space-y-2.5 sm:space-y-3">
                  <h4 className="text-xs font-bold text-[#D3AF37] uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#D3AF37]" />
                    Plano de Ação Sugerido
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {finalResult.actionPlan.map((act, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37] mt-1.5 flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Actions Bottom */}
              <div className="pt-4 border-t border-[#D3AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-[#D3AF37]/40 hover:bg-slate-800 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#D3AF37]" />
                  <span>Refazer Teste</span>
                </button>

                <a
                  href="#contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#B89324] to-[#967414] hover:from-[#C5A028] hover:to-[#A88318] border border-[#D3AF37] shadow-lg shadow-[#D3AF37]/20 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white font-bold">Agendar Reunião com Especialista</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
