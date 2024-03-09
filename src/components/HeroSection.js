// SectionComponent.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="section-container ">
        <p className="main-heading wow fadeInUp" data-wow-delay="0.5s">Welcome to Bizzard: Turning Digital Snowflakes into Avalanche Success Stories!</p>
        <p className="sub-heading wow fadeIn" data-wow-delay="0.5s">Hey there, trailblazers! Welcome to Bizzard – your secret weapon in conquering the digital frontier with style and substance. We're not your average tech wizards; we're the magicians behind the curtain, weaving spells of innovation and turning your wildest digital dreams into reality.</p>
      <div className="button-container">
        <button className="centered-button wow fadeInUp" data-wow-delay="0.5s">Click me</button>
        <button className="centered-button-inverted wow fadeInUp" data-wow-delay="0.5s">Click me</button>
      </div>
    </div>
  );
};

export default HeroSection;