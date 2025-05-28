"use client"

import { useEffect, useRef } from "react"

interface FunilItem {
  status: string
  quantity: number
  color: string
}

interface FunilChartProps {
  data: FunilItem[]
}

export function FunilChart({ data }: FunilChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar o canvas para ser responsivo
    const parent = canvas.parentElement
    if (parent) {
      canvas.width = parent.clientWidth
      canvas.height = 400
    }

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Encontrar o valor máximo para escala
    const maxValue = Math.max(...data.map((item) => item.quantity))

    // Altura de cada seção do funil
    const sectionHeight = canvas.height / data.length

    // Largura máxima do funil (80% da largura do canvas)
    const maxWidth = canvas.width * 0.8

    // Margem horizontal
    const marginX = (canvas.width - maxWidth) / 2

    // Desenhar o funil
    data.forEach((item, index) => {
      // Calcular a largura proporcional ao valor
      const width = (item.quantity / maxValue) * maxWidth

      // Calcular a posição X para centralizar
      const x = marginX + (maxWidth - width) / 2

      // Calcular a posição Y
      const y = index * sectionHeight

      // Desenhar o retângulo
      ctx.fillStyle = item.color
      ctx.beginPath()
      ctx.rect(x, y, width, sectionHeight * 0.8) // 80% da altura para espaçamento
      ctx.fill()

      // Adicionar texto com o nome do estágio
      ctx.fillStyle = "#000"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.status, canvas.width / 2, y + sectionHeight * 0.3)

      // Adicionar texto com a quantity
      ctx.font = "bold 16px sans-serif"
      ctx.fillText(item.quantity.toString(), canvas.width / 2, y + sectionHeight * 0.6)

      // Desenhar linhas conectoras se não for o último item
      if (index < data.length - 1) {
        const nextWidth = (data[index + 1].quantity / maxValue) * maxWidth
        const nextX = marginX + (maxWidth - nextWidth) / 2

        ctx.beginPath()
        ctx.moveTo(x, y + sectionHeight * 0.8)
        ctx.lineTo(nextX, (index + 1) * sectionHeight)
        ctx.lineTo(nextX + nextWidth, (index + 1) * sectionHeight)
        ctx.lineTo(x + width, y + sectionHeight * 0.8)
        ctx.closePath()
        ctx.fillStyle = item.color + "80" // Adicionar transparência
        ctx.fill()
      }
    })
  }, [data])

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
