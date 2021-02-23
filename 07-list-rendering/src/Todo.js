import React from "react";

export default class Todo extends React.Component {
  state = {
    tasks: ["Walk the dog", "Clean the room", "Pay the bills"]
  };

  renderTask() {
      let t = [];
      for (let eachTask of this.state.tasks) {
          t.push(<li>{eachTask}</li>)
      }
      return t;
  }

  renderTaskV2() {
      return this.state.tasks.map(function(todo){
          return <li style={{color:'yellow'}}>{todo}</li>
      })
  }

  render() {
    let t = [];
    for (let eachTask of this.state.tasks) {
      t.push(<li style={{color:'green'}}>{eachTask}</li>);
    }

    return (
      <React.Fragment>
        <h1>Technique 1: Use a for loop</h1>
        <ul>{t}</ul>

        <h1>Technique 2: Use a function</h1>
        <ul>{this.renderTask()}</ul>

        <h1>Technique 3: Use map</h1>
        <ul>
            {
                this.state.tasks.map(function(todo){
                    return <li style={{color:'red'}}>{todo}</li>
                })
            }
        </ul>

        <h1>Technique 4: use map inside a function</h1>
        <ul>{this.renderTaskV2()}</ul>


      </React.Fragment>
    );
  }
}
