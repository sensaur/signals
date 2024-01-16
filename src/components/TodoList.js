'use client'

import {useState} from "react";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, {text: newTodo, isDone: false}])
      setNewTodo('')
    }
  }

  const handleToggle = (i) => {
    const newTodos = [...todos]
    newTodos[i].isDone = !newTodos[i].isDone
    setTodos(newTodos)
  }

  console.log("todo", todos)

  return (
    <div>
      <input
        type="text"
        placeholder="New TODO"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((el, i) => (
          <li
            key={i}
            onClick={() => handleToggle(i)}
            style={{listStyleType: "none"}}
          >
            <input
              type="checkbox"
              checked={el.isDone}
              onChange={() => {
              }}
            />
            {el.text}</li>
        ))}
      </ul>
    </div>
  )
}
