import React from 'react';
import "./booking.css"
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io"
import Interface from '../../components/flexwillinterface/interface';
import booking from "../../assets/bookingperson.png";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart, AiFillStar } from "react-icons/ai"
import CalendarDate from '../../components/Calendar/CalendarDate';

function Booking() {
    return (
        <Interface>
            <div className='booking'>
                <div className='top'>
                    <NavLink to=" " className="booking-nav" style={{ background: "none" }}>
                        <IoIosArrowBack className='icon' />
                        <IoIosArrowBack className='icon icon2' />
                    </NavLink>

                    <div className='name'>Book Appointment</div>
                </div>

                <div className='booking-session' style={{ paddingTop: "30px" }}>
                    <div className='row gx-5'>
                        <div className='col-lg-5 col-md-5 col-sm-12'>
                            <div className='first'>
                                <div className='card-content'>
                                    <div className='image'><img src={booking} alt="" /> </div>
                                    <div className='image-content'>
                                        <div className='name'>Dr. Kolawole John <span>Consultant</span></div>
                                        <div className='location'><span><MdLocationOn className='icon' /> </span> Lagos, Nigeria</div>
                                        <div className='star'>
                                            <span className='star1'><AiFillStar className="icon" /> <span>5 star</span> </span>
                                            <span className='star1'><AiFillHeart className='icon' /> </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='last'>
                                    <div className='number'>100 <span>Previews</span></div>
                                    <div className='number'>12<span>Yrs Exper.</span></div>
                                    <div className='number'>2502 <span>Customers</span></div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-7 col-md-7 col-sm-12'>
                            <div className='text-content'>
                                <div className='name'>Demography</div>
                                <div className='text'>
                                    Click on the button below to see some questions you might want to ask Click on the button below to see some questions you might want to ask... Read More
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='' style={{ padding: "30px 0" }}>

                    <CalendarDate />

                </div>

                <div className='booking-btn'>

                    <div className='general-btn'>
                        <NavLink to="/booking_success" className="general-navlink">Complete</NavLink>
                    </div>
                </div>
            </div>
        </Interface>
    )
}

export default Booking