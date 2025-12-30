import { User } from "@/types/types";
import { Bell, MenuIcon, Search, User2 } from "lucide-react";
import React, { FC } from "react";

interface DasboardHeaderProps {
  user: User;
}

const DasboardHeader: FC<DasboardHeaderProps> = ({ user }) => {
  return (
    <header className="flex w-full h-16 items-center justify-end md:justify-between px-6 py-2 border-b border-surface-dark bg-background-dark">
      {/* <!-- Search --> */}
      <div className="flex-1 max-w-md hidden md:block md:pl-7">
        <label className="relative flex items-center w-full ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary">
            <span className="material-symbols-outlined text-[16px]">
              <Search size={18} />
            </span>
          </div>
          <input
            className="w-full bg-surface-dark text-white text-sm rounded-lg border-none focus:ring-2 focus:ring-primary block pl-10 p-2.5 placeholder-text-secondary"
            placeholder="Buscar en el sistema..."
            type="text"
          />
        </label>
      </div>
      {/* <!-- Right Actions --> */}
      <div className="flex items-center gap-3 ml-4">
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-dark text-white hover:bg-[#4a3e36] transition-colors relative">
          <span className="material-symbols-outlined text-[20px]">
            <Bell size={20} />
          </span>
          <span className="absolute top-2.5 right-3 w-2 h-2 bg-primary rounded-full border border-surface-dark"></span>
        </button>
        <div className="flex items-center gap-3 pl-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-surface-dark flex items-center justify-center text-primary font-bold overflow-hidden border border-surface-dark">
            <span className="material-symbols-outlined text-[24px]">
              <User2 size={18} />
            </span>
          </div>
          <div className="hidden lg:block">
            <p className="text-white text-sm font-bold leading-none">
              {user.name}
            </p>
            <p className="text-text-secondary text-xs mt-1">
              {user.position === "admin" && "Administrador"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DasboardHeader;
