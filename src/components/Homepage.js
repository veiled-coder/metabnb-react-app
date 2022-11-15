import React from "react";
import "../styles/homepage.css";
import "../styles/styles.css";
import  Header from "../components/Header"
import Wallets from "../components/Wallets";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Wallets/>
    </div>
  );
}

export default Homepage;
