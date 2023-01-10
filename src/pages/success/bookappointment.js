import React from 'react';
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink } from 'react-router-dom';

function BookanAppointment() {
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
                        <p>You have completed the all stages of REGISTRATION</p>

                        <div className='text'>Kindly continue with the button below to BOOK AN APPOINTMENT to schedule Execution (signing) and Witnessing of the Will.</div>
                        <div className='general-btn'>
                            <NavLink to="/login" className="general-navlink">Book Appointment</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookanAppointment