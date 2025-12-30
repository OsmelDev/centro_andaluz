import { useAppContext } from "@/context/app-context-";
import { adminServices } from "@/services/admin/admin-services";
import { FieldValues } from "react-hook-form";

export const useAdmin = () => {
  const {
    createEvent,
    createMenu,
    createCategory,
    deleteEvent,
    deleteMenu,
    editEvent,
    editMenu,
  } = adminServices();
  const { setReloadEvents, setReloadMenus, setIsLoading, setReloadCategorys,setReloadUsers } = useAppContext();

  const handleCreateEvent = async (dataForm: FieldValues) => {
    try {
      const { data } = await createEvent(dataForm);
      if (data) return true;
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setReloadEvents((prev) => !prev);
    }
  };

  const handleDeleteEvent = async (_id: string) => {
    try {
      const { data } = await deleteEvent(_id);
      console.log(data);
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setReloadEvents((prev) => !prev);
    }
  };

  const handleUpdateEvent = async (dataForm: FieldValues, _id:string) => {
    try {
      const { data } = await editEvent(dataForm, _id);
      if (data) return true;
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setReloadEvents((prev) => !prev);
    }
  };


  const handleCreateMenu = async (dataForm: FieldValues) => {
    setIsLoading(true)
    try {
      const { data } = await createMenu(dataForm);
      if (data) return true;
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setReloadMenus((prev) => !prev);
      setIsLoading(false)
    }
  };

  const handleUpdateMenu = async (dataForm: FieldValues, _id:string) => {
    try {
      const { data } = await editMenu(dataForm, _id);
      if (data) return true;
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setReloadMenus((prev) => !prev);
    }
  };

  const handleDeleteMenu = async (_id: string) => {
    try {
      const { data } = await deleteMenu(_id);
      console.log(data);
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setReloadMenus((prev) => !prev);
    }
  };

  const handleCreateCategory = async (dataForm: FieldValues) => {
    try {
      const { data } = await createCategory(dataForm);
      if (data) return true;
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setReloadCategorys((prev) => !prev);
    }
  };
  
  return {
    handleCreateEvent,
    handleCreateMenu,
    handleCreateCategory,
    handleDeleteEvent,
    handleDeleteMenu,
    handleUpdateEvent,
    handleUpdateMenu,
  };
};
