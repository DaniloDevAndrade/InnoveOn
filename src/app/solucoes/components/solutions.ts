export interface Solution {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  features: {
    title: string
    description: string
  }[]
  technologies: string[]
  caseStudies: {
    title: string
    description: string
    results: string
  }[]
  icon?: string
  image?: string
}

export const solutions: Solution[] = [
  {
    id: "sites",
    title: "Desenvolvimento de Sites",
    shortDescription:
      "Desenvolvemos sites modernos, rápidos e responsivos, com design estratégico e performance otimizada para atrair e converter clientes.",
    fullDescription:
      "Criamos sites que não são apenas bonitos, mas estrategicamente projetados para converter visitantes em clientes. Combinamos design de interface atraente, experiência do usuário intuitiva e otimização técnica para garantir que seu site se destaque na multidão digital. Desde landing pages até portais corporativos complexos, nossa equipe desenvolve soluções web que representam sua marca com excelência e geram resultados concretos.",
    benefits: [
      "Aumento nas taxas de conversão",
      "Melhor posicionamento nos motores de busca",
      "Experiência do usuário otimizada em todos os dispositivos",
      "Tempos de carregamento reduzidos",
      "Facilidade de gestão de conteúdo",
    ],
    features: [
      {
        title: "Design Responsivo",
        description:
          "Sites que se adaptam perfeitamente a qualquer tamanho de tela, garantindo uma experiência consistente.",
      },
      {
        title: "Otimização para SEO",
        description: "Estrutura técnica e de conteúdo planejada para melhor posicionamento nos buscadores.",
      },
      {
        title: "Integração com Analytics",
        description: "Monitoramento completo de performance para tomada de decisões baseadas em dados.",
      },
      {
        title: "Alta Performance",
        description: "Código otimizado e boas práticas para garantir velocidade de carregamento superior.",
      },
    ],
    technologies: ["React", "Next.js", "WordPress", "Tailwind CSS", "TypeScript", "Node.js"],
    caseStudies: [
      {
        title: "Portal Corporativo - Grupo Nexus",
        description:
          "Redesenvolvimento completo do portal corporativo com foco em experiência do usuário e performance.",
        results: "Aumento de 45% no tempo médio de permanência e redução de 60% na taxa de rejeição.",
      },
      {
        title: "E-commerce - Moda Sustentável",
        description: "Criação de loja virtual com design exclusivo e otimização para conversão.",
        results: "Aumento de 120% nas vendas online nos primeiros 3 meses após o lançamento.",
      },
    ],
    image: "/images/notbook-dev.webp",
  },
  {
    id: "aplicativos",
    title: "Desenvolvimento de Aplicativos",
    shortDescription:
      "Criamos apps nativos ou híbridos que aproximam sua marca do seu público, com foco em performance, usabilidade e inovação.",
    fullDescription:
      "Transformamos ideias em aplicativos móveis que encantam usuários e impulsionam negócios. Nossa equipe especializada desenvolve soluções para iOS e Android, seja com abordagem nativa para máxima performance ou híbrida para maior agilidade e custo-benefício. Priorizamos a experiência do usuário, a segurança e a escalabilidade, garantindo que seu aplicativo não apenas atenda às necessidades atuais, mas também evolua com seu negócio.",
    benefits: [
      "Maior engajamento com sua marca",
      "Novos canais de receita",
      "Fidelização de clientes",
      "Coleta de dados valiosos sobre comportamento do usuário",
      "Vantagem competitiva no mercado",
    ],
    features: [
      {
        title: "Desenvolvimento Nativo e Híbrido",
        description: "Flexibilidade para escolher a abordagem que melhor atende às necessidades do seu projeto.",
      },
      {
        title: "Integração com APIs",
        description: "Conexão perfeita com sistemas existentes e serviços de terceiros.",
      },
      {
        title: "Funcionalidades Offline",
        description: "Aplicativos que funcionam mesmo sem conexão com a internet.",
      },
      {
        title: "Notificações Push",
        description: "Engaje seus usuários com mensagens relevantes e oportunas.",
      },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
    caseStudies: [
      {
        title: "Aplicativo de Fidelidade - Rede de Cafeterias",
        description: "Desenvolvimento de app com programa de fidelidade, pedidos online e localização de lojas.",
        results: "Aumento de 35% na frequência de visitas e 28% no ticket médio dos usuários do app.",
      },
      {
        title: "App de Gestão Financeira Pessoal",
        description: "Criação de aplicativo para controle de gastos com recursos de categorização automática.",
        results: "Mais de 100 mil downloads nos primeiros 6 meses e avaliação média de 4.8 estrelas.",
      },
    ],
    image: "/images/phone-innoveon.webp",
  },
  {
    id: "sistemas",
    title: "Desenvolvimento de Sistemas",
    shortDescription:
      "Projetamos e desenvolvemos sistemas personalizados para gestão, controle e automação de processos, totalmente adaptados às necessidades do seu negócio.",
    fullDescription:
      "Desenvolvemos sistemas sob medida que automatizam processos, centralizam informações e potencializam a produtividade da sua empresa. Nossas soluções são projetadas para resolver desafios específicos do seu negócio, integrando-se perfeitamente ao seu fluxo de trabalho existente. Utilizamos tecnologias modernas e arquiteturas escaláveis para garantir que seu sistema cresça junto com sua empresa, mantendo-se seguro, eficiente e fácil de usar.",
    benefits: [
      "Automação de processos manuais",
      "Centralização de informações",
      "Redução de erros operacionais",
      "Insights baseados em dados para tomada de decisões",
      "Aumento significativo de produtividade",
    ],
    features: [
      {
        title: "Arquitetura Escalável",
        description: "Sistemas projetados para crescer com seu negócio sem perda de performance.",
      },
      {
        title: "Painéis Administrativos Intuitivos",
        description: "Interfaces amigáveis que facilitam a gestão e o controle de processos.",
      },
      {
        title: "Relatórios Personalizados",
        description: "Visualização de dados relevantes para seu negócio em tempo real.",
      },
      {
        title: "Integrações com Sistemas Existentes",
        description: "Conexão perfeita com ERPs, CRMs e outras ferramentas já utilizadas.",
      },
    ],
    technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"],
    caseStudies: [
      {
        title: "Sistema de Gestão - Distribuidora Nacional",
        description: "Desenvolvimento de sistema integrado para controle de estoque, logística e faturamento.",
        results: "Redução de 40% no tempo de processamento de pedidos e diminuição de 25% em erros de estoque.",
      },
      {
        title: "Plataforma de Gestão Educacional",
        description:
          "Criação de sistema completo para administração escolar, incluindo notas, frequência e comunicação.",
        results: "Economia de 30 horas semanais em tarefas administrativas e melhoria na satisfação de pais e alunos.",
      },
    ],
    image:"/images/notbook-systems.webp",
  },
  {
    id: "ecommerce",
    title: "Desenvolvimento de E-commerce",
    shortDescription:
      "Montamos lojas virtuais completas, com foco em conversão, segurança e escalabilidade. Integrações com meios de pagamento, frete e sistemas de gestão.",
    fullDescription:
      "Transformamos sua visão de negócio em uma loja virtual de sucesso. Desenvolvemos plataformas de e-commerce personalizadas que combinam design atraente, experiência de compra fluida e recursos avançados de gestão. Nossas soluções são otimizadas para conversão, segurança e escalabilidade, permitindo que você venda mais, gerencie melhor seu negócio e ofereça uma experiência excepcional aos seus clientes.",
    benefits: [
      "Aumento nas taxas de conversão de vendas",
      "Gestão simplificada de produtos e pedidos",
      "Experiência de compra otimizada em todos os dispositivos",
      "Segurança nas transações e proteção de dados",
      "Escalabilidade para crescer com seu negócio",
    ],
    features: [
      {
        title: "Checkout Otimizado",
        description: "Processo de finalização de compra simplificado para maximizar conversões.",
      },
      {
        title: "Múltiplas Integrações",
        description: "Conexão com gateways de pagamento, calculadoras de frete, ERPs e marketplaces.",
      },
      {
        title: "Gestão de Catálogo Avançada",
        description: "Ferramentas completas para gerenciar produtos, variações, estoque e preços.",
      },
      {
        title: "Marketing e SEO",
        description: "Recursos integrados para campanhas, cupons, SEO e remarketing.",
      },
    ],
    technologies: ["WooCommerce", "Shopify", "Magento", "VTEX", "Next.js Commerce", "React", "Node.js"],
    caseStudies: [
      {
        title: "Loja Virtual - Moda Sustentável",
        description: "Desenvolvimento de e-commerce completo com foco em experiência do usuário e conversão.",
        results: "Aumento de 85% na taxa de conversão e redução de 50% no abandono de carrinho.",
      },
      {
        title: "Marketplace - Produtos Artesanais",
        description: "Criação de plataforma para múltiplos vendedores com sistema de comissionamento.",
        results: "Crescimento de 200% nas vendas no primeiro ano e expansão para 5 estados.",
      },
    ],
    image: "/images/ecommerce-dark-mockup.webp",
  },
  {
    id: "ia",
    title: "Agentes de Inteligência Artificial",
    shortDescription:
      "Desenvolvemos agentes de IA capazes de automatizar atendimentos, responder clientes em tempo real e otimizar sua operação com inteligência.",
    fullDescription:
      "Criamos assistentes virtuais e sistemas de IA que transformam a maneira como sua empresa interage com clientes e processa informações. Nossos agentes de inteligência artificial são projetados para automatizar tarefas repetitivas, fornecer respostas precisas em tempo real e extrair insights valiosos de grandes volumes de dados. Combinamos as mais recentes tecnologias de processamento de linguagem natural e aprendizado de máquina para desenvolver soluções que evoluem continuamente, tornando-se mais inteligentes e eficientes com o tempo.",
    benefits: [
      "Atendimento ao cliente 24/7 sem aumento de custos",
      "Redução significativa no tempo de resposta",
      "Consistência nas interações com clientes",
      "Escalabilidade para lidar com picos de demanda",
      "Insights valiosos a partir de conversas e dados",
    ],
    features: [
      {
        title: "Chatbots Inteligentes",
        description: "Assistentes virtuais que entendem linguagem natural e fornecem respostas contextuais.",
      },
      {
        title: "Integração Omnichannel",
        description: "Presença consistente em site, WhatsApp, redes sociais e outros canais.",
      },
      {
        title: "Análise de Sentimento",
        description: "Compreensão do tom e emoção nas interações para respostas mais adequadas.",
      },
      {
        title: "Aprendizado Contínuo",
        description: "Sistemas que melhoram com o tempo, aprendendo com cada interação.",
      },
    ],
    technologies: ["OpenAI GPT", "Google Vertex AI", "TensorFlow", "PyTorch", "Langchain", "N8N"],
    caseStudies: [
      {
        title: "Assistente Virtual - Instituição Financeira",
        description: "Desenvolvimento de chatbot para atendimento ao cliente e orientação sobre produtos financeiros.",
        results: "Redução de 65% no tempo médio de atendimento e aumento de 40% na satisfação do cliente.",
      },
      {
        title: "Sistema de Análise de Feedback - Rede de Varejo",
        description: "Criação de solução para análise automática de comentários e avaliações de clientes.",
        results: "Identificação de 15 pontos críticos de melhoria que resultaram em aumento de 28% no NPS.",
      },
    ],
    image: "/images/inteligencia.png",
  },
  {
    id: "automacao",
    title: "Automação de Processos",
    shortDescription:
      "Eliminamos tarefas repetitivas com soluções automatizadas, aumentando a produtividade e a eficiência operacional da sua empresa.",
    fullDescription:
      "Transformamos processos manuais e repetitivos em fluxos automatizados que economizam tempo, reduzem erros e liberam sua equipe para focar no que realmente importa. Nossas soluções de automação são desenvolvidas para otimizar operações em diversos setores, desde RH e finanças até logística e atendimento ao cliente. Utilizamos tecnologias como RPA (Robotic Process Automation), workflows inteligentes e integrações via API para criar sistemas que trabalham incansavelmente, com precisão e eficiência superiores.",
    benefits: [
      "Redução drástica de tempo em tarefas operacionais",
      "Eliminação de erros humanos em processos críticos",
      "Maior consistência e padronização nas operações",
      "Economia significativa de recursos humanos e financeiros",
      "Escalabilidade para lidar com aumento de volume sem custos proporcionais",
    ],
    features: [
      {
        title: "Robôs de Automação (RPA)",
        description:
          "Bots que executam tarefas repetitivas em sistemas existentes sem necessidade de integrações complexas.",
      },
      {
        title: "Workflows Inteligentes",
        description: "Fluxos de trabalho automatizados que coordenam tarefas entre sistemas e departamentos.",
      },
      {
        title: "Processamento de Documentos",
        description: "Extração e processamento automático de dados de documentos físicos e digitais.",
      },
      {
        title: "Dashboards de Monitoramento",
        description: "Painéis em tempo real para acompanhar a performance dos processos automatizados.",
      },
    ],
    technologies: ["UiPath", "Power Automate", "Zapier", "Python", "Node.js", "OCR", "Machine Learning"],
    caseStudies: [
      {
        title: "Automação de Backoffice - Seguradora",
        description: "Implementação de RPA para processamento de apólices e sinistros em sistemas legados.",
        results: "Redução de 80% no tempo de processamento e economia anual de R$ 1,2 milhão em custos operacionais.",
      },
      {
        title: "Automação de Faturamento - Distribuidora",
        description: "Desenvolvimento de sistema para emissão automática de notas fiscais e controle de recebimentos.",
        results: "Redução de 95% em erros de faturamento e diminuição de 70% no tempo do ciclo financeiro.",
      },
    ],
    image: "/images/automation-mockup.webp",
  },
  {
    id: "consultoria",
    title: "Consultoria Estratégica em Tecnologia",
    shortDescription:
      "Ajudamos sua empresa a tomar decisões mais inteligentes com apoio técnico, estratégico e visão de futuro em transformação digital.",
    fullDescription:
      "Oferecemos orientação especializada para ajudar sua empresa a navegar pelo complexo cenário tecnológico atual e futuro. Nossa consultoria estratégica combina profundo conhecimento técnico com visão de negócios para identificar oportunidades, mitigar riscos e traçar um caminho claro para sua transformação digital. Trabalhamos em parceria com sua equipe para desenvolver estratégias personalizadas que alinham tecnologia aos objetivos do seu negócio, garantindo investimentos mais inteligentes e resultados mais impactantes.",
    benefits: [
      "Clareza na direção tecnológica da empresa",
      "Redução de riscos em investimentos de tecnologia",
      "Alinhamento entre TI e objetivos de negócio",
      "Identificação de oportunidades de inovação",
      "Preparação para tendências futuras e disrupções",
    ],
    features: [
      {
        title: "Diagnóstico Tecnológico",
        description: "Análise completa da infraestrutura, sistemas e processos atuais.",
      },
      {
        title: "Roadmap de Transformação Digital",
        description: "Planejamento estratégico com etapas claras para evolução tecnológica.",
      },
      {
        title: "Assessoria em Arquitetura",
        description: "Orientação especializada para decisões técnicas complexas e escolha de tecnologias.",
      },
      {
        title: "Mentoria para Equipes",
        description: "Capacitação e orientação para times internos de tecnologia.",
      },
    ],
    technologies: [
      "Análise de Dados",
      "Cloud Computing",
      "Arquitetura de Sistemas",
      "Segurança da Informação",
      "DevOps",
      "Metodologias Ágeis",
    ],
    caseStudies: [
      {
        title: "Transformação Digital - Indústria Tradicional",
        description: "Consultoria completa para modernização tecnológica de empresa com 50 anos de mercado.",
        results:
          "Redução de 35% em custos operacionais e aumento de 25% em produtividade após implementação do roadmap.",
      },
      {
        title: "Estratégia de Dados - Rede de Saúde",
        description: "Desenvolvimento de estratégia para coleta, armazenamento e análise de dados clínicos.",
        results: "Implementação de sistema preditivo que reduziu em 30% o tempo médio de internação.",
      },
    ],
    image:"/images/consultoria-phone.webp",
  },
  {
    id: "outros",
    title: "Outros Serviços Personalizados",
    shortDescription:
      "Precisa de algo exclusivo? Desenvolvemos soluções sob medida, combinando tecnologia, inovação e resultados concretos.",
    fullDescription:
      "Cada negócio é único, e muitas vezes as soluções padronizadas não atendem a desafios específicos. É por isso que oferecemos serviços personalizados que combinam diferentes áreas de nossa expertise para criar soluções verdadeiramente sob medida. Seja um projeto inovador que não se encaixa nas categorias tradicionais, uma integração complexa entre sistemas diversos ou uma necessidade muito específica do seu setor, nossa equipe multidisciplinar está preparada para desenvolver a solução ideal para seu caso particular.",
    benefits: [
      "Solução 100% alinhada às suas necessidades específicas",
      "Abordagem flexível que combina diferentes tecnologias e metodologias",
      "Atenção dedicada ao seu projeto único",
      "Adaptabilidade para acomodar requisitos em evolução",
      "Resultados direcionados aos seus objetivos particulares",
    ],
    features: [
      {
        title: "Análise de Necessidades Aprofundada",
        description: "Estudo detalhado do seu caso específico para identificar a melhor abordagem.",
      },
      {
        title: "Desenvolvimento Ágil e Iterativo",
        description: "Processo flexível que permite ajustes e refinamentos contínuos.",
      },
      {
        title: "Equipe Multidisciplinar Dedicada",
        description: "Profissionais de diferentes especialidades trabalhando em conjunto no seu projeto.",
      },
      {
        title: "Suporte Personalizado",
        description: "Acompanhamento e assistência adaptados às particularidades da sua solução.",
      },
    ],
    technologies: [
      "Tecnologias Emergentes",
      "IoT",
      "Blockchain",
      "Realidade Aumentada/Virtual",
      "Big Data",
      "Edge Computing",
    ],
    caseStudies: [
      {
        title: "Sistema de Rastreabilidade - Indústria Alimentícia",
        description: "Desenvolvimento de solução para rastreamento completo da cadeia produtiva com blockchain.",
        results: "Redução de 40% em recalls e aumento de 15% na confiança do consumidor após implementação.",
      },
      {
        title: "Plataforma de Treinamento com RA - Setor Industrial",
        description: "Criação de sistema de treinamento com realidade aumentada para operações complexas.",
        results: "Diminuição de 60% no tempo de capacitação e redução de 45% em acidentes operacionais.",
      },
    ],
    image:"/images/services.webp",
  },
]
