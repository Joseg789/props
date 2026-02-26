export const getTasks = (tasks) => {
  return tasks.map((task) => {
    return {
      id: task.id,
      title: task.title,
      completed: task.completed,
    };
  });
};

export const getTask = (id, tasks) => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    return {
      id: task.id,
      title: task.title,
      completed: task.completed,
    };
  }
  return null;
};

export const addTask = (task, tasks, setTasks) => {
  if (!task.text || task.text.trim() === "") {
    alert("Task text cannot be empty");
    return;
  }
  if (tasks.some((t) => t.text === task.text)) {
    alert("Task already exists");
    return;
  }
  const updatedTasks = [...tasks, task];
  setTasks(updatedTasks);
};

export const deleteTask = (id, tasks, setTasks) => {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks);
};

export const updateTask = (id, updatedTask, tasks, setTasks) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, ...updatedTask };
    }
    return task;
  });
  setTasks(updatedTasks);
};

export const toggleTask = (id, tasks, setTasks) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
};
