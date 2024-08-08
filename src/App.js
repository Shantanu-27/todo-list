import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar/Navbar';
import './styles.css'; // Import the global styles

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = (task) => {
    const newTask = { ...task, id: uuidv4(), isDone: false, timestamp: new Date().toISOString() };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const markAsDone = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery}/>
      <div className="app">
        <TaskList tasks={filteredTasks} updateTask={updateTask} markAsDone={markAsDone} deleteTask={deleteTask} />
        <TaskForm addTask={addTask} />
      </div>
      
    </div>
  );
};

export default App;
