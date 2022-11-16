import React from "react";
import "../styles/button.css"

function Button({name,styleclass,children}) {
  return <button className={`btn ${styleclass}`}>{name}
    {children}</button>;
}

export default Button;
