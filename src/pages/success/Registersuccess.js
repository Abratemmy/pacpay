import React from 'react';
import "./success.css";
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink } from 'react-router-dom';

function Registersuccess() {
    return (
        <div className='success-page'>
            <div className='top'>
                <div className='content'>
                    <img src={Thumb} alt="" />
                    <div className='rectangle'>
                        <img src={Rectangle} alt="" />
                        <div className='text'>Awesome!</div>
                    </div>
                </div>

            </div>

            <div className='container'>
                <div className='bottom'>
                    <div className='title'>Congratulations!</div>
                    <p>You have successfully created an account</p>

                    <div className='text'>Kindly continue with the button below</div>
                    <NavLink to="/product_landing" className="nav-link">proceed</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Registersuccess