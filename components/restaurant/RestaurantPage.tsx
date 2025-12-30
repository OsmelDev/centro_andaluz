import React from 'react'
import RestaurantHero from './RestaurantHero'
import RestaurantMain from './RestaurantMain'

const RestaurantPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#181411] dark:text-white min-h-screen flex flex-col">
        <RestaurantHero />
        <RestaurantMain />
    </div>
  )
}

export default RestaurantPage