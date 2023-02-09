import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import MainModal from '../../../components/mainModal/MainModal';

function CompactChildReview( {setToggleState, addAnotherChild, reviewNext, childlist}) {
    const [buttonpopup, setbuttonpopup] = useState(false);
    return (
        <div>

                <div className='Personal-container container'>
                    <div className="top">
                        <span><button onClick={setToggleState} className="personal-nav">
                            <MdArrowBackIosNew className='icon' />
                            <MdArrowBackIosNew className='icon icon2' /></button>
                            <span className='top-title'>Childs' Lists</span>
                        </span>


                        <div className='tiny-text'>You have access to add multiple witnesses by just clicking the plus button</div>
                    </div>

                    <div className="">
                        <div className='container'>

                        {childlist?.children?.map((children, index)=>{
                            return(
                                <div key={index} style={{position:"relative"}} className="Personal-list-content">
                                    <div className='list-content-top'>
                                        <div className={(index % 2) ? 'even image': 'image'}>{children.fullName.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}</div>
                                        <div className='name'>{children.fullName} <span>{children.title}</span></div>
                                    </div>

                                    <button onClick={setToggleState} className="nav-btn" style={{border: "none"}}>Edit</button>
                                    
                                    <div className='row list-content-row' style={{position:"relative"}}>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Date Of Birth</label>
                                                <div className="details"><BsPersonSquare className='icon' /> <span>{children.dateOfBirth}</span></div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Phone number</label>
                                                <div className="details"><BsPersonSquare className='icon' /> <span>{children.mobile}</span></div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Gender</label>
                                                <div className="details"><BsPersonSquare className='icon' /> <span>{children.gender}</span></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12' style={{position:"relative"}}>
                                            <div className='list-input'>
                                                <label>Contact Address</label>
                                                <div className="details"><BsPersonSquare className='icon' /> <span>{children.contactAddress}</span></div>
                                            </div>
                                           
                                        </div>
                                        <div className='blur'>
                                            </div>
 
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    </div>




                    <div className='Personal-list-button'>
                        <button onClick={addAnotherChild} className="general-btn">Add another child</ button>
                        <button onClick={reviewNext} className="general-btn general-btn1" style={{ border: "none" }}>Save and Proceed</button>
                    </div>


                    {/* <MainModal trigger={buttonpopup} setTrigger={setbuttonpopup}>
                        <div className='modalContent'>
                            <div className='text'>In the event, that spouse predeceases before time, financial and physical guardians of the children are required to be appointed to render financial and physical advice and hold all real estate property.
                                They shall have custody of the children during their joint minority.
                            </div>
                            <div className='navButtton'>
                                <button onClick={reviewNext} className="general-btn" style={{ background: "var(--blueColor)", width: "220px", margin: "auto", color: "#fff", borderRadius: "10px", padding: "8px" }}>Continue</button>
                            </div>

                        </div>
                    </MainModal> */}
                </div>

        </div>
    )
}

export default CompactChildReview