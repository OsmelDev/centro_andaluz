"use client"
import { Button } from "@/components/ui/button"

const days = [
  { label: "Lunes 12", value: "lunes" },
  { label: "Martes 13", value: "martes" },
  { label: "Miércoles 14", value: "miercoles" },
  { label: "Jueves 15", value: "jueves" },
  { label: "Viernes 16", value: "viernes" },
  { label: "Sábado 17", value: "sabado" },
  { label: "Domingo 18", value: "domingo" },
]

interface DayTabsProps {
  selectedDay: string
  onDayChange: (day: string) => void
}

export function DayTabs({ selectedDay, onDayChange }: DayTabsProps) {
  return (
    <div className="container mx-auto ">
      <div className="flex w-full justify-center items-center gap-2 overflow-x-auto py-2">
        {days.map((day) => (
          <Button
            key={day.value}
            variant={selectedDay === day.value ? "default" : "secondary"}
            onClick={() => onDayChange(day.value)}
            className="whitespace-nowrap"
          >
            {day.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
