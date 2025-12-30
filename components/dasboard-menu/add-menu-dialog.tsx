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
import { Controller, useForm } from "react-hook-form";
// import { useUserContext } from "@/context/userContext";
import { Textarea } from "../ui/textarea";
import { useAdmin } from "@/hooks/useAdmin";
import { useAppContext } from "@/context/app-context-";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface AddMenuDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddMenuDialog({ open, onOpenChange }: AddMenuDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm();
  const { isLoading, categorys } = useAppContext();
  const { handleCreateMenu } = useAdmin();

  const onSubmit = handleSubmit(async (data) => {
    const ok = await handleCreateMenu(data);
    if (ok) onOpenChange(false);
  });
console.log(watch())
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-base">
        <DialogHeader>
          <DialogTitle>Agregar Nueva Oferta</DialogTitle>
          <DialogDescription>Ingresa los datos de la Oferta</DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre Completo</Label>
            <Input
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Debe ingresar el nombre de la oferta",
                },
              })}
              placeholder="Pollo Asado"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-[.7rem]">
                {String(errors.name.message)}
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

          <div className="flex gap-4 justify-between">
            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>

              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione la categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categorys?.map((category) => (
                        <SelectItem key={category._id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="precio">Precio</Label>
              <Input
                id="precio"
                placeholder="Ej: $99.99"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Ingrese la precio de la oferta",
                  },
                })}
              />
              {errors.price && (
                <p className="text-red-500 text-[.7rem]">
                  {String(errors.price.message)}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="img">Poster</Label>
            <Input id="img" type="file" {...register("img")} />
          </div>

          <div className="flex items-center justify-between p-4 bg-surface-card rounded-lg border border-white/5">
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">{watch("isVisible") ? "Disponible" : "No disponible"}</span>
              <span className="text-[#b9a89d] text-xs">
                {watch("isVisible") ? "Visible en el menú público" : "No visible en el menú público"}
                
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                defaultChecked={true}
                className="sr-only peer"
                type="checkbox"
                {...register("isVisible")}
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
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
              className="bg-app-primary/80 hover:bg-app-primary transition-colors"
            >
              {/* {isLoading ? "Agregando..." : "Agregar Oferta"} */}
              Agregar Plato
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
