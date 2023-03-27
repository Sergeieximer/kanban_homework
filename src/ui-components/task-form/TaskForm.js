import React from "react";

const TaskForm = ({
                      newTaskName,
                      newTaskDescription,
                      setNewTaskName,
                      setNewTaskDescription,
                      handleAddTask,
                      setShowForm
                  }) => {
    return (
        <div className="add-card-form">
            <input
                type="text"
                placeholder="Add a task"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Add a task description"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
            />
            <button onClick={() => {
                handleAddTask('backlog')
                setShowForm(false)
            }}>Submit</button>
        </div>
    )
}

export default TaskForm