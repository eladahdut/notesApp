import Task from "./Task";

function TasksList(props) {
  return (
    <div className="container d-flex mt-5">
      <div className="row justify-content-between">
        {props.listOfTasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => props.onDeleteTask(index)}
            onEditTask={(task) => props.onEditTask(task)}></Task>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
