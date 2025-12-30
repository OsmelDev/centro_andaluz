import { Users, CheckCircle2, Ban, MoreVertical, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/* Total Users */}
      <Card className="bg-card p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-600/10 p-2">
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">TOTAL USUARIOS</span>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">
          <div className="flex items-end gap-2">
            <h3 className="text-4xl font-bold text-foreground">1,245</h3>
            <div className="mb-1 flex items-center gap-1 text-green-500">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">12%</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Crecimiento este mes</p>
        </div>
      </Card>

      {/* Active Users */}
      <Card className="bg-card p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-600/10 p-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">ACTIVOS</span>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-4xl font-bold text-foreground">1,100</h3>
          <p className="mt-2 text-sm text-muted-foreground">Usuarios verificados</p>
        </div>
      </Card>

      {/* Suspended Users */}
      <Card className="bg-card p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-red-600/10 p-2">
              <Ban className="h-5 w-5 text-red-500" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">SUSPENDIDOS</span>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-4xl font-bold text-foreground">145</h3>
          <p className="mt-2 text-sm text-red-500">• Requieren revisión</p>
        </div>
      </Card>
    </div>
  )
}
