import React from 'react';
import "./popup.css";
import line from "../../assets/line.png"

function Popup(props) {
    return (props.trigger) ? (
        <div>
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='image-line'><img src={line} alt="" /></div>
                    <div className='close-button'><button className='close-btn' onClick={() => props.setTrigger(false)}><span>x</span></button></div>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup