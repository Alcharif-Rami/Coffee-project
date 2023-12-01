// FlipCard.js
import React from 'react';
import './FlipCard.css';

const FlipCard = ({ frontImageSrc, backTitle, backDescription }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImageSrc} alt="Card" />
        </div>
        <div className="flip-card-back">
          <div className="text">
            <h1>{backTitle}</h1>
            <p>{backDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
