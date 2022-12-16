import React from 'react';
import { NavLink } from 'react-router-dom';
import blacklogo from "../../assets/blacklogo.png";
import logo from "../../assets/logo.png";
import "./productlanding.css";
import { BsArrowUpRight } from "react-icons/bs";
import will from "../../assets/willicon.png";
import trust from "../../assets/trusticon.png";
import bgpic from "../../assets/bgpic.png"

function Productlanding() {
    return (
        <div className='productlanding-container'>
            <div className='container'>
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

                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='landing-image' >
                            <img src={bgpic} alt="image heres" width="90%" height="auto" />
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='landing-content'>
                            <div className=''>
                                <div className='title'>Welcome To Trustees!</div>
                                <p>Kindly enter your email address associated with your account
                                    below and we'll send a mail with instructions to reset password
                                </p>


                                <div className='nav-container'>
                                    <NavLink to="/will_products" className="nav-link">
                                        <span className='image'><img src={will} alt="" /></span> <span>Will  <BsArrowUpRight className='icon' /></span>
                                    </NavLink>

                                    <NavLink to="/will_products" className="nav-link nav-link-trust">
                                        <span className='image'><img src={trust} alt="" /></span> <span>Trust <BsArrowUpRight className='icon' /></span>
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productlanding