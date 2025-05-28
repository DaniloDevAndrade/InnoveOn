"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
  angle: number
  rotationSpeed: number
  pulseSpeed: number
  pulseDirection: number
  maxOpacity: number
  minOpacity: number
}

export default function MethodHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Array para armazenar as estrelas
    let stars: Star[] = []

    // Configurar o canvas para ocupar toda a tela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Recriar as estrelas quando o tamanho da tela mudar
      createStars()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Criar estrelas com propriedades para animação fluida
    function createStars() {
      stars = []
      const starCount = 200

      for (let i = 0; i < starCount; i++) {
        const radius = 0.5 + Math.random() * 1.5
        const maxOpacity = 0.3 + Math.random() * 0.7

        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          radius,
          opacity: Math.random() * maxOpacity,
          speed: 0.05 + Math.random() * 0.1,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.002,
          pulseSpeed: 0.003 + Math.random() * 0.005,
          pulseDirection: Math.random() > 0.5 ? 1 : -1,
          maxOpacity,
          minOpacity: Math.random() * 0.2,
        })
      }

      for (let i = 0; i < 30; i++) {
        const radius = 1.5 + Math.random() * 2
        const maxOpacity = 0.7 + Math.random() * 0.3

        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          radius,
          opacity: Math.random() * maxOpacity,
          speed: 0.02 + Math.random() * 0.05,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.001,
          pulseSpeed: 0.002 + Math.random() * 0.003,
          pulseDirection: Math.random() > 0.5 ? 1 : -1,
          maxOpacity,
          minOpacity: 0.3 + Math.random() * 0.2,
        })
      }
    }

    function drawStars() {
      ctx!.fillStyle = "#000"
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)

      stars.forEach((star) => {
        ctx!.beginPath()
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2)

        if (star.radius > 1.2) {
          const gradient = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${star.opacity * 0.4})`)
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
          ctx!.fillStyle = gradient
        } else {
          ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        }

        ctx!.fill()
      })
    }


    function updateStars() {
      const centerX = canvas!.width / 2
      const centerY = canvas!.height / 2

      stars.forEach((star) => {
        star.opacity += star.pulseSpeed * star.pulseDirection

        if (star.opacity >= star.maxOpacity || star.opacity <= star.minOpacity) {
          star.pulseDirection *= -1
        }

        star.opacity = Math.max(star.minOpacity, Math.min(star.maxOpacity, star.opacity))

        star.angle += star.rotationSpeed

        const distanceX = star.x - centerX
        const distanceY = star.y - centerY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        if (distance > 0) {
          const currentAngle = Math.atan2(distanceY, distanceX)
          const newAngle = currentAngle + star.rotationSpeed

          star.x = centerX + Math.cos(newAngle) * distance + Math.cos(star.angle) * star.speed * 20
          star.y = centerY + Math.sin(newAngle) * distance + Math.sin(star.angle) * star.speed * 20
        }

        if (star.x < -50) star.x = canvas!.width + 50
        if (star.x > canvas!.width + 50) star.x = -50
        if (star.y < -50) star.y = canvas!.height + 50
        if (star.y > canvas!.height + 50) star.y = -50
      })
    }

    // Função de animação
    function animate() {
      updateStars()
      drawStars()
      requestAnimationFrame(animate)
    }

    // Iniciar a animação
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            MÉTODO <span className="text-emerald-400">INNOVE360</span>®
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Da ideia à inovação completa: nossa abordagem proprietária para resultados excepcionais
          </p>

          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg">
              Desenvolvido ao longo de anos de experiência e aprimoramento contínuo, o método INNOVE360® é nossa
              abordagem exclusiva que garante que cada projeto seja planejado, executado e evoluído com foco total em
              resultados mensuráveis para nossos clientes.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="#metodo"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg shadow-emerald-900/20 transition-colors"
            >
              Conheça o Método
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
