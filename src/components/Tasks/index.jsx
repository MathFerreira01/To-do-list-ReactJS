import React from "react";
import ItemTask from "../TaskItem";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    
    return (
        <>
         {tasks.map ((task) => (
             <ItemTask task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
         ))}
        </>
    )
}

export default Tasks