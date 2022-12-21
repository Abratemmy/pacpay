import React from 'react';
import { BiMessageAltDetail, BiMessageDots } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

function Burial({ formData, setFormData }) {
    return (
        <div className="personal-info-container">

            <div className='row'>
                <div className='text'>It can be your wish to be burried according to the Christian religion and rights.</div>
                <div className='text'>Kinldy fill the requirement below to proceed</div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>You wish to be buried at?</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                            <textarea rows="5" placeholder="Describe" className="textarea"
                                value={formData.burial}
                                onChange={(e) => {
                                    setFormData({ ...formData, burial: e.target.value });
                                }}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Refreshment sha be funded from the</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BiMessageDots className='icon' /></i>
                            <textarea rows="5" placeholder="Describe" className="textarea"
                                value={formData.refreshment}
                                onChange={(e) => {
                                    setFormData({ ...formData, refreshment: e.target.value });
                                }}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="text">I direct that the total cost of my burial shall not exceed the inflation-adjusted equivalent sum of...</div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='input-container'>
                        <label>Amount</label>
                        <div class="inner-addon left-addon">
                            <i class="glyphicon glyphicon-user"><BsPersonSquare className='icon' /></i>
                            <input type="text" placeholder="0.00"
                                value={formData.amount}
                                onChange={(e) => {
                                    setFormData({ ...formData, amount: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'></div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className="input-container-check">
                        <input type="checkbox" id="burial" />
                        <label for="burial">I direct that my burial expense which includes vault procurement, casket purchase, service</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burial