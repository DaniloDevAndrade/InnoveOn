"use client"

export default function MethodIntro() {
  return (
    <section className="py-16 relative" id="metodo">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              O QUE É O <span className="text-emerald-400">INNOVE360</span>®?
            </h2>
          </div>

          <div className="bg-black/30 border border-emerald-900/30 p-8 rounded-lg">
            <p className="text-gray-300 mb-6 text-lg">
              O INNOVE360® é mais que uma metodologia — é uma filosofia de trabalho que permeia todas as nossas
              interações e entregas. Desenvolvido com base em anos de experiência e constante aprimoramento, este método
              proprietário combina o melhor das práticas ágeis com uma visão estratégica de negócios e foco em
              resultados mensuráveis.
            </p>

            <p className="text-gray-300 mb-6 text-lg">
              Diferente de abordagens tradicionais que tratam projetos digitais como meras entregas técnicas, o
              INNOVE360® considera cada solução como parte integrante da estratégia de negócio do cliente. Isso
              significa que, desde o primeiro contato até o suporte contínuo pós-lançamento, cada decisão é tomada com
              base no impacto real que gerará para seu negócio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-950/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Por que "360"?</h3>
                <p className="text-gray-300">
                  O nome INNOVE360® reflete nossa abordagem completa e holística. Analisamos e trabalhamos em todos os
                  aspectos do seu projeto — desde a estratégia de negócios e experiência do usuário até a infraestrutura
                  técnica e otimização contínua — garantindo que nenhum detalhe seja negligenciado.
                </p>
              </div>

              <div className="bg-emerald-950/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Nosso Diferencial</h3>
                <p className="text-gray-300">
                  Enquanto muitas empresas focam apenas na entrega técnica, nosso método garante que cada solução seja
                  estrategicamente alinhada aos objetivos de negócio, tecnicamente excelente, centrada no usuário e
                  preparada para evolução contínua — criando um ciclo virtuoso de inovação e resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
