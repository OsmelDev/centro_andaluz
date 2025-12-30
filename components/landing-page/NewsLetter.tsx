import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-full bg-app-primary/10 dark:bg-[#221810] py-16 px-4">
    <div
      className="max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <div className="flex flex-col gap-2 flex-1 text-center md:text-left">
        <h3 className="text-2xl font-bold">No te pierdas nada</h3>
        <p className="text-base dark:text-[#b9a89d]">
          Suscríbete para recibir el menú semanal y la agenda cultural en
          tu correo.
        </p>
      </div>
      <div className="flex items-center w-full md:w-auto gap-3 flex-col sm:flex-row">
        <input
          className="h-10 px-4 rounded-lg bg-surface-dark dark:bg-[#181411] border border-gray-300 dark:border-[#392f28] w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          placeholder="Tu correo electrónico"
          type="email"
        />
        <button
          className="h-10 px-6 rounded-lg bg-app-primary hover:bg-app-primary/90 text-[#181411] font-bold text-sm transition-colors whitespace-nowrap"
        >
          Suscribirse
        </button>
      </div>
    </div>
  </div>
  )
}

export default NewsLetter