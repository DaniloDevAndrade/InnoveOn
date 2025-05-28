"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useMemo } from "react"
import { Transaction } from "../lib/types"
import { formatCurrency } from "../lib/data"

interface FinancialChartProps {
  transactions: Transaction[]
}

export function FinancialChart({ transactions }: FinancialChartProps) {
  // Processar transações para o gráfico
  const chartData = useMemo(() => {
    // Agrupar transações por mês
    const monthlyData: Record<string, { receitas: number; despesas: number }> = {}

    // Inicializar os últimos 4 meses
    const today = new Date()
    for (let i = 3; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1)
      const monthKey = date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
      monthlyData[monthKey] = { receitas: 0, despesas: 0 }
    }

    // Somar transações por mês
    transactions.forEach((transaction) => {
      const date = new Date(transaction.date)
      const monthKey = date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })

      // Verificar se o mês está nos últimos 4 meses
      if (monthlyData[monthKey]) {
        if (transaction.type === "income") {
          monthlyData[monthKey].receitas += Math.abs(transaction.amount)
        } else {
          monthlyData[monthKey].despesas += Math.abs(transaction.amount)
        }
      }
    })

    // Converter para array para o gráfico
    return Object.entries(monthlyData).map(([name, data]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      receitas: data.receitas,
      despesas: data.despesas,
    }))
  }, [transactions])

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `R${value / 1000}k`} />
        <Tooltip formatter={(value: number) => formatCurrency(value)} labelFormatter={(label) => `Mês: ${label}`} />
        <Legend />
        <Bar dataKey="receitas" name="Receitas" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="despesas" name="Despesas" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
