"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Task, TaskStatus } from "./types"
import { PersonalKanbanView } from "./tasks-p-kanban-view"
import { PersonalListView } from "./tasks-p-list-view"
import { PersonalCalendarView } from "./taks-p-calender-view"
import { TaskDialog } from "./tasks-p-dialog"

// Simulação de usuário logado
const currentUser = {
  id: "user123",
  name: "Carlos Mendes",
  email: "carlos.mendes@empresa.com",
  avatar: "/abstract-geometric-cm.png",
  role: "Desenvolvedor Frontend",
}

export default function PersonalTasksPage() {
  // Todas as tarefas do sistema (em um sistema real, viriam de uma API/banco de dados)
  const [allTasks, setAllTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Desenvolver nova landing page",
      description: "Criar uma nova landing page para o produto X",
      status: "todo",
      priority: "high",
      assignee: "Ana Silva",
      dueDate: new Date(2025, 3, 20),
      dueTime: "09:00",
    },
    {
      id: "2",
      title: "Reunião com cliente Y",
      description: "Discutir requisitos do projeto",
      status: "in-progress",
      priority: "medium",
      assignee: "Carlos Mendes", // Tarefa do usuário atual
      dueDate: new Date(2025, 3, 18),
      dueTime: "14:30",
    },
    {
      id: "3",
      title: "Corrigir bug no formulário de contato",
      description: "O formulário não está enviando emails corretamente",
      status: "in-progress",
      priority: "high",
      assignee: "Pedro Santos",
      dueDate: new Date(2025, 3, 17),
      dueTime: "11:00",
    },
    {
      id: "4",
      title: "Atualizar documentação da API",
      description: "Documentar os novos endpoints criados",
      status: "review",
      priority: "low",
      assignee: "Mariana Costa",
      dueDate: new Date(2025, 3, 25),
      dueTime: "16:00",
    },
    {
      id: "5",
      title: "Implementar autenticação com Google",
      description: "Adicionar opção de login com Google",
      status: "done",
      priority: "medium",
      assignee: "Carlos Mendes", // Tarefa do usuário atual
      dueDate: new Date(2025, 3, 15),
      dueTime: "10:00",
    },
    {
      id: "6",
      title: "Otimizar performance do dashboard",
      description: "Melhorar o tempo de carregamento do dashboard",
      status: "todo",
      priority: "high",
      assignee: "Carlos Mendes", // Tarefa do usuário atual
      dueDate: new Date(2025, 3, 22),
      dueTime: "13:00",
    },
    {
      id: "7",
      title: "Reunião de planejamento semanal",
      description: "Revisar tarefas da semana e definir prioridades",
      status: "todo",
      priority: "medium",
      assignee: "Toda a equipe",
      dueDate: new Date(2025, 3, 18),
      dueTime: "09:00",
    },
    {
      id: "8",
      title: "Preparar apresentação para cliente",
      description: "Criar slides para apresentação do novo produto",
      status: "in-progress",
      priority: "high",
      assignee: "Ana Silva",
      dueDate: new Date(2025, 3, 18),
      dueTime: "16:30",
    },
    {
      id: "9",
      title: "Implementar componente de gráficos",
      description: "Criar componente reutilizável para exibição de gráficos",
      status: "todo",
      priority: "medium",
      assignee: "Carlos Mendes", // Tarefa do usuário atual
      dueDate: new Date(2025, 3, 19),
      dueTime: "10:00",
    },
    {
      id: "10",
      title: "Revisar pull requests pendentes",
      description: "Analisar e aprovar PRs da equipe de frontend",
      status: "todo",
      priority: "low",
      assignee: "Carlos Mendes", // Tarefa do usuário atual
      dueDate: new Date(2025, 3, 17),
      dueTime: "15:00",
    },
    {
      id: "11",
      title: "Atualizar dependências do projeto",
      description: "Verificar e atualizar pacotes npm para versões mais recentes",
      status: "done",
      priority: "low",
      assignee: "Carlos Mendes", // Tarefa do usuário atual
      dueDate: new Date(2025, 3, 14),
      dueTime: "11:30",
    },
    {
      id: "12",
      title: "Reunião 1:1 com gestor",
      description: "Feedback e alinhamento de expectativas",
      status: "todo",
      priority: "medium",
      assignee: "Carlos Mendes", // Tarefa do usuário atual
      dueDate: new Date(2025, 3, 18),
      dueTime: "16:00",
    },
  ])

  // Filtra apenas as tarefas do usuário atual
  const userTasks = allTasks.filter((task) => task.assignee === currentUser.name || task.assignee === "Toda a equipe")

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  // Estatísticas do usuário
  const totalUserTasks = userTasks.length
  const completedTasks = userTasks.filter((task) => task.status === "done").length
  const progressPercentage = totalUserTasks > 0 ? Math.round((completedTasks / totalUserTasks) * 100) : 0

  // Tarefas para hoje
  const today = new Date()
  const todayTasks = userTasks.filter(
    (task) =>
      task.dueDate.getDate() === today.getDate() &&
      task.dueDate.getMonth() === today.getMonth() &&
      task.dueDate.getFullYear() === today.getFullYear(),
  )

  const addTask = (task: Omit<Task, "id">) => {
    const newTask = {
      ...task,
      id: Math.random().toString(36).substring(2, 9),
      assignee: currentUser.name, // Sempre atribui ao usuário atual
    }
    setAllTasks([...allTasks, newTask])
  }

  const updateTask = (updatedTask: Task) => {
    setAllTasks(allTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
  }

  const deleteTask = (taskId: string) => {
    setAllTasks(allTasks.filter((task) => task.id !== taskId))
  }

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    setAllTasks(allTasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)))
  }

  const handleEditTask = (task: Task) => {
    setEditingTask(task)
    setIsDialogOpen(true)
  }

  const handleAddNewTask = () => {
    setEditingTask(null)
    setIsDialogOpen(true)
  }

  return (
    <div className="m-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
            <AvatarFallback>
              <User className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Minhas Tarefas</h1>
            <p className="text-muted-foreground">
              {currentUser.name} • {currentUser.role}
            </p>
          </div>
        </div>
        <Button onClick={handleAddNewTask}>
          <Plus className="mr-2 h-4 w-4" />
          Nova Tarefa
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Progresso</h3>
              <span className="text-sm text-muted-foreground">
                {completedTasks}/{totalUserTasks} tarefas
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium">Tarefas para hoje</h3>
              <span className="text-sm text-muted-foreground">{todayTasks.length} tarefas</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {todayTasks.length === 0 ? (
                "Nenhuma tarefa para hoje"
              ) : (
                <ul className="list-disc list-inside">
                  {todayTasks.slice(0, 2).map((task) => (
                    <li key={task.id} className="truncate">
                      {task.title}
                    </li>
                  ))}
                  {todayTasks.length > 2 && <li>+{todayTasks.length - 2} mais...</li>}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium">Prioridades</h3>
              <span className="text-sm text-muted-foreground">
                {userTasks.filter((t) => t.priority === "high" && t.status !== "done").length} alta prioridade
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              {userTasks.filter((t) => t.priority === "high" && t.status !== "done").length === 0 ? (
                "Nenhuma tarefa de alta prioridade pendente"
              ) : (
                <ul className="list-disc list-inside">
                  {userTasks
                    .filter((t) => t.priority === "high" && t.status !== "done")
                    .slice(0, 2)
                    .map((task) => (
                      <li key={task.id} className="truncate">
                        {task.title}
                      </li>
                    ))}
                  {userTasks.filter((t) => t.priority === "high" && t.status !== "done").length > 2 && (
                    <li>+{userTasks.filter((t) => t.priority === "high" && t.status !== "done").length - 2} mais...</li>
                  )}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="kanban" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="kanban">Kanban</TabsTrigger>
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="calendar">Calendário</TabsTrigger>
        </TabsList>
        <TabsContent value="kanban">
          <PersonalKanbanView
            tasks={userTasks}
            onUpdateTaskStatus={updateTaskStatus}
            onEditTask={handleEditTask}
            onDeleteTask={deleteTask}
          />
        </TabsContent>
        <TabsContent value="list">
          <PersonalListView
            tasks={userTasks}
            onEditTask={handleEditTask}
            onDeleteTask={deleteTask}
            onUpdateTaskStatus={updateTaskStatus}
          />
        </TabsContent>
        <TabsContent value="calendar">
          <PersonalCalendarView tasks={userTasks} onEditTask={handleEditTask} />
        </TabsContent>
      </Tabs>

      <TaskDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        task={editingTask}
        onSave={(task) => {
          if (editingTask) {
            updateTask({ ...task, id: editingTask.id, assignee: currentUser.name })
          } else {
            addTask({ ...task, assignee: currentUser.name })
          }
        }}
        hideAssigneeField={true} // Esconde o campo de responsável, já que sempre será o usuário atual
      />
    </div>
  )
}
