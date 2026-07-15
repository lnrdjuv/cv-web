export interface DigitalTool {
  name: string;
  description: string;
  url?: string;
}

export interface Reference {
  name: string;
  role: string;
  company: string;
  phone: string;
  linkedin?: string;
}

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
  digitalTools?: DigitalTool[];
  experience: {
    company: string;
    role: string;
    period: string;
    bullets: string[];
  }[];
  systems?: string[];
  references?: Reference[];
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
        "Supervisão de obra de coletor tronco (500 mm) executado pelo método não destrutivo",
        "Acompanhamento de reforma de reservatórios de concreto armado, apoiado e elevado",
        "Acompanhamento de construção de Estação de Tratamento de Água (ETA) com vazão de 60 m³/s",
        "Acompanhamento de obra de coletor de 400 mm em PVC (3 km)",
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
        "Supervisionou obra de coletor tronco (500 mm) executado pelo método não destrutivo, garantindo integridade de infraestrutura urbana existente",
        "Acompanhou reforma de reservatórios de concreto armado, apoiado e elevado, assegurando conformidade técnica e estrutural",
        "Fiscalizou construção de Estação de Tratamento de Água (ETA) com vazão de 60 m³/s, controlando qualidade e cronograma executivo",
        "Acompanhou instalação de coletor de 400 mm em PVC (3 km de extensão), monitorando qualidade e prazos da execução",
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

