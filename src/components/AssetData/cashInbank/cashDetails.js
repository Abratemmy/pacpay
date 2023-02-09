import React, { useState } from 'react'
import assetrsa from "../../../assets/assetrsa.png";
import assetcash from "../../../assets/assetcash.png";
import { MdArrowBackIosNew } from 'react-icons/md';
import { BsPersonSquare } from "react-icons/bs"

function CashDetails({ editRsa, editRsaFunction, assetData }) {

    const [showToggle, setshowToggle] = useState(2);
    const toggleTab = (index) => {
        setshowToggle(index);
    }

    return (
        <div>
            <div className='distributeAssets'>
                <div className="bloc-tabs disable-bloc">
                    <div className={showToggle === 1 ? "tabs active-tabs" : "tabs disable"} onClick={() => toggleTab(1)}><span><img src={assetrsa} alt="" /> </span>RSA</div>
                    <div className={showToggle === 2 ? "tabs active-tabs " : "tabs "} onClick={() => toggleTab(2)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                    <div className={showToggle === 3 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(3)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                    <div className={showToggle === 4 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(4)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                    <div className={showToggle === 5 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(5)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                    <div className={showToggle === 6 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(6)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                    <div className={showToggle === 7 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(7)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                </div>

                <div className="content-tabs" style={{ marginTop: "40px" }}>
                    <div className={showToggle === 1 ? "content active-content" : "content"}>
                        <div className='distributeasset-content'>

                            <div className='text'>
                                <span><img src={assetrsa} alt="" /></span>
                                <div>
                                    <div className='title'>RSA(Retirement Savings Accounts)</div>
                                    <p>{assetData?.rsa?.penNumber}</p>
                                    <p>You have completed the first stage of assets </p>
                                </div>
                            </div>

                            <div className='action'>
                                <span onClick={editRsaFunction}>Edit</span>
                            </div>
                        </div>

                    </div>

                    <div className={showToggle === 2 ? "content active-content" : "content"}>

                        cash in bank
                    </div>
                </div>
            </div>

            {/* {editRsa && (
                <div className=''>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='list-input'>
                                <label>Pension Administrator</label>
                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span className='textdisplay'>{assetData?.rsa?.pfaAdmin}</span></div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='list-input'>
                                <label>Pension Number</label>
                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span className='textdisplay'>{assetData?.rsa?.penNumber}</span></div>
                            </div>
                        </div>
                    </div>

                    <span className='general-btn'>Updating</span>

                    <div className=''>
                        {assetData?.rsa?.beneficiaries.map((beneficiary, index) => {
                            <div className='list-input' key={index}>
                                <label>{beneficiary.fullName}</label>
                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span className='textdisplay'>{beneficiary.percentage}</span></div>
                            </div>
                        })}
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default CashDetails