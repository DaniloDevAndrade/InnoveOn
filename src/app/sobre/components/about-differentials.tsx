"use client"

import { CheckCircle, Clock, Users, Zap, Shield, Lightbulb } from "lucide-react"

export default function AboutDifferentials() {
  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            NOSSOS <span className="text-emerald-400">DIFERENCIAIS</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">O que nos torna únicos no mercado de tecnologia e inovação</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="bg-emerald-950/10 border border-emerald-900/30 p-6 rounded-lg hover:bg-emerald-950/20 transition-colors"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  {differential.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{differential.title}</h3>
                  <p className="text-gray-300">{differential.description}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-16">
                {differential.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-emerald-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const differentials = [
  {
    title: "Método INNOVE360®",
    description: "Nossa metodologia proprietária que garante resultados superiores em cada projeto:",
    icon: <Lightbulb className="text-emerald-400 h-6 w-6" />,
    points: [
      "Abordagem holística que integra estratégia, design e desenvolvimento",
      "Ciclos de feedback contínuos para otimização constante",
      "Foco em resultados mensuráveis e ROI para o cliente",
    ],
  },
  {
    title: "Equipe Multidisciplinar",
    description: "Profissionais especializados trabalhando de forma integrada:",
    icon: <Users className="text-emerald-400 h-6 w-6" />,
    points: [
      "Especialistas em diversas áreas da tecnologia e design",
      "Formação contínua e atualização constante",
      "Cultura colaborativa que potencializa a inovação",
    ],
  },
  {
    title: "Agilidade e Eficiência",
    description: "Processos otimizados para entregas rápidas sem comprometer a qualidade:",
    icon: <Zap className="text-emerald-400 h-6 w-6" />,
    points: [
      "Sprints curtos com entregas incrementais de valor",
      "Automação de processos repetitivos",
      "Comunicação transparente e eficiente",
    ],
  },
  {
    title: "Suporte Contínuo",
    description: "Acompanhamento pós-entrega para garantir o sucesso a longo prazo:",
    icon: <Clock className="text-emerald-400 h-6 w-6" />,
    points: [
      "Monitoramento proativo de performance",
      "Atualizações regulares de segurança e funcionalidades",
      "Consultoria estratégica para evolução contínua",
    ],
  },
  {
    title: "Segurança e Conformidade",
    description: "Compromisso com os mais altos padrões de segurança digital:",
    icon: <Shield className="text-emerald-400 h-6 w-6" />,
    points: [
      "Implementação de práticas de segurança desde o design",
      "Conformidade com LGPD e outras regulamentações",
      "Auditorias regulares e testes de penetração",
    ],
  },
  {
    title: "Tecnologia de Ponta",
    description: "Utilizamos as ferramentas e frameworks mais avançados do mercado:",
    icon: <Zap className="text-emerald-400 h-6 w-6" />,
    points: [
      "Stack tecnológico moderno e constantemente atualizado",
      "Integração de IA e automação em nossas soluções",
      "Infraestrutura escalável e de alta performance",
    ],
  },
]

const stats = [
  { value: "2025", label: "Ano de Fundação" },
  { value: "10+", label: "Projetos em Desenvolvimento" },
  { value: "100%", label: "Foco em Inovação" },
  { value: "15+", label: "Profissionais Especializados" },
]
