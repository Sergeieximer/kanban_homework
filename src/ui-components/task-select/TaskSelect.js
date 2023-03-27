import React from "react";

const TaskSelect = ({
                        tableIndex,
                        tablePrevIndex,
                        prevTaskList,
                        selectedTask,
                        setSelectedTask,
                        handleMoveTask,
                        setShowForm
                    }) => {
    return (
        <>
            <div className="add-card-form">
                <select value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
                    <option value="">Select a task</option>
                    {prevTaskList.map((task, index) => (
                        <option key={index} value={task.name}>
                            {task.name}
                        </option>
                    ))}
                </select>
                <div className="add-card-buttons">
                    <button
                        onClick={() => {
                            handleMoveTask(tablePrevIndex, tableIndex, prevTaskList.find((task) => task.name === selectedTask))
                            setShowForm(false)
                        }}>
                        Add card
                    </button>
                </div>
            </div>
        </>
    );
};

export default TaskSelect;
