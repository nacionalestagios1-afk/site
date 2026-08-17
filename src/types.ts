export interface SubsystemItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  badge: string;
  badgeColor: string;
  summary: string;
  detailedDescription: string;
  keyBenefits: string[];
  deliverables: string[];
  turnoverImpact: string;
  methodologyHighlight: string;
  iconName: string;
  accentColor: string;
  secondaryAccent: string;
}

export interface TurnoverCalculationResult {
  employeesCount: number;
  avgMonthlySalary: number;
  annualTurnoverRate: number;
  annualDepartures: number;
  costPerDeparture: number;
  totalAnnualLoss: number;
  lostProductivityCost: number;
  recruitmentAndTrainingCost: number;
  separationCost: number;
  potentialSavingsWithHunter: number;
  projectedTurnoverReduction: number;
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  description: string;
  options: {
    label: string;
    text: string;
    points: number;
    feedback: string;
  }[];
}

export interface QuizResultLevel {
  minScore: number;
  maxScore: number;
  title: string;
  status: string;
  statusColor: string;
  description: string;
  turnoverRisk: 'Alto' | 'Moderado' | 'Baixo' | 'Controlado';
  prioritySubsystems: string[];
  actionPlan: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  sector: string;
  headcount: string;
  initialProblem: string;
  implementedSolutions: string[];
  results: {
    turnoverBefore: string;
    turnoverAfter: string;
    turnoverReductionPercent: string;
    retention90Days: string;
    satisfactionScore: string;
    roiHighlight: string;
  };
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Metodologia' | 'Turnover' | 'Subsistemas' | 'Implantação';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  employeesCount: string;
  role: string;
  interestedSubsystem: string;
  message: string;
  urgency: string;
}
