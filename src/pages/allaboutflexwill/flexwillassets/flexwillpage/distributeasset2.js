import React, { useState } from 'react'
import Interface from '../../../../components/flexwillinterface/interface'
import Topasset from '../interfaceasset/topasset';
import assetrsa from "../../../../assets/assetrsa.png";
import assetcash from "../../../../assets/assetcash.png";
import { MdArrowBackIosNew } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Distributeasset2({ setToggleState, editRsa }) {
    const [showToggle, setshowToggle] = useState(1);
    const toggleTab = (index) => {
        setshowToggle(index);
    }
    return (
        <div className=''>
            <div className='distribute-2'>
                <div className='top'>
                    <span className="personal-nav" onClick={setToggleState}>
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' />
                    </span>

                    <div className='text'>Below are the available asset you have</div>
                </div>


                <div className='distributeAssets'>
                    <div className="bloc-tabs disable-bloc">
                        <div className={showToggle === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}><span><img src={assetrsa} alt="" /> </span>RSA</div>
                        <div className={showToggle === 2 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(2)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                    </div>

                    <div className="content-tabs" style={{ marginTop: "40px" }}>
                        <div className={showToggle === 1 ? "content active-content" : "content"}>
                            <div className='distributeasset-content'>

                                <div className='text'>
                                    <span><img src={assetrsa} alt="" /></span>
                                    <div>
                                        <div className='title'>RSA(Retirement Savings Accounts)</div>
                                        <p>You have completed the first stage of assets </p>
                                    </div>
                                </div>

                                <div className='action'>
                                    <span onClick={editRsa}>Edit</span>
                                </div>
                            </div>

                        </div>

                        <div className={showToggle === 2 ? "content active-content" : "content"}>

                            cash in bank
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Distributeasset2