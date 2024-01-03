// BrewCard.js
import React from "react";


const BrewCard = (props) => {
  return (
    <div className="card">
      <img className="product--image" 
      src={props.src} 
      alt={`Brew ${props.id}`} />
      <div className="description">
      <p>{props.description}</p>
      </div>
    </div>
  );
};

export default BrewCard;
