import React from "react";

import { useState } from "react";

const TaskList = ({ tasks, addTask, removeTask, updateTask }) => {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDesc, setNewTaskDesc] = useState("");

    const handleAddTask = () => {
        if (newTaskTitle.trim() !== "") {
            addTask(newTaskTitle, newTaskDesc);
            setNewTaskTitle(""); // Clear input field
            setNewTaskDesc("");
        }
    };

    return (
        <div className="bg-light-gray br3 pa4 ma3 shadow-5 w-40 tc">
            <h2 className="f3 navy">Task Manager</h2>

            {/* Input Fields */}
            <input
                type="text"
                placeholder="Task Title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="pa2 mb2 input-reset ba b--black-20 w-100"
            />
            <input
                type="text"
                placeholder="Task Description"
                value={newTaskDesc}
                onChange={(e) => setNewTaskDesc(e.target.value)}
                className="pa2 mb2 input-reset ba b--black-20 w-100"
            />
            <button className="pa2 br2 bg-green white b" onClick={handleAddTask}>
                Add Task
            </button>

            {/* Task List */}
            <ul className="list pl0">
                {tasks.map((task) => (
                    <li key={task.id} className="pa2 ba b--black-10 mv2">
                        <strong>{task.title}</strong>
                        <p>{task.description}</p>

                        {/* Remove Task Button */}
                        <button
                            className="pa1 br2 bg-red white b mr2"
                            onClick={() => removeTask(task.id)}
                        >
                            Delete
                        </button>

                        {/* Update Task Button */}
                        <button
                            className="pa1 br2 bg-blue white b"
                            onClick={() => updateTask(task.id, "Updated Title", "Updated Description")}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;