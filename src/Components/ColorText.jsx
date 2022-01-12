import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function ColorText() {
  const { color, setColor } = useContext(AppContext);
  return (
    <div className="colorPreview">El color seleccionado es: {color.name}</div>
  );
}

export default ColorText;
