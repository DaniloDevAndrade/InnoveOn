"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { RoboAnimation } from "./robo-animation"
import { FloatingPaper } from "./floating-paper"
import Link from "next/link"
import { useModal } from "@/app/components/modal-provider"

export default function Hero() {
  const { openContactModal } = useModal()

  return (
    <div className="relative min-h-[calc(100vh)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">BEM-VINDO</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
              ESTAMOS <span className="text-[#05a66d]">ON</span> PARA CRIAR, CONECTAR E TRANSFORMAR SUA EMPRESA!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center space-x-3 mb-8"
          >
            <span className="text-xl md:text-2xl font-semibold text-white">
              Innove
              <span className="text-[#05a66d]">ON</span>
            </span>
            <div className="w-12 h-6 bg-[#05a66d] rounded-full flex items-center p-1">
              <div className="w-4 h-4 bg-white rounded-full transform translate-x-6"></div>
            </div>
            <span className="text-xl md:text-2xl font-semibold text-white">=</span>
            <TypeAnimation words={["Inovação", "Inteligência", "Conexão", "Transformação", "Evolução", "Solução"]} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Soluções inovadoras em tecnologia e transformação digital para impulsionar o crescimento do seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="solucoes">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 shadow-lg shadow-emerald-900/20">
              Conheça Nossas Soluções
            </button>
            </Link>
            <button onClick={openContactModal} className="border border-emerald-500 text-emerald-400 hover:bg-emerald-950/50 font-medium py-2 px-6 rounded-lg transition-colors duration-300">
              Fale Conosco
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="invisible md:visible absolute bottom-0 h-96 w-96 top-[60%] right-0 lg:top-[50%]">
        <RoboAnimation />
      </div>
    </div>
  )
}

function TypeAnimation({ words }: { words: string[] }) {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(100 - Math.random() * 50) // Reduced from 200 to 100

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text, isDeleting, currentWord])

  const tick = () => {
    const updatedText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2) // Increased speed (from 1.5 to 2)
    }

    if (!isDeleting && updatedText === currentWord) {
      setIsDeleting(true)
      setDelta(500) // Reduced from 1000 to 500
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
      setCurrentWord(words[(index + 1) % words.length])
      setDelta(250) // Reduced from 500 to 250
    }
  }

  return (
    <span className="text-xl md:text-2xl font-semibold text-[#05a66d]">
      {text}
      <span className="text-white animate-blink">|</span>
    </span>
  )
}
