"use client";
import { Search } from "lucide-react";
import React, { FC, useState } from "react";
import TableContainer from "./TableContainer";
import { useAppContext } from "@/context/app-context-";
import { MenuItem } from "@/types/types";

interface MenuListProps {
  selectedMenu: React.Dispatch<React.SetStateAction<MenuItem | null>>;
}

const MenuList: FC<MenuListProps> = ({ selectedMenu }) => {
  const { menus } = useAppContext();
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("");

  const filteredMenu = term ? menus?.filter((menu) => menu.name.includes(term)) :  menus?.filter((menu) => menu.category.includes(category))

  return (
    <div className="flex-1 flex flex-col overflow-hidden border-r border-white/5">
      {/* Toolbar */}
      <div className="px-4 py-2 border-b border-white/5 bg-background-dark/95 backdrop-blur flex gap-3 items-center sticky top-0 z-10">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#b9a89d]">
            <Search size={18} />
          </span>
          <input
            className="w-full bg-surface-dark border-none rounded-lg py-2 pl-10 pr-4 text-muted placeholder-[#b9a89d] focus:ring-1 focus:ring-primary text-sm"
            placeholder="Buscar plato..."
            type="text"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <select onChange={(e)=>setCategory(e.target.value)} className="bg-surface-dark border-none text-white text-sm rounded-lg py-2 px-3 focus:ring-1 focus:ring-primary cursor-pointer">
          <option value="">Todas las Categorias</option>
          <option value="Entrantes">Entrantes</option>
          <option value="Platos Principales">Principales</option>
          <option value="Postres">Postres</option>
          <option>Bebidas</option>
        </select>
      </div>
      {/* Table Container */}
      {filteredMenu ? (
        <TableContainer selectedMenu={selectedMenu} menus={filteredMenu} />
      ) : menus ? (
        <TableContainer selectedMenu={selectedMenu} menus={menus} />
      ) : (
        <h1>No ahi menu que mostrar</h1>
      )}
    </div>
  );
};

export default MenuList;
