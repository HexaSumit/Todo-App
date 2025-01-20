import React from 'react'

function Todoinput({todos}) {
  return (
    <div className="store-todo">
      {todos.map((todo)=>{
        return <p key={todo.id} className='para'>{todo.value}</p>
      })}
    </div>
  )
}

export default Todoinput