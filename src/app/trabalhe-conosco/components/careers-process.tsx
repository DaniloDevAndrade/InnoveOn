"use client"

import { CheckCircle, Clock, Users, FileText, Lightbulb, Award } from "lucide-react"

export default function CareersProcess() {
  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            NOSSO <span className="text-emerald-400">PROCESSO SELETIVO</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Conheça as etapas do nosso processo de seleção transparente e focado em encontrar os melhores talentos
          </p>
        </div>

        {/* Timeline do processo seletivo */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha vertical da timeline */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-emerald-900/50"></div>

            {/* Etapas do processo */}
            {hiringSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Círculo na timeline */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>

                {/* Conteúdo da etapa */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                >
                  <div className="bg-black/50 border border-emerald-900/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div
                        className={`w-10 h-10 bg-emerald-900/30 rounded-full flex items-center justify-center ${
                          index % 2 === 0 ? "md:order-2 md:ml-3" : "mr-3"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <div className="flex items-center text-sm text-emerald-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{step.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dicas para candidatos */}
          <div className="mt-16 bg-black/50 border border-emerald-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Lightbulb className="text-emerald-400 h-5 w-5 mr-2" />
              Dicas para se destacar no processo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-emerald-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const hiringSteps = [
  {
    title: "Inscrição",
    description:
      "Envie seu currículo e preencha nosso formulário de candidatura. Valorizamos não apenas sua experiência técnica, mas também sua trajetória, projetos pessoais e motivações.",
    icon: <FileText className="text-emerald-400 h-5 w-5" />,
    timeframe: "5-10 minutos",
  },
  {
    title: "Triagem Inicial",
    description:
      "Nossa equipe de Pessoas & Cultura analisa cuidadosamente cada candidatura para identificar alinhamento com nossos valores e requisitos técnicos da vaga.",
    icon: <CheckCircle className="text-emerald-400 h-5 w-5" />,
    timeframe: "1-3 dias úteis",
  },
  {
    title: "Entrevista com RH",
    description:
      "Uma conversa para conhecermos melhor sua trajetória, expectativas e ambições. Também é o momento para você conhecer mais sobre a InnoveON e tirar suas dúvidas.",
    icon: <Users className="text-emerald-400 h-5 w-5" />,
    timeframe: "30-45 minutos",
  },
  {
    title: "Desafio Técnico",
    description:
      "Dependendo da vaga, você receberá um desafio prático para demonstrar suas habilidades técnicas. Valorizamos não apenas o resultado, mas também seu processo de pensamento e organização.",
    icon: <Lightbulb className="text-emerald-400 h-5 w-5" />,
    timeframe: "3-5 dias para entrega",
  },
  {
    title: "Entrevista Técnica",
    description:
      "Conversa com nossos especialistas técnicos para discutir sua experiência, conhecimentos e o desafio realizado. Uma oportunidade para mostrar como você aborda problemas reais.",
    icon: <Users className="text-emerald-400 h-5 w-5" />,
    timeframe: "45-60 minutos",
  },
  {
    title: "Entrevista Final",
    description:
      "Encontro com líderes da área para alinhar expectativas, discutir aspectos culturais e confirmar o fit com o time e os projetos. Também é sua chance de fazer perguntas mais estratégicas.",
    icon: <Award className="text-emerald-400 h-5 w-5" />,
    timeframe: "30-45 minutos",
  },
]

const tips = [
  "Pesquise sobre a InnoveON e nossos projetos antes das entrevistas",
  "Prepare exemplos concretos de desafios que você superou em experiências anteriores",
  "No desafio técnico, priorize código limpo e bem documentado",
  "Seja autêntico e transparente sobre suas experiências e expectativas",
  "Demonstre como seus valores pessoais se alinham com nossa cultura",
  "Prepare perguntas relevantes para fazer aos entrevistadores",
  "Mostre sua paixão por tecnologia e aprendizado contínuo",
  "Compartilhe projetos pessoais ou contribuições para a comunidade tech",
]
