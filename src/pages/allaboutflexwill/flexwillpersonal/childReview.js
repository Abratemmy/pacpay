import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Interface from '../../../components/flexwillinterface/interface'
import { MdArrowBackIosNew } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import MainModal from '../../../components/mainModal/MainModal';

function ChildReview() {
    const [buttonpopup, setbuttonpopup] = useState(false);
    return (
        <div>

            <Interface>
                <div className='Personal-container container'>
                    <div className="top">
                        <span><NavLink to="/flex_will_personal_info/3" className="personal-nav">
                            <MdArrowBackIosNew className='icon' />
                            <MdArrowBackIosNew className='icon icon2' /></NavLink>
                            <span className='top-title'>Childs' Lists</span>
                        </span>


                        <div className='tiny-text'>You have access to add multiple witnesses by just clicking the plus button</div>
                    </div>

                    <div className="Personal-list-content">
                        <div className='container'>
                            <div style={{ position: "relative" }}>
                                <div className='list-content-top'>
                                    <div className='image'>TB</div>
                                    <div className='name'>Tolu Boluwatife <span>Mrs</span></div>
                                </div>

                                <NavLink to="/" className="nav-btn">Edit</NavLink>
                            </div>

                            <div className='row list-content-row'>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='list-input'>
                                        <label>Full Name</label>
                                        <div className="details"><BsPersonSquare className='icon' /> <span>Tolu Boluwatife</span></div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='list-input'>
                                        <label>Date Of Birth</label>
                                        <div className="details"><BsPersonSquare className='icon' /> <span>22/44/.455</span></div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='list-input'>
                                        <label>Phone Number</label>
                                        <div className="details"><BsPersonSquare className='icon' /> <span>094004455555</span></div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='list-input'>
                                        <label>City Of Residence</label>
                                        <div className="details"><BsPersonSquare className='icon' /> <span>Lagos</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Personal-list-content">
                        <div className='container'>
                            <div style={{ position: "relative" }}>
                                <div className='list-content-top'>
                                    <div className='image image1'>TB</div>
                                    <div className='name'>Tolu Boluwatife <span>Mrs</span></div>
                                </div>

                                <NavLink to="/" className="nav-btn nav-btn1">Edit</NavLink>
                            </div>

                            <div className='row list-content-row'>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='list-input'>
                                        <label>Full Name</label>
                                        <div className="details"><BsPersonSquare className='icon' /> <span>Tolu Boluwatife</span></div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='list-input'>
                                        <label>Date Of Birth</label>
                                        <div className="details"><BsPersonSquare className='icon' /> <span>22/44/.455</span></div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='list-input'>
                                        <label>Phone Number</label>
                                        <div className="details"><BsPersonSquare className='icon' /> <span>094004455555</span></div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='list-input'>
                                        <label>City Of Residence</label>
                                        <div className="details"><BsPersonSquare className='icon' /> <span>Lagos</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='Personal-list-button'>
                        <NavLink to="/flex_will_personal_info/3" className="nav-link">Add another spouse</NavLink>
                        <button onClick={() => setbuttonpopup(true)} className="nav-link nav-link1" style={{ border: "none" }}>Save and Proceed</button>
                    </div>


                    <MainModal trigger={buttonpopup} setTrigger={setbuttonpopup}>
                        <div className='modalContent'>
                            <div className='text'>In the event, that spouse predeceases before time, financial and physical guardians of the children are required to be appointed to render financial and physical advice and hold all real estate property.
                                They shall have custody of the children during their joint minority.
                            </div>
                            <div className='navButtton'>
                                <NavLink to="/flex_will_personal_info/4" className="nav-link" style={{ background: "var(--blueColor)", width: "220px", margin: "auto", color: "#fff", borderRadius: "10px", padding: "8px" }}>Continue</NavLink>
                            </div>

                        </div>
                    </MainModal>
                </div>
            </Interface>
        </div>
    )
}

export default ChildReview