import React from 'react'
import "./form.css";
import { BiMessageAltDetail, BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Children({ children, setChildren, errors }) {

    return (
        <div className="personal-info-container container">
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Title (Mr,  Mrs e.t.c)</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                            <select name="title" placeholder='Select an option'
                                value={children.title}
                                onChange={(e) => {
                                    setChildren({ ...children, title: e.target.value });
                                }}
                            >
                                <option >Select Option </option>
                                <option value="mr">Mr</option>
                                <option value="mrs"><i class="fa fa-email"></i> Mrs</option>
                                <option value="miss"><i class="fa fa-home"></i>Miss</option>
                                <option value="master"><i class="fa fa-home"></i>Master</option>
                            </select>
                        </div>
                        {errors.title && <p className='error'> {errors.title}</p>}
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Full Name (Child)</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter First Name"
                                value={children.fullName}
                                onChange={(e) => {
                                    setChildren({ ...children, fullName: e.target.value });
                                }}
                            />
                        </div>
                        {errors.fullName && <p className='error'> {errors.fullName}</p>}
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Date Of Birth</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="date" placeholder="Enter Date of Birth"
                                value={children.dateOfBirth}
                                onChange={(e) => {
                                    setChildren({ ...children, dateOfBirth: e.target.value });
                                }}
                            />
                        </div>
                        {errors.dateOfBirth && <p className='error'> {errors.dateOfBirth}</p>}
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Gender</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                            <select name="title" placeholder='Select an option'
                                value={children.gender}
                                onChange={(e) => {
                                    setChildren({ ...children, gender: e.target.value });
                                }}
                            >
                                <option >Select Option </option>
                                <option value="m"><i class="fa fa-email"></i>Male</option>
                                <option value="f"><i class="fa fa-home"></i>Female</option>

                            </select>
                        </div>
                        {errors.gender && <p className='error'> {errors.gender}</p>}
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Phone Number (Optional)</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter Phone Number"
                                value={children.mobile}
                                onChange={(e) => {
                                    setChildren({ ...children, mobile: e.target.value });
                                }}
                            />
                        </div>
                        {errors.mobile && <p className='error'> {errors.mobile}</p>}
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Disability</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                            <select name="title" placeholder='Select an option'
                                value={children.isDisabled}
                                onChange={(e) => {
                                    setChildren({ ...children, isDisabled: e.target.value });
                                }}
                            >
                                <option >Select Option </option>
                                <option value="false">false</option>
                                <option value="true"><i class="fa fa-email"></i>true</option>

                            </select>
                        </div>
                        {errors.isDisabled && <p className='error'> {errors.isDisabled}</p>}
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Residential Address</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                            <textarea rows="5" placeholder="Describe" className="textarea"
                                value={children.contactAddress}
                                onChange={(e) => {
                                    setChildren({ ...children, contactAddress: e.target.value });
                                }}
                            ></textarea>
                        </div>
                        {errors.contactAddress && <p className='error'> {errors.contactAddress}</p>}
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Children