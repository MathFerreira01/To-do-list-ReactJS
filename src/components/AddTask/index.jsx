import React, { useState } from "react";
import AddButton from "../Button";

import "./styles.css";

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData("")
  }

  return (
    <div className="add-task-container">
      <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />
      <div className="add-task-button-container">
        <AddButton onClick={handleAddTaskClick}>Adicionar</AddButton>
      </div>
    </div>
  );
};

export default AddTask;
