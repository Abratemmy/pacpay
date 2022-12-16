import React from 'react';
import "./password.css";
import handshake from "../../../assets/handshake.png";
import { MdOutlineEmail, MdArrowBackIosNew } from "react-icons/md";
import line from "../../../assets/line.png";
import Google from "../../../assets/Google.png";
import { NavLink } from 'react-router-dom';
import white from "../../../assets/whitebg.png";
import lock from "../../../assets/lock.png";
import question from "../../../assets/question.png"


function Fpassword() {
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
                        <form className="form-inline" style={{ marginTop: "60px" }}>
                            <div className='form-input form-div'>
                                <label>Email Address</label>
                                <div className="input-group ">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text form-icon"><MdOutlineEmail className='icon' /></div>
                                    </div>
                                    <input type="text" className="form-control inputfield" placeholder="Enter email address" />
                                </div>
                            </div>


                            <div className='button' style={{ padding: "100px 0px 20px 0px", cursor: "pointer" }}>
                                <button type="submit" className="nav-link" style={{ border: "0" }}>Proceed</button>
                            </div>





                            <div className='line'>
                                <img src={line} alt="" />
                                <span>OR <img src={Google} alt="" className='google-img' /> </span>
                                <img src={line} alt="" />

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
                        <img src={lock} alt="" />
                    </div>
                    <div className='question'>
                        <img src={question} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Fpassword