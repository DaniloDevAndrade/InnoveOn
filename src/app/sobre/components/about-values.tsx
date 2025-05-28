"use client"

import { Lightbulb, Target, Heart, Zap, Shield, Rocket } from "lucide-react"

export default function AboutValues() {
  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            MISSÃO, <span className="text-emerald-400">VISÃO</span> E VALORES
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Os princípios que guiam nossa jornada e definem quem queremos ser
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-emerald-950/20 border border-emerald-900/30 p-8 rounded-lg hover:bg-emerald-950/30 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center mr-4">
                <Target className="text-emerald-400 h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Missão</h3>
            </div>
            <p className="text-gray-300">
              Transformar ideias em soluções digitais inovadoras que impulsionem o crescimento e o sucesso dos nossos
              clientes, contribuindo para um mundo mais conectado e eficiente.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-emerald-950/20 border border-emerald-900/30 p-8 rounded-lg hover:bg-emerald-950/30 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="text-emerald-400 h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Visão</h3>
            </div>
            <p className="text-gray-300">
              Ser reconhecida como referência em inovação tecnológica, desenvolvendo soluções que antecipam tendências e
              estabelecem novos padrões de excelência no mercado digital.
            </p>
          </div>

          {/* Propósito */}
          <div className="bg-emerald-950/20 border border-emerald-900/30 p-8 rounded-lg hover:bg-emerald-950/30 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center mr-4">
                <Heart className="text-emerald-400 h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Propósito</h3>
            </div>
            <p className="text-gray-300">
              Capacitar pessoas e organizações através da tecnologia, criando soluções que simplificam processos,
              conectam comunidades e abrem novas possibilidades para um futuro mais inteligente e sustentável.
            </p>
          </div>
        </div>

        {/* Valores */}
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          NOSSOS <span className="text-emerald-400">VALORES</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg hover:bg-emerald-950/10 transition-colors"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-emerald-900/30 rounded-full flex items-center justify-center mr-3">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-emerald-400">{value.title}</h4>
              </div>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const values = [
  {
    title: "Inovação Constante",
    description:
      "Buscamos continuamente novas ideias, tecnologias e abordagens para superar desafios e criar soluções diferenciadas.",
    icon: <Lightbulb className="text-emerald-400 h-5 w-5" />,
  },
  {
    title: "Excelência Técnica",
    description:
      "Comprometemo-nos com os mais altos padrões de qualidade em cada linha de código, design e estratégia que desenvolvemos.",
    icon: <Shield className="text-emerald-400 h-5 w-5" />,
  },
  {
    title: "Foco no Cliente",
    description:
      "Colocamos as necessidades e objetivos dos nossos clientes no centro de todas as nossas decisões e ações.",
    icon: <Target className="text-emerald-400 h-5 w-5" />,
  },
  {
    title: "Agilidade",
    description:
      "Adaptamo-nos rapidamente às mudanças, respondendo com eficiência aos desafios e oportunidades do mercado digital.",
    icon: <Zap className="text-emerald-400 h-5 w-5" />,
  },
  {
    title: "Colaboração",
    description:
      "Acreditamos no poder do trabalho em equipe, tanto internamente quanto em parceria com nossos clientes.",
    icon: <Heart className="text-emerald-400 h-5 w-5" />,
  },
  {
    title: "Impacto Positivo",
    description:
      "Buscamos criar soluções que não apenas resolvam problemas, mas também gerem valor e impacto positivo para a sociedade.",
    icon: <Rocket className="text-emerald-400 h-5 w-5" />,
  },
]
