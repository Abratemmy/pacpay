import React from 'react';
import Interface from '../../components/flexwillinterface/interface'
import Containerdesign from './pacContainer/containerdesign';
import flexwillicon2 from "../../assets/flexwillixon2.png";
import { NavLink } from 'react-router-dom';

function Prowillcontainer() {
    return (
        <div>
            <Interface>
                <div className='willproduct-page'>
                    <Containerdesign img={flexwillicon2} name="PAC Pro Will">
                        <div className='subtitle'>Nature: </div>
                        <p>IDeal for Asset Value of N25m and below. It consists of Bank Account, RSA Pension, Real Estate, shares, Life Insurance,
                            Investments and Personal and the target audience are Persons with Assets Value of N25m and below
                        </p>

                        <div className='subtitle'>Features Of Fund:</div>

                        <div className='content-container'>
                            <div className='card'>
                                <div className='first-content'>
                                    <div className='text text1'>Cost: <span className='span1'>NGN70,000</span></div>
                                    <div className='text'>Probate fee: <span >NGN10,000</span></div>
                                </div>

                                <div className='second-content'>
                                    <div className='text text1'>Administrative fee: <span>NGN5,000</span></div>
                                    <div className='text'>VAT: <span>NGN5, 250</span></div>
                                </div>

                                <div className='total' >
                                    <div className='text' style={{ background: "#e06b4128", width: "50%", padding: "2px 10px" }}>Total: <span className='span1'>NGN90,250</span></div>
                                </div>
                            </div>

                            <div className='will-button'>
                                <NavLink to="/pro_personal_landing" className="will-container-nav">
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

export default Prowillcontainer