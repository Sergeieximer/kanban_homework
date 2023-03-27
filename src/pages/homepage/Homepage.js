import React, {useEffect, useState} from "react";
import TaskList from "../../ui-components/task-list/TaskList";

const KANBAN_BOARD_STORAGE_KEY = 'kanbanBoard';

const initialLists = JSON.parse(localStorage.getItem(KANBAN_BOARD_STORAGE_KEY)) || {
    backlog: [],
    ready: [],
    inProgress: [],
    finished: [],
};

const Homepage = () => {
    const [lists, setLists] = useState(initialLists);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [selectedTask, setSelectedTask] = useState('');

    useEffect(() => {
        const savedLists = JSON.parse(localStorage.getItem(KANBAN_BOARD_STORAGE_KEY));
        if (savedLists) {
            setLists(savedLists);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KANBAN_BOARD_STORAGE_KEY, JSON.stringify(lists));
    }, [lists]);

    const handleAddTask = (listName) => {
        if (newTaskName && newTaskDescription) {
            setLists({
                ...lists,
                [listName]: [...lists[listName], {name: newTaskName, description: newTaskDescription}],
            });
            setNewTaskName('');
            setNewTaskDescription('');
        }
    };



    const handleMoveTask = (currentListName, nextListName, task) => {
        const currentListTasks = lists[currentListName].filter((t) => t !== task);
        const nextListTasks = [...lists[nextListName], task];
        setLists({
            ...lists,
            [currentListName]: currentListTasks,
            [nextListName]: nextListTasks,
        });
    };

    return (
        <div className="kanban-board">
            <div className="main-wrapper">
                <TaskList tableName={"Backlog"}
                          tableIndex={"backlog"}
                          taskList={lists.backlog}
                          newTaskName={newTaskName}
                          setNewTaskName={setNewTaskName}
                          newTaskDescription={newTaskDescription}
                          setNewTaskDescription={setNewTaskDescription}
                          handleAddTask={handleAddTask}
                />
                <TaskList tableName={"Ready"}
                          tablePrevIndex={"backlog"}
                          tableIndex={"ready"}
                          prevTaskList={lists.backlog}
                          taskList={lists.ready}
                          selectedTask={selectedTask}
                          setSelectedTask={setSelectedTask}
                          handleMoveTask={handleMoveTask}
                />
                <TaskList tableName={"In Progress"}
                          tablePrevIndex={"ready"}
                          tableIndex={"inProgress"}
                          prevTaskList={lists.ready}
                          taskList={lists.inProgress}
                          selectedTask={selectedTask}
                          setSelectedTask={setSelectedTask}
                          handleMoveTask={handleMoveTask}
                />
                <TaskList tableName={"Finished"}
                          tablePrevIndex={"inProgress"}
                          tableIndex={"finished"}
                          prevTaskList={lists.inProgress}
                          taskList={lists.finished}
                          selectedTask={selectedTask}
                          setSelectedTask={setSelectedTask}
                          handleMoveTask={handleMoveTask}
                />
            </div>

            <div className="kanban-board-list">
                <div className="kanban-board-list-title">Backlog</div>
                {lists.backlog.map((task, index) => (
                    <div key={index} className="kanban-board-list-item">
                        {task.name}
                    </div>
                ))}
                <div className="kanban-board-list-form">
                    <input
                        type="text"
                        placeholder="Add a task"
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Add a task"
                        value={newTaskDescription}
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                    />
                    <button onClick={() => handleAddTask('backlog')}>Submit</button>
                </div>
            </div>

            <div className="kanban-board-list">
                <div className="kanban-board-list-title">Ready</div>
                {lists.ready.map((task, index) => (
                    <div key={index} className="kanban-board-list-item">
                        {task.name}
                    </div>
                ))}

                <div className="kanban-board-list-form">
                    {lists.backlog.length > 0 ? (
                        <select value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
                            <option value="">Select a task</option>
                            {lists.backlog.map((task, index) => (
                                <option key={index} value={task.name}>
                                    {task.name}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <button disabled>Add card</button>
                    )}
                    <button
                        onClick={() => handleMoveTask('backlog', 'ready', lists.backlog.find((task) => task.name === selectedTask))}>
                        Add card
                    </button>
                </div>

            </div>

            <div className="kanban-board-list">
                <div className="kanban-board-list-title">In Progress</div>
                {lists.inProgress.map((task, index) => (
                    <div key={index} className="kanban-board-list-item">
                        {task.name}
                    </div>
                ))}
                <div className="kanban-board-list-form">
                    {lists.ready.length > 0 ? (
                        <select value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
                            <option value="">Select a task</option>
                            {lists.ready.map((task, index) => (
                                <option key={index} value={task.name}>
                                    {task.name}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <button disabled>Add card</button>
                    )}
                    <button
                        onClick={() => handleMoveTask('ready', 'inProgress', lists.ready.find((task) => task.name === selectedTask))}>
                        Add card
                    </button>
                </div>
            </div>
            <div className="kanban-board-list">
                <div className="kanban-board-list-title">Finished</div>
                {lists.finished.map((task, index) => (
                    <div key={index} className="kanban-board-list-item">
                        {task.name}
                    </div>
                ))}
                <div className="kanban-board-list-form">
                    {lists.inProgress.length > 0 ? (
                        <select value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
                            <option value="">Select a task</option>
                            {lists.inProgress.map((task, index) => (
                                <option key={index} value={task.name}>
                                    {task.name}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <button disabled>Add card</button>
                    )}
                    <button
                        onClick={() => handleMoveTask('inProgress', 'finished', lists.inProgress.find((task) => task.name === selectedTask))}>
                        Add card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;

