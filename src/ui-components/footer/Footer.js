import React from "react";

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-left-part">
                    <div className="tasks-quick-data">
                        Active tasks: N
                    </div>
                    <div className="tasks-quick-data">
                        Finished tasks: M
                    </div>
                </div>
                <div className="footer-right-part">
                    Kanban board by Petja Ivanov, 2023
                </div>
            </div>
        </>
    );
}

export default Footer;