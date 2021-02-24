import React from "react";
import Display from "./Display";
import Control from "./Control";

export default class ATM extends React.Component {
  state = {
    balance: 1000,
    amount: 0
  };

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  deposit = () => {
    this.setState({
      balance: parseFloat(this.state.balance) + parseFloat(this.state.amount),
      amount: 0
    });
  };

  withdraw = () => {
    this.setState({
      balance: parseFloat(this.state.balance) - parseFloat(this.state.amount),
      amount: 0
    });
  };

  render() {
    return (
      <React.Fragment>
        <Display balance={this.state.balance} />

        <Control
          onWithdraw={this.withdraw}
          onDeposit={this.deposit}
          onUpdateFormField={this.updateFormField}
          amount={this.state.amount}
        />
      </React.Fragment>
    );
  }
}
