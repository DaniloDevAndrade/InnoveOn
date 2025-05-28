"use client"

export default function AboutHistory() {
  return (
    <section className="pt-32 pb-16 relative">
      {/* Transição do topo (similar ao footer) */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent blur-md"></div>

      {/* Partículas flutuantes para transição (similar ao footer) */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <div
          className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
          style={{ left: "10%", top: "20%", animation: "float 8s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-emerald-400/20 rounded-full"
          style={{ left: "25%", top: "10%", animation: "float 12s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
          style={{ left: "40%", top: "30%", animation: "float 9s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-emerald-400/10 rounded-full"
          style={{ left: "65%", top: "15%", animation: "float 10s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
          style={{ left: "80%", top: "25%", animation: "float 11s ease-in-out infinite" }}
        ></div>
      </div>

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            NOSSA <span className="text-emerald-400">HISTÓRIA</span>
          </h2>

          <div className="space-y-12">
            {/* Timeline */}
            <div className="relative border-l-2 border-emerald-500/50 pl-8 ml-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-12 relative">
                  {/* Círculo na timeline */}
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-emerald-500 rounded-full"></div>

                  {/* Ano */}
                  <div className="text-emerald-400 text-xl font-bold mb-2">{event.year}</div>

                  {/* Título */}
                  <h3 className="text-white text-xl font-semibold mb-2">{event.title}</h3>

                  {/* Descrição */}
                  <p className="text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>

            {/* Texto adicional */}
            <div className="bg-black/30 border border-emerald-900/30 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                Embora sejamos uma startup recente, a InnoveON já nasce com uma visão clara e ambiciosa para o futuro do
                mercado digital. Nossa equipe combina décadas de experiência coletiva nos mais diversos setores da
                tecnologia.
              </p>
              <p className="text-gray-300">
                Nossa trajetória está apenas começando, mas já é marcada por inovação, aprendizado rápido e adaptação às
                tecnologias emergentes, sempre com o compromisso de oferecer o melhor em soluções digitais para nossos
                parceiros e clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Atualizar a história da empresa para refletir uma startup recente
const timelineEvents = [
  {
    year: "Janeiro 2025",
    title: "Fundação da InnoveON",
    description:
      "Nascemos com a missão de transformar o mercado digital brasileiro, oferecendo soluções tecnológicas acessíveis e de alta qualidade para empresas de todos os portes.",
  },
  {
    year: "Fevereiro 2025",
    title: "Formação da Equipe Inicial",
    description:
      "Reunimos um time de especialistas apaixonados por tecnologia e inovação, combinando experiências diversas para criar uma abordagem única no desenvolvimento de soluções digitais.",
  },
  {
    year: "Março 2025",
    title: "Desenvolvimento do Método INNOVE360®",
    description:
      "Criamos nossa metodologia proprietária que integra planejamento estratégico, desenvolvimento ágil e otimização contínua, garantindo resultados superiores para nossos clientes.",
  },
  {
    year: "Abril 2025",
    title: "Lançamento Oficial",
    description:
      "Apresentamos oficialmente a InnoveON ao mercado, com nosso portfólio inicial de serviços e soluções tecnológicas inovadoras.",
  },
  {
    year: "Maio 2025",
    title: "Primeiros Projetos",
    description:
      "Iniciamos nossos primeiros projetos com clientes visionários que acreditaram no potencial da nossa abordagem inovadora para transformação digital.",
  },
  {
    year: "Presente e Futuro",
    title: "Crescimento Contínuo",
    description:
      "Hoje, continuamos a expandir nossos horizontes, investindo em pesquisa e desenvolvimento de novas tecnologias para antecipar as necessidades do mercado digital.",
  },
]
