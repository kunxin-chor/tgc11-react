import React from "react";
import ColorDisplay from "./ColorDisplay";
import ColorControl from "./ColorControl";
export default class ColorBoxes extends React.Component {
  state = {
    boxes: [
      {
        color: "white"
      },
      {
        color: "white"
      },
      {
        color: "white"
      },
      {
        color: "white"
      }
    ]
  };
  updateBox = event => {
    let index = event.target.name;
    let clone = this.state.boxes.map(function(eachBox, boxIndex) {
      if (boxIndex != index) {
        return eachBox;
      } else {
        return {
          color: event.target.value
        };
      }
    });
    this.setState({
      boxes: clone
    });
  };
  render() {
    return (
      <React.Fragment>
        <ColorDisplay boxes={this.state.boxes} />
        <ColorControl boxes={this.state.boxes}
         onChangeColor={this.updateBox} />
      </React.Fragment>
    );
  }
}
