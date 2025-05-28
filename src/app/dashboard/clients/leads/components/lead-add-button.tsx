"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface AddLeadButtonProps {
  onClick: () => void
}

export function AddLeadButton({ onClick }: AddLeadButtonProps) {
  return (
    <Button onClick={onClick} className="bg-[#016c45] text-white">
      <Plus className="mr-2 h-4 w-4" />
      Novo Lead
    </Button>
  )
}

