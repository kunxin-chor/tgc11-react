
import React from 'react'

export default class AdvancedTodoList extends React.Component {
    state = {
        'tasks': [
            {
                "id": 1234,
                "title": "Clean the room",
                "done": false
            },
            {
                "id": 1235,
                "title": "Wash the car",
                "done": false
            },
            {
                "id": 1236,
                "title": "Clean the room",
                "done": true
            }
        ]
    }

    renderTaskList = () => {
        // declare an empty array
        let tasks = [];
        for (let eachTask of this.state.tasks) {
            tasks.push(<li>
                    {eachTask.title} ({eachTask.id})
                    <input type="checkbox" checked={eachTask.done}/>
                </li>)
        }
        return tasks;
    }

    render() {
        return <React.Fragment>
            <ul>
                {this.renderTaskList()}
            </ul>

        </React.Fragment>

    }
}