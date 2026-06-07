export interface CVData {
  personal: {
    name: string;
    title: string;
    address: string;
    phone: string;
    email: string;
    linkedin: string;
    cnh: string;
    crea: string;
    availability: string;
  };
  objective: string;
  summary: string[];
  education: {
    degree: string;
    institution?: string;
  }[];
  experience: {
    company: string;
    role: string;
    period: string;
    bullets: string[];
  }[];
  systems?: string[];
}

export const cvMain: CVData = {
  personal: {
    name: "Leonardo Silva Juvencio",
    title: "Engenheiro Civil",
    address: "Gurupi / TO",
    phone: "(63) 9.8516-2431",
    email: "leonardo.juvencio018@gmail.com",
    linkedin: "linkedin.com/in/leonardo-juvencio",
    cnh: "B",
    crea: "Ativo",
    availability: "Início imediato",
  },
  objective: "Área de Engenharia Civil.",
  summary: [
    "Mais de 4 anos na área de Engenharia Civil. Atuando no gerenciamento, mapeamento, planejamento e execução dos processos pertinentes. Desenvolvimento de atividades técnicas na esfera de projetos e obras, realização de reuniões com clientes, visando seus interesses na prevenção de problemas estruturais, análise de viabilidade, execução de melhorias, negociações com fornecedores, contratos e atividades afins.",
    "Gestão de equipe multidisciplinar, aplicação de treinamento e avaliação de performance. Elaboração de relatórios técnicos, análise de indicadores, metas e métricas.",
    "Vivência em Coordenação de Atividades de Campo e Planejamento Orçamentário, com foco na precisão operacional e cumprimento de prazos executivos.",
    "Expertise em Gerenciamento de Obras, Desenvolvimento e Implementação de Soluções Tecnológicas para a melhoria de processos operacionais na área de engenharia civil.",
    "Especialista em Coordenação e Supervisão de Projetos, com ênfase na gestão de contratos de revitalização de barragens, expansão de redes de esgoto e fiscalização técnica de obras de infraestrutura.",
    "Experiência no desenvolvimento e implementação de plataformas georreferenciadas, ferramentas de automação e tecnologias de geolocalização para o gerenciamento eficiente de obras públicas.",
    "Habilidades em atendimento a requisitos regulatórios e acompanhamento físico-financeiro por meio de ferramentas de controle e planilhas.",
  ],
  education: [
    { degree: "MBA em Projeto, Desempenho e Construção de Estruturas e Fundações" },
    { degree: "Superior Completo em Engenharia Civil" },
    { degree: "Técnico em Administração" },
  ],
  experience: [
    {
      company: "BRK Ambiental",
      role: "Encarregado de Obras",
      period: "07/2024 — atual",
      bullets: [
        "Gerenciamento de contratos de revitalização de barragens e expansão de redes de esgoto",
        "Supervisão de equipes",
        "Atendimento a requisitos e demandas do órgão regulador municipal",
        "Elaboração de termos de referência e documentos técnicos para formalização e acompanhamento de contratos",
        "Desenvolvimento de relatórios técnicos detalhados sobre a operação e expansão da rede de esgoto",
        "Otimização de acompanhamento físico-financeiro, com desenvolvimento de planilhas para maior controle sobre cronogramas e custos de obras",
        "Melhoria no monitoramento de prestadores de serviço, com implementação de API que aprimorou cadastro e acompanhamento de fornecedores na plataforma Sertras",
      ],
    },
    {
      company: "ARCADIS",
      role: "Gestor de Obras",
      period: "10/2023 — 07/2024",
      bullets: [
        "Fiscalização técnica integral no projeto de expansão da Estação Elevatória de Esgoto Final de Gurupi",
        "Gerenciamento e controle de obras",
        "Atendimento a requisitos e gestão de demandas do órgão regulador municipal",
        "Desenvolvimento e implementação de plataforma online para elaboração de relatórios georreferenciados",
        "Otimização de processos de relatórios",
      ],
    },
    {
      company: "PROSTAFF Recursos Humanos",
      role: "Técnico de Projetos e Controle de Obras I",
      period: "01/2023 — 10/2023",
      bullets: [
        "Fiscalização das atividades de recomposição asfáltica e crescimento vegetativo da Concessionária",
        "Gerenciamento e planejamento das atividades de recomposição e produtividade da equipe terceirizada",
        "Desenvolvimento de ferramentas automatizadas para acompanhamento diário de indicadores operacionais",
        "Implantação de tecnologia de geolocalização e Power BI para gerenciamento eficiente de obras públicas",
        "Precisão operacional e estratégica através de boletins diários com indicadores de produtividade",
      ],
    },
    {
      company: "Construtora Sempre Viva",
      role: "Engenheiro Civil",
      period: "01/2022 — 12/2022",
      bullets: [
        "Gerenciamento de projetos, registros de produtividade, medições detalhadas e estimativas orçamentárias",
        "Implementação de controles eficazes e sistema de medição confiável",
        "Implementação de práticas de rastreabilidade dos valores investidos",
        "Excelência no cumprimento de prazos executivos",
        "Coordenação das atividades de campo",
      ],
    },
  ],
  systems: ["SAP", "OBZ", "UAU", "CRM"],
};

