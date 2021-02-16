import logo from './logo.svg';
import React from 'react';
import Header from './Header'

function Alert(props) {
    return <div style={{
        backgroundColor: props.bgcolor,
        border:"1px black solid",
        fontSize:"42px",
        color:'white'
    }}>{props.warning}</div>
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Alert 
        warning="Red alert! Shield up!"
        bgcolor="blue"/>
    </div>
  );
}

export default App;
