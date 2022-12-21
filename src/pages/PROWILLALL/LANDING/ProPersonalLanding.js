import React from 'react'
import WillLanding from '../../../components/willLanding/willLanding';
import { BsArrowRight, BsArrowDown, BsArrowLeft } from "react-icons/bs";
import asset from "../../../assets/flex-assets.png";
import executor from "../../../assets/flex-assets.png";
import info from "../../../assets/flex-info.png";
import personal from "../../../assets/flex-personal.png"
import { NavLink } from 'react-router-dom';

function ProPersonalLanding() {
    return (
        <div>
            <WillLanding >
                <div className='row'>
                    <div className='col-lg-5 col-md-4 col-sm-12'>
                        <NavLink to="/pro_personalinfo/1" className="navlink ">
                            <div className="card active">
                                <span><img src={personal} alt="" /></span>
                                <p>Personal Information</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-12'>
                        <div className="arrow">
                            <BsArrowRight className="icon icon1" />
                        </div>
                    </div>

                    <div className='col-lg-5 col-md-4 col-sm-12'>
                        <NavLink to="/pro_executor_landing" className="navlink disable">
                            <div className="card ">
                                <span><img src={executor} alt="" /></span>
                                <p>Executors</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-lg-10 col-md-10 col-sm-12'></div>
                    <div className='col-lg-2 col-md-2 col-sm-12'>
                        <div className="arrow">
                            <BsArrowDown className="icon icon2" />
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-4 col-sm-12 order-lg-3 order-md-3'>
                        <NavLink to="/pro_assets" className="navlink disable">
                            <div className="card ">
                                <span><img src={asset} alt="" /></span>
                                <p>Assets</p>
                            </div>
                        </NavLink>
                    </div>

                    <div className='col-lg-2 col-md-2 col-sm-12 order-lg-2 order-md-2'>
                        <div className="arrow">
                            <BsArrowLeft className="icon icon3" />
                        </div>
                    </div>

                    <div className='col-lg-5 col-md-4 col-sm-12 order-lg-1 order-md-1'>
                        <div className="card disable">
                            <span><img src={info} alt="" /></span>
                            <p>Additional</p>
                        </div>
                    </div>
                </div>
            </WillLanding>
        </div>
    )
}

export default ProPersonalLanding