import React from 'react';
import "./landing.css";
import blacklogo from "../../assets/blacklogo.png";
import handshake from "../../assets/handshake.png";
import logo from "../../assets/logo.png";
import star from "../../assets/Star.png";
import Vectorback from "../../assets/Vectorback.png";
import brush from "../../assets/brush.png";
import { NavLink } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing-page">
            <div className='first'>
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

                <div className='star'><img src={star} alt="" /></div>
                <div className='middle'>
                    <div className='content'>
                        <span className='image-design'><img src={Vectorback} alt="" /><span className='back-text'>Simpl</span></span>
                        <span className='other' style={{ position: "relative", top: "6px" }}>e way to control your money</span>
                    </div>

                    <p>Click any of the listed modules to begin or login with SSClick
                        any of the listed modules to begin or login with SSO.O.
                    </p>

                    <div className='button'>
                        <NavLink to="/login" className="nav-link">Signin</NavLink>
                    </div>

                    <div className='last' style={{ padding: "30px 0px 40px" }}>
                        <div className='no-acc'>
                            Don't have an account? <NavLink to="/register" className="signup"><div>Register Here</div>
                                <span><img src={brush} alt="" /></span></NavLink>
                        </div>
                    </div>
                </div>

                <div className='copyright'>
                    Copyright {new Date().getFullYear()} &copy;PAC .
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

export default Landing