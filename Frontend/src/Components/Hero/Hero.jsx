import React from 'react';
import './Hero.css';
import hand_icon from '../../assets/hand_icon.png';
import arrow_icon from '../../assets/arrow_icon.png';
import men from '../../assets/men.webp';

export default function Hero() {
  return (
    <div className='hero'>
      <div className="left">
        <h2>Best Deals! Best Prices</h2>
      </div>

      <div className="hand-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="hand_icon" height="50px" />
     
      <p>Collections</p>
      <p>For Everyones</p>
 </div>
 <div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={arrow_icon} alt="arrow_icon" height="20px" />
 </div>

      <div className="right">
        <h2>
            <img src={men} alt="" height="200px" />
        </h2>
      </div>
    </div>
  );
}
