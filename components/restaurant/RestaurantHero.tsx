import React from "react";

const RestaurantHero = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-alt="Dark restaurant interior with ambient lighting and nicely set tables"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(34, 24, 16, 1) 100%),url('images/bg-restaurant-hero.png')",
        }}
      ></div>
      <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center gap-4">
        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest border border-white/10">
          Experiencia Gastronómica
        </span>
        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
          Sabores de Temporada
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl">
          Una fusión de cocina moderna y tradición local, elaborada con
          ingredientes frescos que cuentan una historia en cada plato.
        </p>
      </div>
    </div>
  );
};

export default RestaurantHero;
