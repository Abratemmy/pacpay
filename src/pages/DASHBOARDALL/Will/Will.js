import React from 'react';
import DashboardInterface from '../dashboardInterface';
import Navbar from '../Navbar/Navbar';
import "./will.css";
import icon1 from "../../../assets/flexwillicon1.png";
import icon2 from "../../../assets/flexwillixon2.png";
import willimage from "../../../assets/willimage.png"
import { NavLink } from 'react-router-dom';

function Will() {
    return (
        <div>
            <DashboardInterface>
                <Navbar name="Will Package" />

                <div className='will'>
                    <div className='first-session'>
                        <div className='top'>
                            <span><img src={willimage} alt="image" /></span>

                            <div className='subtitle'>You’ve made your payment for PAC WILL package!</div>
                            <p>Click on the link below to download your receipt</p>

                            <div className='button'><button>Downlaod</button> </div>
                        </div>
                    </div>
                    <hr />

                    <div className='other'>
                        <div className='title'>Other Will Package</div>

                        <div className='row gy-4'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <NavLink to="" className="will-nav">
                                    <div className='will-content'>
                                        <div className='image'><img src={icon1} alt="" /></div>
                                        <div className='text'>PAC Pro Will
                                            <span>Kindly select the appropriate will of your choice</span>
                                        </div>

                                    </div>
                                </NavLink>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <NavLink to="" className="will-nav">
                                    <div className='will-content will-content1'>
                                        <div className='image'><img src={icon2} alt="" /></div>
                                        <div className='text'>PAC Compact Will
                                            <span>Kindly select the appropriate will of your choice</span>
                                        </div>

                                    </div>
                                </NavLink>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <NavLink to="" className="will-nav">
                                    <div className='will-content '>
                                        <div className='image'><img src={icon1} alt="" /></div>
                                        <div className='text'>PAC Testamentary Trust
                                            <span>Kindly select the appropriate will of your choice</span>
                                        </div>

                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardInterface>
        </div>
    )
}

export default Will