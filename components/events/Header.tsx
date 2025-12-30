"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Centro Cultural</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Menú
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Actividades
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Reservas</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
