import React from "react";
import moment from "moment";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: this.props.taskText,
      taskTitle: this.props.taskTitle,
      //   createdAt: moment().format("LLL"),
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    if (!this.props.isEdit) {
      this.createTask();
    } else this.editTask();
  }

  createTask() {
    const task = {
      id: Date.now(),
      taskTitle: this.state.taskTitle,
      taskText: this.state.taskText,
      createdAt: moment().format("LLL"),
    };
    this.props.onAddTask(task);
    this.setState({ taskText: "" });
    this.setState({ taskTitle: "" });
  }

  editTask() {
    const task = this.props.editedTask;
    task.taskTitle = this.state.taskTitle;
    task.taskText = this.state.taskText;
    task.editedAt = "Edited at: " + moment().format("LLL");
    this.props.onEditTask(task);
  }

  handleTaskTextChange(value) {
    this.setState({ taskText: value });
  }
  handleTaskTitleChange(value) {
    this.setState({ taskTitle: value });
  }

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <form
          className="w-75 mt-3"
          onSubmit={(event) => this.handleFormSubmit(event)}>
          <input
            type="text"
            className="form-control col-8"
            placeholder="Title"
            value={this.state.taskTitle}
            onChange={(event) => this.handleTaskTitleChange(event.target.value)}
          />
          <textarea
            className="form-control"
            placeholder="Enter task here"
            value={this.state.taskText}
            onChange={(event) => this.handleTaskTextChange(event.target.value)}
          />
          <br />
          <button className="btn btn-outline-warning" type="submit">
            {this.props.textBtn}
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
