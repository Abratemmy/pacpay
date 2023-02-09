import React, { useState, useEffect } from 'react';
import Interface from '../flexwillinterface/interface';
import "./willLanding.css";
import hiIcon from "../../assets/hiIcon.png";
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from '../../pages/actions/auth';


function WillLanding({ children }) {
    const dispatch = useDispatch();

    const loggedinUser = useSelector((state) => state.loggedInUserReducer);

    useEffect(() => {
        // setLoggedinUser(false)
        dispatch(getLoggedInUser())
    }, [ dispatch])
    
    return (
        <div>
            <Interface >
                <div className='willLanding'>
                    <div className='container'>
                        <div className='top'>
                        <div className='name' >Hi {loggedinUser?.data?.firstName} <img src={hiIcon} alt="" /> </div>
                            
                            <div className='second'>
                                <div className='title'>Welcome to PAC Trustees!</div>
                                <p className='text'> Sustaining Value From Generation to Generation</p>
                            </div>
                        </div>


                        <div className='will-content'>
                            <p className='text'>Kindly fill up the neccessary information by following the chain.</p>

                            <div className='card-session'>
                                <div className='row'>
                                    <div className='col-10'>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Interface>
        </div>
    )
}

export default WillLanding