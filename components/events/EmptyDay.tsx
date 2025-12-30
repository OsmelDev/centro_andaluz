import { CalendarX } from "lucide-react"

export function EmptyDay() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="rounded-full bg-secondary p-6 mb-6">
        <CalendarX className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">Sin actividades programadas</h3>
      <p className="text-muted-foreground max-w-md">
        Este jueves nos tomamos un descanso de las actividades culturales, pero nuestro{" "}
        <span className="text-primary font-medium">Restaurante</span> permanece abierto en su horario habitual.
      </p>
    </div>
  )
}
