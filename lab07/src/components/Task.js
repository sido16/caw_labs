// Task.js
import React, { useState, useEffect } from 'react';
import Subtask from './Subtask';
import './Task.css';

function Task({ task, onAddSubtask, onToggleSubtaskDone, onDeleteTask, onEditTask }) {
    const [subtaskText, setSubtaskText] = useState('');
    const [showSubtasks, setShowSubtasks] = useState(true); // Always show subtasks initially
    // const [editMode, setEditMode] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
    // Add this state variable at the beginning of your Task component
    const [editMode, setEditMode] = useState(false);


    const handleAddSubtask = () => {
        if (subtaskText.trim() !== '') {
        onAddSubtask(subtaskText);
        setSubtaskText('');
        }
    };

    const handleToggleSubtaskDone = (index) => {
        onToggleSubtaskDone(index);
    };

    const handleDeleteTask = () => {
        onDeleteTask();
    };

    const startEditMode = () => {
        setEditedText(task.text);
        setEditMode(true);
    };

    const stopEditMode = () => {
        onEditTask(editedText || task.text); // Use editedText if it's not empty, otherwise use the original task text
        setEditMode(false);
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        setEditMode(!editMode); // Toggle edit mode
        if (!editMode) {
          setShowSubtasks(true); // Ensure subtasks are shown when entering edit mode
          startEditMode();
        } else {
          stopEditMode();
        }
      };
      
      
      
      
    const handleTaskClick = () => {
        setShowSubtasks(true); // Always set showSubtasks to true when clicked
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.task')) {
        setShowSubtasks(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className={`task ${task.isDone ? 'done' : ''}`} onClick={handleTaskClick}>
        <div className="task-header">
        {editMode ? (
            <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onBlur={stopEditMode}
            />
            ) : (
            <div className="task-text" onClick={startEditMode}>
                {task.text}
            </div>
            )}

            <div>
                {/* <button className='edit-button' onClick={handleEditClick}>Edit</button> */}
                <button className='edit-button' onClick={handleEditClick} style={{ display: editMode ? 'none' : 'inline-block' }}>Edit</button>

                <button className='delete-button' onClick={handleDeleteTask}>X</button>
            </div>
        </div>
        {showSubtasks && (
            <div className="subtasks">
                {task.subtasks.map((subtask, index) => (
                    <Subtask
                    key={index}
                    subtaskText={subtask.text}
                    isDone={subtask.isDone}
                    onToggleDone={() => handleToggleSubtaskDone(index)}
                    />
                ))}
                <div className="add-subtask">
                    <input
                    type="text"
                    placeholder="Enter subtask"
                    value={subtaskText}
                    onChange={(e) => setSubtaskText(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    />
                    <button className='add-subTask-button' onClick={handleAddSubtask}>Add Subtask</button>
                </div>
            </div>
        )}
        </div>
    );
}

export default Task;
