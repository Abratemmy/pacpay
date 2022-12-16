import React, { useState } from 'react';
import "./flexwillproduct.css";
import Interface from '../../../components/flexwillinterface/interface';
import personal from "../../../assets/flex-personal.png";
import executor from "../../../assets/flex-executor.png";
import info from "../../../assets/flex-info.png";
import assets from "../../../assets/flex-assets.png";
import hiIcon from "../../../assets/hiIcon.png";
import { NavLink } from "react-router-dom";
import arrow2 from "../../../assets/Arrow2.png";
import Popup from '../../../components/Popup/popup';
import executorimg from "../../../assets/executorimg.png";
import emoji from "../../../assets/emoji.png";
import assetbg from "../../../assets/assetbg.png"

function Flexwillpropductmain() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup3, setButtonPopup3] = useState(false);

    const [assetbuttonPopup, setassetButtonPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonPopup3(true)
    }
    return (
        <div>
            <Interface>
                <div className='flexwillmain-page'>
                    <div className='top'>
                        <div className='name'>Hi Name <span><img src={hiIcon} alt="" /> </span></div>

                        <div className='right'>
                            <div className='title'>Welcome To PAC Trustee!</div>
                            <p>Sustaining Value From Generation to Generation</p>
                        </div>
                    </div>

                    <div className='text'>Kindly fill up the neccessary information by following the chain.</div>

                    <div className='bottom'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-5 col-md-5 col-sm-12' >
                                    <div className='content'>
                                        <NavLink to="/flex_will_personal_info/1" className="flexnav-link">
                                            <div className='card'>
                                                <span><img src={personal} alt="" /></span>
                                                <div className='name'>Personal Information</div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-12 ' >
                                    <div className='content'>
                                        <span className='arrow-span'><img src={arrow2} alt="" className='arrow arrow1' /></span>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-md-5 col-sm-12' >
                                    <div className='content'>
                                        <button className="flexnav-link" onClick={() => setButtonPopup(true)} style={{ background: "none" }}>
                                            <div className='card'>
                                                <span><img src={executor} alt="" /></span>
                                                <div className='name'>Executors</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>


                                <div className='col-lg-11 col-md-11 col-sm-12'></div>
                                <div className='col-lg-1 col-md-1 col-sm-12'>
                                    <div className='content'>
                                        <span className='arrow-span'><img src={arrow2} alt="" className='arrow arrow2' /></span>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-md-5 col-sm-12 order-lg-3' >
                                    <div className='content'>
                                        <button to="/" className="flexnav-link" onClick={() => setassetButtonPopup(true)} style={{ background: "none" }}><div className='card'>
                                            <span><img src={assets} alt="" /></span>
                                            <div className='name'>Asset</div>
                                        </div>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-12 order-lg-2'>
                                    <div className='content'>
                                        <span className='arrow-span'><img src={arrow2} alt="" className='arrow arrow3' /></span>
                                    </div>

                                </div>
                                <div className='col-lg-5 col-md-5 col-sm-12 order-lg-1'>
                                    <div className='content'>
                                        <NavLink to="/" className="flexnav-link"><div className='card'>
                                            <span><img src={info} alt="" />   </span>
                                            <div className='name'>Additional Information</div>
                                        </div>
                                        </NavLink>
                                    </div>
                                </div>

                            </div>
                            <div className=''>

                                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <div className='popup-container'>
                                        <div className="image-line"><img src={executorimg} alt="" /></div>

                                        <div className='popup-content'>
                                            <div className='text'>APPOINT YOUR EXECUTORS</div>
                                            <div className='button'>
                                                <button className='nav-link' onClick={() => setButtonPopup1(true)}><span>Get started</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>

                                <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                                    <div className='popup-container'>
                                        <div className='popup-content'>
                                            <div className='subtitle'>Who are Executors?</div>
                                            <div className='text'>
                                                The executors are the people you have chosen to carry out the directions of your Will. The Law requires that you choose a minimum of two persons aged at least 18 years and a maximum of four persons.
                                            </div>
                                            <div className='button'>
                                                <button className='nav-link' onClick={() => setButtonPopup2(true)}><span>Continue</span></button>
                                            </div>

                                            <p>Not sure how to proceed,</p>
                                            <div className='sub-nav'><NavLink to="/faqs" className="nav22">OPEN FAQs</NavLink></div>
                                        </div>
                                    </div>
                                </Popup>

                                <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                                    <div className='popup-container'>
                                        <div className='popup-content'>
                                            <div className='subtitle' style={{ fontSize: "15px" }}>EXECUTOR</div>
                                            <div className='smallest-text'>By checking the box below, you authorize the PAC team to act as your executor</div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="checkbox" id="PAC" />
                                                    <label for="PAC"> Select the PAC Trustees limited as your executor.</label>
                                                </div>

                                                <div className="form-group">
                                                    <input type="checkbox" id="personal" />
                                                    <label for="personal"> Assign your personal Executor</label>
                                                </div>

                                                <div className='button'>
                                                    <button type="submit" className='nav-link'><span>Continue</span></button>
                                                </div>
                                            </form>


                                            <p>Not sure how to proceed,</p>
                                            <div className='sub-nav'><NavLink to="/faqs" className="nav22">OPEN FAQs</NavLink></div>
                                        </div>
                                    </div>
                                </Popup>
                                <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
                                    <div className='popup-container'>
                                        <div className='popup-content'>
                                            <div className='subtitle' style={{ fontSize: "15px" }}>EXECUTOR</div>
                                            <div className="image-line"><img src={emoji} alt="" style={{ width: "50%" }} /></div>
                                            <div className='smallest-text'>By checking the box below, you authorize the PAC team to act as your executor</div>

                                            <div className='button' style={{ margin: "30px 0px" }}>
                                                <NavLink to="/executor_success" className='navlink' ><span>Complete</span></NavLink>
                                            </div>
                                            <p>Not sure how to proceed,</p>
                                            <div className='sub-nav'><NavLink to="/faqs" className="nav22">OPEN FAQs</NavLink></div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>


                            {/* this is assets popup */}
                            <Popup trigger={assetbuttonPopup} setTrigger={setassetButtonPopup}>
                                <div className='popup-container'>
                                    <div className="image-line"><img src={assetbg} alt="" /></div>

                                    <div className='popup-content'>
                                        <div className='text'>LET’S GET YOU STARTED WITH YOUR ASSETS!</div>
                                        <div className='button'>
                                            <NavLink to="/flex_will_assets" className='nav-link' ><span>Get started</span></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                        </div>

                    </div>
                </div>
            </Interface>
        </div>
    )
}

export default Flexwillpropductmain