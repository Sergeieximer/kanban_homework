import React, {useEffect, useState} from "react";
import closeButton from "../../images/close-button.svg";

import {useNavigate, useParams} from "react-router";


const TaskDescription = () => {
    const navigate = useNavigate();
    const {taskDescriptionId} = useParams();
    const [data, setData] = useState();

    const [listName, taskIndex] = taskDescriptionId.split("-");


    useEffect(() => {
        const parsedData = JSON.parse(localStorage.getItem('kanbanBoard'))[listName][taskIndex]
        setData(parsedData)
    },[])

    return (
        <div className="task-description-wrapper">
            <div className="task-description-window">
                <div className="task-header-wrapper">
                    <div className="task-description-header">
                        Task Name: {data?.name}
                    </div>

                    <div onClick={() => navigate('/')} className="task-close-button">
                        <img width="35" src={closeButton} alt="close button"/>
                    </div>

                </div>
                <div className="task-description-text">
                   Task description: <br/> <br/> {data?.description}
                </div>
            </div>
        </div>

    );
}

export default TaskDescription;