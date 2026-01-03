import RestaurantHero from '@/components/restaurant/RestaurantHero'
import RestaurantMain from '@/components/restaurant/RestaurantMain'
import React from 'react'

const RestaurantPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#181411] dark:text-white min-h-screen flex flex-col">
        <RestaurantHero />
        <RestaurantMain />
    </div>
  )
}

export default RestaurantPage