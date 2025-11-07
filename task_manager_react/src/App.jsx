import { useState } from 'react'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  function getFilteredTasks() {
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  }

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const filteredTasks = getFilteredTasks();

  return (
    <div>
      <section className="container">
        <Header totalTasks={totalTasks} completedTasks={completedTasks} />
        
        <section className="main-wrapper">
          <nav className="sidebar">
            <ul className="nav-list">
              <li className="nav-item">
                <div className="nav-item-content">
                  <div className="nav-icon">
                    <img src={inboxIcon} alt="Inbox"/>
                  </div>
                  <span className="nav-text">Inbox</span>
                </div>
                <span className="nav-count">{totalTasks}</span>  {/* Dynamic! */}
              </li>
              <li className="nav-item">
                <div className="nav-item-content">
                  <div className="nav-icon">
                    <img src={calendarIcon} alt="Today"/>
                  </div>
                  <span className="nav-text">Today</span>
                </div>
                <span className="nav-count">{totalTasks}</span>  {/* Dynamic! */}
              </li>
              <li className="nav-item">
                <div className="nav-item-content">
                  <div className="nav-icon">
                    <img src={upcomingIcon} alt="Upcoming"/>
                  </div>
                  <span className="nav-text">Upcoming</span>
                </div>
              </li>
            </ul>
          </nav>

          <main className="main-content">
            <h1 className="main-header-title">Inbox</h1>
            
            {/* TaskForm: has its own state, validates input, clears after submit */}
            <TaskForm onAddTask={addTask} />
            
            {/* Filter buttons */}
            <div className="filter-buttons">
              <button 
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </div>

            {/* TaskCounter: calculates total, active, completed */}
            <TaskCounter tasks={filteredTasks} />
            
            {/* TaskList: maps tasks, shows empty message, passes handlers down */}
            <TaskList 
              tasks={filteredTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </main>
        </section>
      </section>
    </div>
  )
}

export default App