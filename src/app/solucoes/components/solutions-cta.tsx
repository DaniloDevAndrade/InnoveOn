"use client"

import { useModal } from "@/app/components/modal-provider"
import { Zap, CheckCircle, ArrowRight } from "lucide-react"

export default function SolutionsCTA() {
  const { openContactModal } = useModal()

  return (
    <section className="pt-16 pb-24 relative">
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

        {/* Gradiente de transição para o footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-emerald-950/30 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-black/50 border border-emerald-900/30 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Pronto para <span className="text-emerald-400">transformar</span> seu negócio?
              </h2>
              <p className="text-gray-300 mb-6">
                Combine nossas soluções para criar uma estratégia digital completa que impulsione seu crescimento. Nossa
                equipe está pronta para entender seus desafios e desenvolver a solução ideal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Consultoria personalizada</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Orçamento sem compromisso</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Suporte contínuo</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Soluções integradas</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-900/50 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-emerald-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Comece agora</h3>
              <p className="text-gray-300 text-sm mb-4">
                Entre em contato para uma análise gratuita das necessidades do seu negócio.
              </p>
              <button onClick={openContactModal}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg shadow-emerald-900/20 w-full flex items-center justify-center"
              >
                <span>Fale com especialistas</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
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
