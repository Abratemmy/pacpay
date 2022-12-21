import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import line from "../../../assets/line.png";
import email from "../../../assets/email.png"
import phone from "../../../assets/phone.png"

function ForgotOtp() {
    const [buttonpopup, setbuttonpopup] = useState(false)
    return (
        <div className='registerpop-page'>
            <div className='register-container'>
                <img src={line} alt="" />
                <div className='close'>
                    <NavLink to="/forgot_password" className="registerpop-nav">X</NavLink>
                </div>

                <div className="image">
                    <img src={phone} alt="" />
                </div>
                <div className='title'>OTP NOTIFICATION</div>
                <div className='text'>Please enter the OTP we sent to you for you to  continue</div>


                <div className='otp-session'>
                    <div className="otp"> 567874</div>
                    <div className="otp-resend">I didn’t receive a message <span><button style={{ border: "none", padding: "4px" }}>Resend</button></span></div>
                </div>

                <div className='nav-button'>
                    <NavLink to="/create_new_password" className="nav-link" onClick={() => setbuttonpopup(true)}>Submit</NavLink>
                </div>
            </div>

        </div>
    )
}

export default ForgotOtp