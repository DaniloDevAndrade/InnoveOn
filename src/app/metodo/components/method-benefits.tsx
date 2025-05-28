"use client"

import { CheckCircle, Clock, Target, Zap, Shield, TrendingUp } from "lucide-react"

export default function MethodBenefits() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0">
        {/* Gradiente de fundo base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/90 to-emerald-950/80"></div>

        {/* Grade de linhas horizontais */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:100%_40px] opacity-50"></div>

        {/* Grade de linhas verticais */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:40px_100%] opacity-50"></div>

        {/* Linhas diagonais tecnológicas */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_calc(50%_-_1.5px),rgba(16,185,129,0.15)_50%,transparent_calc(50%_+_1.5px))] bg-[size:100px_100px] opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_calc(50%_-_1.5px),rgba(16,185,129,0.15)_50%,transparent_calc(50%_+_1.5px))] bg-[size:80px_80px] opacity-40"></div>

        {/* Pontos de interseção (como nós de circuito) */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.4)_1.5px,transparent_1.5px)] bg-[size:40px_40px] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.5)_2px,transparent_2px)] bg-[size:120px_120px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            BENEFÍCIOS DO <span className="text-emerald-400">INNOVE360</span>®
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Por que nosso método proprietário gera resultados superiores para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg hover:bg-emerald-950/10 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{benefit.description}</p>
              <div className="mt-auto">
                <div className="flex items-center text-emerald-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">{benefit.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparativo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            COMPARATIVO: <span className="text-emerald-400">INNOVE360</span>® vs. MÉTODOS TRADICIONAIS
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-gray-300 border-b border-emerald-900/30">Aspecto</th>
                  <th className="p-4 text-left text-emerald-400 border-b border-emerald-900/30">INNOVE360®</th>
                  <th className="p-4 text-left text-gray-400 border-b border-emerald-900/30">Métodos Tradicionais</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="border-b border-emerald-900/30">
                    <td className="p-4 text-white">{comparison.aspect}</td>
                    <td className="p-4 text-emerald-400">{comparison.innove360}</td>
                    <td className="p-4 text-gray-400">{comparison.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    title: "Redução de Riscos",
    description:
      "Nossa abordagem de imersão profunda e planejamento estratégico minimiza surpresas e garante que todos os riscos sejam identificados e mitigados desde o início.",
    icon: <Shield className="text-emerald-400 h-6 w-6" />,
    result: "Projetos entregues no prazo e dentro do orçamento",
  },
  {
    title: "Alinhamento Estratégico",
    description:
      "Cada decisão técnica é tomada com base nos objetivos de negócio, garantindo que a solução desenvolvida realmente impulsione os resultados que importam para você.",
    icon: <Target className="text-emerald-400 h-6 w-6" />,
    result: "Soluções que geram impacto real no negócio",
  },
  {
    title: "Time-to-Market Acelerado",
    description:
      "Nossa metodologia ágil com entregas incrementais permite que você comece a colher os benefícios da solução mais rapidamente, sem comprometer a qualidade.",
    icon: <Clock className="text-emerald-400 h-6 w-6" />,
    result: "Lançamento mais rápido com qualidade superior",
  },
  {
    title: "Escalabilidade Garantida",
    description:
      "Projetamos soluções pensando no futuro, com arquiteturas que permitem crescimento e adaptação às mudanças do mercado e do seu negócio.",
    icon: <TrendingUp className="text-emerald-400 h-6 w-6" />,
    result: "Sistemas que crescem com seu negócio",
  },
  {
    title: "Experiência do Usuário Superior",
    description:
      "Nosso foco em entender profundamente os usuários finais resulta em interfaces intuitivas e experiências que encantam e fidelizam.",
    icon: <Zap className="text-emerald-400 h-6 w-6" />,
    result: "Maior engajamento e satisfação dos usuários",
  },
  {
    title: "ROI Maximizado",
    description:
      "A combinação de desenvolvimento eficiente, qualidade superior e otimização contínua garante o melhor retorno possível sobre seu investimento.",
    icon: <TrendingUp className="text-emerald-400 h-6 w-6" />,
    result: "Maior valor gerado por cada real investido",
  },
]

const comparisons = [
  {
    aspect: "Foco",
    innove360: "Resultados de negócio mensuráveis",
    traditional: "Entrega técnica e cumprimento de escopo",
  },
  {
    aspect: "Planejamento",
    innove360: "Estratégico e alinhado aos objetivos de negócio",
    traditional: "Técnico e baseado apenas em requisitos funcionais",
  },
  {
    aspect: "Flexibilidade",
    innove360: "Adaptação ágil a mudanças e novas necessidades",
    traditional: "Resistência a mudanças após definição inicial",
  },
  {
    aspect: "Envolvimento do Cliente",
    innove360: "Parceria contínua em todas as etapas",
    traditional: "Limitado a aprovações em marcos específicos",
  },
  {
    aspect: "Pós-lançamento",
    innove360: "Otimização contínua baseada em dados reais",
    traditional: "Suporte básico e correções de bugs",
  },
]
