import React from "react";
import plusIcon from "../../images/plus-icon.svg";

const AddCardButton = ({handleAddCard, disabled}) => {
    return (
        <div className={"tasks-list-button"} onClick={!disabled ? handleAddCard : null}>
            {!disabled ?
                <>
                    <img src={plusIcon} alt="plus icon"/> Add card
                </>
                :
                    <>Add card to previous card</>
            }
        </div>
    )
}

export default AddCardButton