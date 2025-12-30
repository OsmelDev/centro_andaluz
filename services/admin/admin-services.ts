import { axiosIntance } from "@/intance/axios-intance";
import { FieldValues } from "react-hook-form";

export const adminServices = () => {
  const { intance } = axiosIntance();

  const createEvent = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("ubicacion", data.ubicacion);
    formData.append("fecha", data.fecha);
    formData.append("hours", data.hour);
    formData.append("duration", data.duration);
    formData.append("img", data.img[0]);

    const response = await intance.post("admin/create-event", formData);
    return response;
  };

  const createMenu = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("isVisible", data.isVisible);

    formData.append("img", data.img[0]);

    const response = await intance.post("admin/create-menu", formData);
    return response;
  };

  const createCategory = async (data: FieldValues) => {
    const response = await intance.post("admin/create-category", data);
    return response;
  };

  const createUser = async (data: FieldValues) => {
    const response = await intance.post("/auth/register", data);
    return response;
  };

  const fetchEvents = async () => {
    const response = await intance.get("/admin/events");
    return response;
  };

  const fetchMenus = async () => {
    const response = await intance.get("/admin/menus");
    return response;
  };

  const fetchCategorys = async () => {
    const response = await intance.get("/admin/categorys");
    return response;
  };

  const fetchUsers = async () => {
    const response = await intance.get("/admin/users");
    return response;
  };

  const deleteMenu = async (_id: string) => {
    const response = await intance.delete(`/admin/menu/${_id}`);
    return response;
  };

  const deleteEvent = async (_id: string) => {
    const response = await intance.delete(`/admin/event/${_id}`);
    return response;
  };

  const editMenu = async (data: FieldValues, _id: string) => {
    const formData = new FormData();

    formData.append("_id", _id);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("img", data.img[0]);

    const response = await intance.put("/admin/menu/update-menu", formData);
    return response;
  };

  const editEvent = async (data: FieldValues, _id: string) => {
    const formData = new FormData();

    formData.append("_id", _id);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("ubicacion", data.ubicacion);
    formData.append("fecha", data.fecha);
    formData.append("img", data.img[0]);

    const body = formData;

    const response = await intance.post("/admin/event/update-event", body);
    return response;
  };

  return {
    createEvent,
    createMenu,
    createCategory,
    createUser,
    fetchEvents,
    fetchMenus,
    fetchCategorys,
    fetchUsers,
    deleteMenu,
    deleteEvent,
    editMenu,
    editEvent,
  };
};
