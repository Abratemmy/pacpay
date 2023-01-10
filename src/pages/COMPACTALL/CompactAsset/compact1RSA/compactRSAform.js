import React, { useState } from 'react'
import { BsPersonSquare } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";

import MainModal from '../../../../components/mainModal/MainModal';
import Beneficiary from '../../../../components/beneficiarypop/beneficiary';
import Interface from '../../../../components/flexwillinterface/interface';
import AssetInterface from '../../../../components/assetsInterface/AssetInterface';

function CompactRSAForm() {
    const [values, setValues] = useState({
        admin: "",
        number: "",
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
        if (!targets.admin) errorsValue.admin = "Pension Administration  is required";
        if (!targets.number) errorsValue.number = "PEN number  is required";
        if (!targets.checked) errorsValue.checked = "Checked the box";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const [beneficiary, setbeneficiary] = useState(false)

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
                <AssetInterface name="RSA (Retirement Saving Account)" link="compact_assets" />

                <div className='Assets-container'>
                    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
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

                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label>Pension Administrator</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="text" placeholder="Enter First Name" name="admin" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.admin}</p> : ""}
                                </div>

                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label>PEN Number</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="password" placeholder="............." name="number" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.number}</p> : ""}
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-2 col-sm-12'></div>

                            <div className='col-12'>
                                <div className="form-group">
                                    <input type="checkbox" id="compactRSA" name="checked" onChange={handleChange} />
                                    <label for="compactRSA" className='asset-check'> I direct that my burial expense which includes vault procurement, casket purchase, service.</label>
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
                        <Beneficiary submitFormLink="compact_rsa_distribute" />
                    </div>
                </MainModal>
            </Interface>
        </div>
    )
}

export default CompactRSAForm