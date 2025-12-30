import { Activity } from '@/types/types'
import { Calendar1, Clock } from 'lucide-react'
import React, { FC } from 'react'

interface EventCardProps{
    event: Activity
    setSelectedEvent: React.Dispatch<React.SetStateAction<Activity | null>>
    selectedEvent:Activity | null
}

const EventCard:FC<EventCardProps> = ({event, setSelectedEvent, selectedEvent}) => {
  return (
    <div onClick={()=>setSelectedEvent(event)} className={`p-3 rounded-lg  transition-colors cursor-pointer group ${selectedEvent?._id === event._id ? "border-l-4 border-l-app-primary border border-app-primary/20 bg-surface-dark" :  "hover:bg-surface-dark/40 border-l-4 border-l-muted/40 border border-muted/20"}`}>
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-white text-sm font-bold leading-tight group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <span
            className="w-2 h-2 rounded-full bg-green-500 mt-1"
            title="Publicado"
          ></span>
        </div>
        <div className="flex items-center text-xs text-text-secondary gap-2 mb-2">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined ">
              <Calendar1 size={14}/>
            </span>
            {event.fecha}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined">
              <Clock size={14}/>
            </span>
            {event.hours}
          </span>
        </div>
        <p className="text-xs text-[#8d7f76] line-clamp-1">
         {event.description}
        </p>
      </div>
  )
}

export default EventCard