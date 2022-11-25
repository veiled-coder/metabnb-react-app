import React from "react";
import "../styles/button.css";

function Button({ name, styleclass,clicked }) {
  return <button onClick={clicked} className={`btn ${styleclass}`}>{name}</button>;
}

export default Button;
