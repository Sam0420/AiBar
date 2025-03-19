import { useState, useEffect } from "react";

const useTask = () => {
    const [tasks, setTasks] = useState ([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []); 

    useEffect(()=> {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title, description = "") => {
       const newTask = {
        id: Date.now(),
        title, 
        completed : false
       };
       setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks (prevTasks => prevTasks.filter(task => task.id !==id ));
    };

    const updateTask = (id, newTitle) => {
        console.log("updateTask called with:", id, newTitle);
        setTasks ((prevTasks) => 
            prevTasks.map ((task) => 
                task.id ===id 
                    ? {...task, title: newTitle } 
                    : task
            )
        );
    }; 

    return {
        tasks,
        setTasks,
        addTask,
        removeTask,
        updateTask
    };
};
export default useTask;