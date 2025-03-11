import React, {useState} from "react";

const AddTaskModal = ({show, onClose, onAdd}) => {

    const [title, setTitle] = useState(""); 
    const [desc, setDesc] = useState("");

    if (!show){
        return null; 
    }

    const handleSubmit = () => {
        if (title.trim() !== "") {
            onAdd (title, desc); 
            setTitle("");
            setDesc("");
            onClose();
        }
    };

    return(
        <div className="modal-Overlay">
            <div className="modal-content">
                <h2 className="f5 mb3"> Add New Task </h2> 
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="pa2 mb2 input-reset ba b--black-20 w-100"
                />

                <textarea
                placeholder="Task Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="pa2 mb2 input-reset ba b--black-20 w-100"
                />
                <div className="flex justify-end">
                    <button onClick={handleSubmit} className="pa2 br2 bg-green white b mr2">
                    Add Task
                    </button>
                    <button onClick={onClose} className="pa2 br2 bg-light-red white b">
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;