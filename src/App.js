import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";

import TasksList from "./Components/TasksList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTasks: [],
    };
  }

  addNewTask(task) {
    this.setState((prevState) => {
      return { listOfTasks: [...prevState.listOfTasks, task] };
    });
  }
  deleteTask(index) {
    if (window.confirm("are you sure you want to delete?")) {
      this.setState((prevState) => {
        return {
          listOfTasks: [
            ...prevState.listOfTasks.slice(0, index),
            ...prevState.listOfTasks.slice(index + 1),
          ],
        };
      });
    } else return false;
  }
  editTask(editedTask) {
    console.log(editedTask);
    this.setState((prevState) => {
      return {
        listOfTasks: prevState.listOfTasks.map((task) => {
          if (task.id === editedTask.id) {
            return editedTask;
          } else return task;
        }),
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          onAddTask={(task) => this.addNewTask(task)}
          textBtn={"Submit"}
          taskTitle=""
          taskText=""
          isEdit={false}
        />
        <TasksList
          listOfTasks={this.state.listOfTasks}
          onDeleteTask={(index) => this.deleteTask(index)}
          onEditTask={(task) => this.editTask(task)}
        />
      </div>
    );
  }
}

export default App;
