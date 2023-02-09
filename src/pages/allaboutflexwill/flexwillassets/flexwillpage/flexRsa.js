import React from 'react';
import { MdOutlinePersonPin } from "react-icons/md";
import { BsPersonSquare } from 'react-icons/bs';

function FlexRsa({ rsaData, setRsaData, errors }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-2 col-sm-12'></div>
                <div className='col-lg-6 col-md-8 col-sm-12'>
                    <div className='asset-content flexwillpage Assets-container' style={{ padding: "20px 0px" }}>
                        <label style={{ color: "#7c848a " }}>Type of Asset</label>
                        <div className="inner-addon left-addon assetType disable">
                            <i className="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                            <span >RSA</span>
                        </div>
                    </div>

                    <div className='asset-content' style={{ padding: "20px 0px" }}>
                        <label>Pension Administrator</label>
                        <div className="inner-addon left-addon">
                            <i className="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="Enter pen Number" name="pfaAdmin"
                                value={rsaData.pfaAdmin}
                                onChange={(e) => {
                                    setRsaData({ ...rsaData, pfaAdmin: e.target.value });
                                }}
                            />
                        </div>
                        {errors ? <p className='error'> {errors.pfaAdmin}</p> : ""}
                    </div>

                    <div className='asset-content' style={{ padding: "20px 0px" }}>
                        <label>PEN Number</label>
                        <div className="inner-addon left-addon">
                            <i className="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="password" placeholder="............." name="penNumber"
                                value={rsaData.penNumber}
                                onChange={(e) => {
                                    setRsaData({ ...rsaData, penNumber: e.target.value });
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
    )
}

export default FlexRsa