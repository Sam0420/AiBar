// src/components/TaskList.jsx
import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, addTask, removeTask, updateTask }) => {
  // Toggles whether the "Add New Task" panel is visible
  const [showAddPanel, setShowAddPanel] = useState(false);

  // Local states for new task fields
  const [newTitle, setNewTitle] = useState("");

  const handleAddTask = () => {
    if (newTitle.trim() !== "") {
      addTask(newTitle);
      // Clear fields
      setNewTitle("");
      // Hide the add panel
      setShowAddPanel(false);
    }
  };

  return (
    <div className="bg-light-gray br3 pa4 ma3 shadow-5 w-40 tc">

      {/* Button or panel for adding a new task */}
      {!showAddPanel ? (
        <button
          className="pa2 br2 bg-green white b mb3"
          onClick={() => setShowAddPanel(true)}
        >
          + Add Task
        </button>
      ) : (
        <div className="pa3 mb3 ba b--black-10">
          <h3 className="f5 mb2">Add a New Task</h3>
          <input
            type="text"
            placeholder="Task Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="pa2 mb2 input-reset ba b--black-20 w-100"
          />
          <div className="flex justify-end">
            <button
              className="pa2 br2 bg-green white b mr2"
              onClick={handleAddTask}
            >
              Save
            </button>
            <button
              className="pa2 br2 bg-light-red white b"
              onClick={() => {
                setShowAddPanel(false);
                setNewTitle("");
                setNewDesc("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Render existing tasks */}
      <ul className="list pl0">
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