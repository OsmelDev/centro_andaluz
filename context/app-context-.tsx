"use client";
import { useAuth } from "@/hooks/useAuth";
import { adminServices } from "@/services/admin/admin-services";
import { Activity, Category, MenuItem, User } from "@/types/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export const AppContext = createContext<value | null>(null);

interface value {
  setReloadEvents: Dispatch<SetStateAction<boolean>>;
  setReloadMenus: Dispatch<SetStateAction<boolean>>;
  setReloadUsers: Dispatch<SetStateAction<boolean>>;
  setReloadCategorys: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  reloadEvents: boolean;
  reloadMenus: boolean;
  events: Activity[] | null;
  menus: MenuItem[] | null;
  categorys:Category[] | null
  users:User[] | null
}
interface UseProviderProps {
  children: ReactNode;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw Error("useAppComtext solo puede ser usado dentro de un Provider");

  return context;
};

export const AppContextProvider = ({ children }: UseProviderProps) => {
  const { verifyAuth } = useAuth();
  const { fetchEvents, fetchMenus, fetchCategorys, fetchUsers } =
    adminServices();

  const [reloadEvents, setReloadEvents] = useState(false);
  const [reloadMenus, setReloadMenus] = useState(false);
  const [reloadUsers, setReloadUsers] = useState(false);
  const [reloadCategorys, setReloadCategorys] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<Activity[] | null>(null);
  const [menus, setMenus] = useState<MenuItem[] | null>(null);
  const [categorys, setCategorys] = useState<Category[] | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  const getEvents = async () => {
    try {
      const { data } = await fetchEvents();
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMenus = async () => {
    try {
      const { data } = await fetchMenus();
      setMenus(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategorys = async () => {
    try {
      const { data } = await fetchCategorys();
      console.log(data)
      setCategorys(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyAuth();
    getEvents();
    getMenus();
    getCategorys();
    getUsers();
  }, []);

  useEffect(() => {
    getEvents();
    getMenus();
    getCategorys();
    getUsers();
  }, [reloadEvents, reloadMenus, reloadUsers, reloadCategorys]);

  return (
    <AppContext.Provider
      value={{
        setReloadEvents,
        reloadEvents,
        setReloadMenus,
        reloadMenus,
        setIsLoading,
        isLoading,
        events,
        menus,
        categorys,
users,
        setReloadUsers,
        setReloadCategorys,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
