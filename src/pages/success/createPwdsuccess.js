import React from 'react';
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink } from 'react-router-dom';

function CreatePwdsuccess() {
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
                        <p>You have successfully reset your password</p>

                        <div className='text'>Kindly continue with the button below</div>
                        <div className='general-btn'>
                            <NavLink to="/login" className="general-navlink">Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePwdsuccess