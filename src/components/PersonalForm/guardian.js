import React from 'react'
import "./form.css";
import { BiMessageAltDetail, BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Guardian({ formData, setFormData, guardianSecondShow, guardianFirstShow }) {
    return (
        <div className="personal-info-container container">
            {
                guardianFirstShow &&
                <div className='row guardianfirstshow'>
                    <div className='col-lg-10 col-md-10 col-sm-12'>
                        <div className='row'>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>Full Name </label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="text" placeholder="Enter Full Name"
                                            value={formData.guardianName}
                                            onChange={(e) => {
                                                setFormData({ ...formData, guardianName: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>Email Address </label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="email" placeholder="Enter email address"
                                            value={formData.guardianEmail}
                                            onChange={(e) => {
                                                setFormData({ ...formData, guardianEmail: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>Phone Number</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="text" placeholder="Enter Phone Number"
                                            value={formData.guardianPhone}
                                            onChange={(e) => {
                                                setFormData({ ...formData, guardianPhone: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>How many years</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="text" placeholder="Enter City where you live"
                                            value={formData.guardianYears}
                                            onChange={(e) => {
                                                setFormData({ ...formData, guardianYears: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>Residential Address</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                                        <textarea rows="5" placeholder="Describe" className="textarea"
                                            value={formData.guardianAddress}
                                            onChange={(e) => {
                                                setFormData({ ...formData, guardianAddress: e.target.value });
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-2 col-sm-12'></div>
                </div>
            }


            {
                guardianSecondShow &&
                <div className='row secondshow'>
                    <div className='col-lg-10 col-md-10 col-sm-12'>
                        <div className='row'>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>Full Name </label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="text" placeholder="Enter Full Name"
                                            value={formData.phyguardianName}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phyguardianName: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>Email Address </label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="email" placeholder="Enter email address"
                                            value={formData.phyguardianEmail}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phyguardianEmail: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>Phone Number</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="text" placeholder="Enter Phone Number"
                                            value={formData.phyguardianPhone}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phyguardianPhone: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='input-container'>
                                    <label>Residential Address</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                                        <textarea rows="5" placeholder="Describe" className="textarea"
                                            value={formData.phyAddress}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phyAddress: e.target.value });
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-2 col-sm-12'></div>
                </div>
            }


        </div >
    );
}

export default Guardian