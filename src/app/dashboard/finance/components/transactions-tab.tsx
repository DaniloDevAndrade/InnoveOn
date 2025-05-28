"use client"

import { useState } from "react"
import { Building2Icon, CalendarIcon, Edit, Plus, SearchIcon, Trash2, UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { formatCurrency, transactions as initialTransactions } from "../lib/data"
import type { Transaction, TransactionType } from "../lib/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export function TransactionsTab() {
  // Estados para os filtros
  const [searchQuery, setSearchQuery] = useState("")
  const [transactionType, setTransactionType] = useState("all")
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  // Estado para as transações
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions)

  // Estado para o modal de edição
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null)
  const [newTransaction, setNewTransaction] = useState<Omit<Transaction, "id">>({
    date: "",
    description: "",
    amount: 0,
    type: "income",
    category: "",
    client: "",
    supplier: "",
    paymentMethod: "",
    documentNumber: "",
  })

  // Função para adicionar uma nova transação
  const handleAddTransaction = () => {
    // Resetar o formulário para uma nova transação
    setNewTransaction({
      date: new Date().toISOString().split("T")[0], // Data atual no formato YYYY-MM-DD
      description: "",
      amount: 0,
      type: "income",
      category: "",
      client: "",
      supplier: "",
      paymentMethod: "",
      documentNumber: "",
    })
    setEditingTransaction(null)
    setIsDialogOpen(true)
  }

  // Função para editar uma transação
  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction)
    setNewTransaction({
      date: transaction.date,
      description: transaction.description,
      amount: Math.abs(transaction.amount),
      type: transaction.type,
      category: transaction.category,
      client: transaction.client || "",
      supplier: transaction.supplier || "",
      paymentMethod: transaction.paymentMethod || "",
      documentNumber: transaction.documentNumber || "",
    })
    setIsDialogOpen(true)
  }

  // Função para excluir uma transação
  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }

  // Função para salvar uma transação
  const handleSaveTransaction = () => {
    if (editingTransaction) {
      // Editar transação existente
      const amount =
        newTransaction.type === "expense" ? -Math.abs(newTransaction.amount) : Math.abs(newTransaction.amount)
      setTransactions(
        transactions.map((transaction) =>
          transaction.id === editingTransaction.id
            ? { ...newTransaction, id: editingTransaction.id, amount }
            : transaction,
        ),
      )
    } else {
      // Adicionar nova transação
      const amount =
        newTransaction.type === "expense" ? -Math.abs(newTransaction.amount) : Math.abs(newTransaction.amount)
      const newId = Math.max(0, ...transactions.map((transaction) => transaction.id)) + 1
      setTransactions([...transactions, { ...newTransaction, id: newId, amount }])
    }

    // Resetar formulário
    setNewTransaction({
      date: "",
      description: "",
      amount: 0,
      type: "income",
      category: "",
      client: "",
      supplier: "",
      paymentMethod: "",
      documentNumber: "",
    })
    setEditingTransaction(null)
    setIsDialogOpen(false)
  }

  // Filtrar transações
  const filteredTransactions = transactions.filter((transaction) => {
    // Filtro por texto
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (transaction.client && transaction.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (transaction.supplier && transaction.supplier.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (transaction.documentNumber && transaction.documentNumber.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filtro por tipo
    const matchesType =
      transactionType === "all" ||
      (transactionType === "income" && transaction.type === "income") ||
      (transactionType === "expense" && transaction.type === "expense")

    // Filtro por data
    let matchesDate = true
    if (startDate && endDate) {
      const transactionDate = new Date(transaction.date)
      // Criar uma cópia da data final e definir para o final do dia (23:59:59)
      const endOfDay = new Date(endDate)
      endOfDay.setHours(23, 59, 59, 999)
      matchesDate = transactionDate >= startDate && transactionDate <= endOfDay
    } else if (startDate) {
      matchesDate = new Date(transaction.date) >= startDate
    } else if (endDate) {
      // Criar uma cópia da data final e definir para o final do dia (23:59:59)
      const endOfDay = new Date(endDate)
      endOfDay.setHours(23, 59, 59, 999)
      matchesDate = new Date(transaction.date) <= endOfDay
    }

    return matchesSearch && matchesType && matchesDate
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle>Transações</CardTitle>
          <Button className="bg-[#016c45] text-white" onClick={handleAddTransaction}>
            <Plus className="mr-2 h-4 w-4" />
            Nova Transação
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div className="relative w-full md:w-64">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar transações..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Select value={transactionType} onValueChange={setTransactionType}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Tipo de transação" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="income">Receitas</SelectItem>
                <SelectItem value="expense">Despesas</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal sm:w-[180px]",
                      !startDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd/MM/yyyy") : "Data inicial"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus locale={ptBR} />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal sm:w-[180px]",
                      !endDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd/MM/yyyy") : "Data final"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus locale={ptBR} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Cliente/Fornecedor</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{new Date(transaction.date).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>
                      {transaction.type === "income" ? (
                        <div className="flex items-center">
                          <UserIcon className="mr-1 h-3 w-3 text-muted-foreground" />
                          {transaction.client || "-"}
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Building2Icon className="mr-1 h-3 w-3 text-muted-foreground" />
                          {transaction.supplier || "-"}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>{transaction.documentNumber || "-"}</TableCell>
                    <TableCell
                      className={cn(
                        "text-right font-medium",
                        transaction.type === "income" ? "text-emerald-600" : "text-red-600",
                      )}
                    >
                      {formatCurrency(transaction.amount)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditTransaction(transaction)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Editar</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteTransaction(transaction.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Excluir</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    Nenhuma transação encontrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Modal de edição de transação */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>{editingTransaction ? "Editar Transação" : "Nova Transação"}</DialogTitle>
              <DialogDescription>
                {editingTransaction
                  ? "Edite os detalhes da transação abaixo."
                  : "Preencha os detalhes da nova transação abaixo."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Data</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newTransaction.date}
                    onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Tipo</Label>
                  <Select
                    value={newTransaction.type}
                    onValueChange={(value: TransactionType) => setNewTransaction({ ...newTransaction, type: value })}
                  >
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Receita</SelectItem>
                      <SelectItem value="expense">Despesa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  value={newTransaction.description}
                  onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="amount">Valor</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newTransaction.amount}
                    onChange={(e) =>
                      setNewTransaction({ ...newTransaction, amount: Number.parseFloat(e.target.value) })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select
                    value={newTransaction.category}
                    onValueChange={(value) => setNewTransaction({ ...newTransaction, category: value })}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {newTransaction.type === "income" ? (
                        <>
                          <SelectItem value="Vendas">Vendas</SelectItem>
                          <SelectItem value="Serviços">Serviços</SelectItem>
                          <SelectItem value="Investimentos">Investimentos</SelectItem>
                          <SelectItem value="Reembolsos">Reembolsos</SelectItem>
                          <SelectItem value="Outros">Outros</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="Instalações">Instalações</SelectItem>
                          <SelectItem value="Suprimentos">Suprimentos</SelectItem>
                          <SelectItem value="Telecomunicações">Telecomunicações</SelectItem>
                          <SelectItem value="Utilidades">Utilidades</SelectItem>
                          <SelectItem value="Transporte">Transporte</SelectItem>
                          <SelectItem value="Software">Software</SelectItem>
                          <SelectItem value="Treinamento">Treinamento</SelectItem>
                          <SelectItem value="Representação">Representação</SelectItem>
                          <SelectItem value="Equipamentos">Equipamentos</SelectItem>
                          <SelectItem value="Alimentação">Alimentação</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {newTransaction.type === "income" ? (
                <div className="grid gap-2">
                  <Label htmlFor="client">Cliente</Label>
                  <Input
                    id="client"
                    value={newTransaction.client}
                    onChange={(e) => setNewTransaction({ ...newTransaction, client: e.target.value })}
                  />
                </div>
              ) : (
                <div className="grid gap-2">
                  <Label htmlFor="supplier">Fornecedor</Label>
                  <Input
                    id="supplier"
                    value={newTransaction.supplier}
                    onChange={(e) => setNewTransaction({ ...newTransaction, supplier: e.target.value })}
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="documentNumber">Número do Documento</Label>
                  <Input
                    id="documentNumber"
                    value={newTransaction.documentNumber}
                    onChange={(e) => setNewTransaction({ ...newTransaction, documentNumber: e.target.value })}
                    placeholder={newTransaction.type === "income" ? "NF-0000" : "Fatura 0000"}
                  />
                </div>
                {newTransaction.type === "expense" && (
                  <div className="grid gap-2">
                    <Label htmlFor="paymentMethod">Método de Pagamento</Label>
                    <Select
                      value={newTransaction.paymentMethod}
                      onValueChange={(value) => setNewTransaction({ ...newTransaction, paymentMethod: value })}
                    >
                      <SelectTrigger id="paymentMethod">
                        <SelectValue placeholder="Selecione um método" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Transferência">Transferência</SelectItem>
                        <SelectItem value="Boleto">Boleto</SelectItem>
                        <SelectItem value="Cartão Empresarial">Cartão Empresarial</SelectItem>
                        <SelectItem value="Débito Automático">Débito Automático</SelectItem>
                        <SelectItem value="Dinheiro">Dinheiro</SelectItem>
                        <SelectItem value="Pix">Pix</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSaveTransaction}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}