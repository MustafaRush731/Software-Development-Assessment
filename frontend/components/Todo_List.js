import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);  // State to store tasks
  const [task, setTask] = useState('');  // State to manage the input field value

  const handleAddTask = () => {
    if (!task.trim()) return;  // Prevent adding empty tasks
    setTasks([...tasks, task]);  // Add the new task to the existing list
    setTask('');  // Clear the input after adding
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}  // Update input field
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>  // Render each task in the list
        ))}
      </ul>
    </div>
  );
};

export default TodoList;