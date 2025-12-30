import { MenuItem } from "@/types/types";
import { Save, Trash2, UploadCloud, X } from "lucide-react";
import React, { FC } from "react";

interface EditCreateFormProps{
  selectedMenuItem:MenuItem | null
  setSelectedMenuItem: React.Dispatch<React.SetStateAction<MenuItem | null>>
}

const EditCreateForm:FC<EditCreateFormProps> = ({selectedMenuItem,setSelectedMenuItem}) => {
  return (
    <div className={`w-full ${selectedMenuItem ? "lg:max-w-[400px]" : "lg:max-w-0 overflow-x-hidden " } transition-all duration-500 bg-surface-dark border-l border-white/10 flex flex-col h-full overflow-y-auto scroll-none shrink-0 shadow-2xl`}>
      <div className="p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 className="text-lg font-bold text-white">Editar Plato</h3>
          <div className="flex gap-1">
            <button
              className="text-[#b9a89d] hover:text-red-400 p-2 rounded-lg hover:bg-white/5 transition-colors"
              title="Eliminar"
            >
              <span className="material-symbols-outlined text-[20px]">
                <Trash2 />
              </span>
            </button>
            <button
            onClick={()=>setSelectedMenuItem(null)}
              className="text-[#b9a89d] hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              title="Cerrar"
            >
              <span className="material-symbols-outlined text-[20px]">
                <X />
              </span>
            </button>
          </div>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[#b9a89d] uppercase">
              Fotografía
            </label>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer border-2 border-dashed border-white/10 hover:border-primary/50 transition-all bg-surface-card">
              <img
                alt="Plato actual"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                data-alt="Current selected dish: salad"
                src={selectedMenuItem?.img}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl mb-1 drop-shadow-lg">
                  <UploadCloud />
                </span>
                <span className="text-white text-xs font-medium drop-shadow-md">
                  Cambiar Imagen
                </span>
              </div>
            </div>
          </div>
          {/* Basic Info */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[#b9a89d] uppercase">
              Nombre del Plato
            </label>
            <input
              className="w-full bg-[#2C241E] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary text-sm transition-all"
              type="text"
              defaultValue={selectedMenuItem?.name}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-[#b9a89d] uppercase">
                Categoría
              </label>
              <select className="w-full bg-[#2C241E] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary text-sm transition-all">
                <option selected={false} value="entrante">
                  Entrante
                </option>
                <option value="principal">Principal</option>
                <option value="postre">Postre</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-[#b9a89d] uppercase">
                Precio (€)
              </label>
              <input
                className="w-full bg-[#2C241E] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-primary focus:border-primary text-sm transition-all"
                step="0.50"
                type="number"
                defaultValue={selectedMenuItem?.price}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[#b9a89d] uppercase">
              Descripción
            </label>
            <textarea
              className="w-full bg-[#2C241E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary text-sm resize-none transition-all"
              rows={4}
              defaultValue={selectedMenuItem?.description}
            />
            <p className="text-right text-[10px] text-[#b9a89d]">
              56/150 caracteres
            </p>
          </div>
          {/* Status Toggle */}
          <div className="flex items-center justify-between p-4 bg-surface-card rounded-lg border border-white/5">
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">Disponible</span>
              <span className="text-[#b9a89d] text-xs">
                Visible en el menú público
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                defaultChecked={selectedMenuItem?.isVisible}
                className="sr-only peer"
                type="checkbox"
                
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-app-primary"></div>
            </label>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              className="flex-1 px-2 py-2 bg-transparent border border-white/10 hover:bg-white/5 text-white text-sm font-bold rounded-lg transition-all"
              type="button"
            >
              Cancelar
            </button>
            <button
              className="flex-1 px-4 py-2 bg-app-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex justify-center items-center gap-2"
              type="submit"
            >
              <span className="material-symbols-outlined text-[18px]">
                <Save />
              </span>
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCreateForm;
