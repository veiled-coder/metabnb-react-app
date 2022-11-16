import React from 'react';
import Card from './Card';
import "../styles/houses.css";
import "../styles/styles.css";

import House16 from "../images/house16.svg";
import House17 from "../images/house17.svg";
import House18 from "../images/house18.svg";
import House19 from "../images/house19.svg";
import House20 from "../images/house20.svg";
import House21 from "../images/house21.svg";
import House22 from "../images/house22.svg";
import House23 from "../images/house23.svg";
import House24 from "../images/house24.svg";
import House25 from "../images/house25.svg";
import House26 from "../images/house26.svg";
import House27 from "../images/house27.svg";
import House28 from "../images/house28.svg";
import House29 from "../images/house29.svg";
import House30 from "../images/house30.svg";
import House31 from "../images/house31.svg";


function Housescontainerplace() {
  return (
      <section className='house-places grid'>
          <div className='house-places_container'>
      <Card src={House16} />
      <Card src={House17} />
      <Card src={House18} />
      <Card src={House19} />
      <Card src={House20} />
      <Card src={House21} />
      <Card src={House22} />
      <Card src={House23} />
      <Card src={House24} />
      <Card src={House25} />
      
      <Card src={House26} />

      <Card src={House27} />
      <Card src={House28} />
      <Card src={House29} />
      <Card src={House30} />
      <Card src={House31} />
          </div>
          </section>
  );
}

export default Housescontainerplace