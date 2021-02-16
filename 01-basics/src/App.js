import logo from "./logo.svg";
import "./App.css";
import React from "react";
import kitten from "./kitten.jpg";

function foobar() {
  return (
    <React.Fragment>
      <h2>Look here as well</h2>
      <p>Haha lala</p>
    </React.Fragment>
  );
}

function App() {
  let message = <h2>Look here</h2>;
  return (
    <React.Fragment>
      <h1 className="header">Hello World</h1>
      {message}
      <p
        style={{
          fontFamily: "Verdana",
          fontSize: "24px"
        }}
      >
        Welcome to my home page
      </p>
      <img src={require("./puppy.jpg").default} />
      <img src={kitten} />
      {foobar()}
    </React.Fragment>
  );
}

export default App;
