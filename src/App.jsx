import React from "react";
import "./App.css";
import Navbar from "/src/compo/Navbar";
import Hero from "./compo/Hero";
import Card from "./compo/Card";
import data from "./data";

function App() {
  console.log('data ',data)

  const cardElement = data.map(card=>{
    return (
      <Card
        key={card.id}
        title={card.title}
        coverImg={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        price={card.price}
        location={card.location}
        openSpots={card.openSpots}
      />
    )
  })

  return (
    <div className="max-w-xl border rounded bg-white mx-auto my-10 font-main">
      <Navbar />
      <Hero />
      <div className="flex gap-5 px-9 flex-initial overflow-x-scroll">
        {cardElement}
      </div>
    </div>
  );
}

export default App;
