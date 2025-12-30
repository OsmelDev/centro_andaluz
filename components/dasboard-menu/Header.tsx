import { CheckCircle, CircleX, Download, HardHat, Plus } from "lucide-react";
import React from "react";
import { AddMenuButton } from "./add-menu-button";
import { AddCategoryButton } from "./add-category-button";

const Header = () => {
  return (
    <header className="flex-none p-6  border-b border-white/5 bg-background-dark z-10">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-4">
        {/* Title & Actions */}
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-2xl font-bold tracking-tight">
              Gestión de Menús
            </h2>
            <p className="text-base text-sm">
              Crea, edita y actualiza la oferta gastronómica del restaurante.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <button className="flex items-center gap-2 bg-app-primary/10 hover:bg-app-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium border border-base/20 transition-all">
              <span className="material-symbols-outlined text-[20px]">
                <Download />
              </span>
              Exportar
            </button>
            <AddMenuButton className="flex items-center gap-2 bg-app-primary hover:bg-app-primary/90 text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow-lg shadow-primary/20 transition-all" />
            <AddCategoryButton className="flex items-center gap-2 bg-app-primary hover:bg-app-primary/90 text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow-lg shadow-primary/20 transition-all" />
          </div>
        </div>
        {/* Stats Row */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
        <div className="flex flex-col gap-1 rounded-lg p-4 bg-surface-card border border-white/5">
          <div className="flex justify-between items-start">
            <p className="text-[#b9a89d] text-xs font-medium uppercase tracking-wider">
              Total Platos
            </p>
            <span className="material-symbols-outlined text-primary text-[20px]">
              <HardHat />
            </span>
          </div>
          <p className="text-white text-2xl font-bold">45</p>
        </div>
        <div className="flex flex-col gap-1 rounded-lg p-4 bg-surface-card border border-white/5">
          <div className="flex justify-between items-start">
            <p className="text-[#b9a89d] text-xs font-medium uppercase tracking-wider">
              Disponibles
            </p>
            <span className="material-symbols-outlined text-green-500 text-[20px]">
              <CheckCircle />
            </span>
          </div>
          <p className="text-white text-2xl font-bold">42</p>
        </div>
        <div className="flex flex-col gap-1 rounded-lg p-4 bg-surface-card border border-white/5">
          <div className="flex justify-between items-start">
            <p className="text-[#b9a89d] text-xs font-medium uppercase tracking-wider">
              Agotados
            </p>
            <span className="material-symbols-outlined text-red-500 text-[20px]">
              <CircleX />
            </span>
          </div>
          <p className="text-white text-2xl font-bold">3</p>
        </div>
      </div> */}
      </div>
    </header>
  );
};

export default Header;
