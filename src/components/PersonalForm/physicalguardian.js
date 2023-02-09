import React from 'react';
import { BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Physicalguardian({ physical, setPhysical, errors }) {
    return (
        <div className="personal-info-container container">
            <div className='row'>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Full Name </label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter Full Name"
                                value={physical.fullName}
                                onChange={(e) => {
                                    setPhysical({ ...physical, fullName: e.target.value });
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
                                value={physical.email}
                                onChange={(e) => {
                                    setPhysical({ ...physical, email: e.target.value });
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
                            <input type="tel" placeholder="Enter Phone Number" required
                                value={physical.mobile}
                                onChange={(e) => {
                                    setPhysical({ ...physical, mobile: e.target.value });
                                }}
                            />
                        </div>
                        {errors.mobile && <p className='error'> {errors.mobile}</p>}
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12' style={{ paddingBottom: "50px" }}>
                    <div className='input-container'>
                        <label>Residential Address</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                            <textarea rows="5" placeholder="Describe" className="textarea"
                                value={physical.residentialAddress}
                                onChange={(e) => {
                                    setPhysical({ ...physical, residentialAddress: e.target.value });
                                }}
                            ></textarea>
                        </div>
                        {errors.residentialAddress && <p className='error'> {errors.residentialAddress}</p>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Physicalguardian