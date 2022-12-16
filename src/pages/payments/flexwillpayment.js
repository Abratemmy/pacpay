import React from 'react'
import Interface from '../../components/flexwillinterface/interface';
import { NavLink } from 'react-router-dom';
import Containerdesign from '../willproducts/pacContainer/containerdesign';

function Flexwillpayment() {
    return (
        <div>
            <div>
                <Interface>
                    <div className='willproduct-page'>
                        <Containerdesign name="PAC Flex Will">
                            <div className='subtitle'>Nature: </div>
                            <p>It consists of Bank Account, employmentBenefits and RSA Pension only, and the
                                target audience are Persons with just Bank Accounts and RSA as their main assets.
                            </p>

                            <div className='subtitle'>Features Of Fund:</div>

                            <div className='content-container'>
                                <div className='card'>
                                    <div className='first-content'>
                                        <div className='text text1'>Cost: <span className='span1'>NGN15,000</span></div>
                                        <div className='text'>Probate fee: <span >NGN10,000</span></div>
                                    </div>

                                    <div className='second-content'>
                                        <div className='text text1'>Administrative fee: <span>NGN5,000</span></div>
                                        <div className='text'>VAT: <span>NGN1,1250</span></div>
                                    </div>

                                    <div className='total' >
                                        <div className='text' style={{ background: "#e06b4128", width: "50%", padding: "2px 10px" }}>Total: <span className='span1'>NGN31,125</span></div>
                                    </div>
                                </div>

                                <div className='will-button'>
                                    <NavLink to="/book_an_appointment" className="will-container-nav">
                                        Make Payment
                                    </NavLink>
                                </div>
                            </div>
                        </Containerdesign>
                    </div>
                </Interface>
            </div>
        </div>
    )
}

export default Flexwillpayment