"use client"

import { useModal } from "@/app/components/modal-provider"
import { Rocket, Target, Lightbulb, TrendingUp } from "lucide-react"

export default function AboutVision() {
  const { openContactModal } = useModal()
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
            NOSSA <span className="text-emerald-400">VISÃO DE FUTURO</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Como pretendemos transformar o mercado digital nos próximos anos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg hover:bg-emerald-950/10 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="bg-emerald-950/20 p-4 rounded-lg">
                <h4 className="text-emerald-400 font-semibold mb-2">Nosso objetivo para 2026:</h4>
                <p className="text-gray-300">{item.goal}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black/30 border border-emerald-900/30 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Quer fazer parte dessa jornada?</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Estamos apenas no começo da nossa história e buscamos parceiros, clientes e talentos que compartilhem nossa
            visão e queiram construir o futuro digital conosco.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openContactModal} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 shadow-lg shadow-emerald-900/20">
              Fale Conosco
            </button>
            <a
              href="/trabalhe-conosco"
              className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Junte-se ao Time
            </a>
          </div>
        </div>
      </div>

      {/* Elemento de transição para o footer */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full">
        <svg
          className="relative block w-full h-12 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-black opacity-80"
          ></path>
        </svg>
      </div>
    </section>
  )
}

const visionItems = [
  {
    title: "Expansão Nacional",
    icon: <Rocket className="text-emerald-400 h-6 w-6" />,
    description:
      "Embora tenhamos começado em São Paulo, nossa visão é expandir nossa presença para as principais capitais do Brasil, levando nossa abordagem inovadora para empresas de todas as regiões.",
    goal: "Estabelecer escritórios em pelo menos 3 capitais brasileiras e construir uma rede de parceiros estratégicos em todo o país.",
  },
  {
    title: "Liderança em Inovação",
    icon: <Lightbulb className="text-emerald-400 h-6 w-6" />,
    description:
      "Queremos ser reconhecidos como referência em inovação tecnológica, desenvolvendo soluções proprietárias que estabeleçam novos padrões no mercado digital brasileiro.",
    goal: "Lançar pelo menos 2 produtos proprietários inovadores e estabelecer um laboratório de pesquisa e desenvolvimento.",
  },
  {
    title: "Impacto Social",
    icon: <Target className="text-emerald-400 h-6 w-6" />,
    description:
      "Acreditamos que a tecnologia deve ser uma força para o bem. Pretendemos desenvolver iniciativas que utilizem nossa expertise para resolver problemas sociais e ambientais relevantes.",
    goal: "Implementar um programa de responsabilidade social com foco em educação tecnológica e inclusão digital, impactando pelo menos 500 jovens.",
  },
  {
    title: "Crescimento Sustentável",
    icon: <TrendingUp className="text-emerald-400 h-6 w-6" />,
    description:
      "Buscamos um crescimento acelerado, mas sustentável, que nos permita manter nossa cultura, qualidade e valores enquanto expandimos nossa capacidade de atendimento e portfólio.",
    goal: "Triplicar nossa equipe e faturamento mantendo os altos índices de satisfação de clientes e colaboradores.",
  },
]