// ===== VERSÃO 03 — AEGEA / SUPERVISOR DE SERVIÇOS =====
export const cvAegea: CVData = {
  personal: {
    name: "Leonardo Silva Juvencio",
    title: "Engenheiro Civil — Supervisão de Serviços de Saneamento",
    address: "Gurupi / TO",
    phone: "(63) 9.8516-2431",
    email: "leonardo.juvencio018@gmail.com",
    linkedin: "linkedin.com/in/leonardo-juvencio",
    cnh: "B",
    crea: "Ativo",
    availability: "Início imediato",
  },
  objective:
    "Engenheiro Civil com mais de 4 anos de experiência em supervisão de equipes operacionais, obras de saneamento básico e sistemas de água e esgoto. Atuação direta em acompanhamento de instalação e manutenção de redes de distribuição, estações de tratamento e reservatórios. Busco a vaga de Supervisor de Serviços na Aegea para aplicar minha experiência em coordenação de campo, controle de indicadores operacionais e gestão de equipes multidisciplinares.",
  summary: [
    "Mais de 4 anos atuando em saneamento básico e infraestrutura, com supervisão direta de equipes operacionais em obras de expansão de redes de esgoto, instalação de coletores tronco, reformas de reservatórios e construção de Estação de Tratamento de Água (ETA 60 m³/s).",
    "Experiência comprovada em liderança de equipes multidisciplinares de campo, incluindo aplicação de treinamentos, avaliação de performance e coordenação de atividades operacionais com múltiplas frentes de serviço simultâneas.",
    "Vivência em acompanhamento de instalações hidráulicas, redes de distribuição, valas e intervenções operacionais — incluindo coletor tronco 500 mm por método não destrutivo e coletor PVC 400 mm em 3 km de extensão.",
    "Domínio avançado de Excel (VBA, Dashboards, Power Query) e Power BI para elaboração de relatórios gerenciais, acompanhamento de indicadores de área e controle físico-financeiro de contratos.",
    "Atendimento a requisitos regulatórios do órgão regulador municipal, normas de qualidade, meio ambiente, saúde e segurança do trabalho em todas as frentes de serviço supervisionadas.",
  ],
  education: [
    { degree: "MBA em Projeto, Desempenho e Construção de Estruturas e Fundações" },
    { degree: "Superior Completo em Engenharia Civil" },
    { degree: "Técnico em Administração" },
  ],
  experience: [
    {
      company: "BRK Ambiental",
      role: "Encarregado de Obras / Supervisor de Serviços",
      period: "07/2024 — atual",
      bullets: [
        "Supervisiona e coordena equipes operacionais em atividades de saneamento básico, incluindo instalação e manutenção de redes de esgoto, coletores e sistemas hidráulicos",
        "Acompanha obras de expansão de redes de distribuição e sistemas de esgotamento sanitário, garantindo qualidade dos serviços executados e cumprimento de cronogramas",
        "Supervisionou instalação de coletor tronco (500 mm) pelo método não destrutivo e coletor em PVC (400 mm, 3 km), coordenando abertura e fechamento de valas e intervenções operacionais",
        "Acompanhou construção de Estação de Tratamento de Água (ETA) com vazão de 60 m³/s, atuando na fiscalização de serviços de implantação e manutenção do sistema de tratamento",
        "Supervisionou reforma de reservatórios de concreto armado (apoiado e elevado), garantindo conformidade técnica e integridade estrutural dos sistemas de armazenamento de água",
        "Elabora relatórios gerenciais detalhados sobre operação e expansão das redes, acompanhando indicadores de desempenho da área e subsidiando tomadas de decisão",
        "Desenvolveu planilhas de controle físico-financeiro e ferramentas de automação que otimizaram o acompanhamento de cronogramas, custos e indicadores operacionais em mais de 40%",
        "Implementou API customizada para cadastro e monitoramento de fornecedores na plataforma Sertras, agilizando atualizações cadastrais e fiscalização de prestadores de serviço",
        "Garante cumprimento de normas de qualidade, meio ambiente, saúde e segurança do trabalho em todas as frentes de serviço, zelando pela conservação de equipamentos e veículos",
      ],
    },
    {
      company: "ARCADIS",
      role: "Gestor de Obras",
      period: "10/2023 — 07/2024",
      bullets: [
        "Fiscalizou tecnicamente projeto de expansão da Estação Elevatória de Esgoto Final de Gurupi, acompanhando instalação e manutenção de sistemas hidráulicos e equipamentos",
        "Coordenou equipes de campo nas atividades de operação e manutenção, garantindo conformidade com normas técnicas e especificações contratuais",
        "Desenvolveu plataforma online para elaboração de relatórios georreferenciados, reduzindo o tempo de produção de relatórios gerenciais em 60%",
        "Gerenciou demandas do órgão regulador municipal, mantendo conformidade regulatória e normas de qualidade e segurança",
      ],
    },
    {
      company: "PROSTAFF Recursos Humanos",
      role: "Técnico de Projetos e Controle de Obras I",
      period: "01/2023 — 10/2023",
      bullets: [
        "Coordenou equipe terceirizada (25+ operários) em atividades de campo, planejando jornadas de trabalho e monitorando produtividade por indicadores operacionais",
        "Desenvolveu boletins diários com indicadores de produtividade e ferramentas automatizadas para acompanhamento de metas, utilizando Excel avançado e Power BI",
        "Implantou tecnologia de geolocalização para monitoramento em tempo real de atividades de campo, facilitando fiscalizações e atualizações cadastrais",
        "Apoiou processos de treinamento e alinhamento operacional da equipe, garantindo precisão na execução das atividades",
      ],
    },
    {
      company: "Construtora Sempre Viva",
      role: "Engenheiro Civil",
      period: "01/2022 — 12/2022",
      bullets: [
        "Coordenou atividades de campo com equipes multidisciplinares, controlando produtividade, prazos e qualidade dos serviços executados",
        "Implementou sistema de medição e controle com rastreabilidade, garantindo conformidade com normas de qualidade e segurança",
        "Gerenciou equipamentos e recursos utilizados pelas equipes, zelando pela conservação e uso adequado",
      ],
    },
  ],
  systems: ["Excel Avançado (VBA, Dashboards, Power Query)", "Power BI", "SAP", "OBZ", "UAU", "CRM", "AutoCAD", "Pacote Office"],
};

