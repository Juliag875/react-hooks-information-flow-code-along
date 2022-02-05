import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ handleChangeColor, color }) {

  function handleClick(){
    const newChildColor = getRandomColor();
    handleChangeColor(newChildColor);
  }

  return <div 
  onClick={handleClick} 
  className="child" 
  style={{ backgroundColor: color }} />;
}

export default Child;
