import React from 'react'
import AssetInterface from '../../../components/assetsInterface/AssetInterface'
import Interface from '../../../components/flexwillinterface/interface';
import asset1 from "../../../assets/asset1.png";
import asset2 from "../../../assets/asset2.png";
import asset3 from "../../../assets/asset3.png";
import asset4 from "../../../assets/asset4.png";
import asset5 from "../../../assets/asset5.png";
import asset6 from "../../../assets/asset6.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./proasset.css"
import { NavLink } from 'react-router-dom';

function ProAssets() {
    return (
        <div>
            <Interface>
                <AssetInterface name="Assets" link="pro_assets_landing" />
                <div className='proassets-page'>
                    <p>According to the Will Product you picked, kindly fill up the all information below</p>

                    <div className='asset-list'>
                        <div className='title'>Lists of your Assets</div>

                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <NavLink to="/pro_rsa_form" className="asset-nav">
                                        <div className='asset-content'>
                                            <div className="first">
                                                <span><img src={asset1} alt="" width="50%" /></span>
                                                <p>RSA(Retirement Savings <br /> Account)</p>
                                            </div>
                                            <MdOutlineKeyboardArrowRight className="icon" />
                                        </div>
                                    </NavLink>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <NavLink to="" className="asset-nav disable">
                                        <div className='asset-content'>
                                            <div className="first">
                                                <span><img src={asset2} alt="" width="50%" /></span>
                                                <p>Cash in Bank</p>
                                            </div>
                                            <MdOutlineKeyboardArrowRight className="icon" />
                                        </div>
                                    </NavLink>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <NavLink to="" className="asset-nav disable">
                                        <div className='asset-content'>
                                            <div className="first">
                                                <span><img src={asset3} alt="" /></span>
                                                <p>Real Estate</p>
                                            </div>
                                            <MdOutlineKeyboardArrowRight className="icon" />
                                        </div>
                                    </NavLink>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <NavLink to="" className="asset-nav disable">
                                        <div className='asset-content'>
                                            <div className="first">
                                                <span><img src={asset4} alt="" /></span>
                                                <p>Shares</p>
                                            </div>
                                            <MdOutlineKeyboardArrowRight className="icon" />
                                        </div>
                                    </NavLink>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <NavLink to="" className="asset-nav disable">
                                        <div className='asset-content'>
                                            <div className="first">
                                                <span><img src={asset5} alt="" /></span>
                                                <p>Life Insurance</p>
                                            </div>
                                            <MdOutlineKeyboardArrowRight className="icon" />
                                        </div>
                                    </NavLink>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <NavLink to="" className="asset-nav disable">
                                        <div className='asset-content'>
                                            <div className="first">
                                                <span><img src={asset6} alt="" /></span>
                                                <p>Investment & Personal</p>
                                            </div>
                                            <MdOutlineKeyboardArrowRight className="icon" />
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Interface>
        </div>
    )
}

export default ProAssets