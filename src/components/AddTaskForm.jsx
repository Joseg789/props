function handleClick(e, addTask, tasks, setTasks) {
  e.preventDefault();
  addTask(
    {
      id: Date.now(),
      text: e.target.previousSibling.value, // Obtener el valor del input anterior al botón
      completed: false,
    },
    tasks,
    setTasks,
  );
}
//ADD TASK
function AddTaskForm({ addTask, tasks, setTasks }) {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Task Name" />
        <button
          type="submit"
          onClick={(e) => handleClick(e, addTask, tasks, setTasks)}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
