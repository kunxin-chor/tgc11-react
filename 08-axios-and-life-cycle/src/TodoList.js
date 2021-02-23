import React from 'react'
import axios from 'axios'
import processing from './processing-processing.gif'

export default class TodoList extends React.Component {
    state = {
        tasks:[],
        loaded:false
    }

    async componentDidMount() {
        console.log("TodoList is mounted and ready!")
        let response = await axios.get('items.json');
        this.setState({
            'tasks': response.data.tasks,
            loaded:true
        })
    }
    renderList = ()=>{
        let todos = [];
        for (let task of this.state.tasks) {
            let todoElement = <div key={task.id}>
                <h2 className="title">{task.title}</h2>
                <h3>Done: <input type="checkbox" checked={task.done}/></h3>
            </div>

            todos.push(todoElement);
        }
        return todos;
    }

    render() {
        return (<React.Fragment>
            <button onClick={this.loadData}>Load Data</button>
            {this.renderList()}
            { this.state.loaded == false && <img src={processing}/> }
        </React.Fragment>)

    }

    loadData = async () => {
        // in React, using axios.get will start looking for the file in the public folder
        // i.e, React will find the file in relative to the public folder
        let response = await axios.get('items.json');
        this.setState({
            'tasks': response.data.tasks
        })
    }
}