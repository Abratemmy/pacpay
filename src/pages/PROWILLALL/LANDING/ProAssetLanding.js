import React, { useState } from 'react'
import WillLanding from '../../../components/willLanding/willLanding';
import { BsArrowRight, BsArrowDown, BsArrowLeft } from "react-icons/bs";
import asset from "../../../assets/flex-assets.png";
import executor from "../../../assets/flex-assets.png";
import info from "../../../assets/flex-info.png";
import personal from "../../../assets/flex-personal.png"
import { NavLink } from 'react-router-dom';
import assetbg from "../../../assets/assetbg.png";
import MainModal from '../../../components/mainModal/MainModal';


function ProAssetLanding() {
    const [buttonpopup, setbuttonpopup] = useState(false)
    return (
        <div>
            <WillLanding >
                <div className='will-landingpage'>
                    <div className='col-lg-5 col-md-4 col-sm-12'>
                        <NavLink to="/pro_personalinfo/1" className="navlink disable">
                            <div className="card done">
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
                            <div className="card done">
                                <span><img src={executor} alt="" /></span>
                                <p>Executors</p>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className='will-landingpage-2'>
                    <div className='col-lg-2 col-md-2 col-sm-12'>
                        <div className="arrow">
                            <BsArrowDown className="icon icon2" />
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-4 col-sm-12 order-lg-3 order-md-3'>
                        <button className="navlink" style={{ width: "100%", border: 'none', background: "none" }}
                            onClick={() => setbuttonpopup(true)}
                        >
                            <div className="card active">
                                <span><img src={asset} alt="" /></span>
                                <p>Assets</p>
                            </div>
                        </button>
                    </div>
                </div>
            </WillLanding>

            <MainModal trigger={buttonpopup} setTrigger={setbuttonpopup}>
                <div className='modalContent'>
                    <div className='modalimage'><img src={assetbg} alt="" style={{ width: "60%" }} /> </div>
                    <div className='title'>LET’S GET YOU STARTED WITH YOUR ASSETS!</div>

                    <div className='navButtton' style={{ marginBottom: "30px" }}>
                        <NavLink to="/pro_assets" className="modal-nav" >Get Started</NavLink>
                    </div>
                </div>
            </MainModal>
        </div>
    )
}

export default ProAssetLanding