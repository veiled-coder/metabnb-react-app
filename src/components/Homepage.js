import React from "react";
import "../styles/homepage.css";
import "../styles/styles.css";
import Header from "../components/Header";
import Wallets from "../components/Wallets";
import Houses from "../components/Houses";
import NFTs from "../components/NFTs";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Wallets />
      <Houses />
      <NFTs />
    </div>
  );
}

export default Homepage;
