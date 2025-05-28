"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-black pt-8 pb-6 overflow-hidden">
      {/* Gradiente de blur verde de baixo para cima */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-900/30 to-transparent blur-xl"></div>

      {/* Gradiente de transição do topo */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-emerald-950/20 to-transparent blur-md"></div>

      {/* Fundo com padrão de grade e pontos (similar à segunda seção) */}
      <div className="absolute inset-0 z-0">
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

      {/* Partículas flutuantes para transição */}
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Conteúdo do footer em duas colunas */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          {/* Coluna da esquerda - Logo e redes sociais */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Image
              src="/images/logo-innoveon.webp"
              alt="InnoveON Logo"
              width={400}
              height={133}
              className="h-20 w-auto mb-4"
            />
            <div className="flex justify-center md:justify-start space-x-4 mt-3 w-full">
              {/* <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link> */}
            </div>
          </div>

          {/* Coluna da direita - Contato */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2 text-gray-300">
              <Phone size={18} className="mr-2 text-emerald-400" />
              <span>(11) 98109-0366</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail size={18} className="mr-2 text-emerald-400" />
              <span>contato@innoveon.com.br</span>
            </div>
          </div>
        </div>

        {/* Linha horizontal */}
        <hr className="border-emerald-900/50 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © Feito pela Innove<span className="text-emerald-400 font-medium">ON</span> - Tecnologia e Educação
        </div>
      </div>
    </footer>
  )
}
