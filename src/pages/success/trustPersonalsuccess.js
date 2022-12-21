import React from 'react';
import "./success.css";
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink } from 'react-router-dom';

function TrustPersonalSuccess() {
    return (
        <div>
            <div className='success-page'>
                <div className='top'>
                    <div className='content'>
                        <img src={Thumb} alt="" />
                        <div className='rectangle'>
                            <img src={Rectangle} alt="" />
                            <div className='text'>Great!</div>
                        </div>
                    </div>

                </div>

                <div className='container'>
                    <div className='bottom'>
                        <div className='title'>Congratulations!</div>
                        <p>You have completed the all stages of PERSONAL DETAILS!</p>

                        <div className='text'>Kindly continue with the button below</div>
                        <NavLink to="/trust_executor_landing" className="nav-link">Continue</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustPersonalSuccess