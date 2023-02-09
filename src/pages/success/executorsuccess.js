import React, {useState} from 'react';
import "./success.css";
import Thumb from "../../assets/Thumb.png";
import Rectangle from "../../assets/Rectangle.png"
import { NavLink, useNavigate } from 'react-router-dom';

function Executorsuccess() {
    const checkRoute = JSON.parse(localStorage.getItem("fromDashboard"))
    // const goBackSpouse = JSON.parse(localStorage.getItem("SpouseBackBtn"))

    const navigate = useNavigate()
    const goToNavigate = () => {
        if(checkRoute === "true"){
            navigate("/dashboard")
        } else{
            navigate("/flex_will_assets_landing")
        }
    }
    

    return (
        <div>
            <div className='success-page'>
                <div className='top'>
                    <div className='content'>
                        <img src={Thumb} alt="" />
                        <div className='rectangle'>
                            <img src={Rectangle} alt="" />
                            <div className='text'>Great!</div>
                        </div>
                    </div>

                </div>

                <div className='container'>
                    <div className='bottom'>
                        <div className='title'>Congratulations!</div>
                        <p>You have completed the all stages of executors!</p>

                        <div className='text'>Kindly continue with the button below</div>
                        <div className=''>
                            <button onClick={goToNavigate} className="general-btn">proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Executorsuccess