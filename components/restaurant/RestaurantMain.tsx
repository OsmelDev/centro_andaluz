"use client";

import { useAppContext } from "@/context/app-context-";
import { useFilter } from "@/hooks/useFilters";
import {
  Beer,
  HandPlatter,
  IceCream,
  Utensils,
  Wine,
  WineIcon,
} from "lucide-react";
import React from "react";

const RestaurantMain = () => {
  const { initialMenus, initialCategories } = useAppContext();
const {filter}=useFilter(initialMenus)  
const {bebidas,entrantes,platos_principales,postres} = filter()

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 lg:px-12 py-8 relative">
      {/* <!--  Sticky Sub-Navigation --> */}
      <div className="sticky top-[61px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm pt-2 pb-4 mb-8 border-b border-[#392f28]/30">
        <nav className="flex overflow-x-auto scrollbar-hide gap-2 md:gap-4 md:justify-center">
          {initialCategories?.map((category) => (
            <a
              key={category._id}
              className="flex-shrink-0 px-6 py-2 rounded-full bg-[#392f28] text-muted text-sm font-bold shadow-lg shadow-primary/20 transition-transform hover:bg-[#4a3e36]"
              href={`#${category.name}`}
            >
              {category.name}
            </a>
          ))}
        </nav>
      </div>
      {/* <!--  Menu Sections --> */}
      <div className="flex flex-col gap-16">
        {/* <!--  Section: Entrantes --> */}

        <section className="scroll-mt-36" id="Entrantes">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">
              <HandPlatter />
            </span>
            <h2 className="text-3xl font-bold text-muted dark:text-white">
              Entrantes
            </h2>
            <div className="h-px bg-gray-200 dark:bg-[#392f28] flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entrantes?.map((entrante) => (
              <div key={entrante._id} className="group relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-[#392f28] hover:border-primary/50 transition-colors p-4 flex gap-4">
                <div
                  className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg bg-cover bg-center"
                  data-alt="Carpaccio de calabacín fresco con finas hierbas"
                  style={{
                    backgroundImage: `url(${entrante.img})`,
                  }}
                ></div>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {entrante.name}
                      </h3>
                      <span className="text-primary font-bold text-lg">
                        ${entrante.price}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-[#b9a89d] text-sm leading-relaxed mb-2 line-clamp-2">
                      {entrante.description}
                    </p>
                  </div>
                  {/* <div className="flex items-center gap-2">
                   <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                     Vegetariano
                   </span>
                   <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                     Sin Gluten
                   </span>
                 </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* <!--   Section: Platos Principales --> */}
        <section className="scroll-mt-36" id="Platos Principales">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">
              <Utensils />
            </span>
            <h2 className="text-3xl font-bold text-muted dark:text-white">
              Platos Principales
            </h2>
            <div className="h-px bg-gray-200 dark:bg-[#392f28] flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platos_principales?.map((plato) => (
              <div key={plato._id} className="group relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-[#392f28] hover:border-primary/50 transition-colors p-4 flex gap-4">
                <div
                  className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg bg-cover bg-center"
                  data-alt="Risotto cremoso de setas con parmesano"
                  style={{
                    backgroundImage: "url('images/card-restaurant-4.png')",
                  }}
                ></div>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {plato.name}
                      </h3>
                      <span className="text-primary font-bold text-lg">
                        ${plato.price}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-[#b9a89d] text-sm leading-relaxed mb-2 line-clamp-2">
                      {plato.description}
                    </p>
                  </div>
                  {/* <div className="flex items-center gap-2">
                   <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                     Vegetariano
                   </span>
                 </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* <!--  Section: Postres --> */}
        <section className="scroll-mt-36" id="Postres">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">
              <IceCream />
            </span>
            <h2 className="text-3xl font-bold text-muted dark:text-white">
              Postres
            </h2>
            <div className="h-px bg-gray-200 dark:bg-[#392f28] flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postres?.map((postre) => (
              <div key={postre._id} className="group bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="h-48 bg-cover bg-center"
                  data-alt="Tarta de queso con frutos rojos"
                  style={{
                    backgroundImage: `url(${postre.img})`,
                  }}
                ></div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {postre.name}
                    </h3>
                    <span className="text-primary font-bold">
                      ${postre.price}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-[#b9a89d] text-sm mb-4">
                    {postre.description}
                  </p>
                  <button className="w-full py-2 rounded-lg border border-gray-200 dark:border-[#392f28] text-sm font-bold text-gray-700 dark:text-white hover:bg-primary hover:text-[#181411] hover:border-primary transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* <!--  Section: Bebidas --> */}
        <section className="mb-20 scroll-mt-36" id="Vinos y Bebidas">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">
              <Wine />
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Bodega y Bebidas
            </h2>
            <div className="h-px bg-gray-200 dark:bg-[#392f28] flex-1"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <!--  Wine List --> */}
            <div className="bg-base dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-[#392f28]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  <WineIcon />
                </span>
                Vinos Tintos
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-dashed border-gray-200 dark:border-gray-700 pb-2">
                  <div>
                    <h4 className="font-bold dark:text-white">Rioja Crianza</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Tempranillo, 2019
                    </p>
                  </div>
                  <div className="flex gap-4 text-sm font-medium dark:text-white">
                    <span>Copa 4€</span>
                    <span>Botella 18€</span>
                  </div>
                </div>
                <div className="flex justify-between items-end border-b border-dashed border-gray-200 dark:border-gray-700 pb-2">
                  <div>
                    <h4 className="font-bold dark:text-white">
                      Ribera del Duero Roble
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Tinta del país, 2020
                    </p>
                  </div>
                  <div className="flex gap-4 text-sm font-medium dark:text-white">
                    <span>Copa 4.5€</span>
                    <span>Botella 22€</span>
                  </div>
                </div>
                <div className="flex justify-between items-end pb-2">
                  <div>
                    <h4 className="font-bold dark:text-white">
                      Priorat Selección
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Garnacha y Cariñena, 2018
                    </p>
                  </div>
                  <div className="flex gap-4 text-sm font-medium dark:text-white">
                    <span>Copa 6€</span>
                    <span>Botella 32€</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  Other Drinks --> */}
            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-[#392f28]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  <Beer />
                </span>
                Cervezas y Refrescos
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-700 pb-2">
                  <div>
                    <h4 className="font-bold dark:text-white">
                      Cerveza Artesana Local
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      IPA o Pale Ale
                    </p>
                  </div>
                  <span className="font-bold dark:text-primary">4.50€</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-700 pb-2">
                  <div>
                    <h4 className="font-bold dark:text-white">
                      Cerveza de Barril
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Caña / Pinta
                    </p>
                  </div>
                  <span className="font-bold dark:text-primary">
                    2.50€ / 4.00€
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <div>
                    <h4 className="font-bold dark:text-white">
                      Refrescos y Agua
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Variedad disponible
                    </p>
                  </div>
                  <span className="font-bold dark:text-primary">2.50€</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RestaurantMain;
