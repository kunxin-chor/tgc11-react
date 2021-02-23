import React from "react";

export default class TransactionList extends React.Component {
  state = {
    transactions: [
      {
        id: 1201,
        name: "TCZ 121Z",
        type: "debit",
        amount: 1723
      },
      {
        id: 1203,
        name: "AARON WREN",
        type: "credit",
        amount: 500
      },
      {
        id: 1207,
        name: "THOMSON FAMILY CLINIC",
        type: "debit",
        amount: 60
      },
      {
        id: 1211,
        name: "F&J TRADING",
        type: "debit",
        amount: 120.5
      }
    ]
  };

  getTransactionColor = (transaction) => {
    if (transaction.type == 'credit') {
        return 'green';
    } else {
        return 'red';
    }
  }

  renderList() {
      // the array below is to hold the JSX elements
      let transactions = [];
      
      const getColor = (t) => {
          if (t.type ==='credit') {
              return 'red';
          } else {
              return 'green'
          }
      } 

      for (let t of this.state.transactions) {

          let transactionColor = null;
          if (t.type === 'credit') {
              transactionColor = 'green';
          } else {
              transactionColor = 'red';
          }

          transactions.push(<li style={{color: transactionColor}}>
              {t.name} - ${t.amount}
          </li>)
      }
      return transactions;
  }

  render() {
    return (
        <React.Fragment>
            {this.renderList()}
        </React.Fragment>

    )
  }
}
