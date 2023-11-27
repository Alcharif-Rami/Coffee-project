import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Cards() {
  return (
    <div className="cards">
      <h1>TEXT</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="photos/Flags-picture.jpeg"
              text="Variety of coffee"
              label="Origins"
              path="/origins"
            />
            
            
          </ul>
          <ul>
          <CardItem
              src="photos/Flags-picture.jpeg"
              text="Variety of coffee"
              label="Origins"
              path="/origins"
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
