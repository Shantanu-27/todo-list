import React, { useState } from 'react';
import './TaskForm.css'

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className='taskform'>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="  Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder=" Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
    </div>
  );
};

export default TaskForm;
