"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Leads } from "@/generated/prisma"
import { formatCurrency, formatDate } from "@/app/utils/leadsUtils"

interface LeadTableProps {
  leads: Leads[]
  onEdit: (lead: Leads) => void
  onDelete: (id: string) => void
}

type SortField = "name" | "company" | "status" | "value" | "createdAt"
type SortDirection = "asc" | "desc"

export function LeadTable({ leads, onEdit, onDelete }: LeadTableProps) {
  const [sortField, setSortField] = useState<SortField>("createdAt")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const sortedLeads = [...leads].sort((a, b) => {
    let comparison = 0

    switch (sortField) {
      case "name":
        comparison = a.name.localeCompare(b.name)
        break
      case "status":
        comparison = a.status.localeCompare(b.status)
        break
      case "value":
        comparison = a.value - b.value
        break
      case "createdAt":
        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        break
    }

    return sortDirection === "asc" ? comparison : -comparison
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "contacted":
        return "bg-purple-100 text-purple-800"
      case "qualifild":
        return "bg-indigo-100 text-indigo-800"
      case "proposal":
        return "bg-yellow-100 text-yellow-800"
      case "negotiation":
        return "bg-orange-100 text-orange-800"
      case "won":
        return "bg-green-100 text-green-800"
      case "lost":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">
              <Button variant="ghost" onClick={() => handleSort("name")} className="flex items-center">
                Nome
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("status")} className="flex items-center">
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button variant="ghost" onClick={() => handleSort("value")} className="flex items-center justify-end">
                Valor
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("createdAt")} className="flex items-center">
                Data
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedLeads.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                Nenhum lead encontrado
              </TableCell>
            </TableRow>
          ) : (
            sortedLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">
                  <div>{lead.name}</div>
                  <div className="text-sm text-muted-foreground">{lead.email}</div>
                </TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(lead.status)}`}>
                    {lead.status === "new" && "Novo"}
                    {lead.status === "contacted" && "Contatado"}
                    {lead.status === "qualified" && "Qualificado"}
                    {lead.status === "proposal" && "Proposta"}
                    {lead.status === "negotiation" && "Negociação"}
                    {lead.status === "won" && "Ganho"}
                    {lead.status === "lost" && "Perdido"}
                  </Badge>
                </TableCell>
                <TableCell>{formatCurrency(lead.value)}</TableCell>
                <TableCell>{formatDate(lead.createdAt.toDateString())}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit(lead)}>Editar</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          if (window.confirm("Tem certeza que deseja excluir este lead?")) {
                            onDelete(lead.id)
                          }
                        }}
                        className="text-red-600"
                      >
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

