import { SubsystemItem, QuizQuestion, QuizResultLevel, CaseStudy, FaqItem } from '../types';

export const SUBSYSTEMS_DATA: SubsystemItem[] = [
  {
    id: 'recrutamento-selecao',
    number: '01',
    title: 'Recrutamento & Seleção por Competência',
    shortTitle: 'R&S Estratégico & Hunting',
    category: 'Aquisição de Talentos',
    badge: 'Redução de Turnover Imediata',
    badgeColor: 'from-[#D3AF37] to-[#B89324]',
    summary: 'Atração cirúrgica de profissionais com fit cultural e competências técnicas e comportamentais alinhadas ao DNA do negócio.',
    detailedDescription: 'O R&S por competência da Hunter elimina o "feeling" e a subjetividade das contratações. Mapeamos previamente o Perfil Profissional Ideal (CHA: Conhecimentos, Habilidades e Atitudes) e aplicamos entrevistas comportamentais com foco em evidências passadas, garantindo assertividade superior a 95% no período de experiência.',
    keyBenefits: [
      'Garantia de reposição sem custo adicional no período de adaptação',
      'Mapeamento de perfil comportamental (DISC / PI / Âncoras de Carreira)',
      'Hunting ativo para cargos de média, alta liderança e especialistas técnicos',
      'Redução do SLA de fechamento de vagas em até 40%'
    ],
    deliverables: [
      'Matriz de Competências do Cargo (CHA)',
      'Laudo Psicológico e Comportamental Completo',
      'Parecer Técnico com Ranking Comparativo de Finalistas',
      'Plano de Onboarding e Integração 90 dias'
    ],
    turnoverImpact: 'Diminui em até 70% o desligamento precoce nos primeiros 90 dias.',
    methodologyHighlight: 'Técnica STAR (Situação, Tarefa, Ação e Resultado) + Testes Situacionais Reais.',
    iconName: 'UserCheck',
    accentColor: '#D3AF37',
    secondaryAccent: '#B89324'
  },
  {
    id: 'pesquisa-clima-fit',
    number: '02',
    title: 'Pesquisa de Clima & Fit Cultural',
    shortTitle: 'Clima & Fit Cultural',
    category: 'Engajamento & Cultura',
    badge: 'Termômetro Organizacional',
    badgeColor: 'from-[#D3AF37] to-[#B89324]',
    summary: 'Diagnóstico profundo do engajamento, satisfação, liderança e alinhamento dos valores entre colaboradores e a organização.',
    detailedDescription: 'Investigamos os fatores invisíveis que causam atrito, desmotivação e pedidos espontâneos de demissão. Com metodologia 100% anônima e segmentação por departamentos, identificamos gargalos de liderança, sobrecarga e oportunidades de melhoria com planos de ação práticos imediatos.',
    keyBenefits: [
      'Identificação preditiva de riscos de turnover em setores críticos',
      'Mensuração de eNPS (Employee Net Promoter Score) e índice de favorabilidade',
      'Auditoria de percepção de justiça, comunicação e liderança',
      'Construção de planos de intervenção com metas claras para gestores'
    ],
    deliverables: [
      'Relatório Executivo Geral e por Centros de Custo',
      'Dashboard com Análise de Correlação e Matriz de Priorização',
      'Workshops de Devolutiva para Diretoria e Lideranças',
      'Matriz 5W2H de Ações Corretivas e Preventivas'
    ],
    turnoverImpact: 'Reduz os pedidos voluntários de demissão (turnover passivo) em mais de 50%.',
    methodologyHighlight: 'Pesquisa quanti-qualitativa com blindagem estatística e índice de confiabilidade 98%.',
    iconName: 'Smile',
    accentColor: '#D3AF37',
    secondaryAccent: '#B89324'
  },
  {
    id: 'cargos-salarios',
    number: '03',
    title: 'Plano de Cargos, Carreiras e Salários (PCCS)',
    shortTitle: 'Cargos, Carreiras & Salários',
    category: 'Estrutura & Remuneração',
    badge: 'Equidade & Segurança Jurídica',
    badgeColor: 'from-[#D3AF37] to-[#B89324]',
    summary: 'Estruturação justa, transparente e competitiva da remuneração, trilhas de carreira e descrições de funções.',
    detailedDescription: 'A principal causa de perda de talentos-chave para o mercado é a falta de perspectiva de crescimento e a sensação de injustiça salarial interna. O PCCS da Hunter equilibra o equilíbrio interno (equidade) com a competitividade externa (pesquisa salarial de mercado), criando regras claras de progressão.',
    keyBenefits: [
      'Eliminação de passivos trabalhistas (equiparação salarial indevida)',
      'Criação de Trilhas de Carreira em Y, W e linear claras e motivadoras',
      'Tabelas salariais com faixas de evolução por maturidade e competência',
      'Orçamento de folha de pagamento previsível e controlado'
    ],
    deliverables: [
      'Manual Completo de Descrição e Especificação de Cargos (CBO + CHA)',
      'Tabelas Salariais com Curva de Mercado Atualizada',
      'Política Corporativa de Promoções, Méritos e Enquadramento',
      'Simulador Financeiro de Impacto na Folha e Cronograma de Migração'
    ],
    turnoverImpact: 'Retém talentos de alta performance que hoje saem por ofertas salariais sem critério.',
    methodologyHighlight: 'Método de Pontos por Fatores Ponderados e Pesquisa Salarial Setorial Customizada.',
    iconName: 'TrendingUp',
    accentColor: '#D3AF37',
    secondaryAccent: '#B89324'
  },
  {
    id: 'treinamento-desenvolvimento',
    number: '04',
    title: 'Treinamento & Desenvolvimento (T&D)',
    shortTitle: 'Treinamento & Liderança',
    category: 'Capacitação Contínua',
    badge: 'Alta Performance',
    badgeColor: 'from-[#D3AF37] to-[#B89324]',
    summary: 'Programas de capacitação focados no fechamento de GAPs de competências e formação de lideranças humanizadas e orientadas a resultados.',
    detailedDescription: 'Pessoas não deixam empresas, deixam maus líderes ou a estagnação profissional. Nossos programas de T&D são 100% customizados para a realidade do seu negócio, unindo teoria contemporânea, dinâmicas vivenciais e ferramentas práticas para o dia a dia da gestão.',
    keyBenefits: [
      'Desenvolvimento da Academia de Líderes Hunter (gestão de pessoas e feedbacks)',
      'Matriz LNT (Levantamento de Necessidades de Treinamento) focada em metas',
      'Aumento imediato de produtividade e engajamento das equipes',
      'Criação de cultura de melhoria contínua e compartilhamento de conhecimento'
    ],
    deliverables: [
      'Plano Anual de Treinamento e Desenvolvimento Estratégico',
      'Módulos Presenciais e Híbridos com Material Didático e Cases Reais',
      'Avaliação de Reação, Aprendizado e Impacto no Negócio (Kirkpatrick)',
      'Manual de Boas Práticas e Rituais de Gestão'
    ],
    turnoverImpact: 'Transforma gestores em agentes ativos de retenção, blindando as equipes.',
    methodologyHighlight: 'Andragogia + Metodologia 70:20:10 com foco em aplicação no posto de trabalho.',
    iconName: 'GraduationCap',
    accentColor: '#D3AF37',
    secondaryAccent: '#B89324'
  },
  {
    id: 'avaliacao-desempenho-testes',
    number: '05',
    title: 'Testes de Desempenho & Avaliação 360°',
    shortTitle: 'Avaliação de Desempenho & Testes',
    category: 'Mapeamento de Potencial',
    badge: 'Decisões Baseadas em Dados',
    badgeColor: 'from-[#D3AF37] to-[#B89324]',
    summary: 'Avaliação contínua de competências, metas, entregas e potencial humano com matriz Nine Box e feedbacks estruturados.',
    detailedDescription: 'Implementamos ciclos de avaliação de desempenho que substituem a opinião pessoal por métricas claras de competência e resultado. Identificamos os High Potentials (HiPos), os pontos cegos da liderança e quem necessita de Plano de Desenvolvimento Individual (PDI).',
    keyBenefits: [
      'Mapeamento claro da Matriz Nine Box (Desempenho x Potencial)',
      'Processo de feedback 90°, 180° e 360° estruturado e sem ruídos',
      'Geração de PDIs (Planos de Desenvolvimento Individual) automáticos',
      'Base técnica sólida para promoções, reconhecimentos e sucessão'
    ],
    deliverables: [
      'Formulários e Questionários de Avaliação Parametrizados',
      'Comitê de Calibração com Diretores e Gestores',
      'Mapa Geral de Competências da Organização (Radar de GAPs)',
      'Relatórios Individuais com Gráficos de Evolução Temporal'
    ],
    turnoverImpact: 'Elimina demissões injustas e dá clareza de expectativas a 100% dos colaboradores.',
    methodologyHighlight: 'Avaliação por Indicadores Comportamentais Ancorados em Escala (BARS).',
    iconName: 'Target',
    accentColor: '#D3AF37',
    secondaryAccent: '#B89324'
  },
  {
    id: 'diagnostico-gestao',
    number: '06',
    title: 'Diagnóstico & Estruturação Geral do RH',
    shortTitle: 'Diagnóstico Organizacional',
    category: 'Consultoria Master',
    badge: 'Arquitetura de RH 360°',
    badgeColor: 'from-[#D3AF37] to-[#B89324]',
    summary: 'Auditoria e implantação ponta a ponta de processos de RH, governança de pessoas, compliance e indicadores estratégicos.',
    detailedDescription: 'Para empresas em expansão ou que sofrem com processos desorganizados e rotatividade crônica. Estruturamos o departamento de RH do zero ou profissionalizamos o setor existente para atuar como parceiro estratégico de negócios (RH Business Partner).',
    keyBenefits: [
      'Mapeamento e redesenho de todos os fluxos de pessoas',
      'Estruturação de KPIs de RH (Turnover, Absenteísmo, Tempo de Fechamento, ROI de T&D)',
      'Adequação de rotinas de admissão, integração e desligamento humanizado',
      'Alinhamento direto entre a estratégia do negócio e a gestão de talentos'
    ],
    deliverables: [
      'Raio-X de Maturidade de RH com Scorecard de Riscos',
      'Book de Processos e Políticas de Gestão de Pessoas',
      'Dashboard Executivo de Indicadores de RH em Tempo Real',
      'Mentoria para a equipe interna de RH'
    ],
    turnoverImpact: 'Cria uma infraestrutura sustentável que reduz o turnover de forma definitiva.',
    methodologyHighlight: 'Modelo de Ulrich adaptado à realidade e porte das empresas brasileiras.',
    iconName: 'ShieldCheck',
    accentColor: '#D3AF37',
    secondaryAccent: '#B89324'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Recrutamento & Seleção',
    question: 'Como sua empresa seleciona novos colaboradores atualmente?',
    description: 'A forma de contratar determina diretamente a taxa de desligamento no período de experiência.',
    options: [
      {
        label: 'A',
        text: 'Com base em análise de currículo e entrevistas baseadas em afinidade/"feeling" do gestor.',
        points: 1,
        feedback: 'Alto risco de desalinhamento de expectativas e desligamentos nos primeiros 90 dias.'
      },
      {
        label: 'B',
        text: 'Temos testes técnicos básicos, mas não avaliamos competências comportamentais estruturadas.',
        points: 2,
        feedback: 'Contrata-se pelo currículo e demite-se pelo comportamento.'
      },
      {
        label: 'C',
        text: 'Utilizamos metodologia por competências (CHA), testes comportamentais e alinhamento de fit cultural.',
        points: 4,
        feedback: 'Excelente prática que blinda a entrada de colaboradores.'
      }
    ]
  },
  {
    id: 2,
    category: 'Cargos e Salários',
    question: 'Existe um Plano de Cargos e Salários claro e documentado?',
    description: 'Sem critérios transparentes, os melhores talentos migram para concorrentes.',
    options: [
      {
        label: 'A',
        text: 'Não há tabela salarial fixa; os salários e aumentos dependem de negociação individual ou pressão.',
        points: 1,
        feedback: 'Gera forte sensação de injustiça interna e risco de ações trabalhistas por equiparação.'
      },
      {
        label: 'B',
        text: 'Temos faixas salariais informais, mas não há trilha de carreira (progressão) clara para os colaboradores.',
        points: 2,
        feedback: 'Falta de perspectiva é uma das 3 principais causas de pedido de demissão.'
      },
      {
        label: 'C',
        text: 'Temos PCCS formalizado com descrições de cargo, critérios objetivos de promoção e pesquisa de mercado.',
        points: 4,
        feedback: 'Equidade interna e competitividade externa garantidas.'
      }
    ]
  },
  {
    id: 3,
    category: 'Clima & Engajamento',
    question: 'Com que frequência e método a satisfação e o clima são medidos?',
    description: 'O clima organizacional é o termômetro direto da saúde das equipes.',
    options: [
      {
        label: 'A',
        text: 'Não realizamos pesquisas de clima; só descobrimos insatisfações na entrevista de desligamento.',
        points: 1,
        feedback: 'Atuação 100% reativa quando o prejuízo já aconteceu.'
      },
      {
        label: 'B',
        text: 'Fazemos pesquisas esporádicas, mas raramente desdobramos em planos de ação práticos.',
        points: 2,
        feedback: 'Pesquisa sem ação gera frustração e descrença na gestão.'
      },
      {
        label: 'C',
        text: 'Aplicamos pesquisas periódicas e anônimas com eNPS, análise setorial e planos 5W2H executados.',
        points: 4,
        feedback: 'Cultura de escuta ativa e melhoria contínua madura.'
      }
    ]
  },
  {
    id: 4,
    category: 'Treinamento & Liderança',
    question: 'Como sua empresa capacita líderes e colaboradores?',
    description: 'A qualidade da liderança direta é responsável por mais de 60% da retenção de talentos.',
    options: [
      {
        label: 'A',
        text: 'Treinamentos pontuais apenas quando há erros operacionais graves ou exigências regulatórias.',
        points: 1,
        feedback: 'Líderes despreparados geram sobrecarga e expulsam bons profissionais.'
      },
      {
        label: 'B',
        text: 'Oferecemos cursos técnicos, mas não há um programa contínuo de desenvolvimento de liderança.',
        points: 2,
        feedback: 'Equipes técnicas promovidas a líderes sem ferramentas de gestão de pessoas.'
      },
      {
        label: 'C',
        text: 'Temos Plano Anual de Treinamento (LNT), academia de líderes e capacitação focada em competências.',
        points: 4,
        feedback: 'Lideranças capacitadas para engajar e reter talentos.'
      }
    ]
  },
  {
    id: 5,
    category: 'Desempenho & Feedback',
    question: 'Como o desempenho e potencial dos colaboradores são avaliados?',
    description: 'Avaliações justas direcionam o reconhecimento e o crescimento profissional.',
    options: [
      {
        label: 'A',
        text: 'Não temos rituais formais de avaliação; feedbacks só ocorrem em momentos de crise.',
        points: 1,
        feedback: 'Colaboradores sem direção clara de expectativas e desenvolvimento.'
      },
      {
        label: 'B',
        text: 'Realizamos avaliações anuais simples, mas não geramos PDIs (Planos de Desenvolvimento) estruturados.',
        points: 2,
        feedback: 'Processo burocrático sem impacto real no desempenho diário.'
      },
      {
        label: 'C',
        text: 'Ciclos de Avaliação 360°/180°, Matriz Nine Box, comitê de calibração e PDIs acompanhados.',
        points: 4,
        feedback: 'Decisões de pessoas baseadas em dados e meritocracia comprovada.'
      }
    ]
  }
];

