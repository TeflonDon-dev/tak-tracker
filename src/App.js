import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import SearchTask from './components/SearchTask';
import { Route,Routes } from 'react-router-dom'
import About from './components/About';
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasksList"))||[]);

  useEffect(() => {

       localStorage.setItem("tasksList",JSON.stringify(tasks))
    
  }, [tasks])

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


  const [search, setSearch] = useState('');
 
  
  const [showTask, setShowTask] = useState(true);

 const handleShowTask = () => {
    setShowTask(!showTask);
  }

  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    const filteredResults = tasks.filter(task => ((task.text).toLowerCase()).includes(search.toLowerCase()) ||
  ((task.day).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults.reverse());
  },[tasks,search])

  return (
   
    <div className='container'>
     
      <Header showTask={showTask} handleShowTask={handleShowTask} />
    
      <Routes>
        <Route path='/' exact element={(
          <>
            <AddTask handleAddTask={handleAddTask} showTask={showTask} />
            <SearchTask search={search} setSearch={setSearch} tasks={tasks} />
      
            {searchResults.length ?
              <Tasks tasks={searchResults} handleDelete={handleDelete} handleReminder={handleReminder} /> : <p>No tasks to display</p>}
      
          </>
        )}/>
        <Route path='/about' element={<About />} />
        </Routes>
      <Footer />
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </div>
      
  )
}
 
export default App