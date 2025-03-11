
import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";

const TaskList = ({ tasks, addTask, removeTask, updateTask }) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <div className="bg-light-gray br3 pa4 ma3 shadow-5 w-40 tc">
      <button
        className="pa2 br2 bg-green white b mb3"
        onClick={() => setShowAddTaskModal(true)}
      >
        + Add Task
      </button>

      {/* The Modal component (only visible if showAddTaskModal is true) */}
      <AddTaskModal
        show={showAddTaskModal}
        onClose={() => setShowAddTaskModal(false)}
        onAdd={(title) => {
          addTask(title); // calls your existing addTask
          setShowAddTaskModal(false); // close modal after adding
        }}
      />

      <ul className="list pl0">
        {tasks.map((task) => (
          <li key={task.id} className="pa2 ba b--black-10 mv2">
            <strong>{task.title}</strong>
            <p>{task.description}</p>

            <button
              className="pa1 br2 bg-red white b mr2"
              onClick={() => removeTask(task.id)}
            >
              Delete
            </button>

            <button
              className="pa1 br2 bg-blue white b"
              onClick={() =>
                updateTask(task.id)
              }
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