// ===== VERSÃO 02 — ATS OTIMIZADO =====
export const cvATS: CVData = {
  personal: {
    name: "Leonardo Silva Juvencio",
    title: "Engenheiro Civil — Gestão de Obras e Contratos",
    address: "Gurupi / TO",
    phone: "(63) 9.8516-2431",
    email: "leonardo.juvencio018@gmail.com",
    linkedin: "linkedin.com/in/leonardo-juvencio",
    cnh: "B",
    crea: "Ativo",
    availability: "Início imediato",
  },
  objective: "Engenheiro Civil com mais de 4 anos de experiência em gerenciamento de obras de infraestrutura, saneamento e contratos públicos. Especialista em fiscalização técnica, controle físico-financeiro e implementação de soluções tecnológicas para otimização de processos operacionais. Busca contribuir com liderança técnica, gestão de equipes multidisciplinares e visão analítica para entrega de projetos no prazo e dentro do orçamento.",
  summary: [
    "Expertise em gestão de contratos de revitalização de barragens, expansão de redes de esgoto e fiscalização técnica de obras de infraestrutura pública, com acompanhamento de múltiplos contratos simultâneos e atendimento a requisitos regulatórios municipais e estaduais.",
    "Vivência em coordenação de equipes multidisciplinares de campo, aplicação de treinamentos operacionais e avaliação de performance, garantindo produtividade e cumprimento de cronogramas executivos.",
    "Experiência comprovada em desenvolvimento e implementação de plataformas georreferenciadas, ferramentas de automação e tecnologias de geolocalização (Power BI, APIs customizadas) para gerenciamento eficiente de obras públicas.",
    "Habilidades em elaboração de termos de referência, relatórios técnicos detalhados, análise de indicadores de desempenho e acompanhamento físico-financeiro por meio de ferramentas de controle e planilhas.",
  ],
  education: [
    { degree: "MBA em Projeto, Desempenho e Construção de Estruturas e Fundações" },
    { degree: "Engenharia Civil — Superior Completo" },
    { degree: "Técnico em Administração" },
  ],
  experience: [
    {
      company: "BRK Ambiental",
      role: "Encarregado de Obras",
      period: "07/2024 — atual",
      bullets: [
        "Liderou equipe multidisciplinar na execução de contratos de revitalização de barragens e expansão de redes de esgoto, garantindo 100% de cumprimento dos cronogramas físicos estabelecidos",
        "Implementou planilhas de controle físico-financeiro que otimizaram o acompanhamento de custos e cronogramas, aumentando a precisão das projeções orçamentárias em mais de 40%",
        "Desenvolveu API customizada para cadastro e monitoramento de fornecedores na plataforma Sertras, agilizando processos de licitação e conformidade contratual",
        "Elaborou termos de referência e documentos técnicos para formalização de contratos, assegurando conformidade com requisitos do órgão regulador municipal",
        "Produziu relatórios técnicos detalhados sobre operação e expansão da rede de esgoto, servindo como base para tomadas de decisão da diretoria",
      ],
    },
    {
      company: "ARCADIS",
      role: "Gestor de Obras",
      period: "10/2023 — 07/2024",
      bullets: [
        "Fiscalizou tecnicamente o projeto de expansão da Estação Elevatória de Esgoto Final de Gurupi, assegurando conformidade com normas técnicas e especificações contratuais",
        "Desenvolveu e implementou plataforma online para elaboração de relatórios georreferenciados, reduzindo o tempo de produção de relatórios em 60%",
        "Gerenciou demandas do órgão regulador municipal, mantendo conformidade regulatória e evitando sanções ou atrasos no cronograma da obra",
        "Otimizou processos internos de relatórios, padronizando formatos e fluxos de aprovação entre equipes de campo e escritório",
      ],
    },
    {
      company: "PROSTAFF Recursos Humanos",
      role: "Técnico de Projetos e Controle de Obras I",
      period: "01/2023 — 10/2023",
      bullets: [
        "Fiscalizou atividades de recomposição asfáltica e crescimento vegetativo para concessionária, gerenciando produtividade de equipe terceirizada com 25+ operários",
        "Implantou tecnologia de geolocalização e dashboards Power BI para monitoramento em tempo real de obras públicas, aumentando a visibilidade operacional para stakeholders",
        "Desenvolveu ferramentas automatizadas para acompanhamento diário de indicadores operacionais, gerando boletins de produtividade que subsidiaram decisões gerenciais",
        "Planejou e coordenou atividades de recomposição, otimizando alocação de recursos e garantindo cumprimento de metas contratuais",
      ],
    },
    {
      company: "Construtora Sempre Viva",
      role: "Engenheiro Civil",
      period: "01/2022 — 12/2022",
      bullets: [
        "Gerenciou projetos de construção civil incluindo medições detalhadas, estimativas orçamentárias e registros de produtividade, entregando 100% dos projetos no prazo executivo",
        "Implementou sistema de medição confiável com rastreabilidade dos valores investidos, garantindo transparência financeira e controle orçamentário",
        "Coordenou atividades de campo com equipes multidisciplinares, assegurando qualidade na execução e conformidade com projetos aprovados",
      ],
    },
  ],
  systems: ["SAP", "OBZ", "UAU", "CRM", "Power BI", "AutoCAD"],
};

// ===== VARIATIONS =====
export const variations: Record<string, { slug: string; label: string; data: CVData }> = {
  main: { slug: "main", label: "01 — 06/06/2026", data: cvMain },
  ats: { slug: "ats", label: "02 — ATS Otimizado", data: cvATS },
};
