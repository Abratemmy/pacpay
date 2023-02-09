import React, { useState, useEffect, useRef } from 'react';
import "./navbar.css";
import { IoIosNotifications } from "react-icons/io";
import profile from "../../../assets/profile.png";
import notificationimg from "../../../assets/notificationimage.png";
import dropdown from "../../../assets/profiledropdown.png";
import { BiSearch, BiEditAlt, BiMessageDots, BiLogOutCircle } from "react-icons/bi"
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack, IoMdPerson } from "react-icons/io";
import { BsCheck2All } from "react-icons/bs";
import dot from "../../../assets/dot.png";
import { BsArrowLeft, BsTelephone, BsLightbulb, BsDot } from "react-icons/bs";
import axios from "axios";
import { AiOutlineCamera, AiOutlineMail } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getNotification, updateNotification } from '../../actions/notification';
import moment from "moment"
import { getLoggedInUser, updateLoggedInUser } from '../../actions/auth';


function Navbar({ name, navlink }) {
    const navigate = useNavigate();
    const goToNavigate = () => {
        navigate(-1)
    }
    // function for notification starts here
    const [popupcontent, setPopupcontent] = useState([]);
    const [popuptoggle, setpopuptoggle] = useState(false)

    const changeContent = (notification, id) => {
        setPopupcontent([notification]);
        setpopuptoggle(!popuptoggle);
        setShowNotification(false);
        const payload = {
            read: true
        }
        dispatch(updateNotification(id, payload));
        // if (styling === null) {
        //     setStyling({ position: "fixed" })
        // } else {
        //     setStyling(null)
        // }
    }
    //we do not want scrolling when modal is up, so we create a dynamic styleing with usestate hook
    const [styling, setStyling] = useState(null);

    const [showNotification, setShowNotification] = useState(false);
    const displayNotification = () => {
        setShowNotification(!showNotification)
        setShowProfile(false);
    }
    const dispatch = useDispatch();

    const notificationData = useSelector((state) => state.notificationReducer);

    // const { id } = useParams()
    const readNotification = (id) => {
        const payload = {
            read: true
        }
        dispatch(updateNotification(id, payload));
    }


    useEffect(() => {
        dispatch(getNotification())
    }, [dispatch])

    // notification ends here

    // profile starts here

    const loggedinUser = useSelector((state) => state.loggedInUserReducer);
    const profileData = loggedinUser.data
    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch])

    const [showProfile, setShowProfile] = useState(false)
    const profileToggle = () => {
        setShowProfile(!showProfile);
        setShowNotification(false)
    }

    const [file, setFile] = useState(null);
    const [imageModal, setImageModal] = useState(false);
    const [preview, setPreview] = useState('');
    const imageSelectedHandler = (e) => {
        console.log("image selected", e.target.files[0])
        setFile(e.target.files[0])
        setImageModal(true);
        setShowProfile(false)
    }
    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(file);
        } else {
            setPreview(null)
        }
    }, [file])

    console.log("file", file)

    // const fileUploadHandler = () => {
    //     const fd = new FormData();
    //     fd.append('image', file)
    //     axios.post('url', fd, {
    //         onUploadProgress: progressEvent => {
    //             console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
    //         }
    //     }) 
    //         .then(res => {
    //             console.log(res);
    //         });
    // }

    const [loading, setLoading] = useState(false)
    const fileUploadHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        const id = profileData._id
        const fd = new FormData();
        fd.append('image', file);
        const payload = {
            firstName: profileData.firstName,
            profilePicture: file.name
        }
        dispatch(updateLoggedInUser(id, payload, setImageModal, setLoading, loading));
    }

    const uploadFile = () => {
        document.getElementById("selectFile").click()
    }


    return (
        <>
            <div className='Navbar'  >
                <div className='navbar-container' >
                    <div className='name'>{name}
                        <span>{navlink == "true" ? (<button onClick={goToNavigate} className="nav-icon">
                            <IoIosArrowBack className='icon' />
                            <IoIosArrowBack className='icon icon2' />
                        </button>) : ""}</span>

                    </div>

                    <div className='right'>
                        <div className='search'>
                            <form>
                                <div className='nav-desktop'>
                                    <div className='inputfield'>
                                        <span><BiSearch className='icon' /></span>
                                        <input type="text" placeholder='Search...' className='search' />
                                    </div>
                                </div>

                                <div className="nav-mobile">
                                    <span><BiSearch className='icon-search' /></span>
                                </div>
                            </form>
                        </div>
                        <div className='notification'>
                            <div className='header' onClick={displayNotification}>
                                <span>
                                    <IoIosNotifications className="icon" />
                                    {/* {notificationData.data.map} */}
                                    <span className='dot'><BsDot /></span>
                                </span>

                            </div>
                            {notificationData?.data?.length && (
                                <>
                                    {showNotification && <div className='nav-dropdown'>
                                        <div className='' onClick={(e) => e.stopPropagation()}>
                                            <div className='top'><span>Notification</span><span onClick={() => setShowNotification(false)}>X</span></div>

                                            <div className='markall'>
                                                <span><BsCheck2All className="icon" /> </span> Mark all as read
                                            </div>

                                            <div className='notification-content'>
                                                {notificationData?.data?.sort((a, b) => moment(new Date(b.createdAt)) - moment(new Date(a.createdAt))).slice(0, 3).map((notification, i) => {
                                                    return (
                                                        <>
                                                            <button className='content-div' key={i} onClick={() => changeContent(notification, index, notification._id)}>
                                                                <div className="first">
                                                                    <img src={dot} alt="" className='dot' />
                                                                    <div>
                                                                        <div className='content-text'>{notification.message}</div>
                                                                        <span className='date'>{moment(notification.createdAt).format("DD MMM, YYYY")} at {moment(notification.createdAt).format("hh:mmA")}</span>
                                                                    </div>
                                                                </div>
                                                                <div className='image'><img src={notificationimg} alt="" /> </div>
                                                            </button>
                                                        </>
                                                    )
                                                })}

                                            </div>

                                            <div className='viewAllNotification'>
                                                <NavLink to="/notifications" style={{ background: "none", textDecoration: "none", color: "var(--blueColor2)", fontSize: "13px", fontWeight: "600" }} >View All Notification</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </>
                            )
                            }


                            {/* {popuptoggle && (<div className='pop_up_container' onClick={() => setpopuptoggle(!popuptoggle)}> */}
                            {/* {popupcontent.map((pop) => {
                                return (
                                    <div className="nav-dropdown" >
                                        <div className='top'>
                                            <div className='image'><img src={notificationimg} alt="" /> </div>
                                            <button onClick={() => setpopuptoggle(!popuptoggle)}>X</button>
                                        </div>
                                        <button onClick={readNotification(pop._id)} className='container'>
                                            {pop.message}
                                        </button>

                                    </div>

                                )
                            })
                            } */}

                            {/* </div>
                            )} */}

                        </div>
                        <div className='profile'>
                            <span className='profile'>
                                <img src={profile} alt="" />
                            </span>

                            <span onClick={profileToggle} style={{ paddingLeft: "10px", cursor: "pointer" }}>
                                <img src={dropdown} alt="" />
                            </span>

                            {showProfile && <div className='nav-dropdown nav-dropdown1' style={{ width: "320px", padding: "10px 30px" }}>
                                <div className='top'><span><BsArrowLeft className='icon' onClick={profileToggle} /></span>
                                    <NavLink to="/login" style={{ textDecoration: "none" }}> <span className='logout' ><BiLogOutCircle className="icons" /> Logout</span></NavLink>
                                </div>
                                <div className='image-session'>
                                    <IoMdPerson className='icon' />
                                </div>
                                <div className='name'>{profileData.firstName} {profileData.lastName}</div>

                                <div className='profile-upload'>
                                    <div className=''>
                                        <input type="file" className='file' onChange={imageSelectedHandler}
                                            style={{ display: "none" }}
                                            id="selectFile"
                                        />

                                        <div className="action">
                                            <button onClick={() => uploadFile()} className="upload"><AiOutlineCamera className="icon" /> Upload Picture</button>

                                        </div>


                                        <div className='Profile'>
                                            <div className='profile-text'>
                                                <AiOutlineMail className='icon' /> <span>{profileData.email}</span>
                                            </div>

                                            <div className='profile-text'>
                                                <BsTelephone className='icon' /> <span>{profileData.mobile}</span>
                                            </div>

                                            <div className='profile-text'>
                                                <BsLightbulb className='icon' /> <span>{profileData.location}</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            }
                        </div>

                    </div>


                </div>

            </div>


            {imageModal && (
                <div className='ImageDisplay'>
                    <form onSubmit={fileUploadHandler}>
                        <div className='top'>
                            <div className='title'>Update Profile Picture </div>
                            <span onClick={() => setImageModal(false)}>x</span>
                        </div>
                        <div className='image'><img src={preview} alt="" /></div>

                        <div className='' style={{ marginTop: "30px" }}>
                            {loading ? (
                                <button type="submit" className="general-btn" disable style={{ border: "0", background: "var(--lightblue)" }} >
                                    <div className='loader-spinner'>
                                        <div className="spinner-border" role="status">
                                            <div className="sr-only"></div>
                                        </div>
                                        <div >Uploading...</div>
                                    </div>
                                </button>
                            ) : (
                                <button type="submit" className='general-btn'>Upload</button>
                            )
                            }
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}


export default Navbar 