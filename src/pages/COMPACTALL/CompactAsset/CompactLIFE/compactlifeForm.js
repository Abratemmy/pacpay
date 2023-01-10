import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface'
import { BsPersonSquare } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaRegListAlt } from "react-icons/fa"
import MainModal from '../../../../components/mainModal/MainModal';
import Beneficiary from '../../../../components/beneficiarypop/beneficiary';


function CompactLifeInsuranceForm() {
    const [values, setValues] = useState({
        insuranceType: "",
        companyName: "",
        accName: "",
        policyNo: "",
        amount: "",
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
        if (!targets.insuranceType) errorsValue.insuranceType = "Insurance type  is required";
        if (!targets.companyName) errorsValue.companyName = "Company name is required";
        if (!targets.accName) errorsValue.accName = "Account name is required";
        if (!targets.policyNo) errorsValue.policyNo = "policy number  is required";
        if (!targets.amount) errorsValue.amount = "Amount is required";

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
                <AssetInterface name="Life Insurance" link="compact_share_assset" />

                <div className='Assets-container'>
                    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label style={{ color: "#7c848a " }}>Type of Asset</label>
                                    <div class="inner-addon left-addon assetType disable">
                                        <i class="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                        <span >INSURANCE</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'></div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Insurance Type</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <select placeholder='Select an option' name="insuranceType" onChange={handleChange}
                                        >
                                            <option >Select Option </option>
                                            <option value="savings"><i class="fa fa-email"></i>Savings</option>
                                            <option value="current"><i class="fa fa-email"></i>Current</option>
                                            <option value="corporate"><i class="fa fa-home"></i>Corporate</option>
                                        </select>
                                    </div>
                                    {errors ? <p className='error'> {errors.insuranceType}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12' >
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Insurance company name</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter insurance company name" name="companyName" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.companyName}</p> : ""}
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
                                    <label>Policy Number</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter policy number" name="policyNo" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.policyNo}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Amount</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter amount" name="amount" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.amount}</p> : ""}
                                </div>
                            </div>
                        </div>

                        <div className='asset-btn'>
                            <div className='asset-button'><button type="submit" className="asset-nav">Assign Beneficiary</button></div>
                        </div>
                    </form>
                </div>

                <MainModal trigger={beneficiary} setTrigger={setbeneficiary}>
                    <div className='modalContent'>
                        <Beneficiary submitFormLink="compact_life_distribute" />
                    </div>
                </MainModal>
            </Interface>
        </div>
    )
}

export default CompactLifeInsuranceForm