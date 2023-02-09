import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserWill } from '../../actions/auth';
import { useParams } from 'react-router-dom';
import DashboardInterface from '../dashboardInterface';
import Navbar from '../Navbar/Navbar';
import { BsPersonSquare } from "react-icons/bs";
import moment from "moment"

function ViewChildren() {

    const dispatch = useDispatch();
    const will = useSelector((state) => state.willReducer);
    const willPersonal = will?.data?.personalInformation


    console.log("get products", will)

    useEffect(() => {
        dispatch(getUserWill())
    }, [dispatch])

    const { childId } = useParams()
    const child = willPersonal.children.find(child => child._id === childId)

    return (
        <div>
            <DashboardInterface>
                <Navbar name="Dashboard" />
                <div className='viewPersonal'>
                    <div className='subtitle'>Child's review</div>
                    <div className='details' style={{ position: "relative" }}>
                        <div className='top'>
                            <div className='image'>
                                {child.fullName.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}
                            </div>
                            <div className='name'>{child.fullName} </div>
                        </div>

                        <div className='otherDetails'>

                            <div className='viewContent'>
                                <div className='label'>Title</div>
                                <div className='inputBox'>
                                    <span><BsPersonSquare className="icon" /> </span>
                                    <div className='name'>{child.title}</div>
                                </div>
                            </div>

                            <div className='viewContent'>
                                <div className='label'>Phone Number</div>
                                <div className='inputBox'>
                                    <span><BsPersonSquare className="icon" /> </span>
                                    <div className='name'>{child.mobile}</div>
                                </div>
                            </div>
                        </div>

                        <div className='otherDetails'>

                            <div className='viewContent'>
                                <div className='label'>Date of Birth</div>
                                <div className='inputBox'>
                                    <span><BsPersonSquare className="icon" /> </span>
                                    <div className='name'>{moment(child.dateOfBirth).format("DD")} - {moment(child.dateOfBirth).format("MM")} - {moment(child.dateOfBirth).format("YYYY")}</div>
                                </div>
                            </div>

                            <div className='viewContent'>
                                <div className='label'>Contact Address</div>
                                <div className='inputBox'>
                                    <span><BsPersonSquare className="icon" /> </span>
                                    <div className='name'>{child.contactAddress}</div>
                                </div>
                            </div>
                        </div>

                        {child.financialGuardian && (
                            <div className=''>
                                <div className="subtitle" style={{ paddingTop: "30px" }}> financial Guardian </div>
                                <div className='otherDetails'>

                                    <div className='viewContent'>
                                        <div className='label'>Full Name</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{child.financialGuardian.fullName}</div>
                                        </div>
                                    </div>

                                    <div className='viewContent'>
                                        <div className='label'>Email Address</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{child.financialGuardian.email}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='otherDetails'>

                                    <div className='viewContent'>
                                        <div className='label'>Duration</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{child.financialGuardian.duration}</div>
                                        </div>
                                    </div>

                                    <div className='viewContent'>
                                        <div className='label'>Phone Number</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{child.financialGuardian.mobile}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {child.physicalGuardian && (
                            <div className=''>
                                <div className="subtitle" style={{ paddingTop: "30px" }}> Physical Guardian </div>
                                <div className='otherDetails'>

                                    <div className='viewContent'>
                                        <div className='label'>Full Name</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{child.physicalGuardian.fullName}</div>
                                        </div>
                                    </div>

                                    <div className='viewContent'>
                                        <div className='label'>Email Address</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{child.physicalGuardian.email}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='otherDetails'>

                                    <div className='viewContent'>
                                        <div className='label'>Address</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{child.physicalGuardian.residentialAddress}</div>
                                        </div>
                                    </div>

                                    <div className='viewContent'>
                                        <div className='label'>Phone Number</div>
                                        <div className='inputBox'>
                                            <span><BsPersonSquare className="icon" /> </span>
                                            <div className='name'>{child.physicalGuardian.mobile}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </DashboardInterface>

        </div>
    )
}

export default ViewChildren