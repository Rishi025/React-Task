import React, { useState } from 'react'

function TaskList({todos, onChangeTodo, onDeleteTodo}) {
  return (
    <div>
      {todos.map((t)=>{
        return(
          <>
          <li key={t.id} id="nav-link">
            <Task
            todo={t}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
            />
          </li>
          </>
        )
      })}
    </div>
  )
}

function Task({todo, onChange, onDelete}){
  const[edit, setEdit] = useState(false);
  let content;
  if(edit)
  {
    content = 
    <>
    <input
    id="inp"
     type="text" 
     value={todo.title}
     onChange={(e)=>{onChange(
      {
        ...todo,
        title: e.target.value
      }
     )}}
     />
    <button onClick={()=>{setEdit(false)}}>Save</button>
    </>
  }
  else
  {
    content=
    <>
    {todo.title}
    <button id="BtnEdit" onClick={()=>{setEdit(true)}}><i class="fa-solid fa-pen-to-square"></i></button>
    </>
  }
  return(
    <>
    {content}
    <button id="BtnDelete" onClick={()=>{onDelete(todo.id)}}><i class="fa-solid fa-trash"></i></button>
    
    </>
  )
}
export default TaskList
