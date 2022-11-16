import React from "react";
import "../styles/houses.css";
import "../styles/styles.css";
import Housescontainer from "./Housescontainer";

function Houses() {
  return (
    <section className="houses">
      <h2>Inspiration for your next adventure</h2>
      <Housescontainer  />
    </section>
  );
}

export default Houses;
