import React from 'react'

const Hero = () => {
  return (
    <div
    className="@container w-full max-w-[1440px] px-4 md:px-6 lg:px-40 py-5"
  >
    <div
      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 md:p-12 relative overflow-hidden"
      data-alt="People enjoying dinner and live music in a warm dark atmosphere"
      style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.4) 0%,rgba(0, 0, 0, 0.7) 100%), url('/images/bg-hero.png')"}}
    >
      <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
        <h1
          className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]"
        >
          Donde la cultura se encuentra con el sabor
        </h1>
        <h2
          className="text-gray-200 md:text-lg font-normal leading-relaxed"
        >
          Disfruta de nuestra gastronomía local y eventos artísticos en un
          espacio único diseñado para inspirar.
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 justify-center z-10 mt-4">
        <button
          className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-app-primary/90 hover:bg-app-primary transition-colors text-[#181411] font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Reservar Mesa</span>
        </button>
        <button
          className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold leading-normal tracking-[0.015em] transition-all"
        >
          <span className="truncate">Ver Agenda</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero