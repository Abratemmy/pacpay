import React, { useState } from 'react';
import "./navbar.css";
import { IoIosNotifications } from "react-icons/io";
import profile from "../../../assets/profile.png";
import dropdown from "../../../assets/profiledropdown.png";
import { BiSearch, BiEditAlt, BiMessageDots } from "react-icons/bi"
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoMdPerson } from "react-icons/io";
import { BsCheck2All } from "react-icons/bs";
import dot from "../../../assets/dot.png";
import { BsArrowLeft, BsTelephone, BsLightbulb } from "react-icons/bs";
import { FaSignOutAlt } from 'react-icons/fa';
import axios from "axios";
import { AiOutlineCamera, AiOutlineMail } from "react-icons/ai"


function Navbar({ name, navlink }) {
    const [showNotification, setShowNotification] = useState(false);

    const [showProfile, setShowProfile] = useState(false)
    const profileToggle = () => {
        setShowProfile(!showProfile);
        console.log("show", showProfile)
    }

    const [image, setImage] = useState(null);

    const imageSelectedHandler = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', image)
        axios.post('url', fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
            }
        }) //change the url to your url
            .then(res => {
                console.log(res);
            });
    }

    const uploadFile = () => {
        document.getElementById("selectFile").click()
    }

    // this is to change state when edit button is clicked

    const [editProfile, setEditProfile] = useState(false)
    return (
        <div className='Navbar'>
            <div className='navbar-container'>
                <div className='name'>{name}
                    <span>{navlink == "true" ? (<NavLink to="/settings" className="nav-icon">
                        <IoIosArrowBack className='icon' />
                        <IoIosArrowBack className='icon icon2' />
                    </NavLink>) : ""}</span>

                </div>

                <div className='right'>
                    <div className='search'>
                        <form>
                            <div className='inputfield'>
                                <span><BiSearch className='icon' /></span>
                                <input type="text" placeholder='Search...' className='search' />
                            </div>
                        </form>
                    </div>
                    <div className='notification'><span className='header' onClick={() => setShowNotification(!showNotification)}><IoIosNotifications className="icon" /></span>
                        {showNotification && <div className='nav-dropdown'>
                            <div className='top'><span>Notification</span><span onClick={() => setShowNotification(false)}>X</span></div>

                            <div className='markall'>
                                <span><BsCheck2All className="icon" /> </span> Mark all as read
                            </div>

                            <div className='notification-content'>
                                <div className='content-div'>
                                    <img src={dot} alt="" className='dot' />
                                    <div className='content-text'>You’ve successfully subcribe to the basic plan!
                                        <span className='date'>22 Nov, 2022 at 09:30 PM</span>
                                    </div>
                                    <div className='image'><img src={image} alt="" /> </div>
                                </div>

                                <div className='content-div'>
                                    <img src={dot} alt="" className='dot' />
                                    <div className='content-text'>You’ve successfully subcribe to the basic plan!
                                        <span className='date'>22 Nov, 2022 at 09:30 PM</span>
                                    </div>
                                    <div className='image'><img src={image} alt="" /> </div>
                                </div>

                                <div className='content-div'>
                                    <img src={dot} alt="" className='dot' />
                                    <div className='content-text'>You’ve successfully subcribe to the basic plan!
                                        <span className='date'>22 Nov, 2022 at 09:30 PM</span>
                                    </div>
                                    <div className='image'><img src={image} alt="" /> </div>
                                </div>
                            </div>

                            <NavLink to="" style={{ background: "none", textDecoration: "none", color: "var(--blackColor)", fontSize: "12px" }} >View All Notification</NavLink>
                        </div>
                        }

                    </div>
                    <div className='profile'>
                        <span className='profile'>
                            <img src={profile} alt="" />
                        </span>

                        <span onClick={profileToggle}>
                            <img src={dropdown} alt="" />
                        </span>

                        {showProfile && <div className='nav-dropdown nav-dropdown1' style={{ width: "320px" }}>
                            <div className='top'><span><BsArrowLeft className='icon' onClick={profileToggle} /></span><span className='logout' ><FaSignOutAlt className="icons" /> Logout</span></div>
                            <div className='image-session'>
                                <IoMdPerson className='icon' />
                            </div>
                            <div className='name'>Taofeeqah Bello <span>Mrs</span></div>

                            <div className='profile-upload'>
                                <div className=''>
                                    <input type="file" className='file' onChange={imageSelectedHandler}
                                        style={{ display: "none" }}
                                        id="selectFile"
                                    />

                                    <div className="action">
                                        <button onClick={() => uploadFile()} className="upload"><AiOutlineCamera className="icon" /> Upload Picture</button>

                                        <button className='edit-profile' onClick={() => setEditProfile(!editProfile)}><BiEditAlt className='icon' /> Edit profile</button>
                                    </div>


                                    {editProfile ? (<div className='editprofile'>
                                        <form >
                                            <div className='input-container'>
                                                <div className="inner-addon left-addon">
                                                    <i className="glyphicon glyphicon-user"><BsLightbulb className='icon' /></i>
                                                    <select name="title" placeholder='Select an option'

                                                    >
                                                        <option >Select Option </option>
                                                        <option value="mr">Mr</option>
                                                        <option value="mrs"><i class="fa fa-email"></i> Mrs</option>
                                                        <option value="miss"><i class="fa fa-home"></i>Miss</option>
                                                        <option value="master"><i class="fa fa-home"></i>Master</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='input-container'>
                                                <div className="inner-addon left-addon">
                                                    <i className="glyphicon glyphicon-user"><BsTelephone className='icon' /></i>
                                                    <input type="text" placeholder="Enter Phone Number"
                                                    />
                                                </div>
                                            </div>

                                            <div className='input-container'>
                                                <div className="inner-addon left-addon">
                                                    <i className="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                                                    <textarea rows="3" placeholder="Describe" className="textarea"

                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className='edit-btn'>
                                                <button type="submit" className='edit-button'>Save And Proceed</button>
                                            </div>
                                        </form>
                                    </div>) : (<div className='Profile'>
                                        <div className='profile-text'>
                                            <AiOutlineMail className='icon' /> <span>abdul@email.com</span>
                                        </div>

                                        <div className='profile-text'>
                                            <BsTelephone className='icon' /> <span>+2347904094834</span>
                                        </div>

                                        <div className='profile-text'>
                                            <BsLightbulb className='icon' /> <span>Single</span>
                                        </div>

                                        <div className='profile-contact'>
                                            <div className='contact'>Contact Address</div>
                                            <span>22, Osongama street, Uyo Akwa-ibom</span>
                                        </div>

                                    </div>)}
                                </div>
                            </div>

                        </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar