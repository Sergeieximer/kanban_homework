import React, { useState } from "react";
import TaskForm from "../task-form/TaskForm";
import AddCardButton from "../add-card-button/AddCardButton";
import TaskSelect from "../task-select/TaskSelect";

const TaskList = ({
                      tableName,
                      tasks,
                      prevTasks,
                      handleMoveTask,
                      isAddButtonDisabled,
                  }) => {
    const [showForm, setShowForm] = useState(false);

    const handleAddCard = () => {
        setShowForm(true);
    };

    const handleSaveCard = () => {
        if (!prevTasks) {
            setShowForm(false);
            return;
        }

        const selectedTask = prevTasks.find((task) => task.name === tasks);
        if (selectedTask) {
            handleMoveTask(selectedTask);
        }
        setShowForm(false);
    };

    const handleCancelCard = () => {
        setShowForm(false);
    };

    return (
        <>
            <div className="tasks-list-wrapper">
                <div className="tasks-list-header">{tableName}</div>
                <div className="tasks-list">
                    {tasks.map((task, index) => (
                        <div key={index} className="task-element">
                            <div className="task-name">{task.name}</div>
                        </div>
                    ))}
                </div>
                <div className="tasks-list-button-wrapper">
                    {tableName === "Backlog" ? (
                        showForm ? (
                            <TaskForm
                                handleCancelCard={handleCancelCard}
                                handleSaveCard={handleSaveCard}
                            />
                        ) : (
                            <AddCardButton handleAddCard={handleAddCard} />
                        )
                    ) : showForm ? (
                        <TaskSelect
                            tasks={prevTasks}
                            handleCancelCard={handleCancelCard}
                            handleSaveCard={handleSaveCard}
                        />
                    ) : (
                        <AddCardButton
                            handleAddCard={handleAddCard}
                            disabled={isAddButtonDisabled}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default TaskList;
