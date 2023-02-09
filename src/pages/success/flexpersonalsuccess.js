import React from 'react';
import "./success.css";
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink } from 'react-router-dom';

function FlexPersonalSuccess() {
    return (
        <div>
            <div className='success-page'>
                <div className='top'>
                    <div className='content'>
                        <img src={Thumb} alt="" className='wow pulse' data-wow-duration="5s"  data-wow-offset="5"  data-wow-iteration="infinite" />
                        <div className='rectangle wow bounceInUp'>
                            <img src={Rectangle} alt="" />
                            <div className='text'>Great!</div>
                        </div>
                    </div>

                </div>

                <div className='container'>
                    <div className='bottom'>
                        <div className='title'>Congratulations!</div>
                        <p>You have completed the all stages of PERSONAL DETAILS!</p>

                        <div className='text'>Kindly continue with the button below</div>
                        <div className='general-btn'>
                            <NavLink to="/flex_will_executor_landing" className="general-navlink">Continue</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlexPersonalSuccess