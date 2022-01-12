import React, { useContext } from "react";
import { colors } from "../Context/AppContext";
import { AppContext } from "../Context/AppContext";
import "../Styles/ColorPicker.css";

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
