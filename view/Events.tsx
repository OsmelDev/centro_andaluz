"use client";
import FormPanel from "@/components/dashboar-events/FormPanel";
import Header from "@/components/dashboar-events/Header";
import ListPanel from "@/components/dashboar-events/ListPanel";
import { useAppContext } from "@/context/app-context-";
import { Activity } from "@/types/types";
import { AlertTriangle, Calendar1, Clock, Search } from "lucide-react";
import React, { useState } from "react";

const Events = () => {
  const { events } = useAppContext();
  const [selectedEvent, setSelectedEvent] = useState<Activity | null>(null);
  return (
    <main className="flex flex-1 flex-col min-w-0 bg-surface-dark  h-full overflow-hidden">
      {/* Top Header */}
      <Header />
      {/* Master-Detail Layout */}
      <div className="flex overflow-hidden h-full">
        {/* LIST PANEL (Master) */}
        <ListPanel events={events} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent}/>
        {/* FORM PANEL (Detail) */}
        {!selectedEvent ? (
          <div className="w-3/5 flex flex-col items-center justify-center bg-background">
            <AlertTriangle size={100} color="red" />
            <h1 className="text-2xl">Ningun evento seleccionado</h1>

          </div>
        ) : (
          <FormPanel selectedEvent={selectedEvent} changeSelected={setSelectedEvent} />
        )}
      </div>
    </main>
  );
};

export default Events;
