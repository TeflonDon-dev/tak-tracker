import React from 'react'
import Task from './Task'
const Tasks = ({tasks,handleDelete,handleReminder}) => {
  return (
    <div>
      
        {
          tasks.map(task => (
            <Task task={task} key={task.id} handleDelete={handleDelete} handleReminder={handleReminder} />
          ))
        } 
    </div>
  )
}

export default Tasks