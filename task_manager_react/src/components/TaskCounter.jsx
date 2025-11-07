function TaskCounter({ tasks }) {
  // Count total tasks (array length)
  const totalTasks = tasks.length;
  
  // Count completed tasks (use .filter())
  const completedTasks = tasks.filter(task => task.completed).length;

  // Display total and completed counts
  return (
    <div className="task-counter">
      <span>{completedTasks}/{totalTasks}</span>
    </div>
  );
}

export default TaskCounter;