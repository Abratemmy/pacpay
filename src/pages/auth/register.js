import React, { useState } from 'react';
import "./auth.css";
import blacklogo from "../../assets/blacklogo.png";
import handshake from "../../assets/handshake.png";
import logo from "../../assets/logo.png";
import brush from "../../assets/brush.png";
import { useNavigate, NavLink } from 'react-router-dom';
import { MdOutlineEmail, MdArrowBackIosNew, MdLocalPhone } from "react-icons/md";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import Google from "../../assets/Google.png";

function Register() {
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

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
        if (styling === null) {
            setStyling({ position: "fixed" })
        } else {
            setStyling(null)
        }
    };
    const [styling, setStyling] = useState(null);

    const [values, setValues] = useState({
        email: "",
        password: "",
        phone: "",
        location: "",
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
        if (!targets.phone) errorsValue.phone = "Your phone number is required";
        if (!targets.location) errorsValue.location = "Your Location is required";
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
            navigate("/register_pop")
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

                <div className='middle' style={styling} >
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

                        <div className='button' style={{ paddingTop: "30px", cursor: "pointer" }}>
                            <div className="nav-link" onClick={toggleModal} style={{ border: "0" }}>Next</div>
                        </div>

                        {modal && (<div className='pop_up_container'>
                            <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
                                <div className="pop_up_header">
                                    <button onClick={toggleModal} className="back-arrow">
                                        <MdArrowBackIosNew className="icon" />
                                        <MdArrowBackIosNew className="icon icon2" />
                                    </button>

                                    <div className='pop_up_content'>
                                        <div className='auth-title'>Welcome To Trustee!</div>
                                        <div className='text'>Kindly create an account with us</div>

                                        <div className='form-input form-div'>
                                            <label>Phone Number</label>
                                            <div class="inner-addon left-addon">
                                                <i class="glyphicon glyphicon-user"><MdLocalPhone className='icon' /></i>
                                                <input type="text" placeholder="Enter Phone Number" name="phone" onChange={handleChange} />
                                            </div>
                                            {errors ? <p className='error'> {errors.phone}</p> : ""}
                                        </div>

                                        <div className='form-input form-div'>
                                            <label>Location</label>
                                            <div class="inner-addon left-addon">
                                                <i class="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                                <select placeholder='Select an option' name="location" onChange={handleChange}

                                                >
                                                    <option >Select Option </option>
                                                    <option value="mrs"><i class="fa fa-email"></i> Nigeria</option>
                                                    <option value="miss"><i class="fa fa-home"></i>Canada</option>
                                                    <option value="master"><i class="fa fa-home"></i>USA</option>
                                                </select>
                                            </div>
                                            {errors ? <p className='error'> {errors.location}</p> : ""}

                                        </div>

                                        <div className='button' style={{ paddingTop: "20px" }}>
                                            <button type="submit" className="nav-link" style={{ border: "0" }}>Register</button>
                                        </div>

                                        <div className='line' style={{ paddingTop: "70px" }}>
                                            <div className="or-line">OR </div>
                                            <span> <img src={Google} alt="" className='google-img' /> </span>

                                        </div>



                                        <div className='last' style={{ bottom: "0px" }} >
                                            <div className='no-acc' >
                                                Already have an account? <NavLink to="/login" className="signup"><div>Login Here</div>
                                                    <span><img src={brush} alt="" /></span></NavLink>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>)}




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

export default Register