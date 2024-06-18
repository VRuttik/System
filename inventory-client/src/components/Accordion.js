import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button
                onClick={handleClick}
                className="w3-padding-16 w3-button w3-block w3-left-align w3-red w3-hover-pink"
            >
                {title} &nbsp;<i className={`fa fa-caret-${isOpen ? 'up' : 'down'}`}></i>
            </button>
            {isOpen && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
