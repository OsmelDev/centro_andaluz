import { User } from "@/types/types";
import { create } from "zustand";

const initialUserValue: User | null = null;

interface AuthStore {
  user: User | null;
  setUser: (data: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: initialUserValue,
  setUser: (data: User | null) => set({ user: data }),
}));
