// TaskList.js
import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, subtasks: [] }]);
    }
  };

  const handleAddSubtask = (taskIndex, subtaskText) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].subtasks.push({ text: subtaskText, isDone: false });
    setTasks(updatedTasks);
  };

  const handleToggleSubtaskDone = (taskIndex, subtaskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].subtasks[subtaskIndex].isDone = !updatedTasks[taskIndex].subtasks[subtaskIndex].isDone;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskIndex, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].text = newText;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
        <h1>Task List</h1>
      <NewTaskForm onAddTask={handleAddTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onAddSubtask={(subtaskText) => handleAddSubtask(index, subtaskText)}
          onToggleSubtaskDone={(subtaskIndex) => handleToggleSubtaskDone(index, subtaskIndex)}
          onDeleteTask={() => handleDeleteTask(index)}
          onEditTask={(newText) => handleEditTask(index, newText)}
        />
      ))}
    </div>
  );
}

export default TaskList;
