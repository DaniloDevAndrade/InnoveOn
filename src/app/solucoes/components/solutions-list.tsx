"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { solutions } from "./solutions"

export default function SolutionsList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 relative" id="solucoes">
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
            SOLUÇÕES <span className="text-emerald-400">COMPLETAS</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore nosso portfólio de serviços tecnológicos projetados para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="bg-black/50 border border-emerald-900/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{solution.shortDescription}</p>
                <Link
                  href={`#${solution.id}`}
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Saiba mais</span>
                  <ChevronRight
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${hoveredIndex === index ? "translate-x-1" : ""}`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
