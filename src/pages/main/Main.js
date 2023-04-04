import React, {useContext, useEffect, useState} from "react";
import TaskList from "../../user-interface-components/task-list/TaskList";
import TaskContext from "../../user-interface-components/footer/TasksContext";

const KANBAN_BOARD_LOCALSTORAGE_KEY = 'kanbanBoard';

const initialLists = JSON.parse(localStorage.getItem(KANBAN_BOARD_LOCALSTORAGE_KEY)) || {
    backlog: [],
    ready: [],
    inProgress: [],
    finished: [],
};

const Main = () => {
    const [lists, setLists] = useState(initialLists);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [selectedTask, setSelectedTask] = useState('');
    const { setActiveTasks, setFinishedTasks } = useContext(TaskContext);

    // прогоняет функции при обновлении странички
    useEffect(() => {
        const savedLists = JSON.parse(localStorage.getItem(KANBAN_BOARD_LOCALSTORAGE_KEY));
        if (savedLists) {
            setLists(savedLists);
        }
    }, []);

    // прогоняет функции при обновлении странички и реагирует на изменения переменной lists
    useEffect(() => {
        localStorage.setItem(KANBAN_BOARD_LOCALSTORAGE_KEY, JSON.stringify(lists));
        setActiveTasks(lists.backlog.length)
        setFinishedTasks(lists.finished.length)
    }, [lists]);


    // создание элемента в списке
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

    // перемещение элемента в списке
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
        </div>
    );
};

export default Main;

