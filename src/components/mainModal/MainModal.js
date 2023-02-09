import React from 'react';
import "./MainModal.css";
import line from "../../assets/line.png"

function MainModal(props) {
    return (props.trigger) ? (
        <div>
            <div className='mainModal'>
                <div className='mainModal-inner'>
                    <div className='image-line'><img src={line} alt="" /></div>
                    <div className='closeButton'><button className='closeBtn' onClick={() => props.setTrigger(false)}>x</button></div>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}

export default MainModal