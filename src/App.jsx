import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";
import { getTasks, addTask, toggleTask, deleteTask } from "./utils/tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Hacer la compra", completed: false },
    { id: 2, text: "Llamar al médico", completed: true },
    { id: 3, text: "Hacer ejercicio", completed: false },
  ]);

  return (
    <>
      <h1>My Tasks</h1>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
      <AddTaskForm addTask={addTask} tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
