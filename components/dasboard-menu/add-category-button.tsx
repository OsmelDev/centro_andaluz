"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { AddCategoryDialog } from "./add-category-dialog"

export function AddCategoryButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className={cn(className)}>
        <Plus className="mr-2 h-4 w-4" />
        Nueva Categoria
      </Button>
      <AddCategoryDialog open={open} onOpenChange={setOpen} />
    </>
  )
}
