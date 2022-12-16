import React, { useState } from 'react';
import blacklogo from "../../assets/blacklogo.png";
import handshake from "../../assets/handshake.png";
import logo from "../../assets/logo.png";
import { MdOutlineEmail, } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import line from "../../assets/line.png";
import Google from "../../assets/Google.png";
import { NavLink } from 'react-router-dom';
import brush from "../../assets/brush.png";


function Signin() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };


    const handleSubmit = (e) => {
        // e.preventDefault()
        console.log("submitted")
    }

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);

    };

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

                <div className='middle'  >
                    <div className='auth-title'>Welcome Back!</div>
                    <div className='text'>Glad to see you again! Kindly fill the details below</div>
                    <form className="form-inline" onSubmit={handleSubmit}>
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
                        </div>

                        <div className='forgot-session'>
                            <div className=''>
                                <input type="checkbox" id="check" className="headerinput" onClick={toggleModal} />

                                <label className="headerlabel" onClick={toggleModal}>
                                    Remember me
                                </label>
                                {
                                    modal && (
                                        <div className='remember_content'>
                                            <div onClick={toggleModal} className="close"><h6>X</h6></div>
                                            <div className="">
                                                <label>Email Address</label>
                                                <div className="input-group ">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text form-icon"><MdOutlineEmail className='icon' /></div>
                                                    </div>
                                                    <input type="text" className="form-control inputfield" placeholder="Enter email address" />
                                                </div>
                                            </div>

                                            <div className=''>
                                                <label>Password</label>
                                                <div className="input-group ">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text form-icon"><AiOutlineLock className='icon' /></div>
                                                    </div>
                                                    <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                                                    <input type={passwordShown ? "text" : "password"} className="form-control inputfield" placeholder="Enter password" />

                                                </div>
                                            </div>

                                            <div className='' style={{ padding: "20px 0px", cursor: "pointer" }}>
                                                <NavLink to="/product_landing" className="nav-link" style={{ border: "0" }}>save and proceed</NavLink>
                                            </div>

                                            <div className='text' onClick={toggleModal}>Never <BsArrowUpRight className="icon" /> </div>

                                        </div>

                                    )
                                }
                            </div>
                            <NavLink to="/forgot_password" className="nav">Forgot Password?</NavLink>
                        </div>




                        <div className='button' style={{ padding: "20px 0px", cursor: "pointer" }}>
                            <button type="submit" className="nav-link" style={{ border: "0" }}>Get started</button>
                        </div>





                        <div className='line'>
                            <img src={line} alt="" />
                            <span>OR <img src={Google} alt="" className='google-img' /> </span>
                            <img src={line} alt="" />

                        </div>
                    </form>
                </div>

                <div className='last' style={{ bottom: "5px" }} >
                    <div className='no-acc' >
                        Don't have an account? <NavLink to="/register" className="signup"><div>Register Here</div>
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

export default Signin