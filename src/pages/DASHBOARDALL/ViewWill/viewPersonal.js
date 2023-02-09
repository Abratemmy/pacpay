import React, { useState, useEffect } from 'react'
import DashboardInterface from '../dashboardInterface'
import Navbar from '../Navbar/Navbar';
import "./viewpersonal.css";
import { useDispatch, useSelector } from 'react-redux';
import { getUserWill } from '../../actions/auth';
import { BsPersonSquare } from "react-icons/bs";
import moment from "moment";
import { NavLink } from 'react-router-dom';


function ViewPersonal() {
    const dispatch = useDispatch();
    const will = useSelector((state) => state.willReducer);
    const willPersonal = will?.data?.personalInformation


    console.log("get products", will)

    useEffect(() => {
        dispatch(getUserWill())
    }, [dispatch])


    return (
        <div>
            <DashboardInterface>
                {!will?.data ? (
                    <div className="will-loading" style={{ paddingBottom: "30px", textAlign: "center", margin: "40px 0px", color: "green" }}>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                ) : (
                    <><Navbar name="Dashboard" />

                        <div className='viewPersonal'>
                            <div className='subtitle'>Personal Information</div>

                            <div className='details'>
                                <div className='top'>
                                    <div className='image'>{willPersonal.firstName.charAt(0)}{willPersonal.lastName.charAt(0)}</div>
                                    <div className='name'>{willPersonal.firstName} {willPersonal.lastName} <span>Account verified</span></div>
                                </div>


                                <div className='otherDetails'>
                                    <div className='viewContent'>
                                        <div className='label'>Phone Number</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{willPersonal.mobile}</div>
                                        </div>
                                    </div>

                                    <div className='viewContent'>
                                        <div className='label'>Date of Birth</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{moment(willPersonal.dateOfBirth).format("DD")} - {moment(willPersonal.dateOfBirth).format("MM")} - {moment(willPersonal.dateOfBirth).format("YYYY")}</div>
                                        </div>
                                    </div>

                                </div>

                                <div className='otherDetails'>
                                    <div className='viewContent'>
                                        <div className='label'>MiddleName</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{willPersonal.middleName}</div>
                                        </div>
                                    </div>

                                    <div className='viewContent'>
                                        <div className='label'>Contact Address</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{willPersonal.contactAddress}</div>
                                        </div>
                                    </div>

                                </div>

                                <div className='otherDetails'>
                                    <div className='viewContent'>
                                        <div className='label'>Marital Status</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{willPersonal.maritalStatus}</div>
                                        </div>
                                    </div>

                                    <div className='viewContent'>
                                        <div className='label'>Gender</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{willPersonal.gender}</div>
                                        </div>
                                    </div>

                                </div>

                                <div className='otherDetails'>
                                    <div className='viewContent'>
                                        <div className='label'>Nationality</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{willPersonal.nationality}</div>
                                        </div>
                                    </div>

                                    <div className='viewContent'>
                                        <div className='label'>State of Origin</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{willPersonal.stateOfOrigin}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* spouse code below */}
                            <div className='wrapper'>
                                {willPersonal.spouse.length === 1 ? <div className='title'>Spouse</div> :
                                    <div className='title'>Spouses</div>
                                }
                                {willPersonal.spouse.map((spouse, index) => {
                                    return (
                                        <div className='details'>
                                            <div className='top'>
                                                <div className={(index % 2) ? 'even image' : 'image'}>
                                                    {spouse.fullName.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}
                                                </div>
                                                <div className='name'>{spouse.fullName} </div>
                                            </div>

                                            <div className='otherDetails'>
                                                <div className='viewContent'>
                                                    <div className='label'>Phone Number</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <div className='name'>{spouse.mobile}</div>
                                                    </div>
                                                </div>

                                                <div className='viewContent'>
                                                    <div className='label'>Date of Birth</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <div className='name'>{moment(spouse.dateOfBirth).format("DD")} - {moment(spouse.dateOfBirth).format("MM")} - {moment(spouse.dateOfBirth).format("YYYY")}</div>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                    )
                                })}
                            </div>


                            {/* children code below */}
                            <div className='wrapper'>
                                {willPersonal.children.length === 1 ? <div className='title'>Child</div> :
                                    <div className='title'>Children</div>
                                }
                                {willPersonal.children.map((children, index) => {
                                    return (
                                        <div className='details' style={{ position: "relative" }}>
                                            <div className='session'>
                                                <div className='top'>
                                                    <div className={(index % 2) ? 'even image' : 'image'}>
                                                        {children.fullName.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}
                                                    </div>
                                                    <div className='name'>{children.fullName} </div>
                                                </div>
                                                <NavLink to={`/viewchildren/${children._id}`} className="nav-link"> <div className={(index % 2) ? 'even view' : 'view'}>View</div></NavLink>
                                            </div>

                                            <div className='otherDetails'>

                                                <div className='viewContent'>
                                                    <div className='label'>Title</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <div className='name'>{children.title}</div>
                                                    </div>
                                                </div>

                                                <div className='viewContent'>
                                                    <div className='label'>Phone Number</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <div className='name'>{children.mobile}</div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className='otherDetails'>
                                                <div className='viewContent'>
                                                    <div className='label'>Contact Address</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <div className='name'>{children.contactAddress}</div>
                                                    </div>
                                                </div>

                                                <div className='viewContent'>
                                                    <div className='label'>Date of Birth</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <div className='name'>{moment(children.dateOfBirth).format("DD")} - {moment(children.dateOfBirth).format("MM")} - {moment(children.dateOfBirth).format("YYYY")}</div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='blur'>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )}

            </DashboardInterface>
        </div>
    )
}

export default ViewPersonal