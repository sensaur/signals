'use client'
import { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, isCompleted: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => toggleTask(index)}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => {}}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
