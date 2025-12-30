"use client";

import { useAuth } from "@/hooks/useAuth";
import {
  ArrowLeft,
  Eye,
  EyeClosed,
  KeyRound,
  Settings,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [reveal, setReveal] = useState(false);
  const { login } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const ok = await login(data);
    console.log(ok);
  });

  return (
    <div className="layout-container flex h-screen grow flex-col justify-center items-center p-4">
      {/* <!-- Central Card Container --> */}
      <div className="max-h-[600px] w-full max-w-[480px] rounded-xl border border-base dark:border-[#54453b] bg-surface-dark dark:bg-[#181411] shadow-2xl overflow-hidden relative">
        {/* <!-- Optional Top Accent Line --> */}
        <div className="absolute top-0 left-0 w-full h-1 bg-app-primary"></div>
        <div className="p-8 sm:p-10 flex flex-col gap-2">
          {/* <!-- Header Section --> */}
          <div className="flex flex-col items-center justify-center pb-4">
            {/* <!-- Icon or Logo Placeholder --> */}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#27201c] border border-[#54453b]">
              <span className="material-symbols-outlined text-primary text-3xl">
                <Settings size={40} />
              </span>
            </div>
            <h2 className="text-muted dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center">
              Acceso de Administración
            </h2>
            <p className="text-[#887569] dark:text-[#b9a89d]  font-normal leading-normal pt-2 text-center">
              Gestión de Contenidos - Centro Cultural
            </p>
          </div>
          {/* <!-- Login Form --> */}
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* <!-- Username Field --> */}
            <label className="flex flex-col gap-2">
              <span className="text-muted dark:text-white text-sm font-medium leading-normal">
                Usuario
              </span>
             <div className="flex flex-col gap-0.5">
             <div className="relative">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dbd6] dark:border-[#54453b] bg-transparent dark:bg-[#27201c] focus:border-primary h-10 placeholder:text-[#887569] dark:placeholder:text-[#b9a89d] px-[15px]  font-normal leading-normal transition-colors pl-11"
                  placeholder="ej. Usuario"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Ingrese el nombre del usuario",
                    },
                  })}
                />
               
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#887569] dark:text-[#b9a89d]">
                  <span className="material-symbols-outlined text-[20px]">
                    <UserCircle2 />
                  </span>
                </div>
              </div>
                {errors.username && (
                  <p className="text-red-500 text-sm">
                    {String(errors.username.message)}
                  </p>
                )}
             </div>
            </label>
            {/* <!-- Password Field --> */}
            <label className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-muted dark:text-white text-sm font-medium leading-normal">
                  Contraseña
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="relative flex w-full flex-1 items-stretch rounded-lg">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dbd6] dark:border-[#54453b] bg-transparent dark:bg-[#27201c] focus:border-primary h-10 placeholder:text-[#887569] dark:placeholder:text-[#b9a89d] px-[15px]  font-normal leading-normal transition-colors pl-11"
                    placeholder="Ingresa tu contraseña"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Debe ingresar el password",
                      },
                    })}
                    type={reveal ? "text" : "password"}
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#887569] dark:text-[#b9a89d] z-10">
                    <span className="material-symbols-outlined text-[20px]">
                      <KeyRound />
                    </span>
                  </div>
                  <span
                    onClick={() => setReveal(!reveal)}
                    className=" absolute top-2 right-3 material-symbols-outlined text-[24px] hover:text-primary"
                  >
                    {reveal ? <Eye /> : <EyeClosed />}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {String(errors.password.message)}
                  </p>
                )}
              </div>

              <div className="flex justify-end pt-1">
                <a
                  className="text-sm font-medium text-primary hover:text-[#ff9d5c] transition-colors"
                  href="#"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </label>
            {/* <!-- Submit Button --> */}
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-app-primary/80 hover:bg-app-primary text-muted  font-bold leading-normal tracking-[0.015em] transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 mt-2">
              <span className="truncate">Iniciar Sesión</span>
            </button>
          </form>
          {/* <!-- Footer Links --> */}
          <div className="pt-6 border-t border-base dark:border-[#54453b] mt-4 text-center">
            <Link
              className="inline-flex items-center gap-2 text-sm text-[#887569] dark:text-[#b9a89d] hover:text-primary transition-colors"
              href="/"
            >
              <span className="material-symbols-outlined text-[16px]">
                <ArrowLeft />
              </span>
              Volver al sitio público
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Background Decoration (Optional abstract pattern description for screen readers/context) --> */}
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#ee7c2b_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"
        data-alt="Abstract subtle dot pattern background"
      ></div>
    </div>
  );
};

export default Auth;
