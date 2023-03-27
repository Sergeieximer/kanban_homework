import React from "react";

const TaskSelect = ({
                        prevTasks,
                        handleMoveTask,
                        errorMsg,
                        handleCancelCard,
                    }) => {
    const [selectedTask, setSelectedTask] = React.useState("");

    const handleSelectTask = () => {
        const task = prevTasks.find((t) => t.name === selectedTask);
        if (task) {
            handleMoveTask(task);
            setSelectedTask("");
        }
    };

    return (
        <>
            <div className="add-card-form">
                <select
                    value={selectedTask}
                    onChange={(e) => setSelectedTask(e.target.value)}
                >
                    <option value="">Select a task</option>
                    {prevTasks?.map((task) => (
                        <option key={task.name} value={task.name}>
                            {task.name}
                        </option>
                    ))}
                </select>
                {errorMsg && <div className="error-message">{errorMsg}</div>}
                <div className="add-card-buttons">
                    <button onClick={handleSelectTask}>Save</button>
                    <button onClick={handleCancelCard}>Cancel</button>
                </div>
            </div>
        </>
    );
};

export default TaskSelect;
