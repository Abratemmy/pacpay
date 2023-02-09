import React, { useState, useEffect } from 'react';
import "./password.css";
import handshake from "../../../assets/handshake.png";
import { MdOutlineEmail, MdArrowBackIosNew } from "react-icons/md";
import Google from "../../../assets/Google.png";
import { useNavigate, NavLink } from 'react-router-dom';
import white from "../../../assets/whitebg.png";
import lock from "../../../assets/lock.png";
import question from "../../../assets/question.png";
import MainModal from '../../../components/mainModal/MainModal';
import phone from "../../../assets/phone.png";
import { sendResetCode } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";


function Fpassword() {
    const [buttonpopup, setbuttonpopup] = useState(false);
    const [values, setValues] = useState({
        email: "",
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
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const state = useSelector((state) => state);
    const [ApiError, setApiError]= useState(null)
    console.log("Api error", ApiError)
    
    useEffect(()=>{  
        setApiError(ApiError)
        
    },[ApiError])
    const loading= state.authReducer.authData.loading

    const dispatch = useDispatch()
    const buttonpop = () => {
        setbuttonpopup(true)
    }
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            dispatch(sendResetCode(values, buttonpop))
            setApiError(state?.authReducer?.authData?.error?.response?.data.meta.error.message)
        }
    }

    // handling su mit form for the otp modal
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('Payload')));

    const [otpvalues, setOtpValues] = useState({
        email: user.email,
        passwordResetCode: "",
    });
    const [otperrors, setOtpErrors] = useState({});

    // get input values
    const otpChange = (ev) => {
        setOtpValues({
            ...otpvalues,
            [ev.target.name]: ev.target.value,
        });
    };

    const navigate = useNavigate();
    const handleOtpError = (targets) => {
        let errorsValue = {};
        if (!targets.passwordResetCode) errorsValue.passwordResetCode = "Reset code  is required";
        if (Object.keys(errorsValue).length > 0) setOtpErrors({ ...errorsValue });
        else setErrors({});
        return Object.keys(errorsValue).length;
    };
    const handleOtpSubmit = (ev) => {
        ev.preventDefault()
        let v = handleOtpError(otpvalues);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            console.log("resetverify", otpvalues);
            navigate("/create_new_password");
            // dispatch(resetverifyEmail(otpvalues, navigate))
            localStorage.setItem('resetpassword', JSON.stringify(otpvalues));
        }
    }

    return (
        <div className='password-container'>
            <div className="landing-page auth" >
                <div className='first'  >

                    <div className='middle'  >
                        <NavLink to="/login" className="back" style={{ position: "relative" }}>
                            <MdArrowBackIosNew className="icon" />
                            <MdArrowBackIosNew className="icon icon2" />
                        </NavLink>
                        <div className='auth-title'>Forget Password?</div>
                        <div className='text'>Kindly enter your email address associated with your account below</div>
                        <form onSubmit={handleSubmit} className="form-inline" style={{ marginTop: "60px" }}>
                            <div className='form-input form-div'>
                                <label>Email Address</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                    <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} />
                                </div>
                                {errors ? <p className='error'> {errors.email}</p> : ""}
                            </div>


                            <div className='ApiError' style={{top:"10px"}}>{ApiError}</div>

                          
                            {loading === true ? (
                                <div className='button' style={{ margin: "100px 0px 20px 0px", cursor: "pointer"}}>
                                    <button type="submit" className="nav-link" disabled style={{ border: "0", background:"var(--lightblue)" }}>Proceed ...</button>
                                </div>) : (
                                <div className='button' style={{ margin: "100px 0px 20px 0px", cursor: "pointer" }}>
                                    <button type="submit" className="nav-link" style={{ border: "0" }}>Proceed</button>
                                </div>
                                )
                            }
                            
                         

            

                            <div className='line'>
                                <div className="or-line">OR </div>
                                <span> <img src={Google} alt="" className='google-img' /> </span>

                            </div>
                        </form>
                    </div>
                </div>


                <div className='secondPasword'>
                    <div className='password-content'>
                        <div className='image'><img src={handshake} alt="" /></div>
                        <div className=''>
                            <div className='title'>Trustees <span>Management</span></div>
                            <p>sustaining Value from Generation<br /> to Generation</p>
                        </div>
                    </div>

                    <div className='white-bg'>
                        <img src={white} alt="" />

                    </div>
                    <div className='lock'>
                        <img src={lock} alt="" />
                    </div>
                    <div className='question'>
                        <img src={question} alt="" />
                    </div>

                </div>


                <MainModal trigger={buttonpopup} setTrigger={setbuttonpopup} style={{ zIndex: "900" }}>
                    <div className='modalContent'>
                        <div className='resetpassword-page'>
                            <div className='register-container'>

                                <div className="image">
                                    <img src={phone} alt="" style={{ width: "20px" }} />
                                </div>
                                <div className='title'>OTP NOTIFICATION</div>
                                <div className='text'>Please enter the OTP we sent to you for you to  continue</div>


                                <form onSubmit={handleOtpSubmit}>
                                    <div className='otp-session'>

                                        <div className="otp">
                                            <input type="text" name="passwordResetCode" onChange={otpChange} />
                                        </div>
                                        {otperrors ? <p className='error'> {otperrors.passwordResetCode}</p> : ""}


                                        <div className="otp-resend">I didn’t receive a message <span><button>Resend</button></span></div>
                                    </div>

                                    <div className='navButtton' style={{ marginBottom: "30px" }}>
                                        <button type="submit" className="general-btn" >Submit</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </MainModal>
            </div>
        </div>
    )
}

export default Fpassword