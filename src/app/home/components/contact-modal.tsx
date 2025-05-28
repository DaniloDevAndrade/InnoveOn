"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { requestCreateLead } from "@/app/dashboard/clients/leads/_api/requestLeads"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // Prevenir scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      // Formatar o número de telefone como (XX) XXXXX-XXXX
      const phoneNumber = value.replace(/\D/g, "") // Remove todos os não-dígitos
      if (phoneNumber.length <= 11) {
        let formattedPhone = phoneNumber

        if (phoneNumber.length > 2) {
          formattedPhone = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
        }

        if (phoneNumber.length > 7) {
          formattedPhone = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`
        }

        setFormData((prev) => ({ ...prev, [name]: formattedPhone }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(e.target.value)

    // Você pode adicionar uma classe visual ou mensagem de erro aqui
    e.target.setAttribute("aria-invalid", isValid ? "false" : "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const lead = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      value: 2000,
      source: "Website",
      notes: formData.message
    }

    await requestCreateLead(lead)

    // Limpar o formulário e fechar o modal
    setFormData({ name: "", email: "", phone: "", message: "" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay com blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-black border border-emerald-900/50 rounded-xl shadow-lg shadow-emerald-900/20 w-full max-w-md p-6 z-10 animate-in fade-in duration-300">
        {/* Efeito de grade e pontos de fundo */}
        <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100%_20px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_100%]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.2)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        </div>

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Conteúdo do modal */}
        <div className="relative z-10">
          {/* Logo centralizada */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo-innoveon.webp"
              alt="InnoveON Logo"
              width={200}
              height={67}
              className="h-12 w-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Fale Conosco</h2>
          <p className="text-gray-300 mb-4">
            Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nome e Sobrenome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-black/50 border border-emerald-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleEmailValidation}
                required
                className="w-full px-3 py-2 bg-black/50 border border-emerald-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white"
                placeholder="seu.email@exemplo.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Celular
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-black/50 border border-emerald-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Qual Solução?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-black/50 border border-emerald-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white resize-none"
                placeholder="Descreva como podemos ajudar você ou sua empresa..."
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-lg shadow-emerald-900/20"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
