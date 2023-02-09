import React from 'react';
import { BsPersonSquare } from "react-icons/bs";
import { MdOutlinePersonPin } from 'react-icons/md';

function RsaForm({ rsaData, setRsaData, errors }) {
    return (
        <div>
            <div className='Assets-container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-2 col-sm-12'></div>
                    <div className='col-lg-6 col-md-8 col-sm-12'>
                        <div className='asset-content' style={{ padding: "20px 0px" }}>
                            <label style={{ color: "#7c848a " }}>Type of Asset</label>
                            <div class="inner-addon left-addon assetType disable">
                                <i class="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                <span >RSA</span>
                            </div>
                        </div>

                        <div className='asset-content' style={{ padding: "20px 0px 10px 0px" }}>
                            <label>Pension Administrator</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="text" placeholder="Enter First Name" name="admin"
                                    value={rsaData.pfaAdmin}
                                    onChange={(e) => {
                                        setRsaData({ ...rsaData, pfaAdmin: e.target.value })
                                    }}
                                />
                            </div>
                            {errors ? <p className='error'> {errors.pfaAdmin}</p> : ""}
                        </div>

                        <div className='asset-content' style={{ padding: "10px 0px" }}>
                            <label>PEN Number</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                <input type="password" placeholder="............." name="number"
                                    value={rsaData.penNumber}
                                    onChange={(e) => {
                                        setRsaData({ ...rsaData, penNumber: e.target.value })
                                    }}
                                />
                            </div>
                            {errors ? <p className='error'> {errors.penNumber}</p> : ""}
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-12'></div>

                    <div className='col-12'>
                        <div className="form-group">
                            <div className='checkbox-div'>
                                <input type="checkbox" id="flexRSA" name="checked"
                                    value={rsaData.checked}
                                    onChange={(e) => {
                                        setRsaData({ ...rsaData, checked: e.target.value });
                                    }}

                                />
                                <label htmlFor="flexRSA" className='asset-check'> I direct that my burial expense which includes vault procurement, casket purchase, service.</label>
                            </div>
                        </div>
                        {errors ? <p className='error'> {errors.checked}</p> : ""}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default RsaForm