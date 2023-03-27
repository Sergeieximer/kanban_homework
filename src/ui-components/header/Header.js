import React, {useState} from "react";
import image from "../../images/user-avatar.svg";
import arrowDown from "../../images/arrow-down.svg";

const Header = () => {
    const [showTooltip, setShowToolTip] = useState(false)

    const toggleToolTip = () => {
        setShowToolTip(!showTooltip)
    }

    return (
        <>
            <div className="header-wrapper">
                <div className="header-name-wrapper">
                    <div className="name">
                        Awesome Kanban Board
                    </div>
                </div>
                <div className="header-menu-wrapper">
                    <div className="header-menu-photo-wrapper" onClick={toggleToolTip}>
                        <div className="header-menu-photo">
                            <img src={image} alt="user image"/>
                        </div>
                        <div className={!showTooltip ? "header-menu-dropdown-icon" : "header-menu-dropdown-icon-active"}>
                            <img src={arrowDown} alt="arrow down"/>
                        </div>
                    </div>
                    <div className={showTooltip ? "header-menu-dropdown-list-wrapper" : "header-menu-dropdown-list-wrapper-hidden"}>
                        <div className="header-menu-dropdown-list">
                            <div className="tooltip"/>
                            <div className="header-menu-dropdown-element">
                                Profile
                            </div>
                            <div className="header-menu-dropdown-element">
                                Log out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;