import React from 'react'
import "./form.css";
import { BiMessageAltDetail, BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Spouse({ formData, setFormData }) {
    return (
        <div className="personal-info-container container">
            <div className='row'>
                <div className='col-lg-10 col-md-10 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='input-container'>
                                <label>Title(Mr,  Mrs e.t.c)</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                                    <select name="title" placeholder='Select an option'
                                        value={formData.spousetitle}
                                        onChange={(e) => {
                                            setFormData({ ...formData, spousetitle: e.target.value });
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
                                <label>Full Name(Spouse)</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                    <input type="text" placeholder="Enter First Name"
                                        value={formData.spouseName}
                                        onChange={(e) => {
                                            setFormData({ ...formData, spouseName: e.target.value });
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
                                    <input type="text" placeholder="Enter Last Name"
                                        value={formData.spousebirth}
                                        onChange={(e) => {
                                            setFormData({ ...formData, spousebirth: e.target.value });
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
                                    <input type="text" placeholder="Enter Middle Name"
                                        value={formData.spousephone}
                                        onChange={(e) => {
                                            setFormData({ ...formData, spousephone: e.target.value });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='input-container'>
                                <label>State Of Residence</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                    <input type="text" placeholder="Enter State where you live"
                                        value={formData.spouseresState}
                                        onChange={(e) => {
                                            setFormData({ ...formData, spouseresState: e.target.value });
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
                                        value={formData.spouseresCity}
                                        onChange={(e) => {
                                            setFormData({ ...formData, spouseresCity: e.target.value });
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
                                        value={formData.spouseresAddress}
                                        onChange={(e) => {
                                            setFormData({ ...formData, spouseresAddress: e.target.value });
                                        }}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-2 col-sm-12'></div>
            </div>

        </div >
    );
}

export default Spouse