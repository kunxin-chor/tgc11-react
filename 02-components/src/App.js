import React from "react";
import Header from "./Header";
import Addition from "./Addition";
import ImageFrame from './ImageFrame';
import "./App.css";


function Alert(props) {
  return (
    <div
      style={{
        backgroundColor: props.bgcolor,
        border: "1px black solid",
        fontSize: "42px",
        color: "white"
      }}
    >
      {props.warning}
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <Header />
      <Addition n1={3} n2={4}/>
      <Addition n1={10} n2={20}/>
      <ImageFrame image={require("./puppy.jpg").default} />
      <ImageFrame image={require("./kitten.jpg").default} borderColor="green" />
      <ImageFrame image={require("./narina.jfif").default} />
      <Alert warning="Red alert! Shield up!" bgcolor="blue" />

    </div>
  );
}

export default App;
