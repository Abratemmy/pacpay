import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface'
import { MdOutlinePersonPin } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa"
import MainModal from '../../../../components/mainModal/MainModal';
import Beneficiary from '../../../../components/beneficiarypop/beneficiary';


function CompactsharesForm() {
    const [values, setValues] = useState({
        name: "",
        percentage: "",
        rcNumber: "",
        address: "",

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
        if (!targets.name) errorsValue.name = "Company Name is required";
        if (!targets.percentage) errorsValue.percentage = "Percentage shareholding is required";
        if (!targets.rcNumber) errorsValue.rcNumber = "Limited RC number is required";
        if (!targets.address) errorsValue.address = "Office address  is required";

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
                <AssetInterface name="Shares" link="compact_realestate_assets" />

                <div className='Assets-container'>
                    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label style={{ color: "#7c848a " }}>Type of Asset</label>
                                    <div class="inner-addon left-addon assetType disable">
                                        <i class="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                        <span >SHARES</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'></div>

                            <div className='col-lg-6 col-md-6 col-sm-12' >
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Name of Company</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter company name" name="name" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.name}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Percentage Shareholding</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter Percentage Shareholding " name="percentage" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.percentage}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' sstyle={{ padding: "5px 0px" }}>
                                    <label>Limited RC Number</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter RC Number" name="rcNumber" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.rcNumber}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "5px 0px" }}>
                                    <label>Office at...</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter Office address" name="address" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.address}</p> : ""}
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
                        <Beneficiary submitFormLink="compact_share_distribute" />
                    </div>
                </MainModal>

            </Interface>
        </div>
    )
}

export default CompactsharesForm