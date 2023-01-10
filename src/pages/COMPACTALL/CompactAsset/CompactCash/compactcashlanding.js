import React from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface';
import { MdOutlinePersonPin, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { NavLink } from 'react-router-dom';
import asset1 from "../../../../assets/asset1.png";
import asset2 from "../../../../assets/asset2.png";

function Compactcashlanding() {
    return (
        <div>
            <Interface>
                <AssetInterface name="Cash in Bank" link="compact_asset_rsa" />

                <div className='Assets-container proassets-page'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='asset-content' style={{ padding: "20px 0px" }}>
                                <label style={{ color: "#7c848a " }}>Type of Asset</label>
                                <div class="inner-addon left-addon assetType disable">
                                    <i class="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                    <span >CASH IN BANK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='asset-list'>
                        <div className='row' style={{ marginTop: "60px" }}>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <NavLink to="/compact_cash_form" className="asset-nav">
                                    <div className='asset-content'>
                                        <div className="first">
                                            <span><img src={asset1} alt="" width="50%" /></span>
                                            <p>Add Nigeria Bank</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight className="icon" />
                                    </div>
                                </NavLink>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <NavLink to="/foreign_compact_cashform" className="asset-nav ">
                                    <div className='asset-content'>
                                        <div className="first">
                                            <span><img src={asset2} alt="" width="50%" /></span>
                                            <p>Add Foreign Nank</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight className="icon" />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Interface>
        </div>
    )
}

export default Compactcashlanding