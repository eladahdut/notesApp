import Task from "./Task";

function TasksList(props) {
  return (
    <div className="container d-flex flex-wrap align-middle justify-content-between mt-5">
      {props.listOfTasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => props.onDeleteTask(index)}
          onEditTask={(task) => props.onEditTask(task)}></Task>
      ))}
    </div>
  );
}

export default TasksList;

{
  /* <div className="row justify-content-between"></div> */
}
