import React from 'react'
import "./form.css";
import {  BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Guardian({ guardian, setGuardian , errors}) {
    return (
        <div className="personal-info-container container">
            <div className=' guardianfirstshow'>
                    {/* <div className='col-lg-10 col-md-10 col-sm-12'> */}
                    <div className='row'>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='input-container'>
                                <label>Full Name </label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                    <input type="text" placeholder="Enter Full Name"
                                        value={guardian.fullName}
                                        onChange={(e) => {
                                            setGuardian({ ...guardian, fullName: e.target.value });
                                        }}
                                    />
                                </div>
                                {errors.fullName && <p className='error'> {errors.fullName}</p>}
                            </div>
                            
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='input-container'>
                                <label>Email Address </label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                    <input type="email" placeholder="Enter email address"
                                        value={guardian.email}
                                        onChange={(e) => {
                                            setGuardian({ ...guardian, email: e.target.value });
                                        }}
                                    />
                                </div>
                                {errors.email && <p className='error'> {errors.email}</p>}
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='input-container'>
                                <label>Phone Number</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                    <input type="text" placeholder="Enter Phone Number"
                                        value={guardian.mobile}
                                        onChange={(e) => {
                                            setGuardian({ ...guardian, mobile: e.target.value });
                                        }}
                                    />
                                </div>
                                {errors.mobile && <p className='error'> {errors.mobile}</p>}
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='input-container'>
                                <label>How many years</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                    <input type="number" placeholder="Enter City where you live"
                                        value={guardian.duration}
                                        onChange={(e) => {
                                            setGuardian({ ...guardian, duration: e.target.value });
                                        }}
                                    />
                                </div>
                                {errors.duration && <p className='error'> {errors.duration}</p>}
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='input-container'>
                                <label>Residential Address</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                                    <textarea rows="5" placeholder="Describe" className="textarea"
                                        value={guardian.residentialAddress}
                                        onChange={(e) => {
                                            setGuardian({ ...guardian, residentialAddress: e.target.value });
                                        }}
                                    ></textarea>
                                </div>
                                {errors.residentialAddress && <p className='error'> {errors.residentialAddress}</p>}
                            </div>
                        </div>
                    </div>

             </div> 
        </div >
    );
}

export default Guardian