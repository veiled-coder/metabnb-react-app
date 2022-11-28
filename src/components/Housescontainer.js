import React from "react";
import Card from "./Card";
import House5 from "../images/house5.png";

import House6 from "../images/house6.png";
import House7 from "../images/house7.png";
import House8 from "../images/house8.png";
import House9 from "../images/house9.png";
import House10 from "../images/house10.png";
import House11 from "../images/house11.png";
import House12 from "../images/house12.png";

function Housescontainer({ children }) {
  return (
    <div className="houses-lists_container grid">
      <div className="houses-lists">
        <Card src={House5} />
        <Card src={House6} />
        <Card src={House7} />
        <Card src={House8} />
        <Card src={House9} />
        <Card src={House10} />
        <Card src={House11} />
        <Card src={House12} />
        {children}
      </div>
    </div>
  );
}

export default Housescontainer;
