import React from 'react'
import '../../App.css'

const ToDoContainer = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default ToDoContainer
