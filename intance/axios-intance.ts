import axios from "axios";

export const axiosIntance = () => {
  const intance = axios.create({
    baseURL: "http://localhost:8010",
    withCredentials: true,
  });
  return { intance };
};
