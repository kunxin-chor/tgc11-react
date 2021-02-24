import React from "react";
import ColorSelect from "./ColorSelect";

export default function ColorControl(props) {
  let colorSelects = [];
  for (let i = 0; i < props.boxes.length; i++) {
    colorSelects.push(
      <ColorSelect
        index={i}
        color={props.boxes[i].color}
        onChangeColor={props.onChangeColor}
      />
    );
  }

  return <React.Fragment>{colorSelects}</React.Fragment>;
}
