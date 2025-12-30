import { Search, Bell, User, Store, ChartLine, TrendingUp, ArrowUp, CheckCircle, CalendarRange, ChartNoAxesCombined, Utensils, HandPlatter, Drama, ArrowRight, Edit, Plus, Upload, Trash2, Eye } from "lucide-react";
import React from "react";

    
const DashboardMain = () => {
  return (
    <main className="flex-1 flex flex-col min-w-0 bg-background-dark overflow-hidden">
      {/* <!-- Scrollable Content --> */}
      <div className="flex-1 overflow-y-auto scroll-none p-4 md:p-8 lg:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          {/* <!-- Breadcrumbs & Heading --> */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <a className="hover:text-white transition-colors" href="#">
                Admin
              </a>
              <span>/</span>
              <span className="text-white font-medium">Dashboard</span>
            </div>
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Bienvenido, Administrador
                </h2>
                <p className="text-text-secondary text-base mt-2">
                  Aquí tienes un resumen general del estado del centro cultural.
                </p>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-white text-sm font-medium" id="current-date">
                  Sábado, 24 Junio 2024
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Stats Cards --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* <!-- Stat 1 --> */}
            <div className="bg-surface-dark rounded-xl p-5 flex flex-col gap-1 border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-secondary text-sm font-medium">
                  Menús Activos
                </span>
                <span className="material-symbols-outlined text-primary text-[18px]">
                  <Utensils />
                </span>
              </div>
              <p className="text-white text-3xl font-bold">3</p>
              <p className="text-green-400 text-xs font-medium mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  <TrendingUp />
                </span>
                Todo actualizado
              </p>
            </div>
            {/* <!-- Stat 2 --> */}
            <div className="bg-surface-dark rounded-xl p-5 flex flex-col gap-1 border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-secondary text-sm font-medium">
                  Actividades Semanales
                </span>
                <span className="material-symbols-outlined text-primary text-[24px]">
                  <CalendarRange />
                </span>
              </div>
              <p className="text-white text-3xl font-bold">12</p>
              <p className="text-text-secondary text-xs font-medium mt-1">
                4 para hoy
              </p>
            </div>
            {/* <!-- Stat 3 --> */}
            <div className="bg-surface-dark rounded-xl p-5 flex flex-col gap-1 border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-secondary text-sm font-medium">
                  Visitantes Web
                </span>
                <span className="material-symbols-outlined text-primary text-[24px]">
                  <ChartNoAxesCombined/>
                </span>
              </div>
              <p className="text-white text-3xl font-bold">842</p>
              <p className="text-green-400 text-xs font-medium mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  <ArrowUp />
                </span>
                +12% vs semana anterior
              </p>
            </div>
            {/* <!-- Stat 4 --> */}
            <div className="bg-surface-dark rounded-xl p-5 flex flex-col gap-1 border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-secondary text-sm font-medium">
                  Estado del Sistema
                </span>
                <span className="material-symbols-outlined text-green-500 text-[24px]">
                  <CheckCircle/>
                </span>
              </div>
              <p className="text-white text-3xl font-bold">En línea</p>
              <p className="text-text-secondary text-xs font-medium mt-1">
                Último chequeo: hace 2 min
              </p>
            </div>
          </div>
          {/* <!-- Main Actions Section --> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Quick Actions (Spans 2 columns) --> */}
            <section className="lg:col-span-2 flex flex-col gap-4">
              <h3 className="text-white text-lg font-bold">Accesos Directos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                {/* <!-- Restaurant Card --> */}
                <div className="bg-surface-dark rounded-xl p-6 flex flex-col justify-between h-full border border-surface-dark hover:border-primary/50 transition-all group relative overflow-hidden">
                  {/* <!-- Background Image with Overlay --> */}
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img
                      className="w-full h-full object-cover grayscale"
                      data-alt="Dark abstract texture with restaurant table vibe"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuARePwJrHrqx2dNRTbwcIEMkGPdQC1Qj4ls74f-hUsIYv1cxrKm6d1RDI51o6zWC9rYC88o339wDSIMFGZpH-owaJvGP8i5QIxGk1HGsHuQeaMMoOsAmEosqhr9VvdkKrys6Olb5Pkxjl6m9QsRjbgGrq4K2iOBeeDZYRWlEh-taBQITuW-c3gQ7aMhcd4fwWu8DmDtE_sjcPiDsga8cfjiMZ2CTKKxAgjWeA2svL0Cp3c0e4ZWhMbW6tfgy1whrklWwOmlb0p3BBq3"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
                      <span className="material-symbols-outlined text-[28px]">
                        <HandPlatter />
                      </span>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">
                      Gestión de Restaurante
                    </h4>
                    <p className="text-text-secondary text-sm mb-6">
                      Actualiza el menú del día, gestiona la carta de vinos y
                      modifica precios en tiempo real.
                    </p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2">
                      Administrar Menús
                      <span className="material-symbols-outlined text-[18px]">
                        <ArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
                {/* <!-- Activities Card --> */}
                <div className="bg-surface-dark rounded-xl p-6 flex flex-col justify-between h-full border border-surface-dark hover:border-primary/50 transition-all group relative overflow-hidden">
                  {/* <!-- Background Image with Overlay --> */}
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img
                      className="w-full h-full object-cover grayscale"
                      data-alt="Abstract crowd at a concert or event dark"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCus87kNRUZEVGFMDWGbR73FGv500wr82AnUCXFVA0lQzZZ0WLsg_D1_6qvJ--rF03RCxUmXJQt_mDG8Jw_RmcUNJRnaOm68s-tD6eGzD0cOe7b5FKZfRVBIfiY5lBXteGp7EOMTrzwx7IvkP4GpRNflTI2FM-4UfqeKACThpzFOXTBRxD0-KP_aGKfxDa0BHRCV8aS0l604q4PrHGADIx9gYoY2_LwFT4N7i9qz530cZlgOWUgOZUZhotlxozRak4ou910XN36mPwO"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                      <span className="material-symbols-outlined text-[28px]">
                        <Drama />
                      </span>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">
                      Agenda Cultural
                    </h4>
                    <p className="text-text-secondary text-sm mb-6">
                      Programa nuevos eventos, edita horarios y actualiza la
                      información para los visitantes.
                    </p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <button className="w-full py-2.5 px-4 bg-background-dark hover:bg-black/40 text-white border border-surface-dark hover:border-primary  rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2">
                      Gestionar Eventos
                      <span className="material-symbols-outlined text-[18px]">
                      <ArrowRight />

                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Recent Activity Feed --> */}
            <section className="lg:col-span-1 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-bold">
                  Actividad Reciente
                </h3>
                <a
                  className="text-blue-600 text-sm font-medium hover:underline"
                  href="#"
                >
                  Ver todo
                </a>
              </div>
              <div className="bg-surface-dark rounded-xl border border-transparent overflow-hidden flex flex-col h-full">
                {/* <!-- Activity Item 1 --> */}
                <div className="p-4 border-b border-background-dark hover:bg-background-dark/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1.5 rounded-full text-green-500 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] block">
                        <Edit />
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Menú Ejecutivo Actualizado
                      </p>
                      <p className="text-text-secondary text-xs mt-1">
                        Por <span className="text-white">Carlos M.</span> • Hace
                        2 horas
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Activity Item 2 --> */}
                <div className="p-4 border-b border-background-dark hover:bg-background-dark/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-1.5 rounded-full text-blue-500 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] block">
                        <Plus/>
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Nuevo Evento: Jazz Night
                      </p>
                      <p className="text-text-secondary text-xs mt-1">
                        Por <span className="text-white">Ana R.</span> • Hace 4
                        horas
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Activity Item 3 --> */}
                <div className="p-4 border-b border-background-dark hover:bg-background-dark/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1.5 rounded-full text-primary mt-0.5">
                      <span className="material-symbols-outlined text-[16px] block">
                        <Upload />
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Exposición "Raíces" Publicada
                      </p>
                      <p className="text-text-secondary text-xs mt-1">
                        Por <span className="text-white">Admin</span> • Ayer
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Activity Item 4 --> */}
                <div className="p-4 border-b border-transparent hover:bg-background-dark/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-500/20 p-1.5 rounded-full text-red-500 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] block">
                        <Trash2 />
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Plato eliminado: Sopa del día
                      </p>
                      <p className="text-text-secondary text-xs mt-1">
                        Por <span className="text-white">Carlos M.</span> • Ayer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <!-- Preview Mini-Section --> */}
          <div className="w-full bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-6 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-white p-3 rounded-lg">
                <span className="material-symbols-outlined"><Eye /></span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  Vista Previa Pública
                </h4>
                <p className="text-text-secondary text-sm">
                  Visualiza cómo ven los clientes la cartelera digital
                  actualmente.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap px-6 py-2.5 bg-transparent border border-primary text-blue-600 hover:bg-primary hover:text-white font-bold text-sm rounded-lg transition-all">
              Ver sitio en vivo
            </button>
          </div>
          <footer className="mt-4 pb-8 text-center md:text-left">
            <p className="text-text-secondary text-xs">
              © 2024 Centro Cultural Admin Panel. Todos los derechos reservados.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
