import React from "react";
import "../styles/button.css";
import { thetruecontext } from '../App';
import { useContext } from "react";

function Button({ name, styleclass}) {
  const settoTrue = useContext(thetruecontext);
  return <button onClick={settoTrue} className={`btn ${styleclass}`}>{name}</button>;
}

export default Button;
