import React, {useState} from "react";

import './App.css';
import TaskContext from "../src/user-interface-components/footer/TasksContext";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./user-interface-components/dashboard/Dashboard";
import Main from "./pages/main/Main";
import TaskDescription from "./pages/task-description/TaskDescription";
import Error from "./pages/error/Error";

const App = () => {

    const [activeTasks, setActiveTasks] = useState(0);
    const [finishedTasks, setFinishedTasks] = useState(0);

    return (
        <>
            <TaskContext.Provider
                value={{activeTasks, setActiveTasks, finishedTasks, setFinishedTasks}}
            >
                <Routes>

                    <Route path="/*" element={<Dashboard/>}>

                        <Route path="" element={<Main/>}/>
                        <Route path="task-description/:taskDescriptionId" element={<TaskDescription/>}/>
                        <Route path="*" element={<Error/>}/>

                    </Route>

                </Routes>
            </TaskContext.Provider>
        </>
    );
}

export default App;
