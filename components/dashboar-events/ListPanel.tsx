import { Calendar1, Clock, Search } from 'lucide-react'
import React, { FC } from 'react'
import EventCard from './EventCard'
import { Activity } from '@/types/types'

interface ListPanelProps{
  events: Activity[] | null
  setSelectedEvent: React.Dispatch<React.SetStateAction<Activity | null>>
  selectedEvent:Activity |null

}

const ListPanel:FC<ListPanelProps> = ({events, setSelectedEvent, selectedEvent}) => {
  return (
    <div className="w-2/5 flex flex-col border-r border-[#392f28] bg-[#181411]">
    {/* Search & Filter Toolbar */}
    <div className="p-4 border-b border-[#392f28] flex flex-col gap-3">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-text-secondary">
            <Search size={18}/>
          </span>
        </div>
        <input
          className="w-full h-8 bg-[#2a221d] border border-transparent focus:border-primary/50 text-white rounded-lg pl-10 pr-4 text-sm placeholder:text-text-secondary focus:ring-0 transition-all"
          placeholder="Buscar actividad..."
          type="text"
        />
      </div>
      <div className="flex gap-2">
        <button className="flex-1 py-1.5 px-3 rounded text-xs font-medium bg-[#392f28] text-white border border-[#54453b]">
          Todas
        </button>
        <button className="flex-1 py-1.5 px-3 rounded text-xs font-medium bg-transparent text-text-secondary hover:bg-[#2a221d] hover:text-white transition-colors">
          Borradores
        </button>
        <button className="flex-1 py-1.5 px-3 rounded text-xs font-medium bg-transparent text-text-secondary hover:bg-[#2a221d] hover:text-white transition-colors">
          Publicadas
        </button>
      </div>
    </div>
    
    {/* List Items */}
    <div className="flex-1 overflow-y-auto p-2 space-y-1">

      {/* Active Item */}
      {events?.map(event => 
      <EventCard key={event._id} event={event} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent}/>
      )}
      
    </div>
  </div>
  )
}

export default ListPanel