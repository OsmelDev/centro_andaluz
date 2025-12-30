import { Theater } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface-darker border-t border-[#392f28] py-12 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 text-white mb-4">
            <span className="material-symbols-outlined text-primary">
              <Theater />
            </span>
            <h3 className="text-xl font-bold">Centro Andaluz de la Habana</h3>
          </div>
          <p className="text-[#b9a89d] text-sm max-w-sm">
            Un espacio donde la gastronomía y el arte se encuentran. Disfruta de
            nuestra cocina antes o después de tu visita a nuestras exposiciones.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Horarios</h4>
          <ul className="space-y-2 text-[#b9a89d] text-sm">
            <li>Lun - Vie: 12:00 - 23:00</li>
            <li>Sáb - Dom: 11:00 - 00:00</li>
            <li className="text-primary pt-2">Cocina abierta todo el día</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className="text-[#b9a89d] hover:text-primary transition-colors"
                href="#"
              >
                Exposiciones Actuales
              </a>
            </li>
            <li>
              <a
                className="text-[#b9a89d] hover:text-primary transition-colors"
                href="#"
              >
                Eventos Privados
              </a>
            </li>
            <li>
              <a
                className="text-[#b9a89d] hover:text-primary transition-colors"
                href="#"
              >
                Hazte Socio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-[#392f28] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#b9a89d] text-xs">
          © 2024 Centro Cultural. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a
            className="text-[#b9a89d] hover:text-white transition-colors text-xs"
            href="#"
          >
            Privacidad
          </a>
          <a
            className="text-[#b9a89d] hover:text-white transition-colors text-xs"
            href="#"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
