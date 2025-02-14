import React from 'react'

function Todoinput({todos,setTodos,setinputText}) {

  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  const editTodo=(id,todos,value,index)=>{
    // setinputText(value)
    todos.splice(index,1)
    setinputText(value)
  }


  return (
    <div className="store-todo">
      {todos.map((todo,index)=>{
        return <li 
            key={todo.id} 
            className='list-items'>
            {todo.value}
            <div className="buttons">
              <button className='Edit-btn' onClick={()=>editTodo(todo.id,todos,todo.value,index)}>Edit</button>
              <button className='delete-btn' onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
      })}
    </div>
  )
}

export default Todoinput