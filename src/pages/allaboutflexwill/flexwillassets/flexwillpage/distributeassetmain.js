import React, { useState } from 'react'
import Interface from '../../../../components/flexwillinterface/interface'
import Topasset from '../interfaceasset/topasset';
import assetrsa from "../../../../assets/assetrsa.png";
import assetcash from "../../../../assets/assetcash.png";
import { NavLink } from 'react-router-dom';

function Distributeassetmain() {
    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className=''>
            <Interface>
                <Topasset name="Distribute Assets" link="flex_will_distribute_cash_assets1" />
                <div className='distribute-2' style={{ position: "relative" }}>
                    <div className='text'>Below are the available asset you have</div>

                    <div className='distributeAssets'>
                        <div className="bloc-tabs">
                            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}><span><img src={assetrsa} alt="" /> </span>RSA</div>
                            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                        </div>

                        <div className="content-tabs" style={{ marginTop: "40px" }}>
                            <div className={toggleState === 1 ? "content active-content" : "content"}>
                                <div className='distributeasset-content'>

                                    <div className='text'>
                                        <span><img src={assetrsa} alt="" /></span>
                                        <div>
                                            <div className='title'>RSA(Retirement Savings Accounts)</div>
                                            <p>You have completed the first stage of assets You have completed the first stage of assets</p>
                                        </div>
                                    </div>

                                    <div className='action'>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>

                                <div className='button' style={{ textAlign: "right", paddingTop: "60px", marginTop: "30px" }}>
                                    <NavLink to="/flex_assets_success" className="asset-nav1" style={{ border: "none" }}>
                                        Complete
                                    </NavLink>
                                </div>
                            </div>

                            <div className={toggleState === 2 ? "content active-content" : "content"}>
                                <div className='distributeasset-content'>

                                    <div className='text'>
                                        <span><img src={assetcash} alt="" /></span>
                                        <div>
                                            <div className='title'>First Bank Of Nigeria</div>
                                            <p>You have completed the first stage of assets You have completed the first stage of assets</p>
                                        </div>
                                    </div>

                                    <div className='action'>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>

                                <div className='button' style={{ textAlign: "right", paddingTop: "60px", marginTop: "30px" }}>
                                    <NavLink to="/flex_assets_success" className="asset-nav1" style={{ border: "none" }}>
                                        Complete
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

export default Distributeassetmain