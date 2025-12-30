"use client";
import { Activity } from "@/types/types";
import {
  Bold,
  CalendarDays,
  ChevronDown,
  Clock,
  Italic,
  Link,
  List,
  ListOrdered,
  Save,
  Trash2,
  UploadCloud,
} from "lucide-react";
import React, { FC, useState } from "react";
import { Input } from "../ui/input";
import { useAdmin } from "@/hooks/useAdmin";

interface FormPanelProps {
  selectedEvent: Activity;
  changeSelected: React.Dispatch<React.SetStateAction<Activity | null>>;
}

const FormPanel: FC<FormPanelProps> = ({ selectedEvent, changeSelected }) => {
  const [font, setFont] = useState("font-normal");
  const { handleDeleteEvent } = useAdmin();
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background relative">
      {/* Form Scroll Area */}
      <div className="flex-1 overflow-y-auto p-8 lg:px-12 pb-24 scroll-none">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {/* Section: Header Info */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-black tracking-tight text-white">
              Editar Actividad
            </h1>
            <p className="text-text-secondary">
              Modifica los detalles del evento seleccionado.
            </p>
          </div>
          {/* Section: Main Data */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Title */}
            <div className="md:col-span-8 flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                Título del Evento
              </label>
              <input
                className="w-full bg-[#2a221d] border border-[#392f28] focus:border-primary text-white rounded-lg px-4 py-3 font-medium placeholder:text-[#54453b] focus:ring-1 focus:ring-primary transition-all"
                type="text"
                onChange={(e) => console.log(e.target.value)}
                defaultValue={selectedEvent.title}
              />
            </div>
            {/* Status */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                Estado
              </label>
              <div className="relative">
                <select className="w-full bg-[#2a221d] border border-[#392f28] focus:border-primary text-white rounded-lg px-4 py-3 appearance-none cursor-pointer focus:ring-1 focus:ring-primary transition-all">
                  <option value="published">Publicado</option>
                  <option value="draft">Borrador</option>
                  <option value="cancelled">Cancelado</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-secondary">
                  <span className="material-symbols-outlined">
                    <ChevronDown />
                  </span>
                </div>
              </div>
            </div>
            {/* Date & Time */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                Fecha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-text-secondary text-[20px]">
                    <CalendarDays />
                  </span>
                </div>
                <input
                  className="w-full bg-[#2a221d] border border-[#392f28] focus:border-primary text-white rounded-lg pl-10 pr-4 py-3 font-medium focus:ring-1 focus:ring-primary transition-all"
                  type="text"
                  defaultValue={selectedEvent.fecha}
                />
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                Hora Inicio
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-text-secondary text-[20px]">
                    <Clock />
                  </span>
                </div>
                <input
                  className="w-full bg-[#2a221d] border border-[#392f28] focus:border-primary text-white rounded-lg pl-10 pr-4 py-3 font-medium focus:ring-1 focus:ring-primary transition-all color-scheme-dark"
                  type="time"
                  defaultValue={selectedEvent.hours}
                />
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                Duración (min)
              </label>
              <input
                className="w-full bg-[#2a221d] border border-[#392f28] focus:border-primary text-white rounded-lg px-4 py-3 font-medium focus:ring-1 focus:ring-primary transition-all"
                type="number"
                defaultValue={selectedEvent.duration}
              />
            </div>
            {/* Location */}
            <div className="md:col-span-12 flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                Ubicación
              </label>
              <div className="flex gap-2">
                <Input defaultValue={selectedEvent.ubicacion} />
                {/* <button className="flex-1 py-2 rounded-lg border border-primary bg-primary/10 text-primary text-sm font-bold transition-all">
                  Jardín Principal
                </button>
                <button className="flex-1 py-2 rounded-lg border border-[#392f28] bg-[#2a221d] hover:border-[#54453b] text-text-secondary text-sm font-medium transition-all">
                  Auditorio
                </button>
                <button className="flex-1 py-2 rounded-lg border border-[#392f28] bg-[#2a221d] hover:border-[#54453b] text-text-secondary text-sm font-medium transition-all">
                  Sala 2
                </button>
                <button className="flex-1 py-2 rounded-lg border border-[#392f28] bg-[#2a221d] hover:border-[#54453b] text-text-secondary text-sm font-medium transition-all">
                  Biblioteca
                </button> */}
              </div>
            </div>
          </div>
          {/* Section: Media */}
          <div className="flex flex-col gap-4 p-5 rounded-xl border border-[#392f28] bg-[#1e1713]">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                Imagen de Portada
              </h3>
              <button className="text-primary text-xs font-bold hover:underline">
                Cambiar imagen
              </button>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-40 h-36 rounded-lg overflow-hidden shrink-0 border border-[#392f28]">
                <img
                  alt="Outdoor cinema setup at night"
                  className="w-full h-full object-cover"
                  data-alt="Outdoor movie screen in a park at night with string lights"
                  src={selectedEvent.img}
                />
              </div>
              <div className="flex-1 border-2 border-dashed border-[#392f28] rounded-lg h-36 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-[#2a221d] transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-text-secondary group-hover:text-primary transition-colors">
                  <UploadCloud />
                </span>
                <p className=" flex flex-col text-xs text-text-secondary">
                  Arrastra una imagen
                  <p className="w-full text-center"> o</p>
                  <span className="text-primary font-bold">
                    haz click para subir
                  </span>
                </p>
                <p className="text-[10px] text-[#54453b]">PNG, JPG hasta 5MB</p>
              </div>
            </div>
          </div>
          {/* Section: Description */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
              Descripción
            </label>
            <div className="w-full bg-[#2a221d] border border-[#392f28] rounded-lg overflow-hidden focus-within:border-primary transition-all">
              <div className="flex items-center gap-1 p-2 border-b border-[#392f28] bg-[#1e1713]">
                <button className="p-1.5 rounded hover:bg-[#392f28] text-text-secondary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    <Bold size={14} onClick={() => setFont("font-bold")} />
                  </span>
                </button>
                <button className="p-1.5 rounded hover:bg-[#392f28] text-text-secondary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    <Italic size={14} onClick={() => setFont("font-normal")} />
                  </span>
                </button>
                <button className="p-1.5 rounded hover:bg-[#392f28] text-text-secondary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    <Link size={14} />
                  </span>
                </button>
                <div className="w-px h-4 bg-[#392f28] mx-1"></div>
                <button className="p-1.5 rounded hover:bg-[#392f28] text-text-secondary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    <List size={14} />
                  </span>
                </button>
                <button className="p-1.5 rounded hover:bg-[#392f28] text-text-secondary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    <ListOrdered size={14} />
                  </span>
                </button>
              </div>
              <textarea
                className={`w-full  bg-transparent border-none text-white p-4 focus:ring-0 placeholder:text-[#54453b] text-sm leading-relaxed ${font}`}
                placeholder="Escribe los detalles de la actividad..."
                rows={6}
                defaultValue={selectedEvent.description}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Actions */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#181411]/95 backdrop-blur-sm border-t border-[#392f28] flex items-center justify-between px-8 lg:px-12 z-10">
        <button
          onClick={() => {
            handleDeleteEvent(selectedEvent._id);
            changeSelected(null);
          }}
          className="flex items-center gap-2 text-red-500 hover:text-red-500 text-sm font-bold px-4 py-2.5 rounded-lg  hover:bg-red-500/40 transition-colors"
        >
          <span className="material-symbols-outlined">
            <Trash2 size={14} />
          </span>
          Eliminar Actividad
        </button>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 rounded-lg border border-[#392f28] bg-transparent text-white text-sm font-bold hover:bg-[#2a221d] transition-colors">
            Cancelar
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-app-primary/40 text-muted text-sm font-bold hover:bg-app-primary transition-colors shadow-lg shadow-orange-900/30 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              <Save size={14} />
            </span>
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPanel;
