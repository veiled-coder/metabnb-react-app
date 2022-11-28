import React from "react";
import "../styles/header.css";
import Button from "./Button";
import House1 from '../images/house1.png';
import House2 from "../images/house2.png";
import House3 from "../images/house3.png";
import House4 from "../images/house4.png";
import "../styles/styles.css";


function Header() {
  return (
    <section className="header grid">
      <div className="header-content">
        <div className=" header-content_box header-hero_box">
          <h1>Rent a <span className="purp">Place</span> away from <span className="purp">Home</span> in the Metaverse</h1>
          <p className="header-hero_text">
            we provide you access to luxury and affordable houses in the
            <span className="purp"> metaverse </span>, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form>
            <input
              type="text"
              placeholder="Search for location"
              className="search-input"
            />
            <Button name="Search" styleclass="search-btn" />
          </form>
        </div>
        <div className="header-content_box header-image_box">
          <div className="header-house_1 house">
            <img src={House1} alt="a house on water" className="house--img" />
          </div>
          <div className="header-house_2 house">
            <img src={House2} alt="a house on water" className="house--img" />
          </div>
          <div className="header-house_3 house">
            <img src={House3} alt="a house on water" className="house--img" />
          </div>
          <div className="header-house_4 house">
            <img src={House4} alt="a house on water" className="house--img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
