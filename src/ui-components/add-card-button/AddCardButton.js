import React from "react";
import plusIcon from "../../images/plus-icon.svg";

const AddCardButton = ({handleAddCard}) => {
    return (
        <div className="tasks-list-button" onClick={handleAddCard}>
            <img src={plusIcon} alt="plus icon"/> Add card
        </div>
    )
}

export default AddCardButton