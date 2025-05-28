"use client"

import { useState } from "react"
import { Lightbulb, Target, Code, BarChart } from "lucide-react"

export default function MethodSteps() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            AS <span className="text-emerald-400">4 ETAPAS</span> DO MÉTODO
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Um processo completo e integrado para transformar ideias em soluções de sucesso
          </p>
        </div>

        {/* Círculo interativo no centro com as 4 etapas */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Círculo central */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-emerald-950/30 rounded-full mx-auto relative border border-emerald-900/50">
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-500/30"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-emerald-400 font-bold text-lg">INNOVE</span>
              <span className="text-emerald-400 font-bold text-5xl">360°</span>
            </div>

            {/* Etapas ao redor do círculo */}
            {methodSteps.map((step, index) => {
              // Calcular a posição ao redor do círculo
              const angle = ((Math.PI * 2) / methodSteps.length) * index - Math.PI / 2
              const radius = 160 // Distância do centro
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <button
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index
                      ? "bg-emerald-600 text-white scale-110 shadow-lg shadow-emerald-900/30"
                      : "bg-emerald-950/50 text-emerald-400 hover:bg-emerald-950/80"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  onClick={() => setActiveStep(index)}
                  aria-label={`Etapa ${index + 1}: ${step.title}`}
                >
                  {step.icon}
                </button>
              )
            })}

            {/* Linhas conectoras */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              {methodSteps.map((_, index) => {
                const nextIndex = (index + 1) % methodSteps.length
                const angle1 = ((Math.PI * 2) / methodSteps.length) * index - Math.PI / 2
                const angle2 = ((Math.PI * 2) / methodSteps.length) * nextIndex - Math.PI / 2
                const radius = 160
                const x1 = Math.cos(angle1) * radius + 160
                const y1 = Math.sin(angle1) * radius + 160
                const x2 = Math.cos(angle2) * radius + 160
                const y2 = Math.sin(angle2) * radius + 160

                return (
                  <path
                    key={index}
                    d={`M${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2}`}
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                )
              })}
            </svg>
          </div>

          {/* Detalhes da etapa selecionada */}
          <div className="mt-16 bg-black/50 border border-emerald-900/30 p-8 rounded-lg transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center mr-4">
                {methodSteps[activeStep].icon}
              </div>
              <h3 className="text-2xl font-bold text-white">
                Etapa {activeStep + 1}: {methodSteps[activeStep].title}
              </h3>
            </div>

            <p className="text-gray-300 mb-6">{methodSteps[activeStep].description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {methodSteps[activeStep].keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-900/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-emerald-950/20 rounded-lg">
              <h4 className="text-emerald-400 font-semibold mb-2">Resultado desta etapa:</h4>
              <p className="text-gray-300">{methodSteps[activeStep].outcome}</p>
            </div>
          </div>
        </div>

        {/* Navegação entre etapas (mobile) */}
        <div className="flex justify-center space-x-2 md:hidden">
          {methodSteps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeStep === index ? "bg-emerald-400" : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => setActiveStep(index)}
              aria-label={`Ir para etapa ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const methodSteps = [
  {
    title: "Imersão",
    icon: <Lightbulb className="h-6 w-6" />,
    description:
      "A primeira etapa do INNOVE360® é dedicada a entender profundamente seu negócio, desafios e objetivos. Realizamos uma imersão completa no seu universo corporativo, analisando o mercado, a concorrência e, principalmente, as necessidades reais que precisam ser atendidas.",
    keyPoints: [
      "Entrevistas aprofundadas com stakeholders e usuários finais",
      "Análise de mercado e benchmarking competitivo",
      "Mapeamento de processos e identificação de pontos de dor",
      "Definição clara de objetivos e métricas de sucesso",
    ],
    outcome:
      "Um diagnóstico completo e documentado que serve como base sólida para as próximas etapas, garantindo que a solução desenvolvida esteja perfeitamente alinhada às necessidades reais do negócio.",
  },
  {
    title: "Planejamento Estratégico",
    icon: <Target className="h-6 w-6" />,
    description:
      "Com base nos insights da fase de imersão, desenvolvemos um planejamento estratégico detalhado que mapeia todo o caminho a ser percorrido. Nesta etapa, definimos a arquitetura da solução, escolhemos as tecnologias mais adequadas e estabelecemos o cronograma de desenvolvimento.",
    keyPoints: [
      "Definição da arquitetura técnica e escolha de tecnologias",
      "Criação de wireframes e protótipos interativos",
      "Elaboração de roadmap de desenvolvimento com milestones claros",
      "Planejamento de recursos e definição de orçamento detalhado",
    ],
    outcome:
      "Um plano estratégico completo que serve como guia para todo o projeto, minimizando riscos e garantindo que todos os aspectos técnicos, de design e de negócio estejam alinhados antes do início do desenvolvimento.",
  },
  {
    title: "Desenvolvimento Inteligente",
    icon: <Code className="h-6 w-6" />,
    description:
      "Esta é a fase de execução, onde transformamos o planejamento em realidade. Utilizamos metodologias ágeis para garantir entregas incrementais de valor, mantendo total transparência e permitindo ajustes ao longo do caminho. Nosso desenvolvimento é guiado por padrões rigorosos de qualidade e performance.",
    keyPoints: [
      "Desenvolvimento iterativo com sprints semanais ou quinzenais",
      "Testes contínuos de qualidade, segurança e performance",
      "Reuniões regulares de alinhamento e demonstração de progresso",
      "Documentação técnica completa e transferência de conhecimento",
    ],
    outcome:
      "Uma solução tecnológica robusta, segura e escalável, desenvolvida com as melhores práticas do mercado e totalmente alinhada aos objetivos estratégicos definidos nas etapas anteriores.",
  },
  {
    title: "Otimização Contínua",
    icon: <BarChart className="h-6 w-6" />,
    description:
      "O lançamento da solução não é o fim do processo, mas o início de um ciclo de melhoria contínua. Nesta etapa, monitoramos ativamente o desempenho, coletamos feedback dos usuários e implementamos melhorias incrementais para garantir que a solução continue evoluindo e gerando resultados crescentes.",
    keyPoints: [
      "Monitoramento contínuo de métricas de performance e engajamento",
      "Coleta e análise de feedback de usuários reais",
      "Implementação de melhorias incrementais baseadas em dados",
      "Adaptação ágil a mudanças no mercado ou nos requisitos do negócio",
    ],
    outcome:
      "Uma solução viva que evolui constantemente, maximizando o retorno sobre o investimento ao longo do tempo e se adaptando às mudanças do mercado e às necessidades do negócio.",
  },
]
