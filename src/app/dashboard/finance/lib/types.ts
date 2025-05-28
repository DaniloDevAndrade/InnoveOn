// Tipos para as transações
export type TransactionType = "income" | "expense"

export interface Transaction {
  id: number
  date: string
  description: string
  amount: number
  type: TransactionType
  category: string
  client?: string
  supplier?: string
  paymentMethod?: string
  documentNumber?: string
}

// Tipos para as contas
export type BillStatus = "pendente" | "pago" | "atrasado"

export interface Bill {
  id: number
  description: string
  amount: number
  dueDate: string
  category: string
  status: BillStatus
  account: string
  recurrent: boolean
  supplier?: string
  documentNumber?: string
}

// Tipo para as metas
export interface Goal {
  id: number
  name: string
  target: number
  current: number
  deadline: string
  department?: string
  responsible?: string
}

// Dados para a visão geral
export interface OverviewData {
  balance: number
  income: number
  expenses: number
  billsToPay: number
  comparisonWithLastMonth: {
    income: number
    expenses: number
  }
}
