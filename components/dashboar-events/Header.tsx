import { Calendar, Plus } from "lucide-react";
import React from "react";
import { AddEventButton } from "./add-event-button";

const Header = () => {
  return (
    <header className="h-14 border-b border-[#392f28] bg-surface-dark px-6 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Gestión de Actividades
        </h2>
        <span className="px-2 py-0.5 rounded-full bg-[#392f28] text-xs text-text-secondary font-medium border border-[#54453b]">
          Semana 42
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center h-9 px-4 rounded-lg bg-[#392f28] hover:bg-[#4a3d33] text-white text-sm font-medium transition-colors border border-[#54453b]">
          <span className="material-symbols-outlined text-[18px] mr-2">
            <Calendar />
          </span>
          Ver calendario
        </button>
        <AddEventButton className="flex items-center justify-center h-9 px-4 rounded-lg bg-app-primary/40 hover:bg-app-primary text-muted text-sm font-bold transition-colors shadow-lg shadow-orange-900/20" />
      </div>
    </header>
  );
};

export default Header;
