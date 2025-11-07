import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
  // What should render when tasks array is empty?
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks to show!</p>;
  }

  // Render multiple TaskItem components
  return (
    <ul className="task-list">
      {/* Use .map() to transform array of tasks into array of components */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}  // Unique key prop required for lists in React
          task={task}
          onToggle={onToggle}  // Pass handler functions down as props
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;