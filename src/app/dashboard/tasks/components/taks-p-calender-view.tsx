"use client"

import { useState } from "react"
import { addDays, endOfMonth, format, getDay, isEqual, isSameMonth, isToday, startOfMonth, subDays } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Clock, MoreHorizontal } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Task } from "./types"

interface PersonalCalendarViewProps {
  tasks: Task[]
  onEditTask: (task: Task) => void
}

export function PersonalCalendarView({ tasks, onEditTask }: PersonalCalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const startDate = subDays(monthStart, getDay(monthStart))
  const endDate = addDays(monthEnd, 6 - getDay(monthEnd))

  const rows = []
  let days = []
  let day = startDate

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "todo":
        return "border-l-slate-500"
      case "in-progress":
        return "border-l-blue-500"
      case "review":
        return "border-l-purple-500"
      case "done":
        return "border-l-green-500"
      default:
        return "border-l-gray-300"
    }
  }

  const formatTaskDate = (date: Date) => {
    return format(date, "yyyy-MM-dd")
  }

  const getTasksForDate = (date: Date) => {
    return tasks.filter((task) => isEqual(new Date(formatTaskDate(task.dueDate)), new Date(formatTaskDate(date))))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const cloneDay = new Date(day)
      const dayTasks = getTasksForDate(cloneDay)
      const hasMoreTasks = dayTasks.length > 3

      days.push(
        <div
          key={day.toString()}
          className={`min-h-[120px] p-2 border border-border ${
            !isSameMonth(day, monthStart) ? "bg-muted/30 text-muted-foreground" : isToday(day) ? "bg-muted/50" : ""
          }`}
        >
          <div className="font-medium text-sm mb-1">{format(day, "d", { locale: ptBR })}</div>
          <ScrollArea className="h-[90px]">
            <div className="space-y-1">
              {dayTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => onEditTask(task)}
                  className={`text-xs p-1 rounded cursor-pointer border-l-2 ${getStatusColor(
                    task.status,
                  )} hover:bg-muted/50`}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-medium truncate">{task.title}</div>
                    <div className="flex items-center text-[10px] text-muted-foreground whitespace-nowrap ml-1">
                      <Clock className="h-2 w-2 mr-0.5" />
                      {task.dueTime}
                    </div>
                  </div>
                  <div className="flex items-center mt-0.5 gap-1">
                    <Badge variant="outline" className={`${getPriorityColor(task.priority)} text-[10px] px-1 py-0`}>
                      {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Média" : "Baixa"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          {hasMoreTasks && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-full mt-1 text-xs text-muted-foreground">
                  <MoreHorizontal className="h-3 w-3 mr-1" />
                  Ver todas ({dayTasks.length})
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {dayTasks.map((task) => (
                  <DropdownMenuItem key={task.id} onClick={() => onEditTask(task)}>
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{task.title}</span>
                        <span className="text-xs text-muted-foreground">{task.dueTime}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Média" : "Baixa"}
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>,
      )
      day = addDays(day, 1)
    }
    rows.push(
      <div key={day.toString()} className="grid grid-cols-7">
        {days}
      </div>,
    )
    days = []
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-semibold">{format(currentDate, "MMMM yyyy", { locale: ptBR })}</h2>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" onClick={goToToday}>
          Hoje
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="grid grid-cols-7 border-b">
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
            <div key={day} className="p-2 text-center font-medium">
              {day}
            </div>
          ))}
        </div>
        <div>{rows}</div>
      </Card>
    </div>
  )
}
