'use client'
import { useOptionStore } from "@/store/options.store";
import {
  CalendarDaysIcon,
  LayoutDashboard,
  LogOut,
  MenuIcon,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";

const options = [
  { name: "Inicio", link: "/dashboard", icon: <LayoutDashboard /> },
  {
    name: "Restaurante",
    link: "/dashboard/restaurant",
    icon: <UtensilsCrossed />,
  },
  {
    name: "Agenda Cultural",
    link: "/dashboard/events",
    icon: <CalendarDaysIcon />,
  },
  { name: "Usuarios", link: "/dashboard/users", icon: <Users /> },
];

const Sidebar = () => {
  const router =useRouter()
  const { setOptionTab, optionTab } = useOptionStore();
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`w-full md:w-1/3 lg:w-full h-full z-50 bg-background absolute lg:static top-0 ${
        open ? "left-0" : "-left-[60rem]"
      } flex justify-between md:h-full flex-col border-r border-surface-dark  md:flex flex-shrink-0 transition-all duration-300`}
    >
      <button className="lg:hidden text-white mr-4 fixed top-5 left-5 z-50">
        <span
          onClick={() => {
            setOpen(!open);
          }}
          className="material-symbols-outlined"
        >
          <MenuIcon />
        </span>
      </button>
      {/* <!-- Brand --> */}
      <div onClick={()=>router.push('/')} className="flex flex-col justify-center px-4 py-2 md:text-end text-center lg:text-start md:p-6 md:pb-2">
        <h1 className="text-secondary text-xl font-bold leading-normal tracking-tight">
          Centro Andaluz
        </h1>
        <p className="text-text-secondary text-xs font-normal mt-1">
          Panel de Administración
        </p>
      </div>
      {/* <!-- Navigation --> */}
      <nav className="flex-1 flex flex-col gap-2 px-4 py-4 overflow-y-auto">
        {options.map((option) => (
          <Link
            onClick={() => setOptionTab(option.name)}
            key={option.name}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg ${
              optionTab === option.name && "bg-app-primary"
            }  text-muted transition-colors`}
            href={option.link}
          >
            <span className="material-symbols-outlined text-[20px]">
              {option.icon}
            </span>
            <p className="text-sm font-bold">{option.name}</p>
          </Link>
        ))}
      </nav>
      {/* <!-- Footer Actions --> */}
      <div className="p-2 md:p-4 border-t border-surface-dark">
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:text-red-400 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[20px]">
            <LogOut />
          </span>
          <p className="text-sm font-medium">Cerrar Sesión</p>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
