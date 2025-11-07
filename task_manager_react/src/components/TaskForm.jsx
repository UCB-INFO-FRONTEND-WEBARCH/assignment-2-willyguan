import { useState } from 'react';

function TaskForm({ onAddTask }) {
  // Local state for the input value (controlled component)
  const [inputValue, setInputValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stops form from refreshing page
    
    // Validation: prevent empty tasks using .trim()
    if (inputValue.trim() === '') {
      return; // Don't add if empty or only whitespace
    }
    
    // Call the onAddTask prop function with the text
    onAddTask(inputValue);
    
    // Clear the input after submission
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={inputValue}  // Controlled component: value comes from state
        onChange={(e) => setInputValue(e.target.value)}  // Update state on change
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}

export default TaskForm;