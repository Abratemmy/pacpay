import React, { useState } from 'react';
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink } from 'react-router-dom';
import MainModal from '../../components/mainModal/MainModal';
import email from "../../assets/email.png";
import { BsArrowUpRight } from "react-icons/bs"

function BookingSuccess() {
    const [booking, setbooking] = useState(false)
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
                        <div className='title'>SO FAR SO GOOD!</div>
                        <p>You have booked an appointment with a consultant. You’ll receive an email shortly.</p>

                        <div className='text'>Kindly continue with the button below to go to the MAIN dashboard</div>
                        <div className=''>
                            <button className="general-btn" onClick={() => setbooking(true)}>Go To Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>

            <MainModal trigger={booking} setTrigger={setbooking}>
                <div className='modalContent'>
                    <div className='booking-pop' style={{ marginBottom: "10px" }}><img src={email} alt="" /></div>

                    <div className='title'>CHECK YOUR EMAIL</div>

                    <div className='subtitle' style={{ paddingBottom: "40px" }}>A mail has been sent to you with attachment of an E-Statement</div>

                    <div className='navButtton' style={{ marginBottom: "30px" }}>
                        <NavLink to="" className="modal-nav" >Open Email</NavLink>
                    </div>

                    <div className='last'>
                        <NavLink to="/dashboard" className="modal-link">Skip Now <BsArrowUpRight /></NavLink>
                    </div>
                </div>
            </MainModal>
        </div>
    )
}

export default BookingSuccess