// ===== VERSÃO 04 — GERAL ATS + SOLUÇÕES DIGITAIS =====
export const cvGeneral: CVData = {
  personal: {
    name: "Leonardo Silva Juvencio",
    title: "Engenheiro Civil — Gestão de Obras, Saneamento e Transformação Digital",
    address: "Gurupi / TO",
    phone: "(63) 9.8516-2431",
    email: "leonardo.juvencio018@gmail.com",
    linkedin: "linkedin.com/in/leonardo-juvencio",
    cnh: "B",
    crea: "Ativo",
    availability: "Início imediato",
  },
  objective:
    "Engenheiro Civil com mais de 4 anos de experiência em supervisão de obras de saneamento básico, gestão de contratos públicos e liderança de equipes operacionais. Diferencial em transformação digital: desenvolvimento de plataformas e ferramentas de automação aplicadas à gestão operacional, georreferenciamento e controle de indicadores. Busco contribuir com visão técnica, capacidade de inovação e gestão orientada a resultados.",
  summary: [
    "Mais de 4 anos atuando em saneamento básico e infraestrutura, com supervisão direta de equipes operacionais em obras de expansão de redes de esgoto, instalação de coletores tronco, reformas de reservatórios e construção de Estação de Tratamento de Água (ETA 60 m³/s).",
    "Liderança de equipes multidisciplinares de campo, com aplicação de treinamentos operacionais, controle de produtividade e garantia de cumprimento de cronogramas e normas de qualidade, meio ambiente, saúde e segurança do trabalho.",
    "Diferencial em transformação digital: desenvolveu e implementou plataformas digitais para gestão de obras, georreferenciamento de redes (KML), otimização de rotas de equipes de campo e automação de relatórios operacionais — reduzindo tempo de produção de relatórios em 60% e aumentando precisão de projeções orçamentárias em mais de 40%.",
    "Atendimento a requisitos regulatórios do órgão regulador municipal, elaboração de termos de referência, relatórios gerenciais detalhados e acompanhamento de indicadores de desempenho com Excel avançado (VBA, Dashboards, Power Query) e Power BI.",
  ],
  education: [
    { degree: "MBA em Projeto, Desempenho e Construção de Estruturas e Fundações" },
    { degree: "Superior Completo em Engenharia Civil" },
    { degree: "Técnico em Administração" },
  ],
  digitalTools: [
    { name: "Plataforma de Gestão de Obras", description: "Sistema web para gestão de obras e acompanhamento físico-financeiro de contratos", url: "https://projectobra.vercel.app/" },
    { name: "Gerador KML Georreferenciado", description: "Ferramenta de mapeamento e visualização de redes de distribuição em formato KML", url: "https://geraddor-kml.vercel.app/" },
    { name: "Otimizador de Rotas de Campo", description: "Sistema de otimização de rotas para equipes de leitura, fiscalização e manutenção", url: "https://melhor-rota-possivel.vercel.app/" },
    { name: "Controle de Pendências Documentais", description: "Plataforma de gestão de documentação técnica e relatórios de pendências", url: "https://relatoriopendencia.vercel.app/" },
  ],
  experience: [
    {
      company: "BRK Ambiental",
      role: "Encarregado de Obras",
      period: "07/2024 — atual",
      bullets: [
        "Supervisiona e coordena equipes operacionais em atividades de saneamento básico, incluindo instalação e manutenção de redes de esgoto, coletores e sistemas hidráulicos",
        "Supervisionou instalação de coletor tronco (500 mm) pelo método não destrutivo e coletor em PVC (400 mm, 3 km), coordenando abertura e fechamento de valas",
        "Acompanhou construção de Estação de Tratamento de Água (ETA) com vazão de 60 m³/s e reforma de reservatórios de concreto armado (apoiado e elevado)",
        "Desenvolveu plataformas digitais para gestão de obras, georreferenciamento de redes e otimização de rotas de equipes de campo, reduzindo tempo de produção de relatórios gerenciais em 60%",
        "Implementou planilhas de controle físico-financeiro com automação (VBA e Power Query), aumentando a precisão das projeções orçamentárias em mais de 40%",
        "Desenvolveu API customizada para cadastro e monitoramento de fornecedores na plataforma Sertras, agilizando atualizações cadastrais e fiscalização de prestadores",
        "Elabora relatórios gerenciais detalhados e acompanha indicadores de desempenho da área, subsidiando tomadas de decisão da diretoria",
        "Atende requisitos do órgão regulador municipal e garante cumprimento de normas de qualidade, meio ambiente, saúde e segurança do trabalho",
      ],
    },
    {
      company: "ARCADIS",
      role: "Gestor de Obras",
      period: "10/2023 — 07/2024",
      bullets: [
        "Fiscalizou tecnicamente projeto de expansão da Estação Elevatória de Esgoto Final de Gurupi, acompanhando instalação e manutenção de sistemas hidráulicos",
        "Desenvolveu e implementou plataforma online para elaboração de relatórios georreferenciados, reduzindo o tempo de produção em 60%",
        "Coordenou equipes de campo nas atividades de operação e manutenção, garantindo conformidade com normas técnicas e contratuais",
        "Gerenciou demandas do órgão regulador municipal, mantendo conformidade regulatória e normas de qualidade e segurança",
      ],
    },
    {
      company: "PROSTAFF Recursos Humanos",
      role: "Técnico de Projetos e Controle de Obras I",
      period: "01/2023 — 10/2023",
      bullets: [
        "Coordenou equipe terceirizada (25+ operários) em atividades de campo, planejando jornadas e monitorando produtividade por indicadores",
        "Desenvolveu boletins diários com indicadores de produtividade utilizando Excel avançado e dashboards Power BI",
        "Implantou tecnologia de geolocalização para monitoramento em tempo real de atividades de campo",
        "Apoiou processos de treinamento e alinhamento operacional da equipe, garantindo precisão na execução",
      ],
    },
    {
      company: "Construtora Sempre Viva",
      role: "Engenheiro Civil",
      period: "01/2022 — 12/2022",
      bullets: [
        "Coordenou atividades de campo com equipes multidisciplinares, controlando produtividade, prazos e qualidade dos serviços",
        "Implementou sistema de medição e controle com rastreabilidade, garantindo conformidade com normas de qualidade",
        "Gerenciou equipamentos e recursos utilizados pelas equipes, zelando pela conservação e uso adequado",
      ],
    },
  ],
  systems: ["Excel Avançado (VBA, Dashboards, Power Query)", "Power BI", "SAP", "OBZ", "UAU", "CRM", "AutoCAD", "Pacote Office"],
  references: [
    {
      name: "Wendel Sousa",
      role: "Gerente de Engenharia",
      company: "Aegea Saneamento",
      phone: "(94) 9.9279-1996",
      linkedin: "linkedin.com/in/wendel-sousa",
    },
  ],
};

