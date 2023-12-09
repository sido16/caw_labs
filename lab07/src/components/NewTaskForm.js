// NewTaskForm.js
import './NewTaskForm.css';
import React, { useState } from 'react';

function NewTaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default NewTaskForm;
