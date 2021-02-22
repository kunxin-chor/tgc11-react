import React from 'react'

// class-based component
export default class RandomImage extends React.Component {
    state = {
        'currentImage': 0,
        'images': [
            require('./kitten.jpg').default,
            require('./puppy.jpg').default,
            require('./rabbit.jpg').default
        ]
    }

    // render function is to return the
    // JSX of the component
    render() {
        return (
            <React.Fragment>
                <img src={this.state.images[this.state.currentImage]}/>
                <button onClick={this.pickImage}>Randomize</button>
            </React.Fragment>

        )
    }

    pickImage = () => {
        let newImageIndex = Math.floor(Math.random() * 3);
        // to update the state (i.e to change a variable in the state)
        this.setState({
            'currentImage': newImageIndex
        })
    }
}