import React, { useState } from 'react'

import Interface from '../../../../components/flexwillinterface/interface'
import Topasset from '../interfaceasset/topasset';
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs"
import Popup from '../../../../components/Popup/popup';
import { useNavigate, NavLink } from 'react-router-dom';
import line from "../../../../assets/line.png"
import happy from "../../../../assets/happy.png"

function Distributeassetcash() {
    const [buttonPopup, setButtonPopup] = useState(false);

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

    const [assetmodal, setassetmodal] = useState(false);


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
            setassetmodal(true)
        }
    }

    return (
        <div>
            <Interface>
                <Topasset name="Distribute Assets" link="asset_cashin_bank_flex_will" />
                <div className='flexwillpage' >
                    <div className='top'>
                        <p className='left'>The distributed asset must accumulate to a total of 100% before you can successfully continue.</p>
                        <div className='right'>
                            <button className='add-beneficiary'>< IoMdAddCircleOutline className="icon" /> Add multiple Beneficiary </button>

                            <button to="" className="button-nav" onClick={() => setButtonPopup(true)}>Edit Beneficiary</button>
                        </div>
                    </div>

                    <div className='asset-middle'>
                        <div className='title'>
                            <span>Beneficiary</span>
                            <span>Percentage(100%)</span>
                        </div>

                        <div className='asset1'>
                            <div className='content'>
                                <div className='text'><AiFillStar className="icon" /><span>Taofeeqah Bello</span></div>
                                <div className='input'><input type="text" className='input' /></div>
                            </div>
                            <div className='content'>
                                <div className='text'><AiFillStar className="icon" /><span>Taofeeqah Bello</span></div>
                                <div className='input'><input type="text" className='input' /></div>
                            </div>
                            <div className='content'>
                                <div className='text'><AiFillStar className="icon" /><span>Taofeeqah Bello</span></div>
                                <div className='input'><input type="text" className='input' /></div>
                            </div>
                            <div className='content'>
                                <div className='text'><AiFillStar className="icon" /><span>Taofeeqah Bello</span></div>
                                <div className='input'><input type="text" className='input' /></div>
                            </div>


                            <form onSubmit={handleSubmit} style={{ position: "relative" }}>
                                <div className='description'>
                                    <label>Description</label>
                                    <div className="input-group ">
                                        <textarea className="form-control assetinputfield" name="description" onChange={handleChange} placeholder="description" rows="5"></textarea>
                                    </div>
                                    {errors ? <p className='error'> {errors.description}</p> : ""}
                                </div>

                                <div className='asset-btn'>
                                    <div className='asset1last'>
                                        <div className='ps'>PS: You don’t want to share your asset now? you can <button onClick={() => setassetmodal(true)} style={{ background: "transparent", textDecoration: "none", border: "none" }}><span>Skip <BsArrowUpRight className="icon" /> </span></button> </div>
                                        <div className='asset-button'><button type="submit" className="asset-nav" style={{ border: "none" }}>Submit</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>



                    </div>
                </div>

                <div className=''>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <div className='popup-container'>
                            <div className='popup-content'>
                                <form className="asset-line">
                                    <div className="form-group asset1">
                                        <input type="checkbox" id="name1" />
                                        <label for="name1" className='name'>Taofeeqah Bello
                                            <div className='identity'><span>Female</span><span>Wife</span></div>
                                        </label>

                                    </div>
                                    <hr />
                                    <div className="form-group asset1">
                                        <input type="checkbox" id="name1" />
                                        <label for="name1" className='name'>Taofeeqah Bello
                                            <div className='identity'><span>Female</span><span>Wife</span></div>
                                        </label>

                                    </div>
                                    <hr />
                                    <div className="form-group asset1">
                                        <input type="checkbox" id="name1" />
                                        <label for="name1" className='name'>Taofeeqah Bello
                                            <div className='identity'><span>Female</span><span>Wife</span></div>
                                        </label>

                                    </div>
                                    <hr />


                                    <div className='button'>
                                        <button type="submit" className='nav-link' style={{ border: "none" }}><span>ADD BENEFICIARY <IoMdAddCircleOutline className='icon' /> </span></button>
                                        <button type="submit" className='nav-link' style={{ border: "none" }}><span>Proceed</span></button>
                                    </div>



                                </form>
                            </div>
                        </div>
                    </Popup>

                </div>

                {assetmodal && (
                    <div className='new-assetmodal'>
                        <div className="personal-modal">
                            <div className="personal-modalContainer">
                                <div className="line"><img src={line} alt="" /></div>

                                <div className="close"><button onClick={() => setassetmodal(false)}>X</button></div>

                                <div className="emoji"><img src={happy} alt="" /></div>

                                <div className="title">WAIT!</div>
                                <div className="text">Do you want to upload another bank details? </div>

                                <div className="personalmodal-btn">
                                    <NavLink to="/flex_cashinbank_landing" className="first assetModal-nav"
                                    >Yes</NavLink>
                                    <NavLink to="/flex_will_distribute_main_asset" className="second assetModal-nav"

                                    >No</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Interface>
        </div>
    )
}

export default Distributeassetcash