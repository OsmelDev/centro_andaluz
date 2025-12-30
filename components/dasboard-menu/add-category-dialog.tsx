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
import { Textarea } from "../ui/textarea";
import { useAppContext } from "@/context/app-context-";
import { useAdmin } from "@/hooks/useAdmin";

interface AddMenuDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddCategoryDialog({ open, onOpenChange }: AddMenuDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { isLoading } = useAppContext();
  const { handleCreateCategory } = useAdmin();
  
  const onSubmit = handleSubmit(async (data) => {
    const ok = await handleCreateCategory(data);
    if (ok) onOpenChange(false);
    console.log(data);
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-base">
        <DialogHeader>
          <DialogTitle>Agregar Nueva Categoria</DialogTitle>
          <DialogDescription>
            Ingresa los datos de la Categoria
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre de la Categoria</Label>
            <Input
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Debe ingresar el nombre de la oferta",
                },
              })}
              placeholder="Ej: Entrantes"
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
                  value: 10,
                  message: "Debe tener al menos 10 caracteres",
                },
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-[.7rem]">
                {String(errors.description.message)}
              </p>
            )}
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
              disabled={isLoading}
              className="bg-app-primary/80 hover:bg-app-primary transition-colors"
            >
              {isLoading ? "Agregando..." : "Agregar Categoria"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
