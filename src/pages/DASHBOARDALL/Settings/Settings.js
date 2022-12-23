import React, { useState } from 'react';
import DashboardInterface from '../dashboardInterface';
import Navbar from '../Navbar/Navbar';
import "./settings.css"
import { MdOutlinePersonPin } from "react-icons/md"
import { TiArrowMaximiseOutline } from 'react-icons/ti';
import axios from 'axios';
import profile from "../../../assets/profile2.png"
import { NavLink } from 'react-router-dom';

function Settings() {

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

    // notification toggle
    const [toggle, setToggle] = useState(true);
    const handleToggleChange = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <DashboardInterface>
                <Navbar name="Account Settings" />

                <div className='settings'>
                    <div className='settings-page'>
                        <div className='card-container'>
                            <div className='title'>Profile Details</div>
                            <div className='top'>
                                <span><img src={profile} alt="" /></span>

                                <div className='right'>
                                    <div className='content'>
                                        <input type="file" className='file' onChange={imageSelectedHandler}
                                            style={{ display: "none" }}
                                            id="selectFile"
                                        />

                                        <div className="action">
                                            <button onClick={() => uploadFile()} className="upload">Upload Profile Picture</button>
                                            {/* <button onClick={fileUploadHandler}>Upload </button> */}
                                            <button className='delete'>Delete</button>
                                        </div>
                                    </div>

                                    <p>*Image should be atleast 320px big,less than 500kb. Allowed file; png or jpeg</p>

                                </div>
                            </div>

                            <div className='information'>
                                <div className='' style={{ padding: "20px 0px" }}>
                                    <label>Email Address</label>
                                    <div className="inner-addon left-addon inputfield1 disable">
                                        <i className="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                        <span >taofeeqah@gmail.com</span>
                                    </div>
                                </div>

                                <div className='' style={{ padding: "20px 0px" }}>
                                    <label >Full Name</label>
                                    <div className="inner-addon left-addon inputfield1 disable">
                                        <i className="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                        <span >Taofeeqah Bello</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-container'>
                            <div className="title">Notification</div>
                            <p className='note'>*You can switch off, if you don't want to receive any push notification</p>

                            <div className='notification-content'>
                                <label>Push Notification</label>
                                <div className={`toggle-container ${!toggle ? "disable-toggle" : ""}`} onClick={handleToggleChange}>
                                    <div className={`toggle-btn ${!toggle ? "disable-btn" : ""}`} ></div>
                                </div>
                            </div>

                        </div>

                        <div className='card-container'>
                            <div className="title">Change Password</div>
                            <p className='note'>*You can permanently delete or temporarily freeze your account.</p>

                            <div className='setting-btn'>
                                <NavLink to="/reset_password" className="setting-nav">Reset Password</NavLink>
                            </div>
                        </div>

                        <div className='card-container'>
                            <div className="title">FAQs</div>
                            <p className='note'>*Image should be atleast 320px big,less than 500kb. Allowed file; png or jpeg</p>
                            <div className='setting-btn'>
                                <NavLink to="/dashboard_faqs" className="setting-nav">Faqs</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardInterface>
        </div>
    )
}

export default Settings