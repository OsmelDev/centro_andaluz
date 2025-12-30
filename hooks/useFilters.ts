"use client";
import { MenuItem } from "@/types/types";
import { useCallback } from "react";

export const useFilter = (menus: MenuItem[] | null) => {
  const filter = useCallback(() => {
    const entrantes = menus?.filter((menu) => menu.category === "Entrantes");
    const platos_principales = menus?.filter(
      (menu) => menu.category === "Platos Principales"
    );
    const bebidas = menus?.filter(
      (menu) => menu.category === "Vinos y bebidas"
    );
    const postres = menus?.filter((menu) => menu.category === "Postres");

    return { entrantes, platos_principales, bebidas, postres };
  }, [menus]);

  return { filter };
};
