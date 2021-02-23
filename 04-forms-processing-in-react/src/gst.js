import React from "react";

// create a class-based component
class GST extends React.Component {

  state = {
    bill: 0,
    displayResult: false,
    gst: this.props.gst
  };
  calculateGST() {
    return this.state.bill * this.state.gst;
  }

  updateBill = event => {
    this.setState({
      bill: event.target.value
    });
  };

  showResult = () => {
    this.setState({
      displayResult: true
    });
  };

  showResultElements = () => {
    if (this.state.displayResult) {
      return (
        <React.Fragment>
          <h2>GST is {this.state.bill * this.state.gst}</h2>
        </React.Fragment>
      );
    }
  };

  getBillColor = () => {
    if (this.state.bill <= 0) {
      return "red";
    } else {
      return "green";
    }
  };

  getBillError = () => {
    if (this.state.bill <= 0) {
      return (
        <React.Fragment>
          <span>Please enter a number greater than 0</span>
        </React.Fragment>
      );
    }
  };

  render() {
    let billError = null;
    if (this.state.bill <= 0) {
      billError = (
        <React.Fragment>
          <span>Bill cannot be smaller than 1</span>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div>
          <label>Bill:</label>
          <input
            type="text"
            name="bill"
            value={this.state.bill}
            onChange={this.updateBill}
            style={{
              color: this.state.bill > 0 ? "green" : "red"
            }}
          />

          {this.state.bill <= 0 ? (
            <React.Fragment>
              <span>Please enter a number larger than 0</span>
            </React.Fragment>
          ) : null}
          {billError}

          {this.state.bill > 0 && (
            <React.Fragment>
              <span>Yeah your bill amount is correct!</span>
            </React.Fragment>
          )}
        </div>
        <div>
          <label>GST Amount:</label>
          <input type="text" name="gst" value={this.calculateGST()} />
        </div>
        <button onClick={this.showResult}>Calculate</button>
        {this.showResultElements()}
      </React.Fragment>
    );
  }
}

export default GST;
