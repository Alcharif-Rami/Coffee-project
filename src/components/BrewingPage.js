import React from 'react';
import './BrewingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const BrewCard = ({ frontImageSrc, backTitle, backDescription }) => {
  return (
    <div className="brew-card">
      {/* Add left navigation button */}
      <FontAwesomeIcon icon={faArrowCircleLeft} className="card-navigation left" />

      <div className="brew-card-inner">
        <div className="brew-card-front">
          <img src={frontImageSrc} alt="Card" />
        </div>
        <div className="brew-card-back">
          <div className="text">
            <h1>{backTitle}</h1>
            <p>{backDescription}</p>
          </div>
        </div>
      </div>

      {/* Add right navigation button */}
      <FontAwesomeIcon icon={faArrowCircleRight} className="card-navigation right" />
    </div>
  );
};

export default BrewCard;
