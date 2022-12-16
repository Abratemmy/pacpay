import React from 'react'
import Interface from '../../../../components/flexwillinterface/interface'
import Topasset from '../interfaceasset/topasset';
import { MdOutlinePersonPin } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Cashinbank() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted");
        navigate("/flex_will_distribute_cash_assets1")
    }
    return (
        <div>
            <Interface>
                <Topasset name="Cash In Bank" link="flex_will_distribute_asset2" />

                <div className='flexwillpage' >
                    <div className='container'>
                        <form onSubmit={handleSubmit} >
                            <div className='row gx-5'>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <div className='form-input form-div'>
                                            <label>Type of Asset</label>
                                            <div className="input-group ">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text form-icon"><MdOutlinePersonPin className='icon' /></div>
                                                </div>
                                                <span className="form-control inputfield">Cash In Bank</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'></div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='form-input form-div'>
                                        <label>Bank Name</label>
                                        <div className="input-group ">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text form-icon"><FaRegListAlt className='icon' /></div>
                                            </div>
                                            <input type="text" className="form-control inputfield" placeholder="Enter Bank name" />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='form-input form-div'>
                                        <label>BVN</label>
                                        <div className="input-group ">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text form-icon"><FaRegListAlt className='icon' /></div>
                                            </div>
                                            <input type="text" className="form-control inputfield" placeholder="Enter BVN" />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='form-input form-div'>
                                        <label>Account Type</label>
                                        <div className="input-group select">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text form-icon"><FaRegListAlt className='icon' /></div>
                                            </div>
                                            <select class="custom-select form-control inputfield" id="inlineFormCustomSelect">
                                                <option selected>Select Option ..</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='form-input form-div'>
                                        <label>Branch</label>
                                        <div className="input-group ">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text form-icon"><FaRegListAlt className='icon' /></div>
                                            </div>
                                            <input type="text" className="form-control inputfield" placeholder="Enter First Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='form-input form-div'>
                                        <label>Account Number</label>
                                        <div className="input-group ">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text form-icon"><FaRegListAlt className='icon' /></div>
                                            </div>
                                            <input type="text" className="form-control inputfield" placeholder="Enter First Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div className='form-input form-div'>
                                        <label>Ownership Status</label>
                                        <div className="input-group select">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text form-icon"><FaRegListAlt className='icon' /></div>
                                            </div>
                                            <select class="custom-select form-control inputfield" id="inlineFormCustomSelect">
                                                <option selected>Select Option ..</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12' style={{ paddingTop: "40px" }}>
                                    <div className="form-group">
                                        <input type="checkbox" id="cash" />
                                        <label for="cash">I declare that I own and operate the bank details above</label>
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

export default Cashinbank