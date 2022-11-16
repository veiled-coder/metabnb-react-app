import React from "react";
import "../styles/styles.css";
import "../styles/place.css";
import './Button'
import Button from "./Button";
import Setting from '../images/setting.svg'

function Place() {
  return (
    <section className="place grid">
      <div className="place-content">
              <div className="places-list">
                  <p>Restaurant</p>
                  <p>Cottage</p>
                  <p>Castle</p>
                  <p>fantas city</p>
                  <p>beach</p>
                  <p>Carbins</p>
                  <p>Off-grid</p>
                  <p>Farm</p>
                  <Button name='Location' styleclass='btn-location'>
                  <img className="setting" src={Setting} alt='filter'></img>    
                  </Button>
        </div>

        <div className="house-list">LIST</div>
      </div>
    </section>
  );
}

export default Place;
