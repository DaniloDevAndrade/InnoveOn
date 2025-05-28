"use client"
import { useState } from "react"
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Edit, Trash2 } from "lucide-react"
import { format, isSameDay } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { KanbanColumn, Task, TaskStatus } from "./types"

interface PersonalKanbanViewProps {
  tasks: Task[]
  onUpdateTaskStatus: (taskId: string, newStatus: TaskStatus) => void
  onEditTask: (task: Task) => void
  onDeleteTask: (taskId: string) => void
}

export function PersonalKanbanView({ tasks, onUpdateTaskStatus, onEditTask, onDeleteTask }: PersonalKanbanViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Filtrar tarefas pelo dia selecionado
  const filteredTasks = selectedDate ? tasks.filter((task) => isSameDay(task.dueDate, selectedDate)) : tasks

  const columns: KanbanColumn[] = [
    {
      id: "todo",
      title: "A Fazer",
      tasks: filteredTasks.filter((task) => task.status === "todo"),
    },
    {
      id: "in-progress",
      title: "Em Progresso",
      tasks: filteredTasks.filter((task) => task.status === "in-progress"),
    },
    {
      id: "review",
      title: "Em Revisão",
      tasks: filteredTasks.filter((task) => task.status === "review"),
    },
    {
      id: "done",
      title: "Concluído",
      tasks: filteredTasks.filter((task) => task.status === "done"),
    },
  ]

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    // Se não houver destino ou o destino for o mesmo que a origem, não faz nada
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return
    }

    // Atualiza o status da tarefa
    onUpdateTaskStatus(draggableId, destination.droppableId as TaskStatus)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  // Função para mostrar todas as tarefas
  const showAllTasks = () => {
    setSelectedDate(undefined)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {selectedDate ? format(selectedDate, "dd 'de' MMMM, yyyy", { locale: ptBR }) : "Todas as tarefas"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
                locale={ptBR}
              />
              <div className="p-3 border-t">
                <Button variant="ghost" className="w-full" onClick={showAllTasks}>
                  Mostrar todas as tarefas
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="text-sm text-muted-foreground">
          {selectedDate
            ? `Mostrando tarefas de ${format(selectedDate, "dd/MM/yyyy", { locale: ptBR })}`
            : "Mostrando todas as minhas tarefas"}
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((column) => (
            <div key={column.id} className="flex flex-col">
              <div className="mb-3 flex items-center">
                <h3 className="font-medium text-lg">{column.title}</h3>
                <Badge variant="outline" className="ml-2">
                  {column.tasks.length}
                </Badge>
              </div>
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex-1 bg-muted/30 rounded-lg p-2 min-h-[500px]"
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-3 shadow-sm"
                          >
                            <CardHeader className="p-3 pb-0">
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-base font-medium">{task.title}</CardTitle>
                                <div className="flex space-x-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => onEditTask(task)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => onDeleteTask(task.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-3 pt-2">
                              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{task.description}</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <Badge className={getPriorityColor(task.priority)}>
                                  {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Média" : "Baixa"}
                                </Badge>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {format(task.dueDate, "dd/MM/yyyy", { locale: ptBR })}
                                </div>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {task.dueTime}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}
