import React from 'react';
import "./success.css";
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink } from 'react-router-dom';

function FlexAssetsuccess() {
    return (
        <div>
            <div className='success-page'>
                <div className='top'>
                    <div className='content'>
                        <img src={Thumb} alt="" />
                        <div className='rectangle'>
                            <img src={Rectangle} alt="" />
                            <div className='text'>Fantastic!</div>
                        </div>
                    </div>

                </div>

                <div className='container'>
                    <div className='bottom'>
                        <div className='title'>Congratulations!</div>
                        <p>You have completed the all stages of ASSETS!</p>

                        <div className='text'>Kindly continue with the button below</div>
                        <div className='general-btn'>
                            <NavLink to="/flex_review_details" className="general-navlink">proceed</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlexAssetsuccess