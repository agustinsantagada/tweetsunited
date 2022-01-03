import React, { useContext } from "react";
import "./Styles/ColorPicker.css";
import { colors } from "./AppContext";
import { AppContext } from "./AppContext";

function ColorPicker() {

  const { setColor } = useContext(AppContext);

  const colorOption = (colorx) => {
    return (
      <div
        onClick={() => {
            setColor(colorx);
        }}
        key={colorx.name}
        className="color"
        style={{ backgroundColor: colorx.hex }}
      />
    );
  };

  const colorOptions = () => {
    return colors.map((color) => {
      return colorOption(color);
    });
  };

  return <div className="colorpicker">{colorOptions()}</div>;
}

export default ColorPicker;
