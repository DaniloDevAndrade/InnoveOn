"use client"

export default function CareersIntro() {
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
        <div className="flex flex-col items-center gap-12">
          <div className="w-full max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              POR QUE <span className="text-emerald-400">TRABALHAR</span> NA INNOVEON?
            </h2>
            <p className="text-gray-300 mb-6">
              Somos uma empresa de tecnologia que valoriza a inovação, o crescimento pessoal e profissional, e o
              equilíbrio entre vida e trabalho. Acreditamos que o sucesso vem de um ambiente onde as pessoas se sentem
              valorizadas, desafiadas e inspiradas a dar o melhor de si.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {whyJoinUs.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-900/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-black/30 border border-emerald-900/30 p-4 rounded-lg">
              <p className="text-emerald-400 font-medium mb-2">Nossa Missão de Talentos:</p>
              <p className="text-gray-300 italic">
                "Atrair e desenvolver os melhores talentos, criando um ambiente onde a criatividade, a colaboração e a
                excelência técnica se unem para transformar o futuro digital."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const whyJoinUs = [
  {
    title: "Inovação Constante",
    description: "Trabalhamos com as tecnologias mais recentes e incentivamos a experimentação e novas ideias.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-emerald-400"
      >
        <path d="M12 2v8M12 18v4M4.93 10.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 10.93l-1.41 1.41"></path>
      </svg>
    ),
  },
  {
    title: "Crescimento Profissional",
    description: "Oferecemos planos de carreira claros e investimos continuamente no desenvolvimento da nossa equipe.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-emerald-400"
      >
        <path d="M2 20h.01M7 20v-4"></path>
        <path d="M12 20v-8"></path>
        <path d="M17 20V8"></path>
        <path d="M22 4v16"></path>
      </svg>
    ),
  },
  {
    title: "Ambiente Colaborativo",
    description: "Valorizamos o trabalho em equipe, a troca de conhecimentos e a comunicação aberta.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-emerald-400"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Flexibilidade",
    description:
      "Oferecemos modelos de trabalho flexíveis que respeitam o equilíbrio entre vida pessoal e profissional.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-emerald-400"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
]