export const QUIZ_RESULT_LEVELS: QuizResultLevel[] = [
  {
    minScore: 5,
    maxScore: 9,
    title: 'Nível Crítico: Vulnerabilidade Alta a Turnover',
    status: 'Risco Máximo',
    statusColor: 'text-red-400 bg-red-950/60 border-red-500/30',
    description: 'Sua organização está operando em modelo tradicional reativo. A ausência de subsistemas estruturados e a falta de critérios por competência geram custos astronômicos invisíveis com demissões, recontratações e desmotivação.',
    turnoverRisk: 'Alto',
    prioritySubsystems: [
      'Recrutamento por Competência (urgente para estancar desligamentos)',
      'Diagnóstico Geral de RH & Auditoria de Clima',
      'Implantação de Plano de Cargos e Salários'
    ],
    actionPlan: [
      'Estancar as contratações por "feeling" aplicando entrevistas por competência imediatamente.',
      'Mapear os setores com maior índice de rotatividade e aplicar pesquisa de clima emergencial.',
      'Definir parâmetros salariais mínimos para evitar perda de talentos-chave para concorrentes.'
    ]
  },
  {
    minScore: 10,
    maxScore: 15,
    title: 'Nível Intermediário: Estrutura Parcial com Vazamentos de Talentos',
    status: 'Atenção / Oportunidade',
    statusColor: 'text-amber-400 bg-amber-950/60 border-amber-500/30',
    description: 'Sua empresa já possui algumas iniciativas de gestão de pessoas, mas os subsistemas não conversam entre si. A falta de integração entre recrutamento, remuneração e avaliação ainda causa perda de produtividade e turnover moderado.',
    turnoverRisk: 'Moderado',
    prioritySubsystems: [
      'Plano de Cargos, Carreiras e Salários (PCCS)',
      'Academia de Liderança e Treinamento em Gestão de Pessoas',
      'Avaliação de Desempenho com Matriz Nine Box'
    ],
    actionPlan: [
      'Integrar as descrições de cargo aos critérios de avaliação de desempenho e remuneração.',
      'Capacitar a média gerência para atuar como retentores de talentos e condutores de feedbacks.',
      'Instituir rituais de clima e acompanhamento do eNPS semestralmente.'
    ]
  },
  {
    minScore: 16,
    maxScore: 20,
    title: 'Nível Estratégico: Alta Maturidade em Gestão de Pessoas',
    status: 'Excelência & Sustentação',
    statusColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30',
    description: 'Parabéns! Sua organização já compreende o valor do RH Estratégico. O foco agora é a sustentação contínua, inovação em People Analytics, sucessão de lideranças e refinamento dos subsistemas para manter o turnover abaixo da média de mercado.',
    turnoverRisk: 'Controlado',
    prioritySubsystems: [
      'Programa de Sucessão e Retenção de High Potentials',
      'People Analytics & Indicadores Preditivos de Engajamento',
      'Benchmarking Salarial e Benefícios Flexíveis'
    ],
    actionPlan: [
      'Refinar as matrizes de competência para suportar a expansão e novos desafios do negócio.',
      'Criar programas de aceleração de carreira para posições críticas.',
      'Manter auditorias de clima e calibragem das avaliações de desempenho.'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'industria-manufatura',
    clientName: 'Grupo Metalúrgico & Industrial',
    sector: 'Indústria / Manufatura Pesada',
    headcount: '620 colaboradores',
    initialProblem: 'Turnover anual em 54%, alta rotatividade de operadores especializados e constantes conflitos por disparidades salariais sem critério.',
    implementedSolutions: [
      'Implantação completa do PCCS com 78 descrições de cargo por competência',
      'Pesquisa Salarial Regional e enquadramento justo',
      'Recrutamento por competência com teste situacional técnico'
    ],
    results: {
      turnoverBefore: '54% a.a.',
      turnoverAfter: '16.8% a.a.',
      turnoverReductionPercent: '-68.8%',
      retention90Days: '96.4%',
      satisfactionScore: '89% no eNPS',
      roiHighlight: 'Economia comprovada de R$ 1.420.000 em custos rescisórios e recontratações no primeiro ano.'
    },
    testimonial: {
      text: 'A Hunter transformou nossa operação fabril. O turnover era nosso maior dreno de dinheiro e qualidade. Com o PCCS e o processo seletivo por competência, hoje nossos colaboradores sabem exatamente como crescer na empresa.',
      author: 'Carlos Eduardo M.',
      role: 'Diretor de Operações e RH'
    }
  },
  {
    id: 'tecnologia-saas',
    clientName: 'Scale-up de Software & Serviços',
    sector: 'Tecnologia & Inovação',
    headcount: '185 colaboradores',
    initialProblem: 'Perda constante de desenvolvedores sêniores e líderes técnicos para o mercado, líderes promovidos sem preparo em gestão de pessoas.',
    implementedSolutions: [
      'Estruturação de Carreira em Y (Especialista vs Gestão)',
      'Academia de Líderes com foco em feedback e segurança psicológica',
      'Avaliação 360° com matriz Nine Box semestral'
    ],
    results: {
      turnoverBefore: '42% a.a.',
      turnoverAfter: '11.2% a.a.',
      turnoverReductionPercent: '-73.3%',
      retention90Days: '98.5%',
      satisfactionScore: '+74 pontos eNPS',
      roiHighlight: 'Aumento de 35% na velocidade de entrega de sprints devido à estabilidade das equipes.'
    },
    testimonial: {
      text: 'Em tech, perder um desenvolvedor sênior atrasa o roadmap em 6 meses. O plano de carreira em Y da Hunter e a capacitação dos nossos Tech Leads estancaram a sangria de talentos.',
      author: 'Mariana S. Rocha',
      role: 'Head of People & VP de Engenharia'
    }
  },
  {
    id: 'varejo-distribuicao',
    clientName: 'Rede Varejista & Distribuição Regional',
    sector: 'Varejo Multilojas',
    headcount: '430 colaboradores',
    initialProblem: 'Turnover precoce nos primeiros 45 dias de contratação superior a 60%, gerentes de loja sobrecarregados e sem processo padrão.',
    implementedSolutions: [
      'Hunting e R&S por competências comportamentais e Fit Cultural',
      'Manual de Onboarding e integração acelerada de 30 dias',
      'Pesquisa de Clima trimestral com planos 5W2H por loja'
    ],
    results: {
      turnoverBefore: '68% a.a.',
      turnoverAfter: '22% a.a.',
      turnoverReductionPercent: '-67.6%',
      retention90Days: '94.2%',
      satisfactionScore: '86% favorabilidade',
      roiHighlight: 'Redução de 45% nos custos de admissão e treinamento de novos operadores de caixa e vendas.'
    },
    testimonial: {
      text: 'A assertividade nas contratações mudou da água para o vinho. Nossas lojas agora contam com equipes motivadas e os gerentes têm tempo para focar nas vendas em vez de ficar entrevistando pessoas todo dia.',
      author: 'Renato F. Guimarães',
      role: 'CEO & Fundador'
    }
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O que é o RH por Competência e por que ele é mais eficaz contra o turnover?',
    answer: 'O RH por Competência abandona contratações e avaliações baseadas em "feeling" ou apenas diplomas. Ele estrutura a gestão com base no CHA: Conhecimentos (o que sabe), Habilidades (o que sabe fazer) e Atitudes (como age e interage). Quando uma empresa contrata, remunera e desenvolve pessoas alinhadas às competências exatas da função e à cultura da empresa, o turnover despenca porque as pessoas certas estão nos lugares certos, com expectativas alinhadas e perspectivas reais de crescimento.',
    category: 'Metodologia'
  },
  {
    id: 'faq-2',
    question: 'A Hunter implanta todos os subsistemas juntos ou posso contratar por módulos?',
    answer: 'Trabalhamos de forma 100% personalizada. É possível implantar o ecossistema completo de RH (o ideal para resultados integrados e definitivos) ou contratar módulos específicos prioritários, como o Plano de Cargos e Salários (PCCS), Recrutamento Especializado ou Pesquisa de Clima Organizacional. Iniciamos sempre com um Diagnóstico de Maturidade para indicar o caminho mais eficiente.',
    category: 'Implantação'
  },
  {
    id: 'faq-3',
    question: 'Quanto tempo leva para implantar um Plano de Cargos, Carreiras e Salários (PCCS)?',
    answer: 'Em média, a implantação de um PCCS completo dura de 60 a 120 dias, dependendo do número de colaboradores e quantidade de funções da organização. O projeto envolve o levantamento das funções, pesquisa salarial de mercado, cálculo das curvas salariais, desenho das trilhas de carreira e workshops de capacitação da diretoria e líderes.',
    category: 'Subsistemas'
  },
  {
    id: 'faq-4',
    question: 'Qual é a garantia do serviço de Recrutamento e Seleção por Competência?',
    answer: 'Oferecemos garantia contratual de reposição de 90 a 120 dias (dependendo da senioridade da vaga). Se o profissional contratado não se adaptar ou solicitar desligamento durante o período de garantia, conduzimos um novo processo seletivo completo sem qualquer cobrança adicional de honorários.',
    category: 'Turnover'
  },
  {
    id: 'faq-5',
    question: 'Minha empresa já tem uma equipe de RH interna. A Hunter substitui meu RH?',
    answer: 'Não! A Hunter atua como consultoria e braço estratégico parceiro do seu RH existente. Nós estruturamos a metodologia, entregamos os manuais, realizamos as pesquisas complexas e capacitamos a sua equipe interna para que ela execute os processos com maestria e autonomia. Caso a empresa não tenha equipe de RH, podemos atuar na estruturação completa do setor.',
    category: 'Implantação'
  },
  {
    id: 'faq-6',
    question: 'Como a Hunter calcula o retorno sobre o investimento (ROI) dos projetos?',
    answer: 'O ROI da Hunter é medido em números concretos: redução dos custos diretos de rescisão e FGTS, economia com anúncios de vagas e recontratações, diminuição de horas perdidas em treinamento de novatos, eliminação de riscos de passivos trabalhistas de equiparação salarial e aumento direto no faturamento decorrente de equipes mais estáveis e produtivas.',
    category: 'Turnover'
  }
];

export const COMPANY_STATS = [
  {
    value: '-68%',
    label: 'Redução Média de Turnover',
    sublabel: 'Nos primeiros 12 meses de implantação'
  },
  {
    value: '96.8%',
    label: 'Taxa de Retenção de Contratações',
    sublabel: 'No período de experiência (90 dias)'
  },
  {
    value: '+15',
    label: 'Anos de Experiência',
    sublabel: 'Especialistas em RH Estratégico'
  },
  {
    value: '+450',
    label: 'Projetos e Subsistemas',
    sublabel: 'Implantados com sucesso'
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico & Mapeamento Cultural',
    description: 'Investigação aprofundada dos gargalos atuais, análise histórica de turnover, auditoria de folha, levantamento de clima e definição do perfil ideal da empresa.',
    iconName: 'Search',
    accent: '#D3AF37'
  },
  {
    step: '02',
    title: 'Arquitetura dos Subsistemas & CHA',
    description: 'Construção técnica sob medida: matrizes de competência por função, tabelas salariais balizadas pelo mercado, formulários de avaliação e esteira de recrutamento.',
    iconName: 'Cpu',
    accent: '#D3AF37'
  },
  {
    step: '03',
    title: 'Capacitação de Líderes & Implantação',
    description: 'Treinamento intensivo da diretoria, gerentes e coordenadores. Alinhamento de discursos, rituais de feedback e condução de transições sem ruídos internos.',
    iconName: 'Users',
    accent: '#D3AF37'
  },
  {
    step: '04',
    title: 'Monitoramento de KPIs & Sustentação',
    description: 'Acompanhamento periódico com dashboards de turnover, eNPS, absenteísmo e produtividade, garantindo a autonomia e evolução da cultura.',
    iconName: 'BarChart3',
    accent: '#D3AF37'
  }
];
