import { Utensils } from 'lucide-react'
import React from 'react'
import MenuFeaturedCard from './MenuFeaturedCard'

const Gastronomy = () => {
  return (
    <section className="flex flex-col gap-6 h-full" id="restaurante">
    <div className="flex items-center gap-3 border-b border-[#e6e0db] dark:border-[#392f28] pb-4">
      <span className="material-symbols-outlined text-app-primary text-3xl">
        <Utensils />
      </span>
      <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
        Menú del Día
      </h2>
    </div>
    {/* Menu Featured Card */}
   <MenuFeaturedCard />
  </section>
  )
}

export default Gastronomy