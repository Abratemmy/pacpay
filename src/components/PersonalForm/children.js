import React from 'react'
import "./form.css";
import { BiMessageAltDetail, BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Children({ formData, setFormData }) {
    return (
        <div className="personal-info-container container">
            {/* <div className='row'>
                <div className='col-lg-10 col-md-10 col-sm-12'> */}
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Title (Mr,  Mrs e.t.c)</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                            <select name="title" placeholder='Select an option'
                                value={formData.childtitle}
                                onChange={(e) => {
                                    setFormData({ ...formData, childtitle: e.target.value });
                                }}
                            >
                                <option >Select Option </option>
                                <option value="mr">Mr</option>
                                <option value="mrs"><i class="fa fa-email"></i> Mrs</option>
                                <option value="miss"><i class="fa fa-home"></i>Miss</option>
                                <option value="master"><i class="fa fa-home"></i>Master</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Full Name (Child)</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter First Name"
                                value={formData.childName}
                                onChange={(e) => {
                                    setFormData({ ...formData, childName: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Date Of Birth</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="date" placeholder="Enter Date of Birth"
                                value={formData.childbirth}
                                onChange={(e) => {
                                    setFormData({ ...formData, childbirth: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Gender</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                            <select name="title" placeholder='Select an option'
                                value={formData.childGender}
                                onChange={(e) => {
                                    setFormData({ ...formData, childGender: e.target.value });
                                }}
                            >
                                <option >Select Option </option>
                                <option value="male"><i class="fa fa-email"></i> Male</option>
                                <option value="female"><i class="fa fa-home"></i>Female</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Phone Number (Optional)</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter Phone Number"
                                value={formData.childphone}
                                onChange={(e) => {
                                    setFormData({ ...formData, childphone: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>City Of Residence</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter City where you live"
                                value={formData.childCity}
                                onChange={(e) => {
                                    setFormData({ ...formData, childCity: e.target.value });
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
                                value={formData.childAddress}
                                onChange={(e) => {
                                    setFormData({ ...formData, childAddress: e.target.value });
                                }}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div>

                <div className='col-lg-4 col-md-2 col-sm-12'></div>
            </div> */}

        </div >
    );
}

export default Children