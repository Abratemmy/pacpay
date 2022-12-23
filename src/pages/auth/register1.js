import React, { useState } from 'react';
import "./auth.css";
import blacklogo from "../../assets/blacklogo.png";
import handshake from "../../assets/handshake.png";
import logo from "../../assets/logo.png";
import brush from "../../assets/brush.png";
import { useNavigate, NavLink } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import Google from "../../assets/Google.png";

function Register1() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    const [ConfirmpasswordShown, setconfirmPasswordShown] = useState(false);
    const toggleconfirmPassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setconfirmPasswordShown(!ConfirmpasswordShown);
    };

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmpassword: ""
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
        if (!targets.password) {
            errorsValue.password = "Password is required"
        } else if (targets.password.length < 8) {
            errorsValue.password = "Password must be more than 8 character"
        }
        if (!targets.confirmpassword) errorsValue.confirmpassword = "Confirm Your Password"
        else if (targets.password !== targets.confirmpassword) errorsValue.confirmpassword = "Password do not match"

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
            navigate("/register2")
        }
        // else {
        //     console.log("submitted");
        // }
    }
    return (
        <div className="landing-page auth" style={{ paddingBottom: "20px" }} >
            <div className='first'  >
                <div className='top'>
                    <div className='logo'>
                        <div className='img1'>
                            <img src={blacklogo} alt="" />
                            <div className='black-text'>p</div>
                        </div>
                        <div className='img2'><img src={logo} alt="" /></div>
                    </div>

                    <div className='text'>How it works?</div>
                </div>

                <div className='middle' >
                    <div className='auth-title'>Welcome To Trustee!</div>
                    <div className='text'>Kindly create an account with us</div>
                    <form class="form-inline" onSubmit={handleSubmit}>
                        <div className='form-input form-div'>
                            <label>Email Address</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} />
                            </div>
                            {errors ? <p className='error'> {errors.email}</p> : ""}
                        </div>

                        <div className='form-input form-div'>
                            <label>Password</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                <input type={passwordShown ? "text" : "password"} placeholder="Enter password" name="password" onChange={handleChange} />
                                <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                            </div>
                            {errors ? <p className='error'> {errors.password}</p> : ""}

                            <div className='password-note'>A password with a minimum of 8 characters and must be Alphanumeric</div>
                        </div>

                        <div className='form-input form-div'>
                            <label>Confirm Password</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                <input type={ConfirmpasswordShown ? "text" : "password"} placeholder="Enter Confirm Password" name="confirmpassword" onChange={handleChange} />
                                <AiFillEyeInvisible onClick={toggleconfirmPassword} className="show-icon" />
                            </div>
                            {errors ? <p className='error'> {errors.confirmpassword}</p> : ""}
                        </div>

                        <div className='button' style={{ paddingTop: "10px", cursor: "pointer" }}>
                            <button type="submit" className="nav-link" style={{ border: "0" }}>Next</button>
                        </div>

                        <div className='line'>
                            <div className="or-line">OR </div>
                            <span> <img src={Google} alt="" className='google-img' /> </span>

                        </div>
                    </form>
                </div>

                <div className='last' style={{ bottom: "0px" }} >
                    <div className='no-acc' >
                        Already have an account? <NavLink to="/login" className="signup"><div>Login Here</div>
                            <span><img src={brush} alt="" /></span></NavLink>
                    </div>
                </div>
            </div>

            <div className='second'>
                <div className='content'>
                    <div className='image'><img src={handshake} alt="" /></div>
                    <div className=''>
                        <div className='title'>Trustees <span>Management</span></div>
                        <p>sustaining Value from Generation to Generation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register1