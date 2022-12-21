import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface';
import { BsPersonSquare } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi"
import "./Assets.css";
import { useNavigate } from 'react-router-dom';

function ProOtherForm() {
    const [values, setValues] = useState({
        title: "",
        description: "",
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
        if (!targets.title) errorsValue.title = "This is required";
        if (!targets.description) errorsValue.description = "This is required";

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
            navigate("/pro_assets_other")
        }
    }
    return (
        <div>
            <Interface>
                <AssetInterface name="Other Assets" link="pro_main_assets" />

                <div className='Assets-container'>
                    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
                        <div className='row'>
                            <div className='col-lg-3 col-md-2 col-sm-12'></div>
                            <div className='col-lg-6 col-md-8 col-sm-12'>

                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label>Title</label>
                                    <div class="inner-addon left-addon">
                                        <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                                        <input type="text" placeholder="Enter title" name="title" onChange={handleChange}
                                        />
                                    </div>
                                    {errors ? <p className='error'> {errors.title}</p> : ""}
                                </div>

                                <div className='asset-content' style={{ padding: "20px 0px" }}>
                                    <label>Description</label>
                                    <div className="inner-addon left-addon">
                                        <i className="glyphicon glyphicon-user"><BiMessageAltDetail className='icon' /></i>
                                        <textarea rows="4" placeholder="Describe" className="textarea"
                                            name="description" onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    {errors ? <p className='error'> {errors.description}</p> : ""}
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-2 col-sm-12'></div>

                        </div>

                        <div className='asset-btn'>
                            <div className='asset-button'><button type="submit" className="asset-nav">Complete</button></div>
                        </div>
                    </form>
                </div>
            </Interface>
        </div>
    )
}

export default ProOtherForm