import React from "react";
import closeButton from "../../images/close-button.svg";
import {useNavigate} from "react-router";


const TaskDescription = () => {
    const navigate = useNavigate()

    return (
        <div className="task-description-wrapper">
            <div className="task-description-window">
                <div className="task-header-wrapper">
                    <div className="task-description-header">Main page – performance issues</div>
                    <div onClick={() => navigate('/homepage')} className="task-close-button">
                        <img width="35" src={closeButton} alt="close button"/>
                    </div>
                </div>
                <div className="task-description-text">
                    Это был темный лес, издали казавшийся непроходимым. Там Пахапиль <br/>
                    охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока <br/>
                    русские не выгнали оккупантов. А когда немцы ушли, Пахапиль <br/>
                    вернулся. Он появился в Раквере, где советский капитан наградил его <br/>
                    медалью. Медаль была украшена четырьмя непонятными словами, <br/>
                    фигурой и восклицательным знаком.

                </div>
            </div>
        </div>

    );
}

export default TaskDescription;