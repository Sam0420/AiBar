import React, { useState } from "react";
import TaskItem from "./TaskItem";
import AddTaskButton from "./AddTaskButton";
import "./TaskList.css";

const TaskList = ({ tasks, addTask, removeTask, updateTask }) => {
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleAddTask = () => {
    if (newTitle.trim() !== "") {
      addTask(newTitle);
      setNewTitle("");
      setShowAddPanel(false);
    }
  };

  return (
    <div className="task-list-container">
      {/* Custom Button for Adding a New Task */}
      {!showAddPanel ? (
        <AddTaskButton filled onClick={() => setShowAddPanel(true)}>
          + Add Task
        </AddTaskButton>
      ) : (
        <div className="add-task-panel">
          <h3>Add a New Task</h3>
          <input
            type="text"
            placeholder="Task Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="task-input"
          />
          <div className="buttons">
            <button className="save-btn" onClick={handleAddTask}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => { 
              setShowAddPanel(false); 
              setNewTitle(""); 
            }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Render existing tasks */}
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            removeTask={removeTask} 
            updateTask={updateTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;