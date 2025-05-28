"use client"

import { useState } from "react"
import { Building2Icon, Edit, FileTextIcon, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { Bill, BillStatus } from "../lib/types"
import { formatCurrency, bills as initialBills} from "../lib/data"

export function BillsTab() {
  // Estado para as contas
  const [bills, setBills] = useState<Bill[]>(initialBills)

  // Estado para o formulário de nova conta
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingBill, setEditingBill] = useState<Bill | null>(null)
  const [newBill, setNewBill] = useState<Omit<Bill, "id">>({
    description: "",
    amount: 0,
    dueDate: "",
    category: "",
    status: "pendente",
    account: "",
    recurrent: false,
    supplier: "",
    documentNumber: "",
  })

  // Função para adicionar ou editar uma conta
  const handleSaveBill = () => {
    if (editingBill) {
      // Editar conta existente
      setBills(bills.map((bill) => (bill.id === editingBill.id ? { ...newBill, id: editingBill.id } : bill)))
    } else {
      // Adicionar nova conta
      const newId = Math.max(0, ...bills.map((bill) => bill.id)) + 1
      setBills([...bills, { ...newBill, id: newId }])
    }

    // Resetar formulário
    setNewBill({
      description: "",
      amount: 0,
      dueDate: "",
      category: "",
      status: "pendente",
      account: "",
      recurrent: false,
      supplier: "",
      documentNumber: "",
    })
    setEditingBill(null)
    setIsDialogOpen(false)
  }

  // Função para excluir uma conta
  const handleDeleteBill = (id: number) => {
    setBills(bills.filter((bill) => bill.id !== id))
  }

  // Função para editar uma conta
  const handleEditBill = (bill: Bill) => {
    setEditingBill(bill)
    setNewBill({
      description: bill.description,
      amount: bill.amount,
      dueDate: bill.dueDate,
      category: bill.category,
      status: bill.status,
      account: bill.account,
      recurrent: bill.recurrent,
      supplier: bill.supplier || "",
      documentNumber: bill.documentNumber || "",
    })
    setIsDialogOpen(true)
  }

  // Função para obter a cor do status
  const getStatusColor = (status: BillStatus) => {
    switch (status) {
      case "pago":
        return "bg-emerald-500"
      case "pendente":
        return "bg-amber-500"
      case "atrasado":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Contas a Pagar</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#016c45] text-white"
              onClick={() => {
                setEditingBill(null)
                setNewBill({
                  description: "",
                  amount: 0,
                  dueDate: "",
                  category: "",
                  status: "pendente",
                  account: "",
                  recurrent: false,
                  supplier: "",
                  documentNumber: "",
                })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Nova Conta
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>{editingBill ? "Editar Conta" : "Nova Conta"}</DialogTitle>
              <DialogDescription>
                {editingBill ? "Edite os detalhes da conta abaixo." : "Preencha os detalhes da nova conta abaixo."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  value={newBill.description}
                  onChange={(e) => setNewBill({ ...newBill, description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="amount">Valor</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newBill.amount}
                    onChange={(e) => setNewBill({ ...newBill, amount: Number.parseFloat(e.target.value) })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Data de Vencimento</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={newBill.dueDate}
                    onChange={(e) => setNewBill({ ...newBill, dueDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select
                    value={newBill.category}
                    onValueChange={(value) => setNewBill({ ...newBill, category: value })}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Instalações">Instalações</SelectItem>
                      <SelectItem value="Telecomunicações">Telecomunicações</SelectItem>
                      <SelectItem value="Utilidades">Utilidades</SelectItem>
                      <SelectItem value="Equipamentos">Equipamentos</SelectItem>
                      <SelectItem value="Serviços Profissionais">Serviços Profissionais</SelectItem>
                      <SelectItem value="Suprimentos">Suprimentos</SelectItem>
                      <SelectItem value="Software">Software</SelectItem>
                      <SelectItem value="Impostos">Impostos</SelectItem>
                      <SelectItem value="Seguros">Seguros</SelectItem>
                      <SelectItem value="Outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={newBill.status}
                    onValueChange={(value: BillStatus) => setNewBill({ ...newBill, status: value })}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Selecione um status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pendente">Pendente</SelectItem>
                      <SelectItem value="pago">Pago</SelectItem>
                      <SelectItem value="atrasado">Atrasado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="account">Conta</Label>
                  <Select value={newBill.account} onValueChange={(value) => setNewBill({ ...newBill, account: value })}>
                    <SelectTrigger id="account">
                      <SelectValue placeholder="Selecione uma conta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Conta Empresarial">Conta Empresarial</SelectItem>
                      <SelectItem value="Cartão Empresarial">Cartão Empresarial</SelectItem>
                      <SelectItem value="Conta Reserva">Conta Reserva</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="supplier">Fornecedor</Label>
                  <Input
                    id="supplier"
                    value={newBill.supplier}
                    onChange={(e) => setNewBill({ ...newBill, supplier: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="documentNumber">Número do Documento</Label>
                <Input
                  id="documentNumber"
                  value={newBill.documentNumber}
                  onChange={(e) => setNewBill({ ...newBill, documentNumber: e.target.value })}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="recurrent"
                  checked={newBill.recurrent}
                  onCheckedChange={(checked) => setNewBill({ ...newBill, recurrent: checked })}
                />
                <Label htmlFor="recurrent">Conta Recorrente (Mensal)</Label>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSaveBill}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Vencimento</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Recorrente</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bills.length > 0 ? (
                bills.map((bill) => (
                  <TableRow key={bill.id}>
                    <TableCell>{bill.description}</TableCell>
                    <TableCell>{new Date(bill.dueDate).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell>{bill.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Building2Icon className="mr-1 h-3 w-3 text-muted-foreground" />
                        {bill.supplier || "-"}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <FileTextIcon className="mr-1 h-3 w-3 text-muted-foreground" />
                        {bill.documentNumber || "-"}
                      </div>
                    </TableCell>
                    <TableCell>{bill.recurrent ? "Sim" : "Não"}</TableCell>
                    <TableCell>
                      <Badge className={cn("text-white", getStatusColor(bill.status))}>
                        {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">{formatCurrency(bill.amount)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditBill(bill)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Editar</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteBill(bill.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Excluir</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center">
                    Nenhuma conta encontrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}