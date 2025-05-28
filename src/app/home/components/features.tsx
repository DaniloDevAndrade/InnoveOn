
"use client"

import { useState, useRef, type TouchEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useModal } from "@/app/components/modal-provider"

export default function Features() {
  const { openContactModal } = useModal()
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50 // Distância mínima para considerar um swipe

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === solutions.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? solutions.length - 1 : prev - 1))
  }

  // Funções para lidar com eventos de toque
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    // Resetar valores
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section className="pt-6 pb-0 relative">
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
        <div className="mb-2 pt-0 pb-2 w-full mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
            NOSSOS <span className="text-emerald-400">SERVIÇOS</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Descubra as <span className="text-emerald-400">soluções</span> personalizadas que estão{" "}
            <span className="text-emerald-400">transformando</span> o futuro digital
          </p>
        </div>

        <div className="relative py-0 rounded-2xl">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex">
                {solutions.map((solution, index) => (
                  <div key={index} className="min-w-full">
                    <div className="pt-4 pb-4 px-6 flex flex-col md:flex-row relative overflow-hidden">
                      {/* Efeito de grid tecnológico */}
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                      {/* Linhas diagonais sutis */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.05)_25%,transparent_25%,transparent_50%,rgba(16,185,129,0.05)_50%,rgba(16,185,129,0.05)_75%,transparent_75%,transparent)] bg-[size:8px_8px] opacity-10"></div>

                      <div className="md:w-1/2 pr-4 relative z-10 flex flex-col justify-center -mt-2 md:-mt-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2 text-center md:text-left">
                          {solution.title}
                        </h3>
                        <p className="text-gray-300 text-center md:text-left">{solution.description}</p>
                      </div>
                      <div className="md:w-1/2 mt-4 md:mt-0 flex items-center justify-center relative z-10">
                        {solution.title === "Desenvolvimento de Sites" ? (
                          <div className="w-full flex justify-center">
                            <Image
                              src="/images/notbook-dev.webp"
                              alt="Exemplo de site responsivo"
                              width={600}
                              height={400}
                              className="rounded-lg shadow-lg object-contain"
                            />
                          </div>
                        ) : solution.title === "Desenvolvimento de Sistemas" ? (
                          <div className="w-full flex justify-center">
                            <Image
                              src="/images/notbook-systems.webp"
                              alt="Dashboard CRM"
                              width={600}
                              height={400}
                              className="rounded-lg shadow-lg object-contain"
                            />
                          </div>
                        ) : solution.title === "Desenvolvimento de Aplicativos" ? (
                          <div className="w-full h-[400px] flex justify-center items-center">
                            <div className="h-[400px] flex items-center">
                              <Image
                                src="/images/phone-innoveon.webp"
                                alt="Aplicativo móvel"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-lg object-contain h-[400px]"
                              />
                            </div>
                          </div>
                        ) : solution.title === "Desenvolvimento de E-commerce" ? (
                          <div className="w-full h-[400px] flex justify-center">
                            <div className="h-[400px] flex items-center">
                              <Image
                                src="/images/ecommerce-dark-mockup.webp"
                                alt="Loja virtual responsiva em tema escuro"
                                width={700}
                                height={500}
                                className="rounded-lg shadow-lg object-contain h-[500px]"
                              />
                            </div>
                          </div>
                        ) : solution.title === "Agentes de Inteligência Artificial" ? (
                          <div className="w-full h-[400px] flex justify-center">
                            <div className="h-[400px] flex items-center">
                              <Image
                                src="/images/inteligencia.png"
                                alt="Agente de inteligência artificial"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg object-contain h-[400px]"
                              />
                            </div>
                          </div>
                        ) : solution.title === "Automação de Processos" ? (
                          <div className="w-full h-[400px] flex justify-center">
                            <div className="h-[400px] flex items-center">
                              <Image
                                src="/images/automation-mockup.webp"
                                alt="Automação de processos"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg object-contain h-[400px]"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-[400px] flex justify-center">
                            <div className="w-[600px] h-[400px] bg-emerald-900/20 rounded-lg flex items-center justify-center text-emerald-400">
                              <span className="text-xs">Imagem</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center -mt-10 space-x-4 relative z-20">
            <button
              onClick={prevSlide}
              className="text-emerald-400 hover:text-emerald-300 transition-colors p-1 bg-black/30 rounded-full"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-emerald-400" : "bg-gray-600"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="text-emerald-400 hover:text-emerald-300 transition-colors p-1 bg-black/30 rounded-full"
              aria-label="Próximo slide"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4 relative z-20 pb-4">
            <button onClick={openContactModal} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 shadow-lg shadow-emerald-900/20">
              Solicite uma Proposta
            </button>
            <Link href='/solucoes' >
              <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-950/50 font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                Conheça Mais Soluções
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const solutions = [
  {
    title: "Desenvolvimento de Sites",
    description:
      "Desenvolvemos sites modernos, rápidos e responsivos, com design estratégico e performance otimizada para atrair e converter clientes.",
  },
  {
    title: "Desenvolvimento de Aplicativos",
    description:
      "Criamos apps nativos ou híbridos que aproximam sua marca do seu público, com foco em performance, usabilidade e inovação.",
  },
  {
    title: "Desenvolvimento de Sistemas",
    description:
      "Projetamos e desenvolvemos sistemas personalizados para gestão, controle e automação de processos, totalmente adaptados às necessidades do seu negócio.",
  },
  {
    title: "Desenvolvimento de E-commerce",
    description:
      "Montamos lojas virtuais completas, com foco em conversão, segurança e escalabilidade. Integrações com meios de pagamento, frete e sistemas de gestão.",
  },
  {
    title: "Agentes de Inteligência Artificial",
    description:
      "Desenvolvemos agentes de IA capazes de automatizar atendimentos, responder clientes em tempo real e otimizar sua operação com inteligência.",
  },
  {
    title: "Automação de Processos",
    description:
      "Eliminamos tarefas repetitivas com soluções automatizadas, aumentando a produtividade e a eficiência operacional da sua empresa.",
  }
]
