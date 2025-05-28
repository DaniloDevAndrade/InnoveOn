"use client"

import { useState } from "react"
import { BuildingIcon, Edit, Plus, Trash2, UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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
import { Goal } from "../lib/types"
import { calculateDaysRemaining, formatCurrency, goals as initialGoals} from "../lib/data"

export function GoalsTab() {
  // Estado para as metas
  const [goals, setGoals] = useState<Goal[]>(initialGoals)

  // Estado para o formulário de nova meta
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null)
  const [newGoal, setNewGoal] = useState<Omit<Goal, "id">>({
    name: "",
    target: 0,
    current: 0,
    deadline: "",
    department: "",
    responsible: "",
  })

  // Função para adicionar ou editar uma meta
  const handleSaveGoal = () => {
    if (editingGoal) {
      // Editar meta existente
      setGoals(goals.map((goal) => (goal.id === editingGoal.id ? { ...newGoal, id: editingGoal.id } : goal)))
    } else {
      // Adicionar nova meta
      const newId = Math.max(0, ...goals.map((goal) => goal.id)) + 1
      setGoals([...goals, { ...newGoal, id: newId }])
    }

    // Resetar formulário
    setNewGoal({
      name: "",
      target: 0,
      current: 0,
      deadline: "",
      department: "",
      responsible: "",
    })
    setEditingGoal(null)
    setIsDialogOpen(false)
  }

  // Função para excluir uma meta
  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  // Função para editar uma meta
  const handleEditGoal = (goal: Goal) => {
    setEditingGoal(goal)
    setNewGoal({
      name: goal.name,
      target: goal.target,
      current: goal.current,
      deadline: goal.deadline,
      department: goal.department || "",
      responsible: goal.responsible || "",
    })
    setIsDialogOpen(true)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Metas Financeiras</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#016c45] text-white"
              onClick={() => {
                setEditingGoal(null)
                setNewGoal({
                  name: "",
                  target: 0,
                  current: 0,
                  deadline: "",
                  department: "",
                  responsible: "",
                })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Nova Meta
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>{editingGoal ? "Editar Meta" : "Nova Meta"}</DialogTitle>
              <DialogDescription>
                {editingGoal ? "Edite os detalhes da meta abaixo." : "Preencha os detalhes da nova meta abaixo."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome da Meta</Label>
                <Input
                  id="name"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="target">Valor Total</Label>
                  <Input
                    id="target"
                    type="number"
                    value={newGoal.target}
                    onChange={(e) => setNewGoal({ ...newGoal, target: Number.parseFloat(e.target.value) })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="current">Valor Atual</Label>
                  <Input
                    id="current"
                    type="number"
                    value={newGoal.current}
                    onChange={(e) => setNewGoal({ ...newGoal, current: Number.parseFloat(e.target.value) })}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="deadline">Data Limite</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="department">Departamento</Label>
                  <Input
                    id="department"
                    value={newGoal.department}
                    onChange={(e) => setNewGoal({ ...newGoal, department: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="responsible">Responsável</Label>
                  <Input
                    id="responsible"
                    value={newGoal.responsible}
                    onChange={(e) => setNewGoal({ ...newGoal, responsible: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSaveGoal}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => {
          const percentage = Math.round((goal.current / goal.target) * 100)
          const daysRemaining = calculateDaysRemaining(goal.deadline)

          return (
            <Card key={goal.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{goal.name}</CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => handleEditGoal(goal)}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteGoal(goal.id)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Excluir</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-muted-foreground">
                    {formatCurrency(goal.current)} de {formatCurrency(goal.target)}
                  </div>
                  <div className="text-sm font-medium">{percentage}%</div>
                </div>
                <Progress value={percentage} className="h-2 mb-4" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Falta</p>
                    <p className="font-medium">{formatCurrency(goal.target - goal.current)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Tempo restante</p>
                    <p className="font-medium">{daysRemaining} dias</p>
                  </div>
                </div>
                {(goal.department || goal.responsible) && (
                  <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-4 text-sm">
                    {goal.department && (
                      <div>
                        <p className="text-muted-foreground flex items-center">
                          <BuildingIcon className="mr-1 h-3 w-3" />
                          Departamento
                        </p>
                        <p className="font-medium">{goal.department}</p>
                      </div>
                    )}
                    {goal.responsible && (
                      <div>
                        <p className="text-muted-foreground flex items-center">
                          <UserIcon className="mr-1 h-3 w-3" />
                          Responsável
                        </p>
                        <p className="font-medium">{goal.responsible}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
