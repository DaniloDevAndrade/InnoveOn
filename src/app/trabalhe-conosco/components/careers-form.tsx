"use client"

import type React from "react"

import { useState } from "react"
import { Upload, CheckCircle } from "lucide-react"

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: "",
    resume: null as File | null,
    agreeTerms: false,
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }))

      // Clear error when field is edited
      if (errors.resume) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.resume
          return newErrors
        })
      }
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório"
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido"
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório"
    if (!formData.position) newErrors.position = "Selecione uma vaga de interesse"
    if (!formData.experience) newErrors.experience = "Selecione seu nível de experiência"
    if (!formData.resume) newErrors.resume = "Currículo é obrigatório"
    if (!formData.agreeTerms) newErrors.agreeTerms = "Você precisa concordar com os termos"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormStatus("submitting")

    // Simulação de envio do formulário
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        message: "",
        resume: null,
        agreeTerms: false,
      })
    }, 1500)
  }

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

        {/* Gradiente de transição para o footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-emerald-950/30 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              CANDIDATE-SE <span className="text-emerald-400">AGORA</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Preencha o formulário abaixo para se candidatar às nossas vagas ou para o banco de talentos
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="bg-black/50 border border-emerald-900/30 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-emerald-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Candidatura Enviada!</h3>
              <p className="text-gray-300 mb-6">
                Recebemos sua candidatura com sucesso. Nossa equipe de Pessoas & Cultura analisará seu perfil e entrará
                em contato em breve.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Enviar Nova Candidatura
              </button>
            </div>
          ) : (
            <div className="bg-black/50 border border-emerald-900/30 p-6 md:p-8 rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nome Completo*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${
                        errors.name ? "border-red-500" : "border-emerald-900/50"
                      } rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                      placeholder="Seu nome completo"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${
                        errors.email ? "border-red-500" : "border-emerald-900/50"
                      } rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                      placeholder="seu.email@exemplo.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Telefone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${
                        errors.phone ? "border-red-500" : "border-emerald-900/50"
                      } rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                      placeholder="(00) 00000-0000"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Vaga de Interesse */}
                  <div>
                    <label htmlFor="position" className="block text-white font-medium mb-2">
                      Vaga de Interesse*
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${
                        errors.position ? "border-red-500" : "border-emerald-900/50"
                      } rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none`}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="Desenvolvedor(a) Full Stack Sênior">Desenvolvedor(a) Full Stack Sênior</option>
                      <option value="UX/UI Designer">UX/UI Designer</option>
                      <option value="Cientista de Dados">Cientista de Dados</option>
                      <option value="Especialista em DevOps">Especialista em DevOps</option>
                      <option value="Desenvolvedor(a) Front-end">Desenvolvedor(a) Front-end</option>
                      <option value="Analista de Pessoas & Cultura">Analista de Pessoas & Cultura</option>
                      <option value="Banco de Talentos">Banco de Talentos</option>
                    </select>
                    {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                  </div>

                  {/* Experiência */}
                  <div>
                    <label htmlFor="experience" className="block text-white font-medium mb-2">
                      Nível de Experiência*
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${
                        errors.experience ? "border-red-500" : "border-emerald-900/50"
                      } rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none`}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="Estágio">Estágio</option>
                      <option value="Júnior (0-2 anos)">Júnior (0-2 anos)</option>
                      <option value="Pleno (2-5 anos)">Pleno (2-5 anos)</option>
                      <option value="Sênior (5+ anos)">Sênior (5+ anos)</option>
                      <option value="Especialista/Líder">Especialista/Líder</option>
                    </select>
                    {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                  </div>

                  {/* Portfolio/LinkedIn */}
                  <div>
                    <label htmlFor="portfolio" className="block text-white font-medium mb-2">
                      LinkedIn ou Portfolio (opcional)
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-emerald-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      placeholder="https://..."
                    />
                  </div>

                  {/* Upload de Currículo */}
                  <div>
                    <label htmlFor="resume" className="block text-white font-medium mb-2">
                      Currículo (PDF)*
                    </label>
                    <div
                      className={`w-full bg-black/50 border ${
                        errors.resume ? "border-red-500" : "border-emerald-900/50"
                      } rounded-lg px-4 py-2 text-white focus-within:ring-2 focus-within:ring-emerald-500/50 flex items-center`}
                    >
                      <label
                        htmlFor="resume"
                        className="cursor-pointer flex items-center flex-1 overflow-hidden text-gray-400"
                      >
                        <Upload className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span className="truncate">
                          {formData.resume ? formData.resume.name : "Selecione um arquivo"}
                        </span>
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </div>
                    {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                  </div>
                </div>

                {/* Mensagem */}
                <div className="mt-6">
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Por que você quer trabalhar na InnoveON? (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/50 border border-emerald-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
                    placeholder="Conte-nos um pouco sobre você e por que deseja fazer parte do nosso time..."
                  ></textarea>
                </div>

                {/* Termos */}
                <div className="mt-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-300">
                      Concordo com a{" "}
                      <a href="#" className="text-emerald-400 hover:underline">
                        Política de Privacidade
                      </a>{" "}
                      e autorizo o tratamento dos meus dados pessoais para fins de recrutamento e seleção.*
                    </label>
                  </div>
                  {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "Enviando..." : "Enviar Candidatura"}
                  </button>
                </div>
              </form>
            </div>
          )}
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
