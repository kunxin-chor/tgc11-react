import React from 'react';

export default function Display(props) {
    return (
        <React.Fragment>
             <div>{props.balance}</div>
        </React.Fragment>

    )
}