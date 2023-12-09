// Subtask.js
import React, { useState } from 'react';
import './Subtask.css';

function Subtask({ subtaskText, isDone, onToggleDone }) {
  const [showSubtask, setShowSubtask] = useState(true);

  const handleToggleDone = (e) => {
    e.stopPropagation(); // Prevent the event from reaching the parent task
    onToggleDone();
  };

  return (
    <div className={`subtask ${isDone ? 'done' : ''}`} onClick={() => setShowSubtask(!showSubtask)}>
      {showSubtask && (
        <>
          <span className="subtask-text">{subtaskText}</span>
          <button onClick={handleToggleDone}>{isDone ? 'Undone' : 'Done'}</button>
        </>
      )}
    </div>
  );
}

export default Subtask;
