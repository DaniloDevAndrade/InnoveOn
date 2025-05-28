"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, Code, BarChart } from "lucide-react"
import { Solution } from "./solutions"
import { useModal } from "@/app/components/modal-provider"

interface SolutionDetailProps {
  solution: Solution
  isEven: boolean
}

export default function SolutionDetail({ solution, isEven }: SolutionDetailProps) {
  const { openContactModal } = useModal()
  const [activeTab, setActiveTab] = useState<"features" | "technologies" | "cases">("features")

  return (
    <section className="py-16 relative" id={solution.id}>
      <div className="absolute inset-0 z-0">
        {/* Gradiente de fundo base */}
        <div
          className={`absolute inset-0 ${
            isEven
              ? "bg-gradient-to-b from-black via-black to-emerald-950/30"
              : "bg-gradient-to-b from-emerald-950/30 via-black to-black"
          }`}
        ></div>

        {/* Grade de linhas horizontais */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:100%_40px] opacity-50"></div>

        {/* Grade de linhas verticais */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:40px_100%] opacity-50"></div>

        {/* Pontos de interseção (como nós de circuito) */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.4)_1.5px,transparent_1.5px)] bg-[size:40px_40px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}>
          {/* Imagem */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-500/20 rounded-xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl border border-emerald-500/30">
                {solution.image ? (
                  ["consultoria", "aplicativos"].includes(solution.id) ? (
                    <div className="flex justify-center py-4 bg-black/40">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        width={300}
                        height={600}
                        className="h-auto max-h-90 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  )
                ) : (
                  <div className="w-full h-64 bg-emerald-900/20 flex items-center justify-center">
                    <span className="text-emerald-400">Imagem da solução</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{solution.title}</h2>
            <p className="text-gray-300 mb-6">{solution.fullDescription}</p>

            {/* Benefícios */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-3">Benefícios</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-emerald-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tabs */}
            <div className="border-b border-emerald-900/50 mb-6">
              <div className="flex space-x-4">
                <button
                  className={`py-2 px-4 font-medium ${
                    activeTab === "features"
                      ? "text-emerald-400 border-b-2 border-emerald-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("features")}
                >
                  Recursos
                </button>
                <button
                  className={`py-2 px-4 font-medium ${
                    activeTab === "technologies"
                      ? "text-emerald-400 border-b-2 border-emerald-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("technologies")}
                >
                  Tecnologias
                </button>
                {/* <button
                  className={`py-2 px-4 font-medium ${
                    activeTab === "cases"
                      ? "text-emerald-400 border-b-2 border-emerald-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("cases")}
                >
                  Casos de Sucesso
                </button> */}
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {/* Features */}
              {activeTab === "features" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="bg-black/30 border border-emerald-900/30 p-4 rounded-lg">
                      <h4 className="text-emerald-400 font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              {activeTab === "technologies" && (
                <div className="flex flex-wrap gap-3">
                  {solution.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-emerald-900/20 border border-emerald-900/30 px-4 py-2 rounded-full text-emerald-400"
                    >
                      <div className="flex items-center">
                        <Code size={16} className="mr-2" />
                        <span>{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Case Studies
              {activeTab === "cases" && (
                <div className="space-y-4">
                  {solution.caseStudies.map((caseStudy, index) => (
                    <div key={index} className="bg-black/30 border border-emerald-900/30 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">{caseStudy.title}</h4>
                      <p className="text-gray-300 text-sm mb-3">{caseStudy.description}</p>
                      <div className="flex items-center">
                        <BarChart size={16} className="text-emerald-400 mr-2" />
                        <span className="text-emerald-400 text-sm font-medium">Resultados:</span>
                        <span className="text-gray-300 text-sm ml-2">{caseStudy.results}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )} */}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button onClick={openContactModal} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-lg shadow-emerald-900/20">
                Solicitar proposta para {solution.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
