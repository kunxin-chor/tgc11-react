import logo from './logo.svg';
import './App.css';
import React from 'react'
import ColoredBox from './ColoredBox'
import CustomizedBox from './CustomizedBox'
import RandomImage from './RandomImage'

function App() {
  return (
     <React.Fragment>
         <div>
             <h1 className="title">Hello world</h1>
             <img src={require('./kitten.jpg').default}/>
             <p style={{
                 fontFamily:'Verdana',
                 fontSize:"32px"
             }}>Today is a funny day</p>
             <ColoredBox/>
             <ColoredBox/>
             <CustomizedBox bgcolor='blue'/>
             <CustomizedBox bgcolor='yellow'/>
             <RandomImage/>
         </div>

     </React.Fragment>

  );
}

export default App;
