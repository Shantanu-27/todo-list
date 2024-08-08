import React, { useState } from 'react';
import './TaskItem.css'

const TaskItem = ({ task, updateTask, markAsDone, deleteTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask({ ...task, title, description, timestamp: new Date().toISOString() });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.isDone ? 'done' : ''}`}>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <h2>{task.title}</h2>
      </div>
      {isExpanded && (
        <div>
          {isEditing ? (
            <div className='editbox'>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button onClick={handleUpdate}>Save</button>
            </div>
          ) : (
            <div>
              <p>{task.description}</p>
              <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
            </div>
          )}
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
          <button onClick={() => markAsDone(task.id)}>
            {task.isDone ? 'Undo' : 'Done'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
