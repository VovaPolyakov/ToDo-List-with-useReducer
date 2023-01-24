import React, { useState } from 'react'
import {DataContext} from '../../context/DataContext/DataContext'
import { useContext } from 'react'

const ToDoItem = () => {
    const [state,dispatch] = useContext(DataContext)

    const handleChecked = (e) => {
            dispatch({
                type:'DELETE_TODO',
                id:e.target.id,
                status:e.target.checked
            })
    }
  return (
    <div>
        <ul>
        {state.items.map((item) => (
            <div className='row' key={item.id}>
                {item.status ? <li className='text'><s>{item.text}</s></li> :<li className='text'>{item.text}</li>}
                <label className="checkbox">
                    <input id={item.id} type="checkbox" onChange={handleChecked}></input>
                    <div className="checkmark"></div>
                </label>
            </div>
        ))}
        </ul>
    </div>
  )
}

export default ToDoItem
