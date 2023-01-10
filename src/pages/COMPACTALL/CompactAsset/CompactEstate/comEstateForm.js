import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface'
import { BiMessageAltDetail } from "react-icons/bi";
import { MdOutlinePersonPin } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaRegListAlt } from "react-icons/fa"
import MainModal from '../../../../components/mainModal/MainModal';
import Beneficiary from '../../../../components/beneficiarypop/beneficiary';


function CompactRealEstateForm() {
    const [values, setValues] = useState({
        name: "",
        description: "",
        titletype: "",
        address: "",
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
        if (!targets.name) errorsValue.name = "Title owner  is required";
        if (!targets.description) errorsValue.description = "Asset  is required";
        if (!targets.titletype) errorsValue.titletype = "This is required";
        if (!targets.address) errorsValue.address = "Address  is required";
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
                <AssetInterface name="Real Estate" link="compact_cash_assets" />

                <div className='Assets-container'>
                    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label style={{ color: "#7c848a " }}>Type of Asset</label>
                                    <div className="inner-addon left-addon assetType disable">
                                        <i className="glyphicon glyphicon-user"><MdOutlinePersonPin className='icon' /></i>
                                        <span >REAL ESTATE</span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12' >
                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label>Name of title owner</label>
                                    <div className="inner-addon left-addon">
                                        <i className="glyphicon glyphicon-user"><FaRegListAlt className='icon' /></i>
                                        <input type="text" placeholder="Enter name of title owner" name="name" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.name}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' >
                                    <label>Description (e,g 2 Twin Duplex)</label>
                                    <div className="inner-addon left-addon">
                                        <i className="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                                        <textarea rows="4" placeholder="Describe" className="textarea"
                                            name="description" onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    {errors ? <p className='error'> {errors.description}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' >
                                    <label>Title type & details (e.g C of O)</label>
                                    <div className="inner-addon left-addon">
                                        <i className="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                                        <textarea rows="4" placeholder="Describe" className="textarea"
                                            name="titletype" onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    {errors ? <p className='error'> {errors.titletype}</p> : ""}
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='asset-content' >
                                    <label>Address</label>
                                    <div className="inner-addon left-addon">
                                        <i className="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                                        <textarea rows="4" placeholder="Describe" className="textarea"
                                            name="address" onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    {errors ? <p className='error'> {errors.address}</p> : ""}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12"></div>

                            <div className='col-lg-7 col-md-12 col-sm-12'>
                                <div className="form-group">
                                    <input type="checkbox" id="proRealEstate" name="checked" onChange={handleChange} />
                                    <label for="proRealEstate" className='asset-check'> I declare that I own the above property and provide correct information.</label>
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
                        <Beneficiary submitFormLink="compact_realestate" />
                    </div>
                </MainModal>


            </Interface>
        </div>
    )
}

export default CompactRealEstateForm