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
            <input className="input-add-a-task"
                type="text"
                placeholder="Add a task"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <input className="input-add-a-task-description"
                type="text"
                placeholder="Add a task description"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
            />
            <div className="">
                <button onClick={() => {
                    handleAddTask('backlog')
                    setShowForm(false)
                }}>Submit
                </button>
            </div>
        </div>
    )
}

export default TaskForm