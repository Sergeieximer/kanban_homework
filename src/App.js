import React from "react";

import './App.css';

import {Route, Routes} from "react-router-dom";
import Dashboard from "./ui-components/dashboard/Dashboard";
import Homepage from "./pages/homepage/Homepage";
import TaskDescription from "./pages/task-description/TaskDescription";
import Error from "./pages/error/Error";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Dashboard/>}>
                    <Route path="homepage" element={<Homepage/>}/>
                    <Route path="task-description/:taskDescriptionId" element={<TaskDescription/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
