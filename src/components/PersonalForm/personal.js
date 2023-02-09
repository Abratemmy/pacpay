import React from 'react'
import "./form.css";
import { BiMessageAltDetail, BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Personal({ formData, setFormData, errors }) {

    return (
        <form>
            <div className="personal-info-container container">
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Title (Mr,  Mrs e.t.c)</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                                <select name="title" placeholder='Select an option'
                                    value={formData.title}
                                    onChange={(e) => {
                                        setFormData({ ...formData, title: e.target.value });
                                    }}
                                >
                                    <option value="" className='selectOption'>Select Option </option>
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
                            <label>First Name</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter First Name" style={{ textTransform: "capitalize" }}
                                    value={formData.firstName}
                                    onChange={(e) => {
                                        setFormData({ ...formData, firstName: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        {errors.firstName && <p className='error'> {errors.firstName}</p>}
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter Last Name" style={{ textTransform: "capitalize" }}
                                    value={formData.lastName}
                                    onChange={(e) => {
                                        setFormData({ ...formData, lastName: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.lastName && <p className='error'> {errors.lastName}</p>}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Middle Name</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter Last Name" style={{ textTransform: "capitalize" }}
                                    value={formData.middleName}
                                    onChange={(e) => {
                                        setFormData({ ...formData, middleName: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.middleName && <p className='error'> {errors.middleName}</p>}
                        </div>
                    </div>


                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Phone Number</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="tel" placeholder="Enter Phone number" required
                                    value={formData.mobile}
                                    onChange={(e) => {
                                        setFormData({ ...formData, mobile: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.mobile && <p className='error'> {errors.mobile}</p>}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Alternative Phone Number</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="tel" placeholder="Enter alternative number" required
                                    value={formData.altMobile}
                                    onChange={(e) => {
                                        setFormData({ ...formData, altMobile: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.altMobile && <p className='error'> {errors.altMobile}</p>}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Date of Birth</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="date" placeholder="Enter your date of birth"
                                    value={formData.dateOfBirth}
                                    onChange={(e) => {
                                        setFormData({ ...formData, dateOfBirth: e.target.value });
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
                                    value={formData.gender}
                                    onChange={(e) => {
                                        setFormData({ ...formData, gender: e.target.value });
                                    }}
                                >
                                    <option value="">Select Option </option>
                                    <option value="m"><i class="fa fa-email"></i>Male</option>
                                    <option value="f"><i class="fa fa-home"></i>Female</option>

                                </select>
                            </div>
                            {errors.gender && <p className='error'> {errors.gender}</p>}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Nationality</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter your nationality" style={{ textTransform: "capitalize" }}
                                    value={formData.nationality}
                                    onChange={(e) => {
                                        setFormData({ ...formData, nationality: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.nationality && <p className='error'> {errors.nationality}</p>}
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>State of Origin</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter your state of origin" style={{ textTransform: "capitalize" }}
                                    value={formData.stateOfOrigin}
                                    onChange={(e) => {
                                        setFormData({ ...formData, stateOfOrigin: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.stateOfOrigin && <p className='error'> {errors.stateOfOrigin}</p>}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Marital Status</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                                <select name="title" placeholder='Select an option' style={{ textTransform: "capitalize" }}
                                    value={formData.maritalStatus}
                                    onChange={(e) => {
                                        setFormData({ ...formData, maritalStatus: e.target.value });
                                    }}
                                >
                                    <option value="">Select Option </option>
                                    <option value="single"><i class="fa fa-email"></i>Single</option>
                                    <option value="married"><i class="fa fa-home"></i>Married</option>
                                    <option value="divorced"><i class="fa fa-home"></i>Divorced</option>
                                    <option value="separated"><i class="fa fa-home"></i>Separated</option>

                                </select>
                            </div>
                            {errors.maritalStatus && <p className='error'> {errors.maritalStatus}</p>}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>State Of Residence</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter State where you live" style={{ textTransform: "capitalize" }}
                                    value={formData.state}
                                    onChange={(e) => {
                                        setFormData({ ...formData, state: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.state && <p className='error'> {errors.state}</p>}
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>City Of Residence</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter City where you live" style={{ textTransform: "capitalize" }}
                                    value={formData.city}
                                    onChange={(e) => {
                                        setFormData({ ...formData, city: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.city && <p className='error'> {errors.city}</p>}
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Contact Address</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                                <textarea rows="5" placeholder="Describe" className="textarea"
                                    value={formData.contactAddress}
                                    onChange={(e) => {
                                        setFormData({ ...formData, contactAddress: e.target.value });
                                    }}
                                ></textarea>
                            </div>
                            {errors.contactAddress && <p className='error'> {errors.contactAddress}</p>}
                        </div>
                    </div>


                </div>

            </div>
        </form>
    );
}

export default Personal