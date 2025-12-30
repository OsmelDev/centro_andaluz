"use client"

import { Bell, Settings } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AdminHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-xl font-bold text-white">C</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Centro Cultural</h1>
              <p className="text-xs text-muted-foreground">Panel de Administración</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Link
              href="/admin"
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/menus"
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Menús
            </Link>
            <Link
              href="/admin/actividades"
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Actividades
            </Link>
            <Link
              href="/admin/usuarios"
              className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-foreground"
            >
              Usuarios
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Bell className="h-5 w-5" />
            </button>
            <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Settings className="h-5 w-5" />
            </button>
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://blob.v0.app/KJkdz.jpg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
