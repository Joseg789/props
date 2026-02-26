const handleClick = (id, tasks, setTasks, toggleTask) => {
  toggleTask(id, tasks, setTasks);
};
const handleClickDelete = (id, tasks, setTasks, deleteTask) => {
  deleteTask(id, tasks, setTasks);
};

function Task({ task, tasks, setTasks, toggleTask, deleteTask }) {
  return (
    <div>
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
        {task.completed ? " (Completed)" : " (Pending)"}
      </p>
      <button onClick={() => handleClick(task.id, tasks, setTasks, toggleTask)}>
        ✅
      </button>{" "}
      <button
        onClick={() => handleClickDelete(task.id, tasks, setTasks, deleteTask)}
      >
        ❌
      </button>
    </div>
  );
}

export default Task;
