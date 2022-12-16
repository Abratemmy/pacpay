import React, { useState } from 'react'
import Interface from '../../../../components/flexwillinterface/interface'
import Topasset from '../interfaceasset/topasset';
import { MdOutlinePersonPin } from "react-icons/md";
import "./flexwillpage.css";
import { useNavigate } from "react-router-dom"

function Flexwillpage() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted");
        navigate("/flex_will_distribute_assets1")
    }
    return (
        <div >
            <Interface>
                <Topasset name="RSA(Retirement Savings Account)" link="flex_will_assets" />

                <div className='flexwillpage' >
                    <div className='container'>
                        <form onSubmit={handleSubmit} >
                            <div className='row'>
                                <div className='col-lg-3 col-md-2 col-sm-12'></div>
                                <div className='col-lg-6 col-md-8 col-sm-12'>
                                    <div className='content'>
                                        <div className='form-input form-div' >
                                            <label>Type of Asset</label>
                                            <div className="input-group ">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text form-icon"><MdOutlinePersonPin className='icon' /></div>
                                                </div>
                                                <span className="form-control inputfield">RSA</span>
                                            </div>
                                        </div>
                                        <div className='form-input form-div' style={{ margin: "40px 0px 30px 0px" }}>
                                            <label>Pension Administrator</label>
                                            <div className="input-group ">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text form-icon"><MdOutlinePersonPin className='icon' /></div>
                                                </div>
                                                <input type="text" className="form-control inputfield" placeholder="Enter First Name" />
                                            </div>
                                        </div>

                                        <div className='form-input form-div' style={{ margin: "40px 0px" }}>
                                            <label>PEN Number</label>
                                            <div className="input-group ">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text form-icon"><MdOutlinePersonPin className='icon' /></div>
                                                </div>
                                                <input type="password" className="form-control inputfield" placeholder="Enter PEN Number" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-2 col-sm-12'></div>

                                <div className='col-12'>
                                    <div className="form-group">
                                        <input type="checkbox" id="RSA" />
                                        <label for="RSA"> I direct that my burial expense which includes vault procurement, casket purchase, service.</label>
                                    </div>
                                </div>
                            </div>

                            <div className='button' style={{ textAlign: "right", paddingRight: "60px", marginTop: "30px" }}>
                                <button type="submit" className="asset-nav" style={{ border: "none" }}>
                                    Assign Beneficiary
                                </button>
                            </div>
                        </form>


                    </div>
                </div>

            </Interface>
        </div>
    )
}

export default Flexwillpage