// ===== VERSÃO 05 — ITINERA / ENGENHEIRO DE CUSTOS RODOVIÁRIAS =====
export const cvItinera: CVData = {
  personal: {
    name: "Leonardo Silva Juvencio",
    title: "Engenheiro Civil — Custos e Orçamento de Obras",
    address: "Gurupi / TO",
    phone: "(63) 9.8516-2431",
    email: "leonardo.juvencio018@gmail.com",
    linkedin: "linkedin.com/in/leonardo-juvencio",
    cnh: "B",
    crea: "Ativo",
    availability: "Início imediato",
  },
  objective:
    "Engenheiro Civil com mais de 4 anos de experiência em controle e planejamento de custos de obras de infraestrutura, saneamento e recuperação asfáltica. Especialista em composição de custos unitários, acompanhamento físico-financeiro, análise de medições e elaboração de relatórios gerenciais de desvios orçamentários. Domínio avançado de Excel (VBA, Dashboards, Power Query) e Power BI para controle de indicadores. Busco a vaga de Engenheiro de Custos na ITINERA Construção para aplicar minha experiência em orçamento, controle de cronogramas físico-financeiros e gestão de contratos em obras rodoviárias.",
  summary: [
    "Mais de 4 anos de experiência em orçamento, controle e planejamento de custos de obras de infraestrutura, incluindo recuperação asfáltica em via concessionada, redes de esgoto, reservatórios e estação de tratamento de água (ETA 60 m³/s).",
    "Atuação direta em composição de custos unitários e formação de preços, com elaboração de planilhas orçamentárias detalhadas para levantamento de quantitativos de serviços, materiais, equipamentos e mão de obra.",
    "Experiência comprovada em monitoramento de indicadores de desempenho físico-financeiro, análise de desvios orçamentários e elaboração de relatórios gerenciais de custos e produtividade utilizando Excel avançado (VBA, Dashboards, Power Query) e Power BI.",
    "Vivência em análise de medições de serviços executados, apoio a processos de faturamento e acompanhamento de cronogramas físico-financeiros, identificando riscos e oportunidades de otimização de custos.",
    "Conhecimento em gestão de contratos, elaboração de termos de referência, atendimento a requisitos regulatórios e atualização de bases de custos para tomada de decisão.",
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
        "Elaborou e controlou orçamento de obras de revitalização de barragens e expansão de redes de esgoto, garantindo aderência aos custos planejados e identificando desvios orçamentários",
        "Realizou levantamento e análise de quantitativos de serviços, materiais, equipamentos e mão de obra para composição de custos unitários e formação de preços",
        "Desenvolveu planilhas de controle físico-financeiro com automação (VBA e Power Query), aumentando a precisão das projeções orçamentárias em mais de 40%",
        "Monitorou indicadores de desempenho físico-financeiro da obra, elaborando relatórios gerenciais de custos, produtividade e desvios para subsidiar tomadas de decisão",
        "Analisou medições de serviços executados e apoiou processos de faturamento, conferindo quantitativos e garantindo conformidade contratual",
        "Acompanhou cronogramas físico-financeiros de múltiplas frentes de serviço, identificando riscos e propondo medidas de otimização de custos",
        "Elaborou termos de referência e documentos técnicos para formalização e acompanhamento de contratos, aditivos e pleitos",
        "Gerenciou contratos com prestadores de serviço, desenvolvendo API para controle de fornecedores e garantindo atualização cadastral",
        "Supervisionou obras de coletor tronco (500 mm — método não destrutivo), coletor PVC (400 mm, 3 km), reforma de reservatórios de concreto armado e construção de ETA (60 m³/s)",
      ],
    },
    {
      company: "PROSTAFF Recursos Humanos",
      role: "Técnico de Projetos e Controle de Obras I",
      period: "01/2023 — 10/2023",
      bullets: [
        "Fiscalizou atividades de recomposição asfáltica em via concessionada (obra rodoviária), realizando levantamento de quantitativos e controle de serviços executados",
        "Desenvolveu composições de custo unitário para serviços de recomposição asfáltica e crescimento vegetativo, controlando produtividade e custos da equipe terceirizada (25+ operários)",
        "Implantou dashboards em Power BI e ferramentas automatizadas em Excel para acompanhamento diário de indicadores físico-financeiros e boletins de produtividade",
        "Gerenciou cronograma de execução, otimizando alocação de equipamentos e mão de obra para cumprimento de metas contratuais da concessionária",
        "Aplicou tecnologia de geolocalização para monitoramento de frentes de serviço em obra rodoviária, aumentando a precisão do controle físico",
      ],
    },
    {
      company: "Construtora Sempre Viva",
      role: "Engenheiro Civil",
      period: "01/2022 — 12/2022",
      bullets: [
        "Elaborou orçamentos e estimativas de custos para obras civis, com levantamento de quantitativos, composição de preços unitários e formação de preços de venda",
        "Implementou sistema de medição e controle orçamentário com rastreabilidade dos valores investidos, garantindo controle financeiro rigoroso",
        "Realizou medições detalhadas de serviços executados para faturamento, conferindo aderência entre previsto x executado",
        "Coordenou atividades de campo controlando produtividade, prazos e custos, entregando 100% dos projetos no cronograma executivo",
      ],
    },
    {
      company: "ARCADIS",
      role: "Gestor de Obras",
      period: "10/2023 — 07/2024",
      bullets: [
        "Gerenciou e controlou custos da obra de expansão da Estação Elevatória de Esgoto Final de Gurupi, acompanhando cronograma físico-financeiro",
        "Desenvolveu plataforma online para elaboração de relatórios georreferenciados, reduzindo o tempo de produção de relatórios gerenciais em 60%",
        "Coordenou equipes de campo garantindo conformidade técnica, controle de qualidade e atendimento a especificações contratuais",
      ],
    },
  ],
  systems: ["Excel Avançado (VBA, Dashboards, Power Query)", "Power BI", "SAP", "OBZ", "UAU", "CRM", "AutoCAD", "Pacote Office"],
  digitalTools: [
    { name: "Plataforma de Gestão de Obras", description: "Sistema web para gestão de obras e acompanhamento físico-financeiro de contratos", url: "https://projectobra.vercel.app/" },
    { name: "Gerador KML Georreferenciado", description: "Ferramenta de mapeamento e visualização de redes de distribuição em formato KML", url: "https://geraddor-kml.vercel.app/" },
    { name: "Otimizador de Rotas de Campo", description: "Sistema de otimização de rotas para equipes de leitura, fiscalização e manutenção", url: "https://melhor-rota-possivel.vercel.app/" },
    { name: "Controle de Pendências Documentais", description: "Plataforma de gestão de documentação técnica e relatórios de pendências", url: "https://relatoriopendencia.vercel.app/" },
  ],
  references: [
    {
      name: "Wendel Sousa",
      role: "Gerente de Engenharia",
      company: "Aegea Saneamento",
      phone: "(94) 9.9279-1996",
      linkedin: "linkedin.com/in/wendel-sousa",
    },
  ],
};

