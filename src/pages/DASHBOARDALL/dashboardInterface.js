import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import { NavLink, useLocation } from "react-router-dom";
import blacklogo from "../../assets/blacklogo.png";
import logo from "../../assets/logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function DashboardInterface({ children }) {

    const { pathname } = useLocation();

    return (
        <div>
            <div>
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
                                <span className="icon"><img src={icon2} alt="" className="sidebar-icons" /></span><span className="text">Will</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/settings' exact className="sidebar-navlink " isActive={() => ['/settings', '/dashboard_faqs'].includes(pathname)} >
                                <span className="icon"><img src={icon3} alt="" className="sidebar-icons" /></span><span className="text">Settings</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='help_support' exact className="sidebar-navlink ">
                                <span className="icon"><img src={icon2} alt="" className="sidebar-icons" /></span><span className="text">Help & Support </span>
                            </NavLink>
                        </li>

                        <li style={{ marginTop: "100px" }}>
                            <NavLink to='/admin_login' exact className="sidebar-navlink sidebar-signout"><FaSignOutAlt className="sidebar-icons" /><span className="text">Signout</span></NavLink>
                        </li>
                    </ul>



                </div>


                <div className="interface-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardInterface