import React, { useState } from 'react';
import handshake from "../../../assets/handshake.png";
import { MdOutlineEmail, MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import white from "../../../assets/whitebg.png";
import lock from "../../../assets/lock.png";
import question from "../../../assets/question.png"

function Createpassword() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    return (
        <div className='password-container'>
            <div className="landing-page auth" >
                <div className='first'  >

                    <div className='middle'  >
                        <NavLink to="/login" className="back" style={{ position: "relative" }}>
                            <MdArrowBackIosNew className="icon" />
                            <MdArrowBackIosNew className="icon icon2" />
                        </NavLink>
                        <div className='auth-title'>Create A New Password</div>
                        <div className='text'>Your new password must be different from the previous one</div>
                        <form className="form-inline" style={{ marginTop: "60px" }}>

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


                            <div className='button' style={{ padding: "100px 0px 20px 0px", cursor: "pointer" }}>
                                <button type="submit" className="nav-link" style={{ border: "0" }}>Set Password</button>
                            </div>





                            {/* <div className='line'>
                        <img src={line} alt="" />
                        <span>OR <img src={Google} alt="" className='google-img' /> </span>
                        <img src={line} alt="" />

                    </div> */}
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

export default Createpassword