// ===== VERSÃO 06 — EGIS / ENGENHEIRO CIVIL ORÇAMENTISTA =====
export const cvEgis: CVData = {
  personal: {
    name: "Leonardo Silva Juvencio",
    title: "Engenheiro Civil — Custos e Orçamento de Infraestrutura",
    address: "Gurupi / TO",
    phone: "(63) 9.8516-2431",
    email: "leonardo.juvencio018@gmail.com",
    linkedin: "linkedin.com/in/leonardo-juvencio",
    cnh: "B",
    crea: "Ativo",
    availability: "Início imediato",
  },
  objective:
    "Engenheiro Civil com sólida experiência em orçamentos de infraestrutura de grande porte, busca a vaga de Engenheiro Civil Orçamentista na Egis para aplicar expertise em composição de custos unitários, análise de projetos, elaboração de propostas técnicas e comerciais, e implementação de soluções BIM 5D para gestão de custos. Preparado para atuar em obras rodoviárias, ferroviárias, mobilidade urbana e saneamento.",
  summary: [
    "Mais de 4 anos de experiência em orçamento, controle e planejamento de custos de obras de infraestrutura, incluindo recuperação asfáltica em via concessionária, redes de esgoto, reservatórios e estação de tratamento de água (ETA 60 m³/s).",
    "Atuação direta em composição de custos unitários e formação de preços, com elaboração de planilhas orçamentárias detalhadas para levantamento de quantitativos de serviços, materiais, equipamentos e mão de obra.",
    "Experiência comprovada em monitoramento de indicadores de desempenho físico-financeiro, análise de desvios orçamentários e elaboração de relatórios gerenciais de custos e produtividade utilizando Excel avançado (VBA, Dashboards, Power Query) e Power BI.",
    "Vivência em análise de medições de serviços executados, apoio a processos de faturamento e acompanhamento de cronogramas físico-financeiros, identificando riscos e oportunidades de otimização de custos.",
    "Conhecimento em gestão de contratos, elaboração de termos de referência, atendimento a requisitos regulatórios e atualização de bases de custos para tomada de decisão.",
  ],
  education: [
    { degree: "MBA em Projeto, Desempenho e Construção de Estruturas e Fundações" },
    { degree: "Superior Completo em Engenharia Civil" },
    { degree: "Técnico em Administração" },
  ],
  digitalTools: [
    { name: "Plataforma de Gestão de Obras", description: "Sistema web para gestão de obras e acompanhamento físico-financeiro de contratos", url: "https://project-app-ruddy.vercel.app/" },
    { name: "Gerador KML Georreferenciado", description: "Ferramenta de mapeamento e visualização de redes de distribuição em formato KML", url: "https://geraddor-kml.vercel.app/" },
    { name: "Otimizador de Rotas de Campo", description: "Sistema de otimização de rotas para equipes de leitura, fiscalização e manutenção", url: "https://melhor-rota-possivel.vercel.app/" },
    { name: "Controle de Pendências Documentais", description: "Plataforma de gestão de documentação técnica e relatórios de pendências", url: "https://relatoriopendencia.vercel.app/" },
  ],
  experience: [
    {
      company: "BRK Ambiental",
      role: "Encarregado de Obras",
      period: "07/2024 — atual",
      bullets: [
        "Elaborou e controlou orçamento de obras de infraestrutura de grande porte: revitalização de barragens, expansão de redes de esgoto (coletor tronco 500mm, PVC 400mm, 3km), reforma de reservatórios de concreto armado e construção de ETA (60 m³/s)",
        "Desenvolveu composições de custos unitários e formação de preços com base em referenciais de mercado (SICRO, SINAPI, SCO, DER)",
        "Realizou levantamento quantitativo detalhado de serviços, materiais, equipamentos e mão de obra para projetos complexos de saneamento",
        "Monitorou indicadores de desempenho físico-financeiro, elaborando relatórios gerenciais de desvios orçamentários e produtividade para subsidiar tomadas de decisão",
        "Analisou medições de serviços executados e apoiou processos de faturamento, conferindo quantitativos e garantindo conformidade contratual",
        "Acompanhou cronogramas físico-financeiros de múltiplas frentes de serviço, identificando riscos e propondo medidas de otimização de custos",
        "Elaborou termos de referência e documentos técnicos para formalização e acompanhamento de contratos, aditivos e pleitos",
        "Desenvolveu planilhas de controle com automação (VBA e Power Query), aumentando a precisão das projeções orçamentárias em 40%",
        "Gerenciou contratos com prestadores, desenvolvendo API para controle de fornecedores",
      ],
    },
    {
      company: "ARCADIS",
      role: "Gestor de Obras",
      period: "10/2023 — 07/2024",
      bullets: [
        "Gerenciou e controlou custos da obra de expansão da Estação Elevatória de Esgoto de Gurupi, acompanhando cronograma físico-financeiro",
        "Desenvolveu plataforma online para elaboração de relatórios georreferenciados, reduzindo o tempo de produção de relatórios gerenciais em 60%",
        "Coordenou equipes de campo garantindo conformidade técnica, controle de qualidade e atendimento a especificações contratuais",
      ],
    },
    {
      company: "PROSTAFF Recursos Humanos",
      role: "Técnico de Projetos e Controle de Obras I",
      period: "01/2023 — 10/2023",
      bullets: [
        "Fiscalizou atividades de recomposição asfáltica em via concessionada (obra rodoviária), realizando levantamento de quantitativos e controle de serviços executados",
        "Desenvolveu composições de custo unitário para serviços de recomposição asfáltica e crescimento vegetativo, controlando produtividade e custos (equipe 25+ operários)",
        "Implantou dashboards em Power BI e ferramentas automatizadas em Excel para acompanhamento diário de indicadores físico-financeiros",
        "Gerenciou cronograma de execução, otimizando alocação de equipamentos e mão de obra para cumprimento de metas contratuais da concessionária",
        "Aplicou tecnologia de geolocalização para monitoramento de frentes de serviço em obra rodoviária",
      ],
    },
    {
      company: "Construtora Sempre Viva",
      role: "Engenheiro Civil",
      period: "01/2022 — 12/2022",
      bullets: [
        "Elaborou orçamentos e estimativas de custos para obras civis, com levantamento de quantitativos, composição de preços unitários e formação de preços de venda",
        "Implementou sistema de medição e controle orçamentário com rastreabilidade dos valores investidos, garantindo controle financeiro rigoroso",
        "Realizou medições detalhadas de serviços executados para faturamento, conferindo aderência entre previsto x executado",
        "Coordenou atividades de campo controlando produtividade, prazos e custos, entregando 100% dos projetos no cronograma executivo",
      ],
    },
  ],
  systems: ["Excel Avançado (VBA, Dashboards, Power Query)", "Power BI", "SAP", "OBZ", "UAU", "CRM", "AutoCAD", "Pacote Office"],
  references: [
    {
      name: "Wendel Sousa",
      role: "Gerente de Engenharia",
      company: "Aegea Saneamento",
      phone: "(94) 9.9279-1996",
      linkedin: "linkedin.com/in/wendel-sousa",
    },
  ],
};

