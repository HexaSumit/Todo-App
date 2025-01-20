import React,{useState} from 'react'
import Todoinput from './Todoinput'

function NavInput({inputText,setinputText,todos,setTodos}) {

  function Addtodo(){
    if(inputText!==''){
      setTodos((prev)=>[
        ...prev,
        {
          id:Date.now(),
          value:inputText,
          completed:false,
        }
      ])
      setinputText('')
    }
  }
  console.log(todos)

  return (
    <div className="input-box">
      <input 
       className='input'
       type='text'
       placeholder='Write your task'
       value={inputText}
       onChange={(e)=>setinputText(e.target.value)}
      />
      <button className='add-btn' onClick={Addtodo}>Add Task</button>
    </div>
  )
}

export default NavInput