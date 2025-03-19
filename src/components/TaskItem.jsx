import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import "./TaskItem.css"; // Ensure this file contains the CSS below

const TaskItem = ({ task, removeTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    if (!isEditing) { // ✅ Prevents toggle while editing
      setIsCompleted((prev) => !prev);
    }
  };

  const handleSave = () => {
    if (editTitle.trim() === "") {
      setEditTitle(task.title); // Reset to original if empty
      setIsEditing(false); // Exit edit mode
      return;
    }
  
    updateTask(task.id, editTitle);
    setIsEditing(false);
  };
  
  return (
    <li className="task-item">
      {/* Left Side - Task Text */}
      {isEditing ? (
        // --- EDIT MODE ---
        <div  className="edit">
          <input
            type="text"
            className="task-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <div className="buttons-container">
            <button className="save-btn button-17 save" onClick={handleSave}>
              Save
            </button>
            <button
              className="cancel-btn button-17 cancel"
              onClick={() => {
                setEditTitle(task.title);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // --- VIEW MODE ---
        <div
          className={`task-content ${isCompleted ? "completed" : ""}`}
          onClick={toggleComplete}
        >
          <strong>{task.title}</strong>
          {task.description && <p>{task.description}</p>}
        </div>
      )}

      {/* Right Side - Edit & Delete Buttons */}
      {!isEditing && (
        <div className="task-buttons">
          <IconButton
            className="my-iconButton"
            aria-label="delete"
            size="medium"
            onClick={() => removeTask(task.id)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>

          <Fab
            className="my-fab"
            size="small"
            onClick={() => setIsEditing(true)}
          >
            <EditIcon />
          </Fab>
        </div>
      )}
    </li>
  );
};

export default TaskItem;