import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([]);
  // const 
  const [filter, setFilter] = useState('all');
  const filteredTasks = getFilteredTasks();

  function getFilteredTasks() {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed)
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  }

  // const handleClick = () => 

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App