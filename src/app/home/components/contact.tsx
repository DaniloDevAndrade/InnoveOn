"use client"

import { useModal } from "@/app/components/modal-provider"

export default function Contact() {
  const { openContactModal } = useModal()

  return (
    <section className="pt-10 pb-24 relative">
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
      <div className="container mx-auto px-8 md:px-12 relative z-10 max-w-6xl">
        {/* Conteúdo original do Contact */}
        <div className="py-5"></div>

        {/* Título centralizado - Movido de empty-section.tsx - Agora posicionado mais abaixo */}
        <div className="flex flex-col items-center mb-8 pt-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
            SUA EMPRESA MERECE ESTAR <span className="text-emerald-400">ON</span>
          </h2>
          <p className="text-gray-300 text-center mt-4 max-w-5xl mx-auto mb-6 py-4 leading-relaxed text-lg">
            Transforme sua presença digital com soluções tecnológicas que impulsionam resultados reais. Nossos
            especialistas estão prontos para elevar seu negócio com inovação e tecnologia de ponta.
          </p>
          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg shadow-emerald-900/20"
            onClick={openContactModal}
          >
            Comece sua transformação digital
          </button>
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
