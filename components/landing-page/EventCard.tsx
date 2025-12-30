import React from "react";

const EventCard = () => {
  return (
    <div className="relative flex flex-col gap-4 p-4 rounded-xl bg-[#27201c] border border-primary/20 overflow-hidden group cursor-pointer">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
      <div className="flex gap-4 relative z-10">
        <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary rounded-lg shrink-0 text-[#181411]">
          <span className="text-xs font-bold uppercase">VIE</span>
          <span className="text-xl font-bold">15</span>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Música en vivo
            </span>
            <span className="text-xs text-[#b9a89d] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                schedule
              </span>
              21:00
            </span>
          </div>
          <h4 className="font-bold text-lg leading-tight text-white group-hover:text-primary transition-colors">
            Noche de Jazz &amp; Tapas
          </h4>
          <p className="text-sm text-[#b9a89d] line-clamp-2">
            Concierto del cuarteto local 'Blue Note' acompañado de una carta
            especial de tapas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
