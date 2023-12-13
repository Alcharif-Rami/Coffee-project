// Brewing.js
import React from "react";
import BrewCard from "../BrewingPage"; 
import "../BrewingPage.css"; 
import Background from "../Background";

const Brewing = () => {
  return (
    <Background>
      <div>
        <h1>Your Brewing Main Page Content</h1>
        <BrewCard
          frontImageSrc="/photos/Brewing/V60.webp"
          backTitle="V60"
          backDescription="text"
        />
      </div>
    </Background>
  );
};

export default Brewing;
