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
    <div className="card mt-2" style={{ width: "14rem" }}>
      <div onClick={toggleModal} className="card-body">
        <p>
          <u>{props.task.createdAt}</u>
        </p>
        <h5>{props.task.taskTitle}</h5>
        <p className="card-text">{props.task.taskText}</p>
        <p>{props.task.editedAt}</p>
      </div>
      <button
        className="align-self-center btn btn-outline-danger w-50"
        onClick={props.onDelete}>
        Delete
      </button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
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
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Task;
