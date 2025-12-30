import { ConciergeBell, Ham, IceCream2, Soup } from 'lucide-react'
import React from 'react'

const MenuFeaturedCard = () => {
  return (
    <div className="rounded-xl bg-surface-dark/20 dark:bg-[#27201c] p-1 shadow-sm dark:border-transparent">
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-cover bg-center"
      data-alt="Artistic plating of a gourmet dish with fresh ingredients"
      style={{
        backgroundImage:
          "url('/images/bg-card-menu.png')",
      }}
    >
      <div className="absolute top-4 right-4 bg-app-primary text-muted font-bold px-3 py-1 rounded text-sm shadow-lg">
        15,50 €
      </div>
    </div>
    <div className="px-4 pb-4">
      <h3 className="text-xl font-bold mb-2">
        Menú Ejecutivo de Hoy
      </h3>
      <p className="text-[#6b5d52] dark:text-[#b9a89d] text-sm mb-6">
        Una selección especial de nuestro chef, inspirada en sabores
        locales de temporada.
      </p>
      
      <div className="flex flex-col gap-3 border-t border-muted/40 dark:border-[#392f28] pt-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-app-primary text-sm mt-1">
              <Soup />
            </span>
            <div>
              <p className="font-semibold text-sm">Entrada</p>
              <p className="text-[#6b5d52] dark:text-[#b9a89d] text-sm">
                Gazpacho Andaluz con crujiente de jamón
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-app-primary text-sm mt-1">
              <ConciergeBell />
            </span>
            <div>
              <p className="font-semibold text-sm">Plato Principal</p>
              <p className="text-[#6b5d52] dark:text-[#b9a89d] text-sm">
                Risotto de Setas y Trufa Negra
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-app-primary text-sm mt-1">
              <IceCream2 />
            </span>
            <div>
              <p className="font-semibold text-sm">Postre</p>
              <p className="text-[#6b5d52] dark:text-[#b9a89d] text-sm">
                Tarta de Queso Casera
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="w-full mt-6 flex items-center justify-center rounded-lg h-10 bg-app-primary/95 cursor-pointer dark:bg-[#392f28] text-muted/90 dark:text-white text-sm font-bold hover:bg-app-primary dark:hover:bg-[#4a3e36] transition-colors">
        Ver carta completa
      </button>
    </div>
  </div>
  )
}

export default MenuFeaturedCard