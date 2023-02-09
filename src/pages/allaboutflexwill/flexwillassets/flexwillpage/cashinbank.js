import React, { useState } from 'react'
import Interface from '../../../../components/flexwillinterface/interface'
import Topasset from '../interfaceasset/topasset';
import { MdOutlinePersonPin, MdArrowBackIosNew } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { BsPersonSquare } from 'react-icons/bs';

function Cashinbank({ cashInBank, setCashInBank, errors, setToggle }) {

    return (
        <div>
            <div className='top'>
                <span className="personal-nav" onClick={setToggle} >
                    <MdArrowBackIosNew className='icon' />
                    <MdArrowBackIosNew className='icon icon2' />
                </span>

                <div className='text'>Cash in Bank</div>
            </div>

            <div className='flexwillpage Assets-container' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='asset-content' style={{ padding: "20px 0px" }}>
                                <label style={{ color: "#7c848a " }}>Type of Asset</label>
                                <div class="inner-addon left-addon assetType disable">
                                    <i class="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                    <span >CASH IN BANK (NIGERIA)</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'></div>

                        <div className='col-lg-6 col-md-6 col-sm-12' >
                            <div className='asset-content' style={{ padding: "5px 0px" }}>
                                <label>Bank Name</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                    <input type="text" placeholder="Enter Bank Name" name="bankname"
                                        value={cashInBank.bankName}
                                        onChange={(e) => {
                                            setCashInBank({ ...cashInBank, bankName: e.target.value });
                                        }}
                                    />
                                </div>
                                {errors ? <p className='error'> {errors.bankName}</p> : ""}
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='asset-content' style={{ padding: "5px 0px" }}>
                                <label>BVN</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                    <input type="text" placeholder="Enter BVN " name="bvn"
                                        value={cashInBank.bvn}
                                        onChange={(e) => {
                                            setCashInBank({ ...cashInBank, bvn: e.target.value });
                                        }}
                                    />
                                </div>
                                {errors ? <p className='error'> {errors.bvn}</p> : ""}
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='asset-content' style={{ padding: "5px 0px" }}>
                                <label>Account Type</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                    <select placeholder='Select an option' name="accountType"
                                        value={cashInBank.accountType}
                                        onChange={(e) => {
                                            setCashInBank({ ...cashInBank, accountType: e.target.value });
                                        }}
                                    >
                                        <option >Select Option </option>
                                        <option value="savings"><i class="fa fa-email"></i>Savings</option>
                                        <option value="current"><i class="fa fa-email"></i>Current</option>
                                        <option value="corporate"><i class="fa fa-home"></i>Corporate</option>
                                    </select>
                                </div>
                                {errors ? <p className='error'> {errors.accountType}</p> : ""}
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='asset-content' sstyle={{ padding: "5px 0px" }}>
                                <label>Branch</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                    <input type="text" placeholder="Enter First Name" name="branch"
                                        value={cashInBank.branch}
                                        onChange={(e) => {
                                            setCashInBank({ ...cashInBank, branch: e.target.value });
                                        }}
                                    />
                                </div>
                                {errors ? <p className='error'> {errors.branch}</p> : ""}
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='asset-content' style={{ padding: "5px 0px" }}>
                                <label>Account Number</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                    <input type="text" placeholder="Enter First Name" name="accNo"
                                        value={cashInBank.accountNumber}
                                        onChange={(e) => {
                                            setCashInBank({ ...cashInBank, accountNumber: e.target.value });
                                        }}
                                    />
                                </div>
                                {errors ? <p className='error'> {errors.accountNumber}</p> : ""}
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='asset-content' style={{ padding: "5px 0px" }}>
                                <label>Ownership Status</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                    <input type="text" placeholder="Enter Ownership status" name="ownership"
                                        value={cashInBank.ownershipStatus}
                                        onChange={(e) => {
                                            setCashInBank({ ...cashInBank, ownershipStatus: e.target.value });
                                        }}
                                    />

                                </div>
                                {errors ? <p className='error'> {errors.ownershipStatus}</p> : ""}
                            </div>
                        </div>

                        <div className=''>
                            <div className="form-group">
                                <div className='checkbox-div'>
                                    <input type="checkbox" id="flexCash" name="checked" />
                                    <label for="flexCash" className='asset-check'> I declare that I own and operate the bank details above</label>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cashinbank