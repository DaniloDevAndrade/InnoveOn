"use client"

import Link from "next/link"

export default function BlackSpacer() {
  return (
    <section className="pt-16 pb-4 bg-black">
      <div className="container mx-auto px-4">
        {/* Título e descrição */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            INNOVE<span className="text-emerald-400">360</span>® — Da Ideia à Inovação Completa
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Na Innove<span className="text-emerald-400">ON</span>, não criamos apenas sites ou sistemas. Aplicamos o
            método INNOVE<span className="text-emerald-400">360</span>®, uma abordagem própria que garante que cada
            projeto seja <span className="text-emerald-400">planejado</span>, executado e evoluído com foco total em{" "}
            <span className="text-emerald-400">resultado</span>.
          </p>
        </div>

        {/* Método em 4 passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 relative">

          {/* Passo 1: Imersão */}
          <div className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg hover:bg-emerald-950/10 transition-colors text-center">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">Imersão</h3>
            <p className="text-gray-300">
              Entendemos seu negócio, metas e desafios. A tecnologia certa começa com empatia e escuta ativa.
            </p>
          </div>

          {/* Passo 2: Planejamento Estratégico */}
          <div className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg hover:bg-emerald-950/10 transition-colors text-center">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">Planejamento Estratégico</h3>
            <p className="text-gray-300">
              Criamos a estrutura do projeto com base em usabilidade, performance e crescimento.
            </p>
          </div>

          {/* Passo 3: Desenvolvimento Inteligente */}
          <div className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg hover:bg-emerald-950/10 transition-colors text-center">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">Desenvolvimento Inteligente</h3>
            <p className="text-gray-300">
              Sites, sistemas, apps ou agentes de IA desenvolvidos com tecnologia moderna, segurança e escalabilidade.
            </p>
          </div>

          {/* Passo 4: Otimização Contínua */}
          <div className="bg-black/50 border border-emerald-900/30 p-6 rounded-lg hover:bg-emerald-950/10 transition-colors text-center">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">Otimização Contínua</h3>
            <p className="text-gray-300">
              Após a entrega, seguimos ON com atualizações, melhorias e inteligência para garantir o sucesso contínuo da
              solução.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 relative z-20 pb-4">
          <Link href='/metodo' >
            <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-950/50 font-medium py-2 px-6 rounded-lg transition-colors duration-300">
              Conheça Mais Sobre o Método
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
