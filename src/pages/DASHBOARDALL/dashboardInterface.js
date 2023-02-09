import React, { useState } from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import blacklogo from "../../assets/blacklogo.png";
import logo from "../../assets/logo.png";
import "./dashboardinterface.css";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight, MdLogout } from "react-icons/md";
import { useDispatch } from 'react-redux';

function DashboardInterface({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate("/register")
        setUser(null)
    }

    return (
        <div className='dashboardInterface'>
            <div className='desktopView'>
                <input type="checkbox" id="interface-check" className="headerinput" />
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
                    <ul  >
                        <li>
                            <label htmlFor="interface-check" className="sidebarlabel">
                                <MdOutlineKeyboardArrowRight className="headericon" id="sidebar_btn" />
                            </label>
                        </li>
                        <li >
                            <NavLink to='/dashboard' exact className="sidebar-navlink ">
                                <span className="icon"><img src={icon1} alt="" className="sidebar-icons" /></span><span className="text">Home</span>
                            </NavLink>
                        </li>

                        <li >
                            <NavLink to='/will' exact className="sidebar-navlink ">
                                <span className="icon"><FaQuestionCircle className="sidebar-icons" /></span><span className="text">Will</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/settings' exact className="sidebar-navlink ">
                                <span className="icon"><AiFillLock className="sidebar-icons" /></span><span className="text">Settings</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='help_support' exact className="sidebar-navlink ">
                                <span className="icon"><FaQuestionCircle className="sidebar-icons" /></span><span className="text">Help & Support </span>
                            </NavLink>
                        </li>


                        <li style={{ marginTop: "100px" }}>
                            <button onClick={logout} exact className="sidebar-navlink sidebar-signout"
                                style={{ border: "none", background: "transparent", textAlign: "left" }}
                            >
                                <span className="icon"><MdLogout className="sidebar-icons" /></span><span className="text">Signout</span>
                            </button>
                        </li>
                    </ul>



                </div>


                <div className="interface-content">
                    {children}
                </div>
            </div>

            <div className='mobileView'>
                <div className='mobileInterface-content'>{children}</div>

                <div className='mobile-tag'>
                    <div className='backgroundDesign'>
                        <NavLink to='/dashboard' exact className="navlink " activeClassName="active">
                            <span className="icon"><img src={icon1} alt="" className="icons" /></span>
                        </NavLink>

                        <NavLink to='/will' exact className="navlink " activeClassName="active">
                            <span className="icon"><img src={icon2} alt="" className="icons" /></span>
                        </NavLink>

                        <NavLink to='/settings' exact className="navlink " activeClassName="active"  >
                            <span className="icon"><img src={icon3} alt="" className="icons" /></span>
                        </NavLink>

                        <NavLink to='help_support' exact className="navlink " activeClassName="active">
                            <span className="icon"><img src={icon2} alt="" className="icons" /></span>
                        </NavLink>

                    </div>
                </div>
                {/* <h1>hgghhhu</h1> */}
            </div>
        </div>
    )
}

export default DashboardInterface