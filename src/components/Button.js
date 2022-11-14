import React from "react";
import "../styles/button.css"

function Button({name,styleclass}) {
  return <button className={`btn ${styleclass}`}>{name}</button>;
}

export default Button;
