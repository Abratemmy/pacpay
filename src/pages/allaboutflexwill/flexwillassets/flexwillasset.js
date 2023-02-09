import React from 'react';
import "./flexwillasset.css"
import Interface from '../../../components/flexwillinterface/interface'
import Topasset from './interfaceasset/topasset';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import asset1 from "../../../assets/asset1.png";
import asset2 from "../../../assets/asset2.png";
import { NavLink } from 'react-router-dom';

function Flexwillasset() {
    return (
        <div>
            <Interface>
                <Topasset name="Assets" />
                <div className='flexwillasset'>

                    <div className='text'>According to the Will Product you picked, kindly fill up the neccessary information below</div>

                    <div className='subtitle'>List Of Your Assets</div>

                    <div className='card-content'>
                        <div className='card'>
                            <NavLink to="/flexasset/1" className="asset-nav">
                                <div className='content'>
                                    <span><img src={asset1} alt="" /> </span>
                                    <p>RSA (Retirement Savings <br /> Account)</p>
                                    <MdOutlineKeyboardArrowRight className="icon" />
                                </div>
                            </NavLink>
                        </div>

                        <div className='card'>
                            <div className='content content-disable'>
                                <span><img src={asset2} alt="" /> </span>
                                <p>Cash In Bank</p>
                                <MdOutlineKeyboardArrowRight className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </Interface>
        </div>
    )
}

export default Flexwillasset