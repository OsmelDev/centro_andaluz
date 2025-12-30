import { ClipboardList, LayoutDashboard, Package, Search, UserPlus, Users } from "lucide-react";

export const DashboardNavigationMenu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Productos", href: "/dashboard/productos", icon: Package },
  { name: "Usuarios", href: "/dashboard/usuarios", icon: Users },
  // { name: "Reportes", href: "/dashboard/reportes", icon: BarChart3 },
]

export const TechnicalNavigationMenu = [
  { name: "Buscar Productos", href: "/tecnico", icon: Search },
  { name: "Clientes", href: "/tecnico/clients", icon: Users },
  { name: "Clientes Atendidos", href: "/tecnico/clients-atended", icon: ClipboardList },
  { name: "Trabajos realizados", href: "/tecnico/trabajos", icon: ClipboardList },
]

export const StoreNavigationMenu = [
  { name: "Buscar Productos", href: "/store", icon: Search },
  { name: "Ventas Realizadas", href: "/store/ventas", icon: ClipboardList },
]

export const ReceptionNavigationMenu = [
  { name: "Recepción de Clientes", href: "/recepcion", icon: UserPlus },
];