"use client"

import { useState } from "react"
import { Header } from "./Header"
import {Hero} from "./Hero"
import { DayTabs } from "./DayTabs"
import { EventCard } from "./EventCard"
import { HorizontalEventCard } from "./HorizontalEventCard"
import { EmptyDay } from "./EmptyDay"


export default function WeekEvents() {
  const [selectedDay, setSelectedDay] = useState("martes")

  return (
    <div className="min-h-screen">
      <Hero />
      <DayTabs selectedDay={selectedDay} onDayChange={setSelectedDay} />

      <div className="container mx-auto px-4 pb-12">
        {selectedDay === "martes" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Martes 13</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <EventCard
                title="Jazz Night Quartet"
                description="Una velada inolvidable con lo mejor del jazz local. Improvisación, ritmo y atmósfera íntima."
                time="20:00 - 22:00"
                location="Terraza del Río"
                category="Música"
                image="images/1.jpg"
              />

              <EventCard
                title='Visita Guiada: "Horizontes"'
                description="Recorrido exclusivo por la nueva exposición de arte moderno con la curadora principal."
                time="18:00 - 19:30"
                location="Galería Principal"
                category="Arte"
                image="images/1.jpg"
              />
            </div>
          </div>
        )}

        {selectedDay === "miercoles" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Miércoles 14</h2>

            <div className="space-y-6">
              <HorizontalEventCard
                title="Carta de Vinos & Tapas"
                description="Una experiencia sensorial únicamente vinos de la región con nuestra selección de tapas gourmet."
                time="19:00 - 21:00"
                location="Restaurante El Ático"
                category="Gastronomía"
                capacity="Cupos Limitados"
                price="$35.00 / persona"
                image="/gourmet-food-plating-fine-dining.jpg"
                buttonText="Reservar Mesa"
              />

              <HorizontalEventCard
                title="Ciclo de Cine Independiente"
                description='Proyección de "La Memoria del Agua" seguida de un conversatorio con el director.'
                time="18:30 - 20:45"
                location="Auditorio Azul"
                category="Cine"
                capacity="Entrada Libre"
                image="/movie-theater-cinema-audience.jpg"
              />
            </div>
          </div>
        )}

        {selectedDay === "jueves" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Jueves 15</h2>
            <EmptyDay />
          </div>
        )}

        {(selectedDay === "lunes" ||
          selectedDay === "viernes" ||
          selectedDay === "sabado" ||
          selectedDay === "domingo") && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold capitalize">{selectedDay}</h2>
            <EmptyDay />
          </div>
        )}
      </div>

    </div>
  )
}
