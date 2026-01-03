import { API_TOKEN, API_URL } from "@/config";
import axios from "axios";

export const axiosInstance = () => {
  const instance = axios.create({
    baseURL:
      API_URL || "https://phenomenal-baseball-dd992b91a1.strapiapp.com/api",
    withCredentials: true,
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${API_TOKEN}`,
      // 'User-Agent': 'Next.js Middleware',
    },
  });

  const middlewareInstance = axios.create({
    baseURL:
      API_URL || "https://phenomenal-baseball-dd992b91a1.strapiapp.com/api",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${API_TOKEN}`,
      // 'Content-Type': 'application/json',
      // 'User-Agent': 'Next.js Middleware',
    },
    timeout: 40000,
  });

  return { instance, middlewareInstance };
};
