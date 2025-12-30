import { MenuItem } from "@/types/types";
import { Edit } from "lucide-react";
import React, { FC } from "react";

interface CardItemProps {
  menu: MenuItem;
  selectedMenu: React.Dispatch<React.SetStateAction<MenuItem | null>>;
}

const CardItem: FC<CardItemProps> = ({ menu, selectedMenu }) => {
  return (
    <div className="group flex items-center gap-4 p-3 rounded-xl bg-surface-card border border-white/5 hover:border-primary/50 transition-all cursor-pointer">
      <div
        className="size-16 rounded-lg bg-cover bg-center shrink-0"
        data-alt="Juicy gourmet burger with cheese and lettuce"
        style={{ backgroundImage: `url(${menu.img})` }}
      ></div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-white font-semibold truncate">{menu.name}</h3>
          <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wide">
            Principal
          </span>
        </div>
        <p className="text-[#b9a89d] text-sm truncate">{menu.description}</p>
      </div>
      <div className="flex flex-col items-end gap-1 px-4 border-l border-white/10">
        <span className="text-white font-bold text-lg">${menu.price}</span>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-[#b9a89d]">Disponible</span>
        </div>
      </div>
      <div className="flex gap-2 pl-2">
        <button
          onClick={() => selectedMenu(menu)}
          className="p-2 rounded-lg hover:bg-white/10 text-[#b9a89d] hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">
            <Edit />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
