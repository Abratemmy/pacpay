import React from 'react';
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink } from 'react-router-dom';

function ResetCreatePwdsuccess() {
    return (
        <div>
            <div className='success-page'>
                <div className='top'>
                    <div className='content'>
                        <img src={Thumb} alt="" />
                        <div className='rectangle'>
                            <img src={Rectangle} alt="" />
                            <div className='text'>Awesome!</div>
                        </div>
                    </div>

                </div>

                <div className='container'>
                    <div className='bottom'>
                        <div className='title'>Congratulations!</div>
                        <p>You have successfully created a new  password</p>

                        <div className='text'>Kindly continue with the button below</div>
                        <NavLink to="/dashboard" className="nav-link">Go To Dashboard</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetCreatePwdsuccess