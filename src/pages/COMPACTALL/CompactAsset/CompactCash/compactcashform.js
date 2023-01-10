import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface'
import { BsPersonSquare } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa"
import MainModal from '../../../../components/mainModal/MainModal';
import Beneficiary from '../../../../components/beneficiarypop/beneficiary';


function CompactCashForm() {
    const [values, setValues] = useState({
        bankname: "",
        bvn: "",
        accountType: "",
        branch: "",
        accNo: "",
        ownership: "",
        checked: ""
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
        if (!targets.bankname) errorsValue.bankname = "Pension banknameistration  is required";
        if (!targets.bvn) errorsValue.bvn = "BVN  is required";
        if (!targets.accountType) errorsValue.accountType = "Account type  is required";
        if (!targets.branch) errorsValue.branch = "Branch  is required";
        if (!targets.accNo) errorsValue.accNo = "Account number is required";
        if (!targets.ownership) errorsValue.ownership = "Ownership status is required";
        if (!targets.checked) errorsValue.checked = "Checked the box";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const [beneficiary, setbeneficiary] = useState(false);

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
            setbeneficiary(true)
        }
    }
    return (
        <div>
            <Interface>
                <AssetInterface name="Cash in Bank" link="compact_cash_landing" />

                <div className='Assets-container'>
                    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
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
                                        <input type="text" placeholder="Enter Bank Name" name="bankname" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.bankname}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>BVN</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter BVN " name="bvn" onChange={handleChange}
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
                                        <select placeholder='Select an option' name="accountType" onChange={handleChange}
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
                                        <input type="text" placeholder="Enter First Name" name="branch" onChange={handleChange}
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
                                        <input type="text" placeholder="Enter First Name" name="accNo" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.accNo}</p> : ""}
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Ownership Status</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter ownership status" name="ownership" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.ownership}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="form-group">
                                    <input type="checkbox" id="proCash" name="checked" onChange={handleChange} />
                                    <label for="proCash" className='asset-check'> I declare that I own and operate the bank details above</label>
                                </div>
                                {errors ? <p className='error'> {errors.checked}</p> : ""}
                            </div>
                        </div>

                        <div className='asset-btn'>
                            <div className='asset-button'><button type="submit" className="asset-nav">Assign Beneficiary</button></div>
                        </div>
                    </form>
                </div>

                <MainModal trigger={beneficiary} setTrigger={setbeneficiary}>
                    <div className='modalContent'>
                        <Beneficiary submitFormLink="compact_cash_distribute" />
                    </div>
                </MainModal>
            </Interface>
        </div>
    )
}

export default CompactCashForm