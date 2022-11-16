import React from "react";
import "../styles/homepage.css";
import "../styles/styles.css";
import  Header from "../components/Header"
import Wallets from "../components/Wallets";
import Houses from "../components/Houses";


function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Wallets />
      <Houses/>
    </div>
  );
}

export default Homepage;
