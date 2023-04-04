import React, {useState} from "react";
import TaskForm from "../task-form/TaskForm";
import AddCardButton from "../add-card-button/AddCardButton";
import TaskSelect from "../task-select/TaskSelect";
import {useNavigate} from "react-router";

const TaskList = ({
                      tableName,
                      tableIndex,
                      tablePrevIndex,
                      prevTaskList,
                      taskList,
                      newTaskName,
                      newTaskDescription,
                      setNewTaskName,
                      setNewTaskDescription,
                      handleAddTask,
                      selectedTask,
                      setSelectedTask,
                      handleMoveTask
                  }) => {
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate()

    const handleAddCard = () => {
        setShowForm(true);
    };


    return (
        <>
            <div className="tasks-list-wrapper">
                <div className="tasks-list-header">{tableName}</div>
                <div className="tasks-list">
                    {taskList.map((task, index) => (
                        <div onClick={() => {
                            navigate('task-description/' + tableIndex + '-' + index)
                        }} key={index} className="task-element">
                            <div className="task-name">{task.name}</div>
                        </div>
                    ))}
                </div>
                <div className="tasks-list-button-wrapper">
                    {tableName === "Backlog" ? (
                        showForm ? (
                            <TaskForm
                                newTaskName={newTaskName}
                                newTaskDescription={newTaskDescription}
                                setNewTaskName={setNewTaskName}
                                setNewTaskDescription={setNewTaskDescription}
                                handleAddTask={handleAddTask}
                                setShowForm={setShowForm}
                            />
                        ) : (
                            <AddCardButton handleAddCard={handleAddCard}/>
                        )
                    ) : showForm ? (
                        <TaskSelect
                            setShowForm={setShowForm}
                            tableIndex={tableIndex}
                            tablePrevIndex={tablePrevIndex}
                            prevTaskList={prevTaskList}
                            selectedTask={selectedTask}
                            setSelectedTask={setSelectedTask}
                            handleMoveTask={handleMoveTask}
                        />
                    ) : (
                        <AddCardButton
                            handleAddCard={handleAddCard}
                            disabled={prevTaskList.length === 0}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default TaskList;
