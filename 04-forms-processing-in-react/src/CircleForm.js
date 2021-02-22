import React from 'react'

export default class CircleForm extends React.Component {
    // to capture any inputs from the user, it must be in the state
    state = {
        radius: 0
    }
    render(){
        return (
            <React.Fragment>
            <input type="text" 
            onChange={this.updateRadius} 
            value={this.state.radius}/>
            Radius of circle = {3.1415 * parseFloat(this.state.radius)}
            </React.Fragment>
        )
    }

    updateRadius = (event) => {
        console.log(event.target.value);
        this.setState({
            'radius': event.target.value
        })
    }
}