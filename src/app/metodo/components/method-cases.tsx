"use client"

import { CheckCircle, XCircle } from "lucide-react"

export default function MethodComparison() {
  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-emerald-400">COMPARATIVO</span> DE ABORDAGENS
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Entenda como o método INNOVE360° se diferencia das abordagens tradicionais de desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Coluna do Método INNOVE360 */}
          <div className="bg-gradient-to-b from-emerald-950/50 to-black border border-emerald-900/50 rounded-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center mr-4">
                <span className="text-emerald-400 font-bold text-xl">360°</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-400">Método INNOVE360°</h3>
            </div>

            <ul className="space-y-4">
              {innoveMethods.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-emerald-950/30 rounded-lg">
              <h4 className="text-emerald-400 font-semibold mb-2">Resultado:</h4>
              <p className="text-gray-300">
                Soluções personalizadas, escaláveis e alinhadas ao negócio, com maior ROI e menor custo total de
                propriedade a longo prazo.
              </p>
            </div>
          </div>

          {/* Coluna das Abordagens Tradicionais */}
          <div className="bg-gradient-to-b from-gray-900/50 to-black border border-gray-800/50 rounded-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-400 font-bold text-xl">VS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-300">Abordagens Tradicionais</h3>
            </div>

            <ul className="space-y-4">
              {traditionalMethods.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-gray-900/30 rounded-lg">
              <h4 className="text-gray-400 font-semibold mb-2">Resultado:</h4>
              <p className="text-gray-300">
                Soluções genéricas com alto índice de retrabalho, atrasos frequentes, custos imprevisíveis e dificuldade
                de adaptação a mudanças.
              </p>
            </div>
          </div>
        </div>

        {/* Estatísticas de Sucesso */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const innoveMethods = [
  {
    title: "Imersão Completa no Negócio",
    description: "Entendimento profundo do contexto, objetivos e desafios específicos antes de propor soluções.",
  },
  {
    title: "Planejamento Estratégico Personalizado",
    description: "Roadmap detalhado com base nas necessidades reais e prioridades do negócio.",
  },
  {
    title: "Desenvolvimento Ágil e Transparente",
    description: "Entregas incrementais com feedback constante e adaptação contínua.",
  },
  {
    title: "Foco em Resultados Mensuráveis",
    description: "Métricas claras de sucesso definidas desde o início e monitoradas constantemente.",
  },
  {
    title: "Otimização Contínua Pós-Lançamento",
    description: "Evolução constante da solução com base em dados reais de uso e performance.",
  },
]

const traditionalMethods = [
  {
    title: "Abordagem Genérica",
    description: "Soluções padronizadas sem considerar as particularidades de cada negócio.",
  },
  {
    title: "Planejamento Rígido e Burocrático",
    description: "Documentação extensa e pouca flexibilidade para mudanças durante o processo.",
  },
  {
    title: "Desenvolvimento em Cascata",
    description: "Entregas apenas ao final do projeto, sem validação intermediária com usuários reais.",
  },
  {
    title: "Foco em Funcionalidades, não em Valor",
    description: "Priorização baseada em complexidade técnica, não no impacto para o negócio.",
  },
  {
    title: "Suporte Limitado Pós-Lançamento",
    description: "Pouca ou nenhuma evolução da solução após a entrega inicial.",
  },
]

const statistics = [
  {
    value: "98%",
    label: "Taxa de Sucesso",
    description: "Dos projetos entregues dentro do prazo e orçamento previstos",
  },
  {
    value: "72%",
    label: "Redução de Custos",
    description: "Em comparação com métodos tradicionais de desenvolvimento",
  },
  {
    value: "3.2x",
    label: "Maior ROI",
    description: "Retorno sobre investimento em comparação com a média do mercado",
  },
]
