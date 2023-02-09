import React, { useState } from 'react'


function Distributeasset1({ children, rsaData, setRsaData, errors, toggleBeneficiaryModal }) {

    return (
        <div className='sharing-asset' >
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
                        <textarea className="form-control assetinputfield" name="description" placeholder="Description" rows="5"
                            value={rsaData.description}
                            onChange={(e) => {
                                setRsaData({ ...rsaData, description: e.target.value });
                            }}
                        ></textarea>
                    </div>
                    {errors ? <p className='error'> {errors.description}</p> : ""}
                </div>

            </div>
        </div>


    )
}

export default Distributeasset1