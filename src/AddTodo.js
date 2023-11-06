import React, { useState } from 'react'

function AddTodo({onAddTodo}) {
    const [title, setTitle] = useState("")
  return (
    <div>
      <input
       type="text"
        value={title}
       onChange={(e)=>{setTitle(e.target.value)}}
       placeholder="Add your new todo"
         />
      <button onClick={()=>{onAddTodo(title) }} id="AddBtn">+</button>
    </div>
  )
}

export default AddTodo
