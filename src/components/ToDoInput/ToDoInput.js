import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext/DataContext'
import { useState } from 'react'
import '../../App.css'

const ToDoInput = () => {
    const [state,dispatch] = useContext(DataContext)
    const [value,setValue] = useState('')

    const handleAdd = () => {
        dispatch({
            type:'ADD_TODO',
            text:value,
        });
        setValue('')
    }
  return (
    <div className='inputs'>
      <input placeholder='Add your ToDo!' value={value} onChange={(e) => {setValue(e.target.value)}} className='input'></input>
      <button onClick={handleAdd}><span>Add</span></button>
    </div>
  )
}

export default ToDoInput
