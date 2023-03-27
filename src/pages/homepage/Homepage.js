import React, {useEffect, useState} from "react";
import TaskList from "../../ui-components/task-list/TaskList";

const Homepage = () => {
    const [backlogTasks, setBacklogTasks] = useState([]);
    const [readyTasks, setReadyTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);

    useEffect(() => {
        const allBacklogTasks = Object.keys(localStorage).filter((key) =>
            key.startsWith("backlog-task-")
        );
        const backlogTaskData = allBacklogTasks.map((key) => {
            const taskJson = localStorage.getItem(key);
            return JSON.parse(taskJson);
        });
        setBacklogTasks(backlogTaskData);
    }, []);

    useEffect(() => {
        const allReadyTasks = Object.keys(localStorage).filter((key) =>
            key.startsWith("ready-task-")
        );
        const readyTaskData = allReadyTasks.map((key) => {
            const taskJson = localStorage.getItem(key);
            return JSON.parse(taskJson);
        });
        setReadyTasks(readyTaskData);
    }, []);

    useEffect(() => {
        const allInProgressTasks = Object.keys(localStorage).filter((key) =>
            key.startsWith("inProgress-task-")
        );
        const inProgressTaskData = allInProgressTasks.map((key) => {
            const taskJson = localStorage.getItem(key);
            return JSON.parse(taskJson);
        });
        setInProgressTasks(inProgressTaskData);
    }, []);

    useEffect(() => {
        const allFinishedTasks = Object.keys(localStorage).filter((key) =>
            key.startsWith("finished-task-")
        );
        const finishedTaskData = allFinishedTasks.map((key) => {
            const taskJson = localStorage.getItem(key);
            return JSON.parse(taskJson);
        });
        setFinishedTasks(finishedTaskData);
    }, []);

    const handleMoveTask = (prevStage, nextStage, task) => {
        // Remove the task from the previous stage in the state and localStorage
        const newPrevStageTasks = prevStage.filter((t) => t.name !== task.name);
        setStageState(prevStage, newPrevStageTasks);
        localStorage.removeItem(`${prevStage}-task-${task.name}`);

        // Add the task to the next stage in the state and localStorage
        const newNextStageTasks = [...nextStage, task];
        setStageState(nextStage, newNextStageTasks);
        const taskJson = JSON.stringify(task);
        localStorage.setItem(`${nextStage}-task-${task.name}`, taskJson);
    };

    const setStageState = (stage, tasks) => {
        if (stage === "Backlog") {
            setBacklogTasks(tasks);
        } else if (stage === "Ready") {
            setReadyTasks(tasks);
        } else if (stage === "In Progress") {
            setInProgressTasks(tasks);
        } else if (stage === "Finished") {
            setFinishedTasks(tasks);
        }
    };


    return (
        <>
            <div className="main-wrapper">
                <TaskList tableName={"Backlog"} tasks={backlogTasks}/>
                <TaskList
                    tableName={"Ready"}
                    tasks={readyTasks}
                    prevTasks={backlogTasks}
                    handleMoveTask={(task) => handleMoveTask("Backlog", "Ready", task)}
                    isAddButtonDisabled={backlogTasks.length === 0}
                />
                <TaskList
                    tableName={"In Progress"}
                    tasks={inProgressTasks}
                    prevTasks={readyTasks}
                    handleMoveTask={(task) =>
                        handleMoveTask("Ready", "In Progress", task)
                    }
                    isAddButtonDisabled={readyTasks.length === 0}
                />
                <TaskList
                    tableName={"Finished"}
                    tasks={finishedTasks}
                    prevTasks={inProgressTasks}
                    handleMoveTask={(task) =>
                        handleMoveTask("In Progress", "Finished", task)
                    }
                    isAddButtonDisabled={inProgressTasks.length === 0}
                />
            </div>
        </>
    );
};

export default Homepage;

