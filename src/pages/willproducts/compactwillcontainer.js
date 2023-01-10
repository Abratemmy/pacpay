import React from 'react';
import Interface from '../../components/flexwillinterface/interface'
import Containerdesign from './pacContainer/containerdesign';
import flexwillicon1 from "../../assets/flexwillicon1.png";
import { NavLink } from 'react-router-dom';

function Compactwillcontainer() {
    return (
        <div>
            <Interface>
                <div className='willproduct-page'>
                    <Containerdesign img={flexwillicon1} name="PAC Compact Will">
                        <div className='subtitle'>Nature: </div>
                        <p>
                            Ideal for Asset Value pf over N25m. It consists of Bank Account, RSa Pension, Real Estate, Shares, Life Insurance,
                            Investments and Personal chattels. Price is subject to review of individual circumstances, and the te\arget audience are
                            Persons with Assets Value of N25m and above.
                        </p>

                        <div className='subtitle'>Features Of Fund:</div>

                        <div className='content-container'>
                            <div className='card'>
                                <div className='first-content'>
                                    <div className='text text1'>Cost:<span className='note'>(Price is subject to <br />review of individual circumstances.<br /> Minimum cost of):<span className='span1'>NGN250,000</span></span> </div>
                                    <div className='text'>Probate fee: <span >NGN10,000</span></div>
                                </div>

                                <div className='second-content'>
                                    <div className='text text1'>Administrative fee: <span>NGN5,000</span></div>
                                    <div className='text'>VAT: <span>NGN6, 125</span></div>
                                </div>

                                <div className='total' >
                                    <div className='text' style={{ background: "#e06b4128", width: "50%", padding: "2px 10px" }}>Total: <span className='span1'>NGN230,250</span></div>
                                </div>
                            </div>

                            <div className='general-btn'>
                                <NavLink to="/compact_personal_landing" className="genaral-navlink">
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

export default Compactwillcontainer