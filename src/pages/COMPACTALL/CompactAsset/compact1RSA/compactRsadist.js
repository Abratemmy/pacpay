import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, NavLink } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs"
import MainModal from '../../../../components/mainModal/MainModal';
import Interface from '../../../../components/flexwillinterface/interface';
import AssetInterface from '../../../../components/assetsInterface/AssetInterface';

function CompactRsaDistribute() {
    const [beneficiary, setbeneficiary] = useState(false)


    const [values, setValues] = useState({
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
        if (!targets.description) errorsValue.description = "Description  is required";


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
            navigate("/compact_asset_rsa")
        }
    }
    return (
        <div className='Assetmain-page'>
            <Interface>
                <AssetInterface name="Distribute Assets" link="compact_rsa_form" />

                <div className='Assets-container'>
                    <div className='top'>
                        <div className='left'>The distributed asset must accumulate to a total of 100% before you can successfully continue.</div>
                        <div className='right'>
                            <button onClick={() => setbeneficiary(true)} className='first'><IoMdAddCircleOutline className='icon' /><span>Add Multiple Beneficiary</span>  </button>
                            <NavLink to="" className="edit">Edit Beneficiary</NavLink>
                        </div>
                    </div>

                    <div className='asset-middle'>
                        <div className='title'>
                            <span>Beneficiary</span>
                            <span>Percentage(100%)</span>
                        </div>

                        <form onSubmit={handleSubmit} style={{ position: "relative" }}>
                            <div className='asset1'>
                                <div className='content'>
                                    <div className='text'><AiFillStar className="icon" /><span>Taofeeqah Bello</span></div>
                                    <div className='input'><input type="number" min="0" className='input' /></div>
                                </div>
                                <div className='content'>
                                    <div className='text'><AiFillStar className="icon" /><span>Taofeeqah Bello</span></div>
                                    <div className='input'><input type="number" min="0" className='input' /></div>
                                </div>
                                <div className='content'>
                                    <div className='text'><AiFillStar className="icon" /><span>Taofeeqah Bello</span></div>
                                    <div className='input'><input type="number" min="0" className='input' /></div>
                                </div>
                                <div className='content'>
                                    <div className='text'><AiFillStar className="icon" /><span>Taofeeqah Bello</span></div>
                                    <div className='input'><input type="number" min="0" className='input' /></div>
                                </div>
                            </div>

                            <div className='description'>
                                <label>Description</label>
                                <div className="input-group ">
                                    <textarea className="form-control assetinputfield" name="description" onChange={handleChange} placeholder="description" rows="5"></textarea>
                                </div>
                                {errors ? <p className='error'> {errors.description}</p> : ""}
                            </div>

                            <div className='asset-btn'>
                                <div className='asset1last'>
                                    <div className='ps'>PS: You don’t want to share your asset now? you can <NavLink to="/compact_asset_rsa" style={{ background: "transparent", textDecoration: "none" }}><span>Skip <BsArrowUpRight className="icon" /> </span></NavLink> </div>
                                    <div className='asset-button'><button type="submit" className="asset-nav">Submit</button></div>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>

                <MainModal trigger={beneficiary} setTrigger={setbeneficiary}>
                    <div className='modalContent'>
                        <form>
                            <div className='input-content'>
                                <div className="form-group">
                                    <input type="checkbox" id="proRSA" name="checked" />
                                    <div className='name'>
                                        <label for="proRSA">Taofeeqah Bello</label>
                                        <div className='identity'><span>Female</span><span>Wife</span></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" id="proRSA2" name="checked" />
                                    <div className='name'>
                                        <label for="proRSA2">Taofeeqah Bello</label>
                                        <div className='identity'><span>Female</span><span>Wife</span></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" id="proRSA3" name="checked" />
                                    <div className='name'>
                                        <label for="proRSA3">Taofeeqah Bello</label>
                                        <div className='identity'><span>Female</span><span>Wife</span></div>
                                    </div>
                                </div>


                            </div>
                            <div className='navButtton' style={{ margin: "15px 0px 10px 0px" }}>
                                <button onClick={() => setbeneficiary(false)} className='pop' >Add Beneficiary <IoMdAddCircleOutline className='icon' /></button>
                            </div>
                            <div className='navButtton' style={{ marginBottom: "30px" }}>
                                <NavLink to=" " className="modal-nav" >Proceed</NavLink>
                            </div>
                        </form>
                    </div>
                </MainModal>
            </Interface>
        </div>
    )
}

export default CompactRsaDistribute