// Cards.js
import React from 'react';
import CardItem from './CardItem'; // Adjust the path based on your file structure
import './Card.css';

const Cards = () => {
  return (
    <div className="cards">
      <h1>TEXT</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="photos/Flags-picture.jpeg"
              text="Variety of coffee"
              label="Origins"
              path="/origins"
            />
            <CardItem
              src="photos/image_3.jpeg"
              text="Methods of preparations"
              label="Brewing"
              path="/brewing"
            />
             <CardItem
              src="photos/image_4.jpeg"
              text="How good is the coffee?"
              label="Rating"
              path="/ratings"
            />
            {/* Add more CardItems as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
