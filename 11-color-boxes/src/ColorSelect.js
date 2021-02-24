import React from 'react'

export default function ColorSelect(props) {
    return (
        <React.Fragment> <select
        name={props.index}
        value={props.color}
        onChange={props.onChangeColor}
      >
        <option>white</option>
        <option>red</option>
        <option>green</option>
        <option>blue</option>
      </select></React.Fragment>

    )
}