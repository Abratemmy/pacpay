import React, { useState } from 'react';
import "./auth.css";
import blacklogo from "../../assets/blacklogo.png";
import handshake from "../../assets/handshake.png";
import logo from "../../assets/logo.png";
import brush from "../../assets/brush.png";
import { NavLink } from 'react-router-dom';
import { MdOutlineEmail, MdArrowBackIosNew, MdLocalPhone } from "react-icons/md";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import line from "../../assets/line.png";
import Google from "../../assets/Google.png";

function Register() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }
    return (
        <div className="landing-page auth" >
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
                            <div className="input-group ">
                                <div className="input-group-prepend">
                                    <div className="input-group-text form-icon"><MdOutlineEmail className='icon' /></div>
                                </div>
                                <input type="text" className="form-control inputfield" placeholder="Enter email address" />
                            </div>
                        </div>

                        <div className='form-input form-div'>
                            <label>Password</label>
                            <div className="input-group ">
                                <div className="input-group-prepend">
                                    <div className="input-group-text form-icon"><AiOutlineLock className='icon' /></div>
                                </div>
                                <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                                <input type={passwordShown ? "text" : "password"} className="form-control inputfield" placeholder="Enter password" />

                            </div>
                            <div className='password-note'>A password with a minimum of 8 characters and must be Alphanumeric</div>
                        </div>

                        <div className='form-input form-div'>
                            <label>Confirm Password</label>
                            <div className="input-group " style={{ position: "relative" }}>
                                <div className="input-group-prepend">
                                    <div className="input-group-text form-icon"><AiOutlineLock className='icon' /></div>
                                </div>
                                <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                                <input type={passwordShown ? "text" : "password"} className="form-control inputfield" placeholder="Enter confirm password" />
                            </div>
                        </div>

                        <div className='button' style={{ paddingTop: "10px", cursor: "pointer" }}>
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
                                            <div className="input-group ">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text form-icon"><MdLocalPhone className='icon' /></div>
                                                </div>
                                                <input type="text" className="form-control inputfield" placeholder="Enter correct phone number" />
                                            </div>
                                        </div>

                                        <div className='form-input form-div'>
                                            <label>Location</label>
                                            <div className="input-group select">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text form-icon"><MdOutlineEmail className='icon' /></div>
                                                </div>
                                                <select class="custom-select form-control inputfield" id="inlineFormCustomSelect">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='button' style={{ paddingTop: "20px" }}>
                                            <button className="nav-link" style={{ border: "0" }}>Register</button>
                                        </div>

                                        <div className='line'>
                                            <img src={line} alt="" />
                                            <span>OR <img src={Google} alt="" className='google-img' /> </span>
                                            <img src={line} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>)}




                        <div className='line'>
                            <img src={line} alt="" />
                            <span>OR <img src={Google} alt="" className='google-img' /> </span>
                            <img src={line} alt="" />
                        </div>
                    </form>
                </div>

                <div className='last' style={{ bottom: "20px" }} >
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