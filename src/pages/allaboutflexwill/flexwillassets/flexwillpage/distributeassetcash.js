import React, { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';


function Distributeassetcash({ children, cashData, setCashData, errors, toggleBeneficiaryModal, toggleState }) {

    return (
        <div className='sharing-asset' >
            <div className='top'>
                <span className="personal-nav" onClick={toggleState} >
                    <MdArrowBackIosNew className='icon' />
                    <MdArrowBackIosNew className='icon icon2' />
                </span>

                <div className='text'>Distribute Assets</div>
            </div>
            <div className='distributeTop'>
                <p className='left'>The distributed asset must accumulate to a total of 100% before you can successfully continue.</p>
                <div className='right'>
                    <span to="" className="button-nav" onClick={toggleBeneficiaryModal}>Edit Beneficiary</span>
                </div>
            </div>

            <div className='asset-middle'>
                <div className='sharePercentage'>
                    <div className='header'>
                        <span>Beneficiary</span>
                        <span>Percentage(100%)</span>
                    </div>

                    <div className=''>
                        {children}
                    </div>
                </div>

                <div className='description'>
                    <label>Description</label>
                    <div className="input-group ">
                        <textarea className="form-control assetinputfield" name="description" placeholder="description" rows="5"
                            value={cashData.description}
                            onChange={(e) => {
                                setCashData({ ...cashData, description: e.target.value });
                            }}
                        ></textarea>
                    </div>
                    {errors ? <p className='error'> {errors.description}</p> : ""}
                </div>

            </div>
        </div>
    )
}

export default Distributeassetcash