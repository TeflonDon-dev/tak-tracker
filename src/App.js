import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import SearchTask from './components/SearchTask';
import { Route,Routes } from 'react-router-dom'
import About from './components/About'


const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasksList")) || []);

  useEffect(() => {
      localStorage.setItem("tasksList",JSON.stringify(tasks))
    },[tasks])

  const handleAddTask = (task) => {
    const id = new Date().getTime().toString();
    const newTask = { id, ...task };
    setTasks([...tasks,newTask])
  } 
  
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const handleReminder = (id) => {
    const reminder = tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task);
    setTasks(reminder);
  }

  const [showTask, setShowTask] = useState(true);

  const [search, setSearch] = useState('');
 
  const handleShowTask = () => {
    setShowTask(!showTask);
}

  return (
   
    <div className='container'>
      <Header handleShowTask={handleShowTask} showTask={showTask} />
      
      <Routes>
        <Route path='/' exact element={(
          <>
          {showTask && <AddTask handleAddTask={handleAddTask} />}
      {tasks.length ? <SearchTask search={search} setSearch={setSearch} /> : null}
      
        
      {tasks.length ? <Tasks tasks={tasks.filter(task => ((task.text).toLowerCase()).includes(search.toLowerCase()))} handleDelete={handleDelete} handleReminder={handleReminder} /> : <p>No tasks to display</p>}
      
          </>
        )}/>
        <Route path='/about' element={<About />} />
        </Routes>
      <Footer/>
      </div>
      
  )
}
 
export default App