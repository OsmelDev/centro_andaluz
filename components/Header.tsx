import { useAuthStore } from "@/store/auth.store";
import { Theater } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface HeaderProps {
  changeOption: React.Dispatch<React.SetStateAction<string>>;
}

const Header: FC<HeaderProps> = ({ changeOption }) => {
  const { user } = useAuthStore();
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-base dark:border-b-[#392f28] bg-background/95 dark:bg-[#181411]/95 backdrop-blur-sm px-6 py-3 lg:px-10">
      <div className="flex items-center gap-4 text-muted dark:text-white">
        <div className="size-8 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-3xl text-app-primary">
            <Theater />
          </span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          Centro Andaluz de la Habana
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden md:flex items-center gap-9">
          <div
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            onClick={() => changeOption("home")}
          >
            Inicio
          </div>
          <div
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            onClick={() => changeOption("restaurant")}
          >
            Restaurante
          </div>
          <div
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            onClick={() => changeOption("events")}
          >
            Eventos
          </div>
          <div
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            onClick={() => changeOption("contact")}
          >
            Contacto
          </div>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <Link
              href="/dashboard"
              className="hidden lg:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-app-primary/60 dark:bg-[#392f28] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-app-primary dark:hover:bg-[#4a3e36] transition-colors"
            >
              <span className="truncate">Dashboard</span>
            </Link>
          ) : (
            <Link
              href="/auth"
              className="hidden lg:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-app-primary/60 dark:bg-[#392f28] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-app-primary dark:hover:bg-[#4a3e36] transition-colors"
            >
              <span className="truncate">Admin Login</span>
            </Link>
          )}
          <button className="md:hidden p-2 text-2xl">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
