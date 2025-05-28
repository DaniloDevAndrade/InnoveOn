"use client"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BarChart3Icon,
  Building2Icon,
  CalendarIcon,
  CreditCardIcon,
  DollarSignIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { bills, calculateDaysRemaining, formatCurrency, goals, transactions } from "../lib/data"
import { FinancialChart } from "./financial-chart"
import { useMemo } from "react"

interface OverviewTabProps {
  onViewAllBills: () => void
  onViewAllGoals: () => void
}

export function OverviewTab({ onViewAllBills, onViewAllGoals }: OverviewTabProps) {
  // Calcular receitas e despesas do mês atual e do mês anterior, e saldo total
  const financialSummary = useMemo(() => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()

    // Primeiro dia do mês atual
    const firstDayCurrentMonth = new Date(currentYear, currentMonth, 1)
    // Último dia do mês atual
    const lastDayCurrentMonth = new Date(currentYear, currentMonth + 1, 0, 23, 59, 59)

    // Primeiro dia do mês anterior
    const firstDayPreviousMonth = new Date(currentYear, currentMonth - 1, 1)
    // Último dia do mês anterior
    const lastDayPreviousMonth = new Date(currentYear, currentMonth, 0, 23, 59, 59)

    // Filtrar transações do mês atual
    const currentMonthTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date)
      return transactionDate >= firstDayCurrentMonth && transactionDate <= lastDayCurrentMonth
    })

    // Filtrar transações do mês anterior
    const previousMonthTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date)
      return transactionDate >= firstDayPreviousMonth && transactionDate <= lastDayPreviousMonth
    })

    // Calcular receitas e despesas do mês atual
    let currentMonthIncome = 0
    let currentMonthExpenses = 0

    currentMonthTransactions.forEach((transaction) => {
      if (transaction.type === "income") {
        currentMonthIncome += transaction.amount
      } else {
        currentMonthExpenses += Math.abs(transaction.amount)
      }
    })

    // Calcular receitas e despesas do mês anterior
    let previousMonthIncome = 0
    let previousMonthExpenses = 0

    previousMonthTransactions.forEach((transaction) => {
      if (transaction.type === "income") {
        previousMonthIncome += transaction.amount
      } else {
        previousMonthExpenses += Math.abs(transaction.amount)
      }
    })

    // Calcular variação percentual
    const incomePercentChange =
      previousMonthIncome > 0 ? Math.round(((currentMonthIncome - previousMonthIncome) / previousMonthIncome) * 100) : 0

    const expensesPercentChange =
      previousMonthExpenses > 0
        ? Math.round(((currentMonthExpenses - previousMonthExpenses) / previousMonthExpenses) * 100)
        : 0

    // Calcular saldo total (todas as transações de todos os meses)
    let totalBalance = 0
    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        totalBalance += transaction.amount
      } else {
        totalBalance += transaction.amount // Já está negativo
      }
    })

    return {
      currentMonthIncome,
      currentMonthExpenses,
      incomePercentChange,
      expensesPercentChange,
      currentMonthBalance: currentMonthIncome - currentMonthExpenses,
      totalBalance,
    }
  }, [])

  // Filtrar apenas contas pendentes para exibir na visão geral
  const upcomingBills = bills
    .filter((bill) => bill.status === "pendente")
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 4)

  // Pegar apenas algumas metas para exibir na visão geral
  const financialGoals = goals.slice(0, 2)

  // Calcular o total de contas a pagar
  const totalBillsToPay = bills
    .filter((bill) => bill.status === "pendente")
    .reduce((total, bill) => total + bill.amount, 0)

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
            <WalletIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(financialSummary.totalBalance)}</div>
            <p className="text-xs text-muted-foreground">Atualizado em {new Date().toLocaleDateString("pt-BR")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas do Mês</CardTitle>
            <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(financialSummary.currentMonthIncome)}</div>
            <div
              className={`flex items-center text-xs ${financialSummary.incomePercentChange >= 0 ? "text-emerald-500" : "text-red-500"}`}
            >
              {financialSummary.incomePercentChange >= 0 ? (
                <TrendingUpIcon className="mr-1 h-3 w-3" />
              ) : (
                <TrendingDownIcon className="mr-1 h-3 w-3" />
              )}
              <span>
                {financialSummary.incomePercentChange >= 0 ? "+" : ""}
                {financialSummary.incomePercentChange}% em relação ao mês anterior
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas do Mês</CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(financialSummary.currentMonthExpenses)}</div>
            <div
              className={`flex items-center text-xs ${financialSummary.expensesPercentChange <= 0 ? "text-emerald-500" : "text-red-500"}`}
            >
              {financialSummary.expensesPercentChange <= 0 ? (
                <TrendingDownIcon className="mr-1 h-3 w-3" />
              ) : (
                <TrendingUpIcon className="mr-1 h-3 w-3" />
              )}
              <span>
                {financialSummary.expensesPercentChange >= 0 ? "+" : ""}
                {financialSummary.expensesPercentChange}% em relação ao mês anterior
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contas a Pagar</CardTitle>
            <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalBillsToPay)}</div>
            <p className="text-xs text-muted-foreground">{upcomingBills.length} contas pendentes</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Receitas vs Despesas</CardTitle>
            <CardDescription>Comparação entre o mês atual e o mês anterior</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <FinancialChart transactions={transactions} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Próximas Contas a Pagar</CardTitle>
            <CardDescription>Contas com vencimento próximo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBills.map((bill) => (
                <div key={bill.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{bill.description}</p>
                    <p className="text-sm text-muted-foreground">
                      Vence em {new Date(bill.dueDate).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <div className="font-medium">{formatCurrency(bill.amount)}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={onViewAllBills}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              Ver todas as contas
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Metas Financeiras</CardTitle>
            <CardDescription>Acompanhamento das metas da empresa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {financialGoals.map((goal) => {
                const percentage = Math.round((goal.current / goal.target) * 100)
                const daysRemaining = calculateDaysRemaining(goal.deadline)

                return (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{goal.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatCurrency(goal.current)} de {formatCurrency(goal.target)}
                        </p>
                      </div>
                      <div className="text-sm font-medium">{percentage}%</div>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Falta: {formatCurrency(goal.target - goal.current)}</span>
                      <span>{daysRemaining} dias restantes</span>
                    </div>
                    {goal.department && (
                      <div className="text-xs text-muted-foreground flex items-center">
                        <Building2Icon className="mr-1 h-3 w-3" />
                        <span>Departamento: {goal.department}</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={onViewAllGoals}>
              <BarChart3Icon className="mr-2 h-4 w-4" />
              Ver todas as metas
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resumo Financeiro</CardTitle>
            <CardDescription>Visão geral do desempenho financeiro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Lucro do Mês</p>
                  <p
                    className={`text-xl font-bold ${
                      financialSummary.currentMonthIncome - financialSummary.currentMonthExpenses >= 0
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {formatCurrency(financialSummary.currentMonthIncome - financialSummary.currentMonthExpenses)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Margem de Lucro</p>
                  <p className="text-xl font-bold">
                    {financialSummary.currentMonthIncome > 0
                      ? Math.round(
                          ((financialSummary.currentMonthIncome - financialSummary.currentMonthExpenses) /
                            financialSummary.currentMonthIncome) *
                            100,
                        )
                      : 0}
                    %
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Principais Categorias de Despesas</h4>
                <div className="space-y-3">
                  {["Instalações", "Telecomunicações", "Utilidades"].map((category) => {
                    const total = transactions
                      .filter(
                        (t) =>
                          t.type === "expense" &&
                          t.category === category &&
                          new Date(t.date) >= new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                      )
                      .reduce((sum, t) => sum + Math.abs(t.amount), 0)

                    const percentage = Math.round((total / financialSummary.currentMonthExpenses) * 100) || 0

                    return (
                      <div key={category} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{category}</span>
                          <span className="font-medium">{formatCurrency(total)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={percentage} className="h-1.5" />
                          <span className="text-xs text-muted-foreground w-10 text-right">{percentage}%</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
