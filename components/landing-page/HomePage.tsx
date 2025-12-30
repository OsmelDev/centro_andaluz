import React from "react";
import Hero from "../Hero";
import Gastronomy from "./Gastronomy";
import Agend from "./Agend";
import NewsLetter from "./NewsLetter";

const HomePage = () => {
  return (
    <main className="flex-1 w-full flex flex-col items-center">
      {/* Hero Section  */}
      <Hero />
      {/* Two Column Layout: Menu & Agenda */}
      <div className="w-full max-w-[1440px] px-4 md:px-6 lg:px-40 py-8 md:py-12 gap-12 grid grid-cols-1 lg:grid-cols-2 items-start">
        {/* Left Column: Gastronomy */}
        <Gastronomy />
        {/* Right Column: Agenda */}
        <Agend />
      </div>
      {/* Newsletter Section */}
      <NewsLetter />
    </main>
  );
};

export default HomePage;
