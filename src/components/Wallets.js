import React from "react";
import "../styles/wallet.css";
import "../styles/styles.css";
import opensea from "../images/opensea.svg";
import mbtoken from "../images/mbtoken.svg";
import metamask from "../images/metamask.svg";

function Wallets() {
  return (
    <section className="wallets">
      <div className="wallet">
        <img src={mbtoken} className="token" alt="metatoken texticon"></img>
      </div>
      <div className="wallet">
        <img src={metamask} className="token" alt="metatoken texticon"></img>
      </div>
      <div className="wallet wallet-3">
        <img src={opensea} className="token"  alt="metatoken texticon"></img>
      </div>
    </section>
  );
}

export default Wallets;