// ===== VERSÃO 07 — ONE PAGE (RESUMO ENXUTO) =====
export const cvOnePage: CVData = {
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
    "Mais de 4 anos de experiência em gerenciamento de obras de infraestrutura, saneamento básico e contratos públicos. Atuação em fiscalização técnica, controle físico-financeiro, gestão de equipes multidisciplinares e atendimento a requisitos regulatórios.",
    "Diferencial em transformação digital: desenvolvimento de plataformas georreferenciadas, ferramentas de automação e dashboards (Power BI, Excel VBA) para otimização de processos, redução de tempo de relatórios em 60% e aumento de precisão orçamentária em mais de 40%.",
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
        "Gerenciamento de contratos de revitalização de barragens, expansão de redes de esgoto e fiscalização técnica de obras de infraestrutura",
        "Desenvolvimento de ferramentas de automação e controle físico-financeiro (VBA, Power BI), com ganho de precisão orçamentária superior a 40%",
        "Supervisão de obras relevantes: coletor tronco 500mm (método não destrutivo), reforma de reservatórios de concreto armado e construção de ETA (60 m³/s)",
        "Elaboração de termos de referência, relatórios técnicos e atendimento a requisitos do órgão regulador municipal",
      ],
    },
    {
      company: "ARCADIS",
      role: "Gestor de Obras",
      period: "10/2023 — 07/2024",
      bullets: [
        "Fiscalização técnica integral do projeto de expansão da Estação Elevatória de Esgoto Final de Gurupi",
        "Desenvolvimento e implementação de plataforma online para relatórios georreferenciados, reduzindo o tempo de produção em 60%",
        "Gestão de demandas do órgão regulador municipal e otimização de processos de relatórios",
      ],
    },
    {
      company: "PROSTAFF Recursos Humanos",
      role: "Técnico de Projetos e Controle de Obras I",
      period: "01/2023 — 10/2023",
      bullets: [
        "Fiscalização de atividades de recomposição asfáltica em via concessionada, com gerenciamento de equipe terceirizada (25+ operários)",
        "Implantação de tecnologia de geolocalização e dashboards Power BI para monitoramento de obras públicas em tempo real",
        "Desenvolvimento de boletins diários automatizados com indicadores de produtividade",
      ],
    },
    {
      company: "Construtora Sempre Viva",
      role: "Engenheiro Civil",
      period: "01/2022 — 12/2022",
      bullets: [
        "Gerenciamento de projetos, medições detalhadas e estimativas orçamentárias com 100% de cumprimento de prazos executivos",
        "Implementação de sistema de medição confiável com rastreabilidade dos valores investidos",
      ],
    },
  ],
  systems: ["SAP", "OBZ", "UAU", "CRM", "Power BI", "Excel Avançado"],
};

