"use client"

import React from "react";
import { AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ErrorPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle>Acceso No Autorizado</CardTitle>
          <CardDescription>No tienes permiso para acceder a esta página</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">Por favor inicia sesión para continuar</p>
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
