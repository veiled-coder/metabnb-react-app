import React from "react";
import "../src/styles/nav.css";
import "../src/styles/styles.css";
import home from "../src/images/home.png";
import logo from "../src/images/meta.png";
import Button from "./components/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


function Nav({setshowModalTrue}) {

  return (
    <section className="nav--container grid">
      <div className="nav-section_content">
        <div className="logo--container">
          <img src={home} alt="a home icon" className="home--img" />
          <img src={logo} className="meta--logo" alt="metabnb logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li className="nav-link">Home</li>
            <Link to='/place'><li className="nav-link">Place to stay</li></Link>
            <li className="nav-link">NFTs</li>
            <li className="nav-link">Community</li>
          </ul>
        </nav>
        <div>
          {" "}
          <Button name="Connect wallet" styleclass="nav-btn" clicked={setshowModalTrue} />
                </div>
        <div className="hamburger-menu">
          <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
        </div>
      </div>
    </section>
  );
}

export default Nav;