// ===== VERSÃO 08 — MÉTODO DUARTE (Currículo de Vendas, 1 Página) =====
// Baseado no post de @oduarteoficial: currículo é documento de vendas, não memorial.
// Regras: 1 página, resumo em 2 linhas, máx 3 bullets/exp com números, sem enrolação.
export const cvDuarte: CVData = {
  personal: {
    name: "Leonardo Silva Juvencio",
    title: "Engenheiro Civil — Gestão de Obras e Automação",
    address: "Gurupi / TO",
    phone: "(63) 9.8516-2431",
    email: "leonardo.juvencio018@gmail.com",
    linkedin: "linkedin.com/in/leonardo-juvencio",
    cnh: "B",
    crea: "Ativo",
    availability: "Início imediato",
  },
  objective: "",
  summary: [
    "Engenheiro Civil com 4+ anos em gestão de obras de infraestrutura e saneamento. Entregou automações que reduziram tempo de relatórios em 60% e aumentaram precisão orçamentária em mais de 40%.",
  ],
  education: [
    { degree: "MBA em Projeto, Desempenho e Construção de Estruturas e Fundações" },
    { degree: "Superior Completo em Engenharia Civil" },
  ],
  experience: [
    {
      company: "BRK Ambiental",
      role: "Encarregado de Obras",
      period: "07/2024 — atual",
      bullets: [
        "Gerencia múltiplos contratos simultâneos de revitalização de barragens e expansão de redes de esgoto, com 100% de cumprimento dos cronogramas físicos",
        "Desenvolveu planilhas de controle físico-financeiro (VBA e Power BI) que aumentaram a precisão das projeções orçamentárias em mais de 40%",
        "Supervisionou obras de coletor tronco 500mm (método não destrutivo), ETA de 60 m³/s e reforma de 2 reservatórios de concreto armado",
      ],
    },
    {
      company: "ARCADIS",
      role: "Gestor de Obras",
      period: "10/2023 — 07/2024",
      bullets: [
        "Fiscalizou projeto de expansão da Estação Elevatória de Esgoto Final de Gurupi, garantindo conformidade técnica e atendimento ao órgão regulador",
        "Implementou plataforma online de relatórios georreferenciados que reduziu o tempo de produção de relatórios em 60%",
      ],
    },
    {
      company: "PROSTAFF / Concessionária",
      role: "Técnico de Projetos e Controle de Obras I",
      period: "01/2023 — 10/2023",
      bullets: [
        "Gerenciou equipe terceirizada de 25+ operários em recomposição asfáltica de via concessionada",
        "Implantou dashboards Power BI e geolocalização para monitoramento de obras públicas em tempo real",
      ],
    },
    {
      company: "Construtora Sempre Viva",
      role: "Engenheiro Civil",
      period: "01/2022 — 12/2022",
      bullets: [
        "Entregou 100% dos projetos no prazo executivo, com sistema de medição e controle orçamentário com rastreabilidade total",
      ],
    },
  ],
  systems: ["Excel Avançado (VBA)", "Power BI", "SAP", "AutoCAD"],
};

// ===== VARIATIONS =====
export const variations: Record<string, { slug: string; label: string; data: CVData }> = {
  main: { slug: "main", label: "01 — 16/06/2026", data: cvMain },
  ats: { slug: "ats", label: "02 — ATS Otimizado", data: cvATS },
  aegea: { slug: "aegea", label: "03 — Aegea (Supervisor de Serviços)", data: cvAegea },
  general: { slug: "general", label: "04 — Geral + Soluções Digitais", data: cvGeneral },
  itinera: { slug: "itinera", label: "05 — ITINERA (Eng. Custos Rodoviárias)", data: cvItinera },
  egis: { slug: "egis", label: "06 — EGIS (Eng. Civil Orçamentista)", data: cvEgis },
  onepage: { slug: "onepage", label: "07 — One Page", data: cvOnePage },
  duarte: { slug: "duarte", label: "08 — Método Duarte (1 pág.)", data: cvDuarte },
};
