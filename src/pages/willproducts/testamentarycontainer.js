import React from 'react'
import Interface from '../../components/flexwillinterface/interface'
import Containerdesign from './pacContainer/containerdesign';
import flexwillicon1 from "../../assets/flexwillicon1.png";
import { NavLink } from 'react-router-dom';

function Testamentarycontainer() {
    return (
        <div>
            <Interface>
                <div className='willproduct-page'>
                    <Containerdesign img={flexwillicon1} name="PAC Testamentary Trust">
                        <div className='subtitle'>Nature: </div>
                        <p>
                            This product is a probate Will, and the target audienceare persons who wants to introduce a Trust into their will.
                        </p>

                        <div className='subtitle'>Features Of Fund:</div>

                        <div className='content-container'>
                            <div className='card'>
                                <div className='first-content'>
                                    <div className='text text1' style={{ paddingTop: "50px" }}>Cost: <br /><span className='note'>The will be determine on a case by case basis <br />review of individual circumstances.<br /></span> </div>
                                    {/* <div className='text'>Probate fee: <span >NGN10,000</span></div> */}
                                </div>

                                {/* <div className='second-content'>
                                    <div className='text text1'>Administrative fee: <span>NGN5,000</span></div>
                                    <div className='text'>VAT: <span>NGN6, 125</span></div>
                                </div> */}

                                {/* <div className='total' >
                                    <div className='text' style={{ background: "#e06b4128", width: "50%", padding: "2px 10px" }}>Total: <span className='span1'>NGN230,250</span></div>
                                </div> */}
                            </div>

                            <div className='general-btn'>
                                <NavLink to="/trust_personal_landing" className="genaral-navlink">
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

export default Testamentarycontainer