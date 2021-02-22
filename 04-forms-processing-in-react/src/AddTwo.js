import React from 'react'

class AddTwo extends React.Component {
    state = {
        'num1': 0,
        'num2': 0
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" name="num1" value={this.state.num1} onChange={this.updateNum1}/>
                <input type="text" name="num2" value={this.state.num2} onChange={this.updateNum2}/>
                <p>Sum = {parseFloat(this.state.num1) + parseFloat(this.state.num2)}</p>
            </React.Fragment>

        )
    }
    updateNum1 = (event) => {
        console.log(event);
        this.setState({
            'num1': event.target.value
        })
    }
    updateNum2 = (event) => {
        this.setState({
            'num2': event.target.value
        })
    }
    updateFormField = (event) => {
        this.setState({
            [event.target.name]   : event.target.value
        })
    }
}

export default AddTwo;