import React, { useState, useEffect } from 'react'
import Interface from '../../components/flexwillinterface/interface';
import hiIcon from "../../assets/hiIcon.png";
import flexwillicon1 from "../../assets/flexwillicon1.png";
import flexwillicon2 from "../../assets/flexwillixon2.png";
import { NavLink } from "react-router-dom";
import "./willproduct.css";
import { useLocation } from 'react-router-dom';

function Productsmain() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user)
    // {user.result.name.charAt(0)}
    const location = useLocation()
    useEffect(() => {
        const token = user?.token;

        //jwt
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    return (
        <div>
            <Interface>

                <div className='will-products'>
                    <div className='contaiiner'>
                        <div className='top'>
                            {user ? (
                                <div className='name'>Hi {user.result.name} <img src={hiIcon} alt="" /> </div>
                            ) : null}
                            <div className='subtitle'>Will Products</div>
                        </div>

                        <div className='text'>Kindly select the appropriate will of
                            your choice before your personal information
                        </div>

                        <div className='row g-5' style={{ marginTop: "20px" }}>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="will-container">
                                    <NavLink to="/pac_flex_will_main" className='will-nav'>
                                        <div className='image'><img src={flexwillicon1} alt="" /></div>
                                        <div className='will-content'>
                                            <div className='title'>PAC Flex Will</div>
                                            <p>Kindly select the appropriate will of your choice</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="will-container">
                                    <NavLink to="/pac_pro_will_main" className='will-nav will-nav-darkblue'>
                                        <div className='image'><img src={flexwillicon2} alt="" /></div>
                                        <div className='will-content'>
                                            <div className='title'>PAC Pro Will</div>
                                            <p>Kindly select the appropriate will of your choice</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-2'>
                                <div className="will-container">
                                    <NavLink to="/pac_compact_will_main" className='will-nav'>
                                        <div className='image'><img src={flexwillicon1} alt="" /></div>
                                        <div className='will-content'>
                                            <div className='title'>PAC Compact Will</div>
                                            <p>Kindly select the appropriate will of your choice</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-1'>
                                <div className="will-container">
                                    <NavLink to="/pac_testamentary_trust_main" className='will-nav will-nav-darkblue'>
                                        <div className='image'><img src={flexwillicon1} alt="" /></div>
                                        <div className='will-content'>
                                            <div className='title'>PAC Testamentary Trust</div>
                                            <p>Click on the product to introduce Trust into your will</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Interface>
        </div>
    )
}

export default Productsmain