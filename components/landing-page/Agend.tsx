import { CalendarDays } from "lucide-react";
import React from "react";
import EventCard from "../EventCard";

const Agend = () => {
  return (
    <section className="flex flex-col gap-6  max-h-full h-full overflow-hidden" id="agenda">
      <div className="flex items-center h-14 gap-3 border-b border-[#e6e0db] dark:border-[#392f28] pb-4">
        <span className="material-symbols-outlined text-app-primary text-3xl">
          <CalendarDays />
        </span>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
          Agenda Semanal
        </h2>
      </div>
      <div className="flex flex-col h-[calc(100%-70px)] gap-4">
        <div className="flex flex-col max-h-[90%] h-full gap-4 overflow-y-auto scroll-none">
          <div className="flex flex-col gap-4 h-[32rem]">
          {[0, 1, 2, 4, 5, 6, 7].map((e,i) => (
            <EventCard  key={i}/> 
          ))}
          </div>
        </div>
        <button className="w-full mt-2 flex items-center justify-center rounded-lg h-12 bg-transparent border border-muted/40 dark:border-[#392f28] text-muted dark:text-white text-sm font-bold hover:border-primary hover:text-primary transition-colors">
          Ver calendario completo
        </button>
      </div>
    </section>
  );
};

export default Agend;
