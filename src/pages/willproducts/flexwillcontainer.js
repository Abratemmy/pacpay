import React, { Fragment } from 'react'
import Interface from '../../components/flexwillinterface/interface'
import Containerdesign from './pacContainer/containerdesign';
import flexwillicon1 from "../../assets/flexwillicon1.png";
import { NavLink } from 'react-router-dom';

function Flexwillcontainer({ ispayment, setispayment }) {
    return (
        <div>
            <Interface>
                <div className='willproduct-page'>
                    <Containerdesign img={flexwillicon1} name="PAC Flex Will">
                        {ispayment && (
                            <h1 className=''>Payment metguuus</h1>
                        )}

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
                            {ispayment && (
                                <h1 className=''>Payment methios</h1>
                            )}

                            <div className='will-button'>
                                <NavLink to="/pac_flex-will_product_main" className="will-container-nav">
                                    proceed
                                </NavLink>
                            </div>
                        </div>
                    </Containerdesign>
                </div>
            </Interface>
        </div>
    )
}

export default Flexwillcontainer