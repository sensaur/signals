'use client'

import {useState} from "react";

export default function () {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos(() => [...todos, {text: newTodo, isDone: false}])
      setNewTodo('')
    }
  }

  const toggleTodo = (i) => {
    const newTodos = [...todos]
    newTodos[i].isDone = !newTodos[i].isDone
    setTodos(newTodos)
  }


  return (
    <div>
      <input
        placeholder="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
      >Add todo
      </button>
      <ul style={{listStyleType: "none"}}>
        {todos.map((el, i) => (
          <li key={i} style={{}}>
            <input
              type="checkbox"
              checked={el.isDone}
              onClick={() => toggleTodo(i)}
              onChange={() => {
              }}
            />
            {el.text}</li>
        ))}
      </ul>
    </div>
  )
}
