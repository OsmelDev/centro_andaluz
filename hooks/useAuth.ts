"use client";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useHandleError } from "./useHandleError";
import { useRouter } from "next/navigation";
import { authServices } from "@/services/auth/auth-services";
import { useAuthStore } from "@/store/auth.store";

export const useAuth = () => {
  const { signing, signup, signout, verify } = authServices();
  const [error, setError] = useState("");
  const { handleError } = useHandleError(setError);
  const { setUser } = useAuthStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (formData: FieldValues) => {
    setIsLoading(true);
    try {
      const { data } = await signing(formData);
      console.log(data);
      setUser(data);
      return router.push("/dashboard");
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async () => {
    try {
      const { data } = await signup();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const { data } = await signout();
      console.log(data);
      setUser(null);
      return router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyAuth = async () => {
    try {
      const { data } = await verify();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2500);
  }, [error]);

  return { login, register, error, logout, verifyAuth };
};
