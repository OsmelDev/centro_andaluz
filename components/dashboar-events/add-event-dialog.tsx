"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
// import { useUserContext } from "@/context/userContext";
import { Textarea } from "../ui/textarea";
import { useAdmin } from "@/hooks/useAdmin";
import { useAppContext } from "@/context/app-context-";
import { Clock } from "lucide-react";

interface AddEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddEventDialog({ open, onOpenChange }: AddEventDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isLoading } = useAppContext();
  const { handleCreateEvent } = useAdmin();

  const onSubmit = handleSubmit(async (data) => {
    const ok = await handleCreateEvent(data);
    if (ok) onOpenChange(false);
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-base">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Evento</DialogTitle>
          <DialogDescription>Ingresa los datos del Evento</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Nombre Completo</Label>
            <Input
              id="title"
              {...register("title", {
                required: {
                  value: true,
                  message: "Debe ingresar el titulo del evento",
                },
              })}
              placeholder="Noche Gitana"
              required
            />
            {errors.title && (
              <p className="text-red-500 text-[.7rem]">
                {String(errors.title.message)}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripcion</Label>

            <Textarea
              id="description"
              rows={4}
              {...register("description", {
                required: {
                  value: true,
                  message: "Ingrese la descripcion del Evento",
                },
                minLength: {
                  value: 50,
                  message: "Debe tener al menos 50 caracteres",
                },
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-[.7rem]">
                {String(errors.description.message)}
              </p>
            )}
          </div>

          <div className="flex gap-5 ">
            <div className="space-y-2">
              <Label
                htmlFor="fecha"
                className="text-[11px] font-bold uppercase tracking-wider text-text-secondary"
              >
                Fecha
              </Label>
              <Input
                id="fecha"
                placeholder="Fecha del Evento"
                {...register("fecha", {
                  required: {
                    value: true,
                    message: "Ingrese la fecha del Evento",
                  },
                })}
                className="w-full bg-[#2a221d] border border-[#392f28] focus:border-primary text-white rounded-lg  pr-4 py-1.5 font-medium focus:ring-1 focus:ring-primary transition-all color-scheme-dark"
              />
              {errors.fecha && (
                <p className="text-red-500 text-[.7rem]">
                  {String(errors.fecha.message)}
                </p>
              )}
            </div>

            <div className="h-full flex flex-col gap-2">
              <Label
                htmlFor="time"
                className="text-[11px] font-bold uppercase tracking-wider text-text-secondary"
              >
                Hora Inicio
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-text-secondary text-[20px]">
                    <Clock />
                  </span>
                </div>
                <Input
                  className="w-full bg-[#2a221d] border border-[#392f28] focus:border-primary text-white rounded-lg pl-10 pr-4 py-1.5 font-medium focus:ring-1 focus:ring-primary transition-all color-scheme-dark"
                  type="time"
                  defaultValue="12:00"
                  id="time"
                  {...register("hour", {
                    required: {
                      value: true,
                      message: "Ingrese la hora del Evento",
                    },
                  })}
                />
                {errors.hour && (
                  <p className="text-red-500 text-[.7rem]">
                    {String(errors.hour.message)}
                  </p>
                )}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2">
              <Label
                htmlFor="duration"
                className="text-[11px] font-bold uppercase tracking-wider text-text-secondary"
              >
                Duración (min)
              </Label>
              <Input
                className="w-full bg-[#2a221d] border border-[#392f28] focus:border-primary text-white rounded-lg px-4 py-3 font-medium focus:ring-1 focus:ring-primary transition-all"
                type="number"
                defaultValue="120"
                id="duration"
                {...register("duration", {
                  required: {
                    value: true,
                    message: "Ingrese la duracion del Evento",
                  },
                })}
              />
              {errors.duration && (
                <p className="text-red-500 text-[.7rem]">
                  {String(errors.duration.message)}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ubicacion">Ubicacion</Label>
            <Input
              id="ubicacion"
              placeholder="Ubicacion del Evento"
              {...register("ubicacion", {
                required: {
                  value: true,
                  message: "Ingrese la ubicacion del Evento",
                },
              })}
            />
            {errors.ubicacion && (
              <p className="text-red-500 text-[.7rem]">
                {String(errors.ubicacion.message)}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="poster">Poster</Label>
            <Input id="poster" type="file" {...register("img")} />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={false}
              className="bg-app-primary/80 hover:bg-app-primary"
            >
              {/* {isLoading ? "Agregando..." : "Agregar Evento"} */}
              Agregar Evento
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
