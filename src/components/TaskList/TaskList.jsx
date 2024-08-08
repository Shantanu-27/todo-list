import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css'

const TaskList = ({ tasks, updateTask, markAsDone, deleteTask }) => {
    if (tasks.length === 0) {
        return <div>No tasks found!</div>;
      }
    return (
    <div className={`task-list`}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          markAsDone={markAsDone}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
