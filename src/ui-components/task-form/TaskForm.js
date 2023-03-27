import React from "react";

const TaskForm = ({taskName, handleTaskNameChange, taskDesc, handleTaskDescChange, errorMsg, handleSaveCard, handleCancelCard}) => {
    return (
        <div className="add-card-form">
            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={handleTaskNameChange}
            />
            <textarea
                placeholder="Enter task description"
                value={taskDesc}
                onChange={handleTaskDescChange}
            ></textarea>
            {errorMsg && <div className="error-message">{errorMsg}</div>}
            <div className="add-card-buttons">
                <button onClick={handleSaveCard}>Save</button>
                <button onClick={handleCancelCard}>Cancel</button>
            </div>
        </div>
    )
}

export default TaskForm