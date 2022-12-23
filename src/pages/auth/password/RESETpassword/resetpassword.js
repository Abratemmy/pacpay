import React, { useState } from 'react';
import handshake from "../../../../assets/handshake.png";
import { MdOutlineEmail, MdArrowBackIosNew } from "react-icons/md";
import Google from "../../../../assets/Google.png";
import { useNavigate, NavLink } from 'react-router-dom';
import white from "../../../../assets/whitebg.png";
import reset from "../../../../assets/resetpassword.png";
import MainModal from '../../../../components/mainModal/MainModal';
import phone from "../../../../assets/phone.png"


function RESETPassword() {
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

    const navigate = useNavigate()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            console.log("submitted");
            setbuttonpopup(true)
            // navigate("/forgot_otp_password")
        }
    }
    return (
        <div className='password-container'>
            <div className="landing-page auth" >
                <div className='first'  >

                    <div className='middle'  >
                        <NavLink to="/settings" className="back" style={{ position: "relative" }}>
                            <MdArrowBackIosNew className="icon" />
                            <MdArrowBackIosNew className="icon icon2" />
                        </NavLink>
                        <div className='auth-title'>Reset Password</div>
                        <div className='text'>Kindly enter your email address associated with your account below and we’ll send a mail with instructions to rest password</div>
                        <form onSubmit={handleSubmit} className="form-inline" style={{ marginTop: "60px" }}>
                            <div className='form-input form-div'>
                                <label>Email Address</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                    <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} />
                                </div>
                                {errors ? <p className='error'> {errors.email}</p> : ""}
                            </div>


                            <div className='button' style={{ padding: "100px 0px 20px 0px", cursor: "pointer" }}>
                                <button type="submit" className="nav-link" style={{ border: "0" }}>Proceed</button>
                            </div>

                            <div className='line'>
                                <div className="or-line">OR </div>
                                <span> <img src={Google} alt="" className='google-img' /> </span>

                            </div>
                        </form>


                    </div>
                </div>




                <div className='second'>
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
                        <img src={reset} alt="" />
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


                                <div className='otp-session'>
                                    <div className="otp"> 567874</div>
                                    <div className="otp-resend">I didn’t receive a message <span><button style={{ border: "none", padding: "4px" }}>Resend</button></span></div>
                                </div>

                                <div className='nav-button'>
                                    <NavLink to="/reset_create_password" className="nav-link" >Submit</NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </MainModal>
            </div>
        </div>
    )
}

export default RESETPassword