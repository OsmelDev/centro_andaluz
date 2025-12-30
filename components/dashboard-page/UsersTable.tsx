"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, Pencil, Ban, Trash2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const users = [
  {
    id: 1,
    name: "Ana García",
    email: "ana.garcia@gmail.com",
    role: "Administrador",
    status: "Activo",
    date: "12 Oct, 2023",
    avatar: "https://blob.v0.app/KJkdz.jpg",
  },
  {
    id: 2,
    name: "Juan Pérez",
    email: "juan.perez@outlook.com",
    role: "Usuario",
    status: "Activo",
    date: "05 Nov, 2023",
    avatar: null,
    initials: "JP",
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    email: "carlos.ruiz88@yahoo.com",
    role: "Usuario",
    status: "Suspendido",
    date: "20 Sep, 2023",
    avatar: "https://blob.v0.app/user-male.jpg",
  },
  {
    id: 4,
    name: "María López",
    email: "maria.lopez@example.com",
    role: "Moderador",
    status: "Pendiente",
    date: "01 Dec, 2023",
    avatar: "https://blob.v0.app/user-female.jpg",
  },
]

const tabs = ["Todos", "Activos", "Pendientes", "Suspendidos"]

export function UsersTable() {
  const [activeTab, setActiveTab] = useState("Todos")
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="space-y-2 flex flex-col">
      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Buscar por nombre, correo o ID..." className="bg-surface-dark pl-10" />
        </div>
        <div className="flex gap-2 p-1 rounded-lg bg-surface-dark ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-4 py-1 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === tab ? "bg-app-primary text-muted" : "text-muted/80 hover:text-foreground hover:bg-accent/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <Button variant="ghost" size="icon">
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg bg-surface-dark">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted">
                Usuario
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted">
                Rol
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted">
                Estado
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted">
                Fecha Registro
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50 ">
            {users.map((user) => (
              <tr key={user.id} className="transition-colors hover:bg-secondary/50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      {user.avatar && <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />}
                      <AvatarFallback className="bg-blue-600/10 text-blue-500">
                        {user.initials || user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-muted">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      user.role === "Administrador"
                        ? "bg-blue-600/10 text-blue-500"
                        : user.role === "Moderador"
                          ? "bg-purple-600/10 text-purple-500"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      user.status === "Activo"
                        ? "bg-green-600/10 text-green-500"
                        : user.status === "Suspendido"
                          ? "bg-red-600/10 text-red-500"
                          : "bg-yellow-600/10 text-yellow-500"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        user.status === "Activo"
                          ? "bg-green-500"
                          : user.status === "Suspendido"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                      }`}
                    />
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{user.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Ban className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
          <div className="text-sm text-muted-foreground">
            Mostrando <span className="font-medium text-foreground">1-10</span> de{" "}
            <span className="font-medium text-foreground">1,245</span> usuarios
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            >
              ‹
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="icon"
                className={`h-9 w-9 ${currentPage === page ? "admin-primary text-white hover:admin-primary-hover" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <span className="px-2 text-muted-foreground">...</span>
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setCurrentPage(currentPage + 1)}>
              ›
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
