import React from 'react'
import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import './App.css'


const initialTodos = [
  {id:1, title:"Buy a new gaming laptop"},
  {id:2, title:"Complete a previous task"},
  {id:3, title:"Create video for YouTube"},
]
let index = 4;
function App() {
  const[todos, setTodos] = useState(initialTodos);
  const handleAddTodo = (title)=>{
    setTodos([
      ...todos,
      {id:index++,
       title:title 
      }
    ])
  }
  const handleChangeTodo = (nextTodo)=>{
   setTodos(
    todos.map((t)=>{
      if(t.id==nextTodo.id)
      {
        return nextTodo;
      }
      else
      {
        return t;
      }
    })
   )
  }
  const handleDeleteTodo = (todoId)=>{
   setTodos(
    todos.filter((t)=>{
      return t.id!=todoId
    })
   )
  }
  const handleClearTodos = () => {
    setTodos([]); // Clears all todos
  };
  return (
    <div className="App">
      <div className="todo">
      <h1>Todo App</h1>
      <AddTodo onAddTodo={handleAddTodo}/>
      <TaskList
      todos={todos}
      onChangeTodo={handleChangeTodo}
      onDeleteTodo={handleDeleteTodo}
      />
      <span>Clear All Pending Tasks...</span> <button onClick={handleClearTodos} id="ClearBtn">Clear All</button>
      </div>
    </div>
  )
}

export default App
