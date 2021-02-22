import React from "react";

export default class BMIForm extends React.Component {
  state = {
    weight: 0,
    height: 0,
    status: ""
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <label>Weight:</label>
          <input
            type="text"
            value={this.state.weight}
            onChange={this.updateWeight}
          />
        </div>
        <div>
          <label>Height:</label>
          <input
            type="text"
            value={this.state.height}
            onChange={event => {
              this.setState({
                height: event.target.value
              });
            }}
          />
        </div>
        <div style={{
            display: this.shouldShowResults() ? 'block' : 'none'
        }}>
          <h1>Results:</h1>
          <p
            style={{
              color: this.getWeightColor()
            }}
          >
            Your bmi is {this.calculateBMI()}
          </p>
          <p>You are {this.showStatus()}</p>
        </div>
      </React.Fragment>
    );
  }

  calculateBMI() {
    return this.state.weight / (this.state.height * this.state.height);
  }

  showStatus() {
    let bmi = this.calculateBMI();
    if (bmi < 18.5) {
      return <h3>Underweight</h3>;
    } else if (bmi < 25) {
      return <h3>Healthy</h3>;
    } else if (bmi < 30) {
      return <h3>Overweight</h3>;
    } else {
      return <h3>Obese</h3>;
    }
  }

  updateWeight = event => {
    this.setState({
      weight: event.target.value
    });
  };

  getWeightColor = () => {
    let bmi = this.calculateBMI();
    if (bmi < 18.5) {
      return "blue";
    } else if (bmi < 25) {
      return "green";
    } else if (bmi < 30) {
      return "orange";
    } else {
      return "red";
    }
  };

  shouldShowResults = () => {
      if (this.state.weight > 0 && this.state.height > 0) {
          return true;
      } else {
          return false;
      }
  }
}
