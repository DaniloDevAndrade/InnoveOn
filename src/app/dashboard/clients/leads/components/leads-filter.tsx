"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { LeadStatus } from "@/generated/prisma"

interface LeadFiltersProps {
  activeFilter: LeadStatus | "all"
  onFilterChange: (status: LeadStatus | "all") => void
  onSearch: (term: string) => void
  searchTerm: string
}

export function LeadFilters({ activeFilter, onFilterChange, onSearch, searchTerm }: LeadFiltersProps) {
  const filters: { value: LeadStatus | "all"; label: string }[] = [
    { value: "all", label: "Todos" },
    { value: "new", label: "Novos" },
    { value: "contacted", label: "Contatados" },
    { value: "qualified", label: "Qualificados" },
    { value: "proposal", label: "Proposta" },
    { value: "negotiation", label: "Negociação" },
    { value: "won", label: "Ganhos" },
    { value: "lost", label: "Perdidos" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar leads..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-9 w-9 p-0"
              onClick={() => onSearch("")}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Limpar busca</span>
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant={activeFilter === filter.value ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

