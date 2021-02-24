import React from "react";

export default function ColorDisplay(props) {
  const renderList = () => {
    let boxes = [];
    for (let b of props.boxes) {
      boxes.push(
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "1px solid black",
            backgroundColor: b.color
          }}
        ></div>
      );
    }
    return boxes;
  };

  return <React.Fragment>
      <div style={{display:'flex'}}>
          {renderList()}
      </div>
  </React.Fragment>;
}
