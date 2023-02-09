import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useNavigate, useLocation } from 'react-router-dom';
import line from "../../assets/line.png";
import email from "../../assets/email.png"
import MainModal from '../../components/mainModal/MainModal';
import phone from "../../assets/phone.png";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail, resendRegisterOtp } from "../actions/auth";
import { FaLess } from 'react-icons/fa';

function Registerpop() {
    const [buttonpopup, setbuttonpopup] = useState(false);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('Payload')));
    console.log(user)
    // {user.result.name.charAt(0)}
    const location = useLocation()
    useEffect(() => {
        const token = user?.token;

        //jwt
        setUser(JSON.parse(localStorage.getItem('Payload')))
    }, [location])


    const state = useSelector((state) => state);
    const [ApiError, setApiError] = useState(null)
    console.log("Api error", ApiError)

    useEffect(() => {
        setApiError(ApiError)

    }, [ApiError])
    const loading = state.authReducer.authData.loading


    const [values, setValues] = useState({
        email: user.email,
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
            console.log("verify", values)
            dispatch(verifyEmail(values, navigate))
            setApiError(state?.authReducer?.authData?.error?.response?.data.meta.error.message)
        }
    }

    const [otpSuccess, setOtpSuccess] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false)
    const resendOtp = () => {
        setOtpSuccess(false);
        setOtpLoading(true)
        const payload = {
            email: user.email
        }
        dispatch(resendRegisterOtp(payload, setOtpSuccess, setOtpLoading))
    }


    return (

        <div>
            <div className='registerpop-page'>
                <div className='register-container'>
                    <img src={line} alt="" />
                    <div className='close'>
                        <NavLink to="/register" className="registerpop-nav">X</NavLink>
                    </div>
                    {/* <h1>{user.data.email}</h1> */}
                    <div className="image">
                        <img src={email} alt="" />
                    </div>
                    <div className='title'>CHECK YOUR EMAIL</div>
                    <div className='text'>A verification code has been sent to your email, kindly verify with the link sent to you.</div>
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

                                {otpLoading === true ? (<div className="otp-resend ">I didn’t receive a message <span className='resend disable' onClick={resendOtp}>
                                    <span className=' resend'>
                                        <span className="spinner-border spinner-border-sm" role="status">
                                            <span className="sr-only"></span>
                                        </span>
                                        {/* <span >Resend</span> */}
                                    </span>
                                </span></div>) :
                                    (<div className="otp-resend">I didn’t receive a message <span className='resend' onClick={resendOtp}>Resend</span></div>)}

                                {otpSuccess && (<div className='otp-success'>An otp has been sent to your email</div>)}
                            </div>

                            <div className='ApiError' >{ApiError}</div>

                            {loading === true ? (<div className='navButtton' style={{ marginBottom: "30px" }}>
                                <button type="submit" className="general-btn" disabled >Submit...</button>
                            </div>) : (
                                <div className='navButtton' style={{ marginBottom: "30px" }}>
                                    <button type="submit" className="general-btn"  >Submit</button>
                                </div>
                            )}


                        </form>

                    </div>
                </div>
            </MainModal>
        </div>
    )
}

export default Registerpop