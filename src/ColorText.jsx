import React, { useContext } from "react";
import { AppContext } from "./AppContext";

// En este archivo necesitamos leer del contexto el nombre
// del color seleccionado, y mostrarlo al lado del texto
function ColorText() {
  const { color, setColor } = useContext(AppContext);
  return (
    <div className="colorPreview">El color seleccionado es: {color.name}</div>
  );
}

export default ColorText;
