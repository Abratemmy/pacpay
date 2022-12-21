import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface';
import { NavLink } from 'react-router-dom';
import assetrsa from "../../../../assets/assetrsa.png";
import assetcash from "../../../../assets/assetcash.png"
import asset3 from "../../../../assets/asset3.png";
import asset4 from "../../../../assets/asset4.png";
import asset5 from "../../../../assets/asset5.png";
import asset6 from "../../../../assets/asset6.png";
import line from "../../../../assets/line.png"
import happy from "../../../../assets/happy.png"

function AssetsCash() {
    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [assetmodal, setassetmodal] = useState(false);
    const assetToggle = () => {
        setassetmodal(!assetmodal)
    }
    return (
        <div>
            <Interface>
                <AssetInterface name="Assets" link="pro_distribute_assets2" />

                <div className='listofasset'>
                    <div className=''>
                        <div className='toptext'>Below are the available asset you have</div>


                        <div className='bloc-design'>
                            <div className="bloc-tabs disable-bloc">
                                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs disable done"} onClick={() => toggleTab(1)}><span><img src={assetrsa} alt="" /> </span>RSA</div>
                                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                                <div className={toggleState === 3 ? "tabs active-tabs " : "tabs disable"} onClick={() => toggleTab(3)}><span><img src={asset3} alt="" /></span> Real Estate</div>
                                <div className={toggleState === 4 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(4)}><span><img src={asset4} alt="" /></span> Shares</div>
                                <div className={toggleState === 5 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(5)}><span><img src={asset5} alt="" /></span> Life Insurance</div>
                                <div className={toggleState === 6 ? "tabs active-tabs disable" : "tabs disable"} onClick={() => toggleTab(6)}><span><img src={asset6} alt="" /></span> Investment&Personal</div>
                            </div>
                        </div>
                        <div className='distributeAssets'>
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
                                        <NavLink to="/pro_cash_form" className="asset-nav1" style={{ border: "none" }}>
                                            Add Cash in Bank
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


                                    {
                                        assetmodal ? <div className='button' style={{ textAlign: "right", paddingTop: "60px", marginTop: "30px" }}>
                                            <button className="asset-nav1 disable-nav" style={{ border: "none" }}>
                                                Add Real Estate
                                            </button>
                                        </div> :
                                            <div className='button' style={{ textAlign: "right", paddingTop: "60px", marginTop: "30px" }}>
                                                <button onClick={assetToggle} className="asset-nav1" style={{ border: "none" }}>
                                                    Add Real Estate
                                                </button>
                                            </div>
                                    }

                                </div>



                            </div>
                        </div>
                    </div>

                    {assetmodal && (
                        <div className="personal-modal">
                            <div className="personal-modalContainer">
                                <div className="line"><img src={line} alt="" /></div>

                                <div className="close"><button onClick={() => setassetmodal(false)}>X</button></div>

                                <div className="emoji"><img src={happy} alt="" /></div>

                                <div className="title">WAIT!</div>
                                <div className="text">Do you want to upload another bank details? </div>

                                <div className="personalmodal-btn">
                                    <NavLink to="/pro_cash_form" className="first assetModal-nav"
                                    >Yes</NavLink>
                                    <NavLink to="/pro_real_estate_form" className="second assetModal-nav"

                                    >No</NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Interface>
        </div>
    )
}

export default AssetsCash