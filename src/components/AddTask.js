import React, { useRef, useState } from 'react'
import { toast } from "react-toastify";

const AddTask = ({handleAddTask,showTask}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


    const inputRef = useRef();

    const handleSubmit = (e) => {
          e.preventDefault();
        if (!text) {
       toast.error("Please add a task");
            return;
        }
      
        handleAddTask({ day, text, reminder });
        toast.success("Task added")
        setDay("");
        setText("")
        setReminder(false)

    }

    return (
        <>
            {showTask &&
                <form className='add-form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label>Add task</label>
                        <input type="text" placeholder='Add a task' value={text} onChange={(e) => setText(e.target.value)} ref={inputRef} />
              
                    </div>
                    <div className='form-control'>
                        <label>Day & Time</label>
                        <input type="text" placeholder='Add day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
              
                    </div>
                    <div className='form-control form-control-check'>
                        <label>Set a Reminder</label>
                        <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
              
                    </div>
                    <div className="form-control">
                        <input type="submit" value='Save Task' className='btn' onClick={() => inputRef.current.focus()} />
                    </div>
                </form>}
            </>
  )
}

export default AddTask