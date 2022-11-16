import React from "react";

import "../styles/card.css";
import "../styles/houses.css";
import  Star  from "../images/star.svg";

function Card({ src }) {
  return (
    <div className="card">
      <img className="card-house" src={src} alt="another beautiful house"></img>
      <div className="card-house_info">
        <p>Desert King</p>
        <p className="house-info_bold">1MBT per night</p>
      </div>
      <div className="card-house_distance">
        <p>2345km away</p>
        <p>available for 2 weeks stay</p>
      </div>
      <img src={Star} alt="5 beautiful rate stars" />
    </div>
  );
}

export default Card;
