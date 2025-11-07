function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      {/* Checkbox that calls onToggle when changed */}
      <input
        type="checkbox"
        className="task-checkbox"
        id={`task-${task.id}`}
        checked={task.completed}  // Controlled: reflects task completion state
        onChange={() => onToggle(task.id)}  // Pass task.id to handler
      />
      
      {/* Task text with conditional styling */}
      <label 
        htmlFor={`task-${task.id}`}
        className={`task-text ${task.completed ? 'completed' : ''}`}  // Apply 'completed' class conditionally
      >
        {task.text}
      </label>
      
      {/* Delete button that calls onDelete when clicked */}
      <button 
        onClick={() => onDelete(task.id)}  // Pass task.id to handler
        className="delete-button"
      >
        ×
      </button>
    </li>
  );
}

export default TaskItem;