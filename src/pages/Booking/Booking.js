import React, { useState } from 'react';
import "./booking.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io"
import Interface from '../../components/flexwillinterface/interface';
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import DatePicker from "react-horizontal-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { updateBooking } from "../actions/bookingAction";
import { CREATESCHEDULE } from '../constants/actionTypes';

function Booking() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const selectedDay = (val) => {
        console.log(val.toISOString())
        dispatch({ type: CREATESCHEDULE, payload: val });
    };

    const [active, setActive] = useState(null);

    const handleClick = (event) => {
        setActive(event.target.id);
        console.log(event.target.id)

    }

    const booking = new Date(useSelector((state) => state.bookingReducer));
    booking.setHours(active)
    console.log("BOOKING123", booking)

    console.log("active", active);

    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (active === null) {
            setErrors(true)
            console.log("errortime")
        } else {
            setLoading(true)
            const payload = {
                appointmentDate: booking
            }
            dispatch(updateBooking(payload, navigate, setLoading));
            console.log("submitted")
        }

    }

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


                <div className='scheduling' style={{ padding: "30px 0" }}>
                    <div className='title'>Schedule</div>

                    <div className='booking-Calendar'>
                        <DatePicker
                            getSelectedDay={selectedDay}
                            labelFormat={"MMMM"}
                            color={"#374e8c"}
                            name="appointmentDate"
                        />

                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="time" style={{ paddingTop: "30px" }}>
                            <div className='title'>Choose Time(WAT)</div>
                            <div className='Timetime'>
                                <span className={active === "9" ? "schedule-time timeactive" : 'schedule-time'}
                                    id={"9"}
                                    onClick={handleClick}
                                >
                                    09:00am
                                </span>

                                <span className={active === "10" ? "schedule-time timeactive" : 'schedule-time'}
                                    id={"10"}
                                    onClick={handleClick}
                                >
                                    10:00am
                                </span>
                                <span className={active === "12" ? "schedule-time timeactive" : 'schedule-time'}
                                    id={"12"}
                                    onClick={handleClick}
                                >
                                    12:00pm
                                </span>
                                <span className={active === "14" ? "schedule-time timeactive" : 'schedule-time'}
                                    id={"14"}
                                    onClick={handleClick}
                                >
                                    02:00pm
                                </span>
                                <span className={active === "15" ? "schedule-time timeactive" : 'schedule-time'}
                                    id={"15"}
                                    onClick={handleClick}
                                >
                                    03:00pm
                                </span>
                            </div>
                        </div>

                        <div className='booking-btn' style={{ paddingTop: "50px" }}>
                            {loading ? (
                                <button type="submit" className="general-btn" disabled style={{ border: "0", background: "var(--lightblue)" }} >
                                    <div className='loader-spinner'>
                                        <div className="spinner-border spinner-border-sm" role="status">
                                            <span className="sr-only"></span>
                                        </div>
                                        <span >Completing...</span>
                                    </div>
                                </button>
                            )
                                :
                                <div className=''>
                                    <p className='error' style={{ textAlign: "center" }}>{errors && (<p>Please select date and time</p>)}</p>
                                    <button type="submit" className="general-btn">Complete</button>
                                </div>
                            }
                        </div>


                    </form>


                </div>




            </div>
        </Interface>
    )
}

export default Booking