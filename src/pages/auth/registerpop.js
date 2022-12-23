import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import line from "../../assets/line.png";
import email from "../../assets/email.png"
import MainModal from '../../components/mainModal/MainModal';
import phone from "../../assets/phone.png"

function Registerpop() {
    const [buttonpopup, setbuttonpopup] = useState(false)
    return (

        <div>
            <div className='registerpop-page'>
                <div className='register-container'>
                    <img src={line} alt="" />
                    <div className='close'>
                        <NavLink to="/register" className="registerpop-nav">X</NavLink>
                    </div>

                    <div className="image">
                        <img src={email} alt="" />
                    </div>
                    <div className='title'>CHECK YOUR EMAIL</div>
                    <div className='text'>A verification code has been sent to your email, kindly verify with the link sent to you.</div>
                    <div className='subtitle'>NOTE: LINK EXPIRES AFTER FEW HOURS</div>

                    <div className='nav-button'>
                        <button className="nav-link" onClick={() => setbuttonpopup(true)}>Open Email</button>
                    </div>
                </div>
            </div>

            <MainModal trigger={buttonpopup} setTrigger={setbuttonpopup}>
                <div className='modalContent'>
                    <div className='register-container'>
                        {/* <div className='image' style={{ marginBottom: "40px" }}><img src={phone} alt="" style={{ width: "40%" }} /> </div> */}
                        <div className="image">
                            <img src={phone} alt="" style={{ width: "20px" }} />
                        </div>

                        <div className='title'>OTP NOTIFICATION</div>
                        <div className='subtitle'>Please enter the OTP we sent to you for you to  continue</div>

                        <div className='otp-session'>
                            <div className="otp"> 567874</div>
                            <div className="otp-resend">I didn’t receive a message <span><button>Resend</button></span></div>
                        </div>

                        <div className='navButtton' style={{ marginBottom: "30px" }}>
                            <NavLink to="/register_success" className="modal-nav" >Submit</NavLink>
                        </div>

                    </div>
                </div>
            </MainModal>
        </div>
    )
}

export default Registerpop