import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface'
import { BsPersonSquare } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import "./Assets.css";
import { useNavigate } from 'react-router-dom';
import { FaRegListAlt } from "react-icons/fa"


function ProInvestmentForm() {
    const [values, setValues] = useState({
        investmentAccount: "",
        accNumber: "",
        accName: "",
        mutualFund: "",
        ownership: "",
    });
    const [errors, setErrors] = useState({});

    // get input values
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.investmentAccount) errorsValue.investmentAccount = "Investment account is required";
        if (!targets.accNumber) errorsValue.accNumber = "Account number is required";
        if (!targets.accName) errorsValue.accName = "Account name is required";
        if (!targets.mutualFund) errorsValue.mutualFund = "Mutual fund  is required";
        if (!targets.ownership) errorsValue.ownership = "Ownership status is required";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const navigate = useNavigate()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            console.log("submitted", values);
            navigate("/pro_distribute_asset6")
        }
    }
    return (
        <div>
            <Interface>
                <AssetInterface name="Investment" link="pro_asset_lifeinsurance" />

                <div className='Assets-container'>
                    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label style={{ color: "#7c848a " }}>Type of Asset</label>
                                    <div class="inner-addon left-addon assetType disable">
                                        <i class="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                        <span >INVESTMENT</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'></div>

                            <div className='col-lg-6 col-md-6 col-sm-12' >
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Investment Account</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter insurance company name" name="investmentAccount" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.investmentAccount}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Account name</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter account name" name="accName" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.accName}</p> : ""}
                                </div>
                            </div>



                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' sstyle={{ padding: "5px 0px" }}>
                                    <label>Account Number</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter account number" name="accNumber" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.accNumber}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Mutual Funds</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter mutual fund" name="mutualFund" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.mutualFund}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Ownership Status</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <select placeholder='Select an option' name="ownership" onChange={handleChange}
                                        >
                                            <option >Select Option </option>
                                            <option value="savings"><i class="fa fa-email"></i>Savings</option>
                                            <option value="current"><i class="fa fa-email"></i>Current</option>
                                            <option value="corporate"><i class="fa fa-home"></i>Corporate</option>
                                        </select>
                                    </div>
                                    {errors ? <p className='error'> {errors.ownership}</p> : ""}
                                </div>
                            </div>
                        </div>

                        <div className='asset-btn'>
                            <div className='asset-button'><button type="submit" className="asset-nav">Assign Beneficiary</button></div>
                        </div>
                    </form>
                </div>
            </Interface>
        </div>
    )
}

export default ProInvestmentForm