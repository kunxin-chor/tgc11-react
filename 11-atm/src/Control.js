import React from 'react'

export default function Control(props) {
    return <React.Fragment>
         <input
          type="text"
          name="amount"
          value={props.amount}
          onChange={props.onUpdateFormField}
        />
        <button onClick={props.onDeposit}>Deposit</button>
        <button onClick={props.onWithdraw}>Withdraw</button>
    </React.Fragment>

}