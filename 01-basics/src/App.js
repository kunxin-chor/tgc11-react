import logo from './logo.svg';
import './App.css';
import React from 'react';
import kitten from './kitten.jpg';

function App() {
    return (
        <React.Fragment>
            <h1 className="header">Hello World</h1>
            <p>Welcome to my home page</p>
            <img src={require('./puppy.jpg').default}/>
            <img src={kitten}/>
        </React.Fragment>
    );
}

export default App;
