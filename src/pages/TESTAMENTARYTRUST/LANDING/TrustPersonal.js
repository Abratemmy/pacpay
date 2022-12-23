import React from 'react'
import WillLanding from '../../../components/willLanding/willLanding';
import { BsArrowRight } from "react-icons/bs";
import executor from "../../../assets/flex-assets.png";
import personal from "../../../assets/flex-personal.png"
import { NavLink } from 'react-router-dom';

function TrustPersonalLanding() {
    return (
        <div>
            <WillLanding >
                <div className='row'>
                    <div className='col-lg-5 col-md-4 col-sm-12'>
                        <NavLink to="/trust_personalinfo/1" className="navlink ">
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

                </div>
            </WillLanding>
        </div>
    )
}

export default TrustPersonalLanding