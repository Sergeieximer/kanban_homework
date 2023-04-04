import React, {useContext} from "react";
import TaskContext from "./TasksContext";

const KANBAN_BOARD_LOCALSTORAGE_KEY = 'kanbanBoard';

const lists = JSON.parse(localStorage.getItem(KANBAN_BOARD_LOCALSTORAGE_KEY))

const Footer = () => {
    const { activeTasks, finishedTasks } = useContext(TaskContext);

    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-left-part">
                    <div className="tasks-quick-data">
                        Active tasks: {activeTasks}
                    </div>
                    <div className="tasks-quick-data">
                        Finished tasks: {finishedTasks}
                    </div>
                </div>
                <div className="footer-right-part">
                    Kanban board by Sergei L., 2023
                </div>
            </div>
        </>
    );
}

export default Footer;