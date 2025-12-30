import { User } from "@/types/types";
import { create } from "zustand";

const initialUserValue: string = "Inicio";

interface OptionStore {
  optionTab: string;
  setOptionTab: (data: string) => void;
}

export const useOptionStore = create<OptionStore>((set) => ({
  optionTab: initialUserValue,
  setOptionTab: (data:string) => set({ optionTab: data }),
}));
