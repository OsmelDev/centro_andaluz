import React from 'react'
import Sidebar from './Sidebar'
import DashboardMain from './DashboardMain'

const Dashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white max-h-[calc(100%-60px)] flex overflow-hidden">
        
        <DashboardMain/>
    </div>
  )
}

export default Dashboard