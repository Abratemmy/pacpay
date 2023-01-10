import React, { useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import line from "../../assets/line.png";
import email from "../../assets/email.png"
import MainModal from '../../components/mainModal/MainModal';
import phone from "../../assets/phone.png";
import { useDispatch } from "react-redux";
import { verifyEmail } from "../actions/auth"

function Registerpop() {
    const [buttonpopup, setbuttonpopup] = useState(false);
    const { userEmail } = useParams()


    const [values, setValues] = useState({
        verificationCode: "",
    });
    const [errors, setErrors] = useState({});

    // get input values
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.verificationCode) errorsValue.verificationCode = "Verfication code  is required";
        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});
        return Object.keys(errorsValue).length;
    };
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            dispatch(verifyEmail(values, navigate))
        }
    }
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
                    <div className='text'>A verification code has been sent to your email,{userEmail} kindly verify with the link sent to you.</div>
                    <div className='subtitle'>NOTE: LINK EXPIRES AFTER FEW HOURS</div>

                    <div className='nav-button'>
                        <button className="general-btn" onClick={() => setbuttonpopup(true)}>Continue</button>
                    </div>

                    {/* <div className='nav-button'>
                        <button className="general-btn" onClick={() => setbuttonpopup(true)}>Open Email</button>
                    </div> */}
                </div>
            </div>

            <MainModal trigger={buttonpopup} setTrigger={setbuttonpopup}>
                <div className='modalContent'>
                    <div className='register-container'>
                        <div className="image">
                            <img src={phone} alt="" style={{ width: "20px" }} />
                        </div>

                        <div className='title'>OTP NOTIFICATION</div>
                        <div className='subtitle'>Please enter the OTP we sent to you for you to  continue</div>

                        <form onSubmit={handleSubmit}>
                            <div className='otp-session'>

                                <div className="otp">
                                    <input type="text" name="verificationCode" onChange={handleChange} />
                                </div>


                                <div className="otp-resend">I didn’t receive a message <span><button>Resend</button></span></div>
                            </div>

                            <div className='navButtton' style={{ marginBottom: "30px" }}>
                                <button type="submit" className="general-btn" >Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </MainModal>
        </div>
    )
}

export default Registerpop