import React from "react";
import "../src/styles/nav.css";
import "../src/styles/styles.css";
import home from "../src/images/home.png";
import logo from "../src/images/meta.png";
import Button from "./components/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import withToggler from "./components/HOCS/withToggler";
// import Toggler from "./components/Toggler";

import { useState } from "react";
function Nav() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return (
    <section className="nav--container grid">
      <div className="nav--container_2">
        <div className="nav-section_content">
          <div className="logo--container">
            <img src={home} alt="a home icon" className="home--img" />
            <img src={logo} className="meta--logo" alt="metabnb logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <Link to="/">
                {" "}
                <li className="nav-link">Home</li>
              </Link>
              <Link to="/place">
                <li className="nav-link">Place to stay</li>
              </Link>
              <li className="nav-link">NFTs</li>
              <li className="nav-link">Community</li>
            </ul>
          </nav>
          <div>
            {" "}
            <Button name="Connect wallet" styleclass="nav-btn" />
          </div>

          <div className="hamburger-menu" onClick={toggle}>
            <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
          </div>
        </div>
        {/* TOGGLE MENU LIST */}
        {show ? (
          <div className="mobile-menu_list">
            <Link to="/">
              <p onClick={toggle}>Home</p>
            </Link>
            <Link to="/place">
              <p onClick={toggle}>Place to stay</p>
            </Link>
            <p>NFTs</p>
            <p>Community</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

// export default withToggler(Nav);
export default Nav;
