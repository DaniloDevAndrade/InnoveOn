"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useModal } from "./modal-provider"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openContactModal } = useModal()

  // Detectar scroll para adicionar sombra ao header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
      }`}
    >
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-innoveon.webp"
                alt="InnoveON Logo"
                width={240}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <button
              onClick={openContactModal}
              className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-5 py-2 rounded-lg transition-colors duration-300"
            >
              Fale Conosco
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-emerald-400 border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA for Mobile */}
            <button
              onClick={() => {
                setIsOpen(false)
                openContactModal()
              }}
              className="block w-full px-3 py-4 text-base font-medium text-emerald-400 hover:text-emerald-300 border border-emerald-500 rounded-lg mx-2 text-center"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

const navItems = [
  { name: "Sobre", href: "sobre" },
  { name: "Soluções", href: "solucoes" },
  { name: "Método", href: "metodo" },
  { name: "Trabalhe Conosco", href: "trabalhe-conosco" },
]
