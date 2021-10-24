import React from "react";
import Modal from "react-modal";
import Form from "./Form";
Modal.setAppElement("#root");

function Task(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div
      className="card rounded-3"
      style={{ maxWidth: "14rem", marginTop: "1rem" }}>
      <div className="card-body  p-2">
        <p>
          created at: <br />
          <u>{props.task.createdAt}</u>
        </p>
        <h5>{props.task.taskTitle}</h5>
        <p className="card-text">{props.task.taskText}</p>
        <p>{props.task.editedAt}</p>
        <div className="d-flex justify-content-around">
          <button
            className="align-self-center btn btn-outline-warning col-5"
            onClick={toggleModal}>
            Edit
          </button>
          <button
            className="align-self-center btn btn-outline-danger col-5"
            onClick={props.onDelete}>
            Delete
          </button>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div className="d-flex">
          <Form
            textBtn={"Edit"}
            taskTitle={props.task.taskTitle}
            taskText={props.task.taskText}
            onEditTask={(task) => {
              props.onEditTask(task);
              toggleModal();
            }}
            isEdit={true}
            editedTask={props.task}
          />
          <button onClick={toggleModal} className="btn btn-outline-success">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Task;
