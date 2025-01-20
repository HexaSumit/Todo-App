import { useState } from 'react'
import './App.css'
import NavInput from './components/NavInput'
import Todoinput from './components/Todoinput'

function App() {

  const [inputText,setinputText]=useState('')
  const [todos,setTodos]=useState([])
  return (
    <>
      <NavInput  inputText={inputText} setinputText={setinputText} todos={todos} setTodos={setTodos}/>
      <Todoinput todos={todos} />
    </>
  )
}

export default App
