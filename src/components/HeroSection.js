import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Videos/video-2.mp4" autoPlay loop muted />
      <h1>TEXT</h1>
      <div className="here-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
        >
          TEXT
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
