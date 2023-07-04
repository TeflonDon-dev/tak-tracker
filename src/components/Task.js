import React from 'react';
import {FaTimes} from "react-icons/fa"

const Task = ({task,handleDelete,handleReminder}) => {
    return (
        <>
            <div  className={`task ${task.reminder? 'reminder':'null'} `} onDoubleClick={()=>handleReminder(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red'}} onClick={()=>handleDelete(task.id)}/></h3>
            <p>{task.day}</p>
                
            </div>
           
      </>
    
  )
}

export default Task