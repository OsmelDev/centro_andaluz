"use client";
import { Activity, Category, MenuItem } from "@/types/types";
import {
  createContext,
  ReactNode,
  useContext,
} from "react";

export const AppContext = createContext<value | null>(null);

interface value {

  initialEvents: Activity[] | null;
  initialCategories:Category [] | null;
  initialMenus:  MenuItem[] | null;
}
interface UseProviderProps {
  children: ReactNode;
  initialEvents: Activity[] | null;
  initialCategories: Category[]  | null;
  initialMenus: MenuItem[]  | null;
  initialMetadata: any;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw Error("useAppComtext solo puede ser usado dentro de un Provider");

  return context;
};

export const AppContextProvider = ({
  children,
  initialEvents,
  initialCategories,
  initialMenus,
  initialMetadata,
}: UseProviderProps) => {

  return (
    <AppContext.Provider
      value={{
        initialEvents,
        initialCategories,
        initialMenus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
