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
        if (tasks.length > 0){
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask = (title, description = "") => {
       const newTask = {
        id: Date.now(),
        title, 
        description,
        completed : false
       };
       setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks (prevTasks => prevTasks.filter(task => task.id !==id ));
    };

    return {
        tasks,
        setTasks,
        addTask,
        removeTask
    };
};