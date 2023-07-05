import React from 'react';
import {FaTimes,FaClock} from "react-icons/fa"

const Task = ({task,handleDelete,handleReminder}) => {
    return (
        <>
            <div  className={`task ${task.reminder? 'reminder':'null'} `} onDoubleClick={()=>handleReminder(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red'}} onClick={()=>handleDelete(task.id)}/></h3>
                <p style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"6px"}}>{task.reminder ? <FaClock /> : null}{task.day}</p>
                
            </div>
           
      </>
    
  )
}

export default Task