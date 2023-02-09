import React from 'react';
import { BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Burial({ setBurial, errors, burial }) {
    return (
        <div className="personal-info-container">

            <div className='row form-text'>
                <div className='text'>It can be your wish to be burried according to the Christian religion and rights.</div>
                <div className='text'>Kindly fill the requirement below to proceed</div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>You wish to be buried at?</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                            <textarea rows="4" placeholder="Describe" className="textarea"
                                value={burial.burialGround}
                                onChange={(e) => {
                                    setBurial({ ...burial, burialGround: e.target.value });
                                }}
                            ></textarea>
                        </div>
                        {errors.burialGround && <p className='error'> {errors.burialGround}</p>}
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Refreshment shall be funded from the</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                            <textarea rows="4" placeholder="Describe" className="textarea"
                                value={burial.refreshment}
                                onChange={(e) => {
                                    setBurial({ ...burial, refreshment: e.target.value });
                                }}
                            ></textarea>
                        </div>
                        {errors.refreshment && <p className='error'> {errors.refreshment}</p>}
                    </div>
                </div>

                <div className="text">I direct that the total cost of my burial shall not exceed the inflation-adjusted equivalent sum of...</div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Amount</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="number" placeholder="0.00"
                                value={burial.amount}
                                onChange={(e) => {
                                    setBurial({ ...burial, amount: e.target.value });
                                }}
                            />
                        </div>
                        {errors.amount && <p className='error'> {errors.amount}</p>}
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'></div>

                <div className='col-lg-6 col-md-6 col-sm-12' style={{ paddingBottom: "13px" }}>
                    <div className="checkbox-div">
                        <span className='spanCheck' style={{ position: "relative", top: "5px" }}><input type="checkbox" id="burial" name="burialcheck"
                        /></span>
                        <label for="burial" className="headerlabel" style={{ fontWeight: "normal" }}>I direct that my burial expense which includes vault procurement, casket purchase, service</label>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Burial