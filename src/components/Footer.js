import React from "react";
import "../styles/footer.css";
import "../styles/styles.css";
import metawhite from "../images/metabnbwhite.svg";
import fb from "../images/facebook.svg";
import tw from "../images/twitter.svg";
import inst from "../images/instagram.svg";

function Footer() {
  return (
    <section className="footer grid">
      <div className="footer-container">
        <div className="footer-logo_container1 footer-item_container1">
          <img
            src={metawhite}
            alt="white meta bnb-logo"
            className="metawhite-logo"
          />
          <div className="footer-socials">
            <div className="footer-socialIcons">
              <img src={fb} alt="facebook logo" className="footer-icon" />
              <img src={inst} alt="instagram logo" className="footer-icon" />
              <img src={tw} alt="twitter logo" className="footer-icon" />
            </div>
            <p className="copyright">&copy; 2022 Metabnb</p>
          </div>
        </div>
        <div className="footer-list_container">
          <h4>Community</h4>
          <p>NFT</p>
          <p>Token</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div className="footer-list_container">
          <h4>Places</h4>
          <p>Castle</p>
          <p>Farms</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div className="footer-list_container">
          <h4>About us</h4>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
