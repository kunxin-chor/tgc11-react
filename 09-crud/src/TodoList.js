import React from "react";

export default class TodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 12345,
        title: "Wash the car",
        done: true
      }
    ],
    newTaskTitle: "",
    editedTaskTitle: "",
    editedTaskDone: false,
    editingTask: false
  };
  renderTaskList = () => {
    let accum = [];
    for (let t of this.state.tasks) {
      accum.push(
        <div key={t.id}>
          {t.title}
          <input
            type="checkbox"
            checked={t.done}
            onChange={() => {
              this.updateTaskCheckbox(t);
            }}
          />
          <button
            onClick={() => {
              this.editTask(t);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.deleteTask(t);
            }}
          >
            Delete
          </button>
        </div>
      );
    }
    return accum;
  };

  editTask = task => {
    this.setState({
      editingTask: true,
      editedTaskTitle: task.title,
      editedTaskDone: task.done,
      editedTaskID: task.id
    });
  };

  updateTask = (event) => {

      let newTask = {
          'id': this.state.editedTaskID,
          'title': this.state.editedTaskTitle,
          'done': this.state.editedTaskDone
      }
      let clonedArray = this.state.tasks.map(function(eachTask){
          if (eachTask.id != newTask.id) {
              return eachTask;
          } else {
              return newTask;
          }
      })

      this.setState({
          'tasks': clonedArray
      })


  }

  updateTaskTitle = event => {
    this.setState({
      newTaskTitle: event.target.value
    });
  };

  deleteTask = taskToDelete => {
    // 1. find the index of the task we want to delete
    let index = this.state.tasks.findIndex(t => t.id === taskToDelete.id);

    // 2. cloned the array
    // 3. remove the task from the array
    let cloned = [
      ...this.state.tasks.slice(0, index),
      ...this.state.tasks.slice(index + 1)
    ];
    // 4. set the cloned array back into the state
    this.setState({
      tasks: cloned
    });
  };

  updateTaskCheckbox(task) {
    // 1. clone the object that you are changing
    let clonedTask = { ...task };

    // 2. change the object
    clonedTask.done = !clonedTask.done;

    // 3. clone the array that you are changing
    let clonedArray = [...this.state.tasks];

    // 4. replace the original object at the same index in the cloned array with the cloned object
    let index = this.state.tasks.findIndex(function(eachTask) {
      return eachTask.id == task.id;
    });

    // 4.1 update the cloned array with the new updated task
    clonedArray[index] = clonedTask;

    // 5. put the cloned array into the state
    this.setState({
      tasks: clonedArray
    });
  }

  updateCheckboxV2 = task => {
    // 1. clone and change the done key at the same time
    let clonedTask = { ...task, done: !task.done };

    // 2. use MAP to create the new cloned array
    let clonedArray = this.state.tasks.map(function(eachTask) {
      if (eachTask.id != clonedTask.id) {
        return eachTask;
      } else {
        return clonedTask;
      }
    });

    this.setStatee({
      tasks: clonedArray
    });
  };

  updateCheckboxV3 = task => {
    let clonedTask = { ...task };
    clonedTask.done = !clonedTask.done;

    let index = this.state.tasks.findIndex(eachTask => {
      return eachTask.id === task.id;
    });

    let clonedArray = [
      ...this.state.tasks.slice(0, index),
      clonedTask,
      ...this.state.tasks.slice(index + 1)
    ];

    this.setState({
      tasks: clonedArray
    });
  };

  updateCheckboxV4 = task => {
    let index = this.state.tasks.findIndex(eachTask => eachTask.id === task.id);

    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index),
        { ...task, done: !task.done },
        ...this.state.tasks.slice(index + 1)
      ]
    });
  };

  addTask = event => {
    // create a new task from the values given by the user
    let newTask = {
      id: Math.floor(Math.random() * 999999 + 100000),
      title: this.state.newTaskTitle,
      done: false
    };

    // add the new task into the tasks array
    let clone = [...this.state.tasks];

    // add to the back of the array
    clone.push(newTask);

    // update the state
    this.setState({
      tasks: clone
    });
  };

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateCheckbox = event => {
      console.log(event.target.value);
      this.setState({
          [event.target.name] : event.target.checked
      })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Add New Task</h1>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.newTaskTitle}
            onChange={this.updateTaskTitle}
          />
        </div>
        <button onClick={this.addTask}>Add Task</button>
        <h1>Task List</h1>
        {this.renderTaskList()}
        <div
          id="popup"
          style={{
            display: this.state.editingTask ? "block" : "none"
          }}
        >
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="editedTaskTitle"
              onChange={this.updateFormField}
              value={this.state.editedTaskTitle}
            />
          </div>
          <div>
            <label>Done:</label>
            <input
              type="checkbox"
              name="editedTaskDone"
              onChange={this.updateCheckbox}
              checked={this.state.editedTaskDone}
            />
          </div>

          <button
            onClick={() => {
              this.setState({
                editingTask: false
              });
              this.updateTask();
            }}
          >
            OK
          </button>
        </div>
      </React.Fragment>
    );
  }
}
