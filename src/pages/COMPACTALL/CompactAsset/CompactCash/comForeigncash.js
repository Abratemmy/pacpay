import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface'
import { BsPersonSquare } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa"
import MainModal from '../../../../components/mainModal/MainModal';
import Beneficiary from '../../../../components/beneficiarypop/beneficiary';


function CompactForeignCashForm() {
    const [values, setValues] = useState({
        accname: "",
        accNo: "",
        country: "",
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
        if (!targets.accname) errorsValue.accname = "Account name is required";
        if (!targets.accNo) errorsValue.accNo = "Account number is required";
        if (!targets.country) errorsValue.country = "Country  is required";
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
                                        <span >CASH IN BANK (FOREIGN)</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'></div>

                            <div className='col-lg-6 col-md-6 col-sm-12' >
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Account Name</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter Bank Name" name="accname" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.accname}</p> : ""}
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

                            <div className='col-lg-6 col-md-6 col-sm-12' >
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Country</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter Country" name="country" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.country}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'></div>

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

export default CompactForeignCashForm