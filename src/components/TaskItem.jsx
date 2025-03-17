import React, { useState } from "react";
import "./TaskItem.css";
const TaskItem = ({task, removeTask, updateTask}) => {
    const [isEditing, setIsEditing] = useState (false); 
    const [editTitle, setEditTitle] = useState(task.title);
    

    const handleSave = () => {
        console.log("Saving task with new title:", editTitle);
        if (editTitle.trim() !== "") {
            updateTask(task.id, editTitle);
            setIsEditing(false);
        }
    };

    return (
        <li className="pa2 ba b--black-10 mv2">
      {isEditing ? (
        // --- EDIT MODE ---
        <div className="mb2">
          <input
            type="text"
            className="pa2 mb1 input-reset ba b--black-20 w-100"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <div className="buttons-container">
            <button
              className="save-btn button-17 save"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="save-btn button-17 cancel"
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
        <>
          <strong>{task.title}</strong>
          {task.description && <p>{task.description}</p>}
        </>
      )}

      {/* If not editing, show "Edit" and "Delete" buttons.
          If editing, we show "Save"/"Cancel" instead (above). */}
      {!isEditing && (
        <>
          <button
            className="pa1 br2 bg-red white b mr2"
            onClick={() => removeTask(task.id)}
          >
            Delete
          </button>
          <button
            className="pa1 br2 bg-blue white b"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </li>
    );
}; 

export default TaskItem; 