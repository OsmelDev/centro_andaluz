"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { AddEventDialog } from "./add-event-dialog"

export function AddEventButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className={cn(className)}>
        <Plus className="mr-2 h-4 w-4" />
        Agregar Evento
      </Button>
      <AddEventDialog open={open} onOpenChange={setOpen} />
    </>
  )
}
