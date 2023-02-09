import React from 'react'
import { MdOutlinePersonPin, MdOutlineKeyboardArrowRight, MdArrowBackIosNew } from "react-icons/md"
import { NavLink } from 'react-router-dom';
import asset1 from "../../../assets/asset1.png";
import asset2 from "../../../assets/asset2.png";

function cashlanding({ backArrow, goToNigeriaBank }) {
    return (
        <div>
            <div className='Assets-container'>
                <div className='top'>
                    <span><span onClick={backArrow} className="personal-nav">
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' /></span>
                    </span>

                    <div className='text'>Cash In Bank</div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='asset-content' >
                            <label style={{ color: "#7c848a " }}>Type of Asset</label>
                            <div class="inner-addon left-addon assetType disable">
                                <i class="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                <span >CASH IN BANK</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='newasset-list'>
                    <div className='row' style={{ marginTop: "60px" }}>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <span className="asset-nav" onClick={goToNigeriaBank}>
                                <div className="first">
                                    <span><img src={asset1} alt="" width="50%" /></span>
                                    <div className='text'>Add Nigeria Bank</div>
                                </div>
                                <MdOutlineKeyboardArrowRight className="icon" />
                            </span>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <span className="asset-nav ">
                                <div className="first">
                                    <span><img src={asset2} alt="" width="50%" /></span>
                                    <div className='text'>Add Foreign Nank</div>
                                </div>
                                <MdOutlineKeyboardArrowRight className="icon" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cashlanding