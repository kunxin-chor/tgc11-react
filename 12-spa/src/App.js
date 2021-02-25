import "./App.css";
import React from "react";
class App extends React.Component {
  state = {
    currentPage: "page1"
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={()=>{
            this.setState({
                'currentPage': 'page1'
            })
        }}>Page 1</button>
        <button onClick={()=>{
            this.setState({
                'currentPage': 'page2'
            })
        }}>Page 2</button>
        <div
          id="page1"
          className="page"
          style={{
            display: this.state.currentPage == "page1" ? "block" : "none"
          }}
        >
          <h1>Page one</h1>
          <p>LorenIsump</p>
        </div>
        <div id="page2" className="page" style={{
            display: this.state.currentPage == 'page2' ? 'block' : "none"
        }}>
          <h1>Page two</h1>
          <p>Hello there</p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
