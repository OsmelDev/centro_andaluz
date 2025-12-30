'use client'
import WeekEvents from "@/components/events/WeekEvents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/landing-page/HomePage";
import RestaurantPage from "@/components/restaurant/RestaurantPage";
import React, { useState } from "react";

const Landing = () => {
    const [option, setOption]= useState<string>("home")
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header changeOption={setOption}/>
      {option === "home" && <HomePage />}
      {option === "restaurant" && <RestaurantPage />}
      {option === "events" && <WeekEvents />}

      <Footer />
    </div>
  );
};

export default Landing;
