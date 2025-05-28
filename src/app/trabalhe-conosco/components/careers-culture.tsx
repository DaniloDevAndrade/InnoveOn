"use client"

import { useState } from "react"
import { Heart, Zap, Target, Users, BookOpen, Coffee } from "lucide-react"

export default function CareersCulture() {
  const [activeValue, setActiveValue] = useState(0)

  return (
    <section className="py-16 bg-black relative" id="cultura">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            NOSSA <span className="text-emerald-400">CULTURA</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Os valores que guiam nossas ações e definem quem somos como equipe
          </p>
        </div>

        {/* Valores em cards interativos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {cultureValues.map((value, index) => (
            <button
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 text-center ${
                activeValue === index
                  ? "bg-emerald-600 text-white scale-105 shadow-lg shadow-emerald-900/30"
                  : "bg-black/50 border border-emerald-900/30 text-gray-300 hover:bg-emerald-950/30"
              }`}
              onClick={() => setActiveValue(index)}
            >
              <div className="flex justify-center mb-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeValue === index ? "bg-emerald-700" : "bg-emerald-900/30"
                  }`}
                >
                  {value.icon}
                </div>
              </div>
              <h3 className={`font-semibold ${activeValue === index ? "text-white" : "text-emerald-400"}`}>
                {value.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Detalhes do valor selecionado */}
        <div className="max-w-4xl mx-auto bg-black/50 border border-emerald-900/30 p-8 rounded-lg transition-all duration-500">
          <h3 className="text-2xl font-bold text-white mb-4">{cultureValues[activeValue].title}</h3>
          <p className="text-gray-300 mb-6">{cultureValues[activeValue].description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-950/20 p-5 rounded-lg">
              <h4 className="text-emerald-400 font-semibold mb-3">Como vivemos este valor:</h4>
              <ul className="space-y-2">
                {cultureValues[activeValue].practices.map((practice, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span className="text-gray-300">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-950/20 p-5 rounded-lg">
              <h4 className="text-emerald-400 font-semibold mb-3">O que buscamos em candidatos:</h4>
              <ul className="space-y-2">
                {cultureValues[activeValue].lookingFor.map((trait, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span className="text-gray-300">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const cultureValues = [
  {
    title: "Inovação",
    icon: <Zap className="text-emerald-400 h-6 w-6" />,
    description:
      "Acreditamos que a inovação é o motor do progresso. Incentivamos o pensamento criativo, a experimentação e a busca constante por novas e melhores maneiras de resolver problemas e criar valor para nossos clientes.",
    practices: [
      "Dedicamos tempo para exploração de novas tecnologias e abordagens",
      "Realizamos hackathons internos e desafios de inovação",
      "Celebramos tanto os sucessos quanto as falhas que geram aprendizado",
      "Mantemos uma cultura de melhoria contínua em todos os processos",
    ],
    lookingFor: [
      "Curiosidade intelectual e desejo de aprender constantemente",
      "Disposição para questionar o status quo e propor novas ideias",
      "Capacidade de pensar 'fora da caixa' e encontrar soluções criativas",
      "Interesse genuíno por tecnologias emergentes e tendências do mercado",
    ],
  },
  {
    title: "Excelência",
    icon: <Target className="text-emerald-400 h-6 w-6" />,
    description:
      "Buscamos a excelência em tudo o que fazemos. Não nos contentamos com o bom quando podemos alcançar o extraordinário. Estabelecemos padrões elevados e nos esforçamos continuamente para superá-los.",
    practices: [
      "Adotamos as melhores práticas em desenvolvimento, design e gestão de projetos",
      "Realizamos revisões de código e feedback construtivo entre pares",
      "Investimos em ferramentas e processos que elevam a qualidade do nosso trabalho",
      "Monitoramos e medimos nosso desempenho para identificar oportunidades de melhoria",
    ],
    lookingFor: [
      "Comprometimento com alta qualidade e atenção aos detalhes",
      "Busca constante por aperfeiçoamento técnico e profissional",
      "Capacidade de receber e aplicar feedback construtivo",
      "Disciplina e rigor metodológico no desenvolvimento de soluções",
    ],
  },
  {
    title: "Colaboração",
    icon: <Users className="text-emerald-400 h-6 w-6" />,
    description:
      "Acreditamos que as melhores soluções surgem da colaboração. Valorizamos o trabalho em equipe, a diversidade de perspectivas e a capacidade de unir talentos complementares em busca de objetivos comuns.",
    practices: [
      "Trabalhamos em equipes multidisciplinares com comunicação aberta e transparente",
      "Realizamos sessões regulares de brainstorming e solução colaborativa de problemas",
      "Compartilhamos conhecimento através de mentorias, workshops e documentação",
      "Celebramos conquistas coletivas e reconhecemos contribuições individuais",
    ],
    lookingFor: [
      "Habilidade de trabalhar efetivamente em equipe e construir relacionamentos positivos",
      "Comunicação clara e capacidade de articular ideias complexas",
      "Disposição para compartilhar conhecimento e ajudar colegas",
      "Empatia e respeito pela diversidade de perspectivas e experiências",
    ],
  },
  {
    title: "Paixão",
    icon: <Heart className="text-emerald-400 h-6 w-6" />,
    description:
      "A paixão é o que nos move. Acreditamos que pessoas apaixonadas pelo que fazem produzem resultados extraordinários. Buscamos profissionais que não apenas trabalham em tecnologia, mas que amam o que fazem.",
    practices: [
      "Incentivamos projetos pessoais e iniciativas que despertem entusiasmo",
      "Criamos um ambiente onde as pessoas podem trabalhar com o que realmente gostam",
      "Compartilhamos e celebramos histórias de impacto positivo do nosso trabalho",
      "Promovemos eventos e atividades que fortalecem a conexão com nosso propósito",
    ],
    lookingFor: [
      "Entusiasmo genuíno por tecnologia e inovação",
      "Energia e atitude positiva diante de desafios",
      "Iniciativa e proatividade em buscar soluções",
      "Alinhamento com nosso propósito e visão de futuro",
    ],
  },
  {
    title: "Aprendizado",
    icon: <BookOpen className="text-emerald-400 h-6 w-6" />,
    description:
      "O aprendizado contínuo está no centro da nossa cultura. Em um mundo em constante evolução, valorizamos a curiosidade, a adaptabilidade e o compromisso com o crescimento pessoal e profissional.",
    practices: [
      "Oferecemos orçamento de desenvolvimento para cursos, certificações e conferências",
      "Promovemos sessões regulares de compartilhamento de conhecimento",
      "Mantemos uma biblioteca digital e física de recursos de aprendizado",
      "Incentivamos a experimentação e aprendizado através da prática",
    ],
    lookingFor: [
      "Mentalidade de crescimento e disposição para aprender continuamente",
      "Capacidade de se adaptar a novas tecnologias e metodologias",
      "Humildade para reconhecer limitações e buscar conhecimento",
      "Interesse em compartilhar aprendizados e ensinar outros",
    ],
  },
  {
    title: "Equilíbrio",
    icon: <Coffee className="text-emerald-400 h-6 w-6" />,
    description:
      "Acreditamos que o melhor trabalho vem de pessoas que estão em equilíbrio. Valorizamos o bem-estar, a saúde mental e física, e reconhecemos a importância de uma vida plena dentro e fora do ambiente profissional.",
    practices: [
      "Oferecemos horários flexíveis e opções de trabalho remoto",
      "Promovemos iniciativas de bem-estar e saúde mental",
      "Respeitamos o tempo de descanso e incentivamos férias regulares",
      "Criamos um ambiente de trabalho acolhedor e com boa infraestrutura",
    ],
    lookingFor: [
      "Capacidade de gerenciar o próprio tempo e prioridades",
      "Consciência sobre a importância do autocuidado e bem-estar",
      "Comunicação clara sobre necessidades e limites",
      "Compromisso com resultados sem sacrificar qualidade de vida",
    ],
  },
]
