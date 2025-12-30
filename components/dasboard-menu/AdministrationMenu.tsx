'use client'
import React, { useState } from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import EditCreateForm from "./EditCreateForm";
import { MenuItem } from "@/types/types";

const AdministrationMenu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null)
  return (
    <main className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden relative">
      <Header />
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col lg:flex-row max-w-[1400px] mx-auto w-full">
          <MenuList selectedMenu={setSelectedMenuItem} />
          <EditCreateForm selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem}/>
        </div>
      </div>
    </main>
  );
};

export default AdministrationMenu;
