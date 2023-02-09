import React from 'react';
import "./error.css";
import errorimg from "../../assets/errorimg.svg"
import blacklogo from "../../assets/blacklogo.png";
import logo from "../../assets/logo.png";
import { useNavigate, NavLink } from 'react-router-dom';

function Error404() {
    const navigate = useNavigate()
    const backNavigate = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className='Errormobile'>
                <div className="sidebar" >
                    <div className='sidebar-logo'>
                        <div className='landing-page'>
                            <div className='top'>
                                <div className='logo'>
                                    <div className='img1'>
                                        <img src={blacklogo} alt="" />
                                        <div className='black-text'>p</div>
                                    </div>
                                    <div className='img2'><img src={logo} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='mobileView'>
                    <div className='sidebar-logo'>
                        <div className='landing-page'>
                            <div className='top'>
                                <div className='logo'>
                                    <div className='img1'>
                                        <img src={blacklogo} alt="" />
                                        <div className='black-text'>p</div>
                                    </div>
                                    <div className='img2'><img src={logo} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="interface-content">
                    <div className='error-content'>
                        <div className='error-content1'>
                            <img src={errorimg} alt="error" />

                            <div className='title'>Oops!</div>
                            <div className='subtitle'>This page can not be found</div>
                            <div className='text'>Kindly <span onClick={backNavigate}>Go Back</span> or you login with the button below</div>

                            <div className='error-button '>
                                <NavLink to="/login" className="error-nav">Login</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404