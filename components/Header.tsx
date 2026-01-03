import { Theater } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";



const Header = () => {
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
          <Link href="/"
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <Link href="/restaurant"
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Restaurante
          </Link>
          <Link href="/events"
            className="text-sm font-medium leading-normal hover:text-primary transition-colors"
            
          >
            Eventos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
