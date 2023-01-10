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
import "./mainREGISTER.css"
import validator from 'validator';
import PwdRequisite from '../../components/pwdRequiste/pwdRequisite';
import countrydata from "../../components/country/country.js";
import { useDispatch } from 'react-redux';
import { register } from "../actions/auth"

function MainREGISTER() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const [ConfirmpasswordShown, setconfirmPasswordShown] = useState(false);
    const toggleconfirmPassword = () => {
        setconfirmPasswordShown(!ConfirmpasswordShown);
    };

    const [pwdRequiste, setPWDRquisite] = useState(false);
    const [checks, setChecks] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false,
    });

    const handleOnFocus = () => {
        setPWDRquisite(true);
    };
    const handleOnBlur = () => {
        setPWDRquisite(false);
    };
    const handleOnKeyUp = (e) => {
        const { value } = e.target;
        const capsLetterCheck = /[A-Z]/.test(value);
        const numberCheck = /[0-9]/.test(value);
        const pwdLengthCheck = value.length >= 8;
        const specialCharCheck = /[!@#$%^&*]/.test(value);
        setChecks({
            capsLetterCheck,
            numberCheck,
            pwdLengthCheck,
            specialCharCheck,
        });
    };

    //validation for firstpage register below
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmpassword: "",
        mobile: "",
        location: "",
    });
    const [errors, setErrors] = useState({});

    // get input values
    const handleChange = (ev) => {
        setRegisterData({
            ...registerData,
            [ev.target.name]: ev.target.value,
        });

    };
    const handleFirstError = (targets) => {
        let errorsValue = {};
        if (!targets.firstName) errorsValue.firstName = "Your first name is required";
        if (!targets.lastName) errorsValue.lastName = "Your last name is required";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

        if (!targets.password) {
            errorsValue.password = "Password is required"
        }
        // else if (!validator.isStrongPassword(targets.password, {
        //     minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1
        // })) errorsValue.password = "Password must contain a minimum of 8 characters and must be Alphanumeric"

        if (!targets.confirmpassword) errorsValue.confirmpassword = "Confirm Password is required"
        else if (targets.password !== targets.confirmpassword) errorsValue.confirmpassword = "Password do not match"

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const next = (ev) => {
        ev.preventDefault()
        let v = handleFirstError(registerData);
        if (v > 0) {
            console.log("error");
        }
        else {
            setToggleState(2);
        }

    }

    // validation for all register page and handlesubmit

    const handleRegisterError = (targets) => {
        let errorsValue = {};
        if (!targets.mobile) errorsValue.mobile = "Your phone number is required";
        if (!targets.location) errorsValue.location = "Your location is required";
        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleRegisterError(registerData);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            const payload = {
                email: registerData.email,
                password: registerData.password,
                firstName: registerData.firstName,
                lastName: registerData.lastName,
                location: registerData.location,
                mobile: registerData.mobile,
                // profilePicture: http://localhost/test.jpeg
            }

            dispatch(register(payload, navigate))
            // navigate("/register_pop")
            // console.log("Registerdata", payload)
        }
    }
    return (
        <div className="landing-page auth" style={{ paddingBottom: "20px" }} >
            <div className='first'>
                <div className="register-bloc-tabs">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}><span> </span>Register</div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}><span></span> Register2</div>
                </div>

                <div className="Registercontent-tabs" >
                    <form onSubmit={handleSubmit}>
                        <div className={toggleState === 1 ? "Registercontent active-Registercontent" : "Registercontent"}>
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

                            <div className='middle'>
                                <div className='auth-title'>Welcome To Trustee!</div>
                                <div className='text'>Kindly create an account with us</div>

                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <div className='form-input form-div'>
                                            <label>First Name</label>
                                            <div class="inner-addon left-addon">
                                                <i class="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                                <input type="text" placeholder="Enter your firstname" name="firstName" onChange={handleChange} />
                                            </div>
                                            {errors ? <p className='error'> {errors.firstName}</p> : ""}
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <div className='form-input form-div'>
                                            <label>Email Address</label>
                                            <div class="inner-addon left-addon">
                                                <i class="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                                <input type="text" placeholder="Enter your last name" name="lastName" onChange={handleChange} />
                                            </div>
                                            {errors ? <p className='error'> {errors.lastName}</p> : ""}
                                        </div>
                                    </div>
                                </div>
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
                                        <input type={passwordShown ? "text" : "password"} placeholder="Enter password" name="password"
                                            onChange={handleChange}
                                            onFocus={handleOnFocus}
                                            onBlur={handleOnBlur}
                                            onKeyUp={handleOnKeyUp}
                                        />
                                        <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                                    </div>
                                    {pwdRequiste ? <PwdRequisite
                                        capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                                        numberFlag={checks.numberCheck ? "valid" : "invalid"}
                                        pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                                        specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
                                    /> : null}
                                    {errors ? <p className='error'> {errors.password}</p> : ""}
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

                                <div className='button' style={{ paddingTop: "0px", cursor: "pointer" }}>
                                    <div className="nav-link" onClick={next} style={{ border: "0" }}>Next</div>
                                </div>

                                <div className='line'>
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

                        <div className={toggleState === 2 ? "Registercontent active-Registercontent" : "Registercontent"}>
                            <div className='middle'>
                                <div style={{ padding: "10px 0px 20px 0px" }}>
                                    <span onClick={() => setToggleState(1)} style={{ color: "var(--blueColor)", cursor: "pointer" }}>
                                        <MdArrowBackIosNew className="icon" />
                                        <MdArrowBackIosNew className="icon icon2" style={{ position: "relative", left: "-9px" }} />
                                    </span>
                                </div>
                                <div className='auth-title'>Welcome To Trustee!</div>
                                <div className='text'>Kindly create an account with us</div>

                                <div className='form-input form-div'>
                                    <label>Phone Number</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><MdLocalPhone className='icon' /></i>
                                        <input type="text" placeholder="Enter Phone Number" name="mobile" onChange={handleChange} />
                                    </div>
                                    {errors ? <p className='error'> {errors.mobile}</p> : ""}
                                </div>

                                <div className='form-input form-div' style={{ paddingBottom: "30px" }}>
                                    <label>Location</label>

                                    <div className="inner-addon left-addon">
                                        <i className="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                        <select type="text" name="location" placeholder="country" onChange={handleChange} className="inputfield">
                                            {countrydata.map((item, id) => {
                                                return (
                                                    <option value={item.value} key={id}>{item.country}</option>
                                                )
                                            })}

                                        </select>
                                    </div>

                                    {/* <Countryform handleChange={handleChange} /> */}
                                    {errors ? <p className='error'> {errors.location}</p> : ""}

                                </div>

                                <div className='button' style={{ paddingTop: "10px", cursor: "pointer" }}>
                                    <button type="submit" className="nav-link" style={{ border: "0" }}>Register</button>
                                </div>

                                <div className='line' style={{ padding: "30px 0px" }}>
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
                    </form>
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

export default MainREGISTER