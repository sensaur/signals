'use client'
import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';

const TodoListMUI = () => {
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
      <TextField
        label="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} button onClick={() => toggleTask(index)}>
            <Checkbox checked={task.isCompleted} />
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoListMUI;
