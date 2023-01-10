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
                            <label>First Name</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter First Name"
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
                                <input type="text" placeholder="Enter Last Name"
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
                                <input type="text" placeholder="Enter Middle Name"
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
                            <label>State Of Residence</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter State where you live"
                                    value={formData.stateofRes}
                                    onChange={(e) => {
                                        setFormData({ ...formData, stateofRes: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.stateofRes && <p className='error'> {errors.stateofRes}</p>}
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>City Of Residence</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter City where you live"
                                    value={formData.cityofRes}
                                    onChange={(e) => {
                                        setFormData({ ...formData, cityofRes: e.target.value });
                                    }}
                                />
                            </div>
                            {errors.cityofRes && <p className='error'> {errors.cityofRes}</p>}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='input-container'>
                            <label>Residential Address</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                                <textarea rows="5" placeholder="Describe" className="textarea"
                                    value={formData.resAddress}
                                    onChange={(e) => {
                                        setFormData({ ...formData, resAddress: e.target.value });
                                    }}
                                ></textarea>
                            </div>
                            {errors.resAddress && <p className='error'> {errors.resAddress}</p>}
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
}

export default Personal