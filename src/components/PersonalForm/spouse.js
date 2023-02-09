import React, {useState} from 'react'
import "./form.css";
import { BiMessageAltDetail, BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Spouse({ spouse, setSpouse, errors, currentId, setCurrentId }) {
    
    
    return (
        <div className="personal-info-container container">
            <div className='row'>
                {/* <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Title (Mr,  Mrs e.t.c)</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                            <select name="title" placeholder='Select an option'
                                value={spouse.title}
                                onChange={(e) => {
                                    setSpouse({ ...spouse, title: e.target.value });
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
                </div> */}
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Full Name (Spouse)</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter Full Name"
                                value={spouse.fullName}
                                onChange={(e) => {
                                    setSpouse({ ...spouse, fullName: e.target.value });
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
                                value={spouse.dateOfBirth}
                                onChange={(e) => {
                                    setSpouse({ ...spouse, dateOfBirth: e.target.value });
                                }}
                            />
                        </div>
                        {errors.dateOfBirth && <p className='error'> {errors.dateOfBirth}</p>}
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Phone Number</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="phone" placeholder="Enter phone number"
                                value={spouse.mobile}
                                onChange={(e) => {
                                    setSpouse({ ...spouse, mobile: e.target.value });
                                }}
                            />
                        </div>
                        {errors.mobile && <p className='error'> {errors.mobile}</p>}
                    </div>
                </div>
                {/* <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>State Of Residence</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter State where you live"
                                value={spouse.state}
                                onChange={(e) => {
                                    setSpouse({ ...spouse, state: e.target.value });
                                }}
                            />
                        </div>
                        {errors.state && <p className='error'> {errors.state}</p>}
                    </div>
                </div> */}
                {/* <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>City Of Residence</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter City where you live"
                                value={spouse.city}
                                onChange={(e) => {
                                    setSpouse({ ...spouse, city: e.target.value });
                                }}
                            />
                        </div>
                        {errors.city && <p className='error'> {errors.city}</p>}
                    </div>
                </div> */}

                {/* <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Residential Address</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                            <textarea rows="5" placeholder="Describe" className="textarea"
                                value={spouse.contactAddress}
                                onChange={(e) => {
                                    setSpouse({ ...spouse, contactAddress: e.target.value });
                                }}
                            ></textarea>
                        </div>
                        {errors.contactAddress && <p className='error'> {errors.contactAddress}</p>}
                    </div>
                </div> */}
            </div>

        </div >
    );
}

export default Spouse