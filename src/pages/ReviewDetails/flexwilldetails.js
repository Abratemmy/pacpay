import React, { useState } from 'react'
import "./willdetails.css"
import Interface from '../../components/flexwillinterface/interface'
import { MdArrowBackIosNew, MdOutlinePersonPin } from "react-icons/md"
import { useNavigate, NavLink } from 'react-router-dom';
import personal from "../../assets/flex-personal.png";
import executor from "../../assets/flex-executor.png";
import info from "../../assets/flex-info.png";
import assets from "../../assets/flex-assets.png"; import MainModal from '../../components/mainModal/MainModal';
;


function Flexwilldetails({ ispayment, setispayment }) {
    const navigate = useNavigate()
    const [buttonpopup, setbuttonpopup] = useState(false);

    const goToPaymentcontainer = (e) => {
        e.preventDefault()
        setispayment(true);
        navigate("/pac_flex_will_main")
    }
    return (
        <div>
            <Interface>
                <div className='review-details'>
                    <div className="top">
                        <span><NavLink to="/" className="review-nav">
                            <MdArrowBackIosNew className='icon' />
                            <MdArrowBackIosNew className='icon icon2' /></NavLink>
                        </span>

                        <div className='text'>Review Your Details</div>
                    </div>

                    <div className='review-container' >
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='content'>
                                        <div className='review-top-wrapper'>
                                            <span><img src={personal} alt="" /> </span>
                                            <div className='title'>
                                                Personal Information
                                            </div>
                                            <div className="edit">
                                                <button >Edit</button>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className='input-content'>
                                                    <label>Full  Name</label>
                                                    <div className='group'>
                                                        <span><MdOutlinePersonPin className="icon" /></span>
                                                        <div className='text'>Tolu Boluwatife</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className='input-content'>
                                                    <label>Date Of Birth</label>
                                                    <div className='group'>
                                                        <span><MdOutlinePersonPin className="icon" /></span>
                                                        <div className='text'>22/12/180</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className='input-content'>
                                                    <label>Phone Number</label>
                                                    <div className='group'>
                                                        <span><MdOutlinePersonPin className="icon" /></span>
                                                        <div className='text'>08047839202</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className='input-content'>
                                                    <label>City of residence</label>
                                                    <div className='group'>
                                                        <span><MdOutlinePersonPin className="icon" /></span>
                                                        <div className='text'>Lagos</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <div className='content content-executor'>
                                        <div className='review-top-wrapper'>
                                            <span><img src={executor} alt="" /> </span>
                                            <div className='title'>
                                                Executors
                                            </div>
                                            <div className="edit">
                                                <button >Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <div className='content content-asset'>
                                        <div className='review-top-wrapper'>
                                            <span><img src={assets} alt="" /> </span>
                                            <div className='title'>
                                                Assets
                                            </div>
                                            <div className="edit">
                                                <button >Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div className='nav-button'>
                            <button onClick={() => setbuttonpopup(true)}>Proceed</button>
                        </div>

                        <MainModal trigger={buttonpopup} setTrigger={setbuttonpopup}>
                            <div className='modalContent'>
                                <div className='title'>Confidentiality Clause</div>
                                <div className='text'>
                                    A verification link has been sent to your email, kindly verify with the link sent to you.
                                </div>

                                <div className='text'>
                                    Kindly accepts the terms above by getting started
                                </div>
                                <form onSubmit={goToPaymentcontainer}>
                                    <div className='navButtton'>
                                        <button type="submit" className="modal-nav" >Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </MainModal>
                    </div>
                </div>
            </Interface>
        </div>
    )
}

export default Flexwilldetails