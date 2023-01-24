import React from 'react'
import '../../App.css'

const ToDoList = ({children}) => {
  return (
    <div className='card'>
        <h1>Your ToDo list!</h1>
        {children}
    </div>
  )
}

export default ToDoList
