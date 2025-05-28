export type TaskStatus = "todo" | "in-progress" | "review" | "done"
export type TaskPriority = "low" | "medium" | "high"

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  assignee: string
  dueDate: Date
  dueTime: string // Novo campo para hora
}

export interface KanbanColumn {
  id: TaskStatus
  title: string
  tasks: Task[]
}
