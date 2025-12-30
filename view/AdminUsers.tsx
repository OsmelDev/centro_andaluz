"use client";

import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UsersTable } from "../components/dashboard-page/UsersTable";
import { useAuthStore } from "@/store/auth.store";
import DasboardHeader from "@/components/dashboard-page/DasboardHeader";

export default function AdminUsers() {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <div className="max-h-screen bg-background">
      <DasboardHeader user={user} />

      <main className="container bg-background mx-auto px-6 py-4 ">
        {/* Header Section */}
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-muted">
              Gestión de Usuarios
            </h1>
            <p className="text-xs text-muted-foreground">
              Supervisa los perfiles registrados, gestiona permisos y modera el
              acceso a la
              <br />
              plataforma del centro cultural.
            </p>
          </div>
          <Button className="bg-app-primary gap-2 text-white hover:admin-primary-hover">
            <UserPlus className="h-5 w-5" />
            Añadir Usuario
          </Button>
        </div>

        {/* Stats Cards */}
        {/* <div className="mb-8">
          <StatsCards />
        </div> */}

        {/* Users Table */}
        <UsersTable />
      </main>
    </div>
  );
}
