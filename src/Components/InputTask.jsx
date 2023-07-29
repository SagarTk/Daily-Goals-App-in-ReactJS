import React from 'react'
import { useState } from 'react'
import TodoItems from './TodoItems'

const InputTask = () => {

    const [task , setTask] = useState("")
    const [tasks , setTasks] = useState([])
    const [editedTask , setEditedtask] = useState("")

    const addTask = (e , ind) => {
        e.preventDefault();

        if(editedTask)
        {
            console.log(editedTask)
            
            const x = tasks.map((val , i)=>{
                if(val === editedTask)    return val = task ;
                else  return val ;
            })
            setTasks(x);
            setEditedtask("")
        }
        else if(task !== "")
        {
            setTasks([...tasks , task])
        }
        setTask("")
    }
    
    const deleteTask = (ind) => {
        const filteredArr = tasks.filter((val , i)=>{
            return ind !== i;
        })
        setTasks(filteredArr)
    }

    const editTask = (ind) => {
        
        const edit = tasks.find( item => {
            return tasks[ind] === item;
        })
        setTask(edit);
        setEditedtask(edit);
    }
    
    return (

        <div className="main-container">

            <div className='input-container'>
                
                <input className='input-task' type="text" placeholder='Enter Task' value={task} onChange={(e) => {setTask(e.target.value)}} />

                <button className='todo-btn' onClick={addTask}>
                    {editedTask ? "Edit Task" : "Add Task"} 
                </button>

            </div>            
            

            {
            tasks.map((val , index) => (
            
            <TodoItems 
                key={index}
                task={val} 
                ind={index}
                deleteTask={deleteTask}
                editTask={editTask}
            />
            ))
            }

        </div>
  )
}

export default InputTask