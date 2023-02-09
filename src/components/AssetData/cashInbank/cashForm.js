import React, { useState } from 'react'
import { BsPersonSquare } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa"

function CashForm({ errors, cashData, setCashData }) {
    return (
        <div>
            <div className='Assets-container'>
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
                                    value={cashData.bankName}
                                    onChange={(e) => {
                                        setCashData({ ...cashData, bankName: e.target.value })
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
                                    value={cashData.bvn}
                                    onChange={(e) => {
                                        setCashData({ ...cashData, bvn: e.target.value })
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
                                    value={cashData.accountType}
                                    onChange={(e) => {
                                        setCashData({ ...cashData, accountType: e.target.value })
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
                                    value={cashData.branch}
                                    onChange={(e) => {
                                        setCashData({ ...cashData, branch: e.target.value })
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
                                    value={cashData.accountNumber}
                                    onChange={(e) => {
                                        setCashData({ ...cashData, accountNumber: e.target.value })
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
                                <input type="text" placeholder="Enter ownership status" name="ownership"
                                    value={cashData.ownershipStatus}
                                    onChange={(e) => {
                                        setCashData({ ...cashData, ownershipStatus: e.target.value })
                                    }}
                                />
                            </div>
                            {errors ? <p className='error'> {errors.ownershipStatus}</p> : ""}
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className="form-group">
                            <div className='checkbox-div'>
                                <input type="checkbox" id="cashInBank" name="checked"
                                    value={cashData.checked}
                                    onChange={(e) => {
                                        setCashData({ ...cashData, checked: e.target.value });
                                    }}
                                />
                                <label htmlFor="cashInBank" className='asset-check'>I declare that I own and operate the bank details above</label>
                            </div>
                        </div>
                        {errors ? <p className='error'> {errors.checked}</p> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashForm