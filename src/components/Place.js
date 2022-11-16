import React from "react";
import "../styles/styles.css";
import "../styles/place.css";
import "./Button";
import Button from "./Button";
import Setting from "../images/setting.svg";
import Housescontainerplace from './Housescontainerplace'

function Place() {
  return (
    <section className="place">
      <div className="place-content grid">
        <div className="places-list ">
          <p>Restaurant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantas city</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
          <Button name="Location" styleclass="btn-location">
            <img className="setting" src={Setting} alt="filter"></img>
          </Button>
        </div>
      </div>
      <Housescontainerplace/>
       

    </section>
  );
}

export default Place;
