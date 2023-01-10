import React, { useState } from 'react';
import "./interface.css";
import { FaSignOutAlt } from "react-icons/fa";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import { useNavigate, NavLink } from "react-router-dom";
import blacklogo from "../../assets/blacklogo.png";
import logo from "../../assets/logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from 'react-redux';

function Interface({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate("/register")
        setUser(null)
    }
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
                            <NavLink to='/will_products' exact className="sidebar-navlink ">
                                <span className="icon"><img src={icon1} alt="" className="sidebar-icons" /></span><span className="text">My Buzz</span>
                            </NavLink>
                        </li>

                        <li >
                            <NavLink to='/faqs' exact className="sidebar-navlink ">
                                <span className="icon"><img src={icon2} alt="" className="sidebar-icons" /></span><span className="text">FAQs</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/change_password' exact className="sidebar-navlink ">
                                <span className="icon"><img src={icon3} alt="" className="sidebar-icons" /></span><span className="text">Change Password</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='help_support' exact className="sidebar-navlink ">
                                <span className="icon"><img src={icon2} alt="" className="sidebar-icons" /></span><span className="text">Help & Support </span>
                            </NavLink>
                        </li>

                        <li style={{ marginTop: "100px" }}>
                            <button onClick={logout} exact className="sidebar-navlink sidebar-signout"
                                style={{ border: "none", background: "transparent", textAlign: "left" }}
                            >
                                <FaSignOutAlt className="sidebar-icons" /><span className="text">Signout</span></button>
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

export default Interface