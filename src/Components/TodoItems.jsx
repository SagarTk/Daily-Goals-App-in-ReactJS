import React from 'react'
import {LuEdit} from "react-icons/lu"
import {MdOutlineDelete} from "react-icons/md"

const TodoItems = ({task , ind , deleteTask , editTask}) => {

  return (
    
    
      <li className='todo-list'>
    
        <span className='todo-task'>

            <span>{ind+1}.</span>
            <span className='task'>{task}</span>
    
        </span>
        <span className='btn'>
          <button className='edit' onClick={()=>editTask(ind)}><LuEdit /></button>
          <button className='del' onClick={()=>deleteTask(ind)}><MdOutlineDelete /></button>
        </span>
    
      </li>
    
  )
}

export default TodoItems
