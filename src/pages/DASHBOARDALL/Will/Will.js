import React, { useState, useEffect } from 'react';
import DashboardInterface from '../dashboardInterface';
import Navbar from '../Navbar/Navbar';
import "./will.css";
import icon1 from "../../../assets/flexwillicon1.png";
import icon2 from "../../../assets/flexwillixon2.png";
import willimage from "../../../assets/willimage.png"
import { NavLink } from 'react-router-dom';
import balloon from "../../../assets/balloon.png";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getUserWill } from '../../actions/auth';

function Will() {
    const [successDownload, setSuccessDownload] = useState(true)

    const dispatch = useDispatch();
    const will = useSelector((state) => state.willReducer);

    useEffect(() => {
        localStorage.setItem('fromDashboard', JSON.stringify("true"));
        dispatch(getUserWill())
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div>
            <DashboardInterface>
                <Navbar name="Will Package" />

                <div className='will'>
                    <div className='first-session'>
                        <div className='top'>
                            {
                                successDownload ? <div>
                                    <span><img src={willimage} alt="image" /></span>

                                    <div className='subtitle'>You’ve made your payment for PAC WILL package!</div>
                                    <p>Click on the link below to download your receipt</p>

                                    <div className='button'><button onClick={() => setSuccessDownload(false)}>Download</button> </div>
                                </div> : <div>
                                    <div className='download-bg'>
                                        <div className='balloon'><img src={balloon} alt="" /></div>
                                        <span><img src={icon1} alt="" /></span>
                                        <div className='title'>WILLSBOSS </div>
                                        <p>Kindly select the appropriate will of your choice Kindly select the appropriate will of your choice</p>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                    <hr />

                    <div className='other'>
                        <div className='title'>Other Will Package</div>

                        {
                            (will?.data?.product === "63899d66a8bb8ed74726bc13") ?
                                <div className='row gy-4'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <NavLink to="/prowill_other" className="will-nav">
                                            <div className='will-content'>
                                                <div className='image'><img src={icon1} alt="" /></div>
                                                <div className='text'>PAC Pro Will
                                                    <span>Kindly select the appropriate will of your choice</span>
                                                </div>

                                            </div>
                                        </NavLink>
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <NavLink to="/compactwill_other" className="will-nav">
                                            <div className='will-content will-content1'>
                                                <div className='image'><img src={icon2} alt="" /></div>
                                                <div className='text'>PAC Compact Will
                                                    <span>Kindly select the appropriate will of your choice</span>
                                                </div>

                                            </div>
                                        </NavLink>
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <NavLink to="/testamentarywill_other" className="will-nav">
                                            <div className='will-content '>
                                                <div className='image'><img src={icon1} alt="" /></div>
                                                <div className='text'>PAC Testamentary Trust
                                                    <span>Kindly select the appropriate will of your choice</span>
                                                </div>

                                            </div>
                                        </NavLink>
                                    </div>
                                </div>

                                : (will?.data?.product === "6389ccf5fe1ddde2b630042c") ? (
                                    <div className='row gy-4'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <NavLink to="/flexwill_other" className="will-nav">
                                                <div className='will-content'>
                                                    <div className='image'><img src={icon1} alt="" /></div>
                                                    <div className='text'>PAC Flex Will
                                                        <span>Kindly select the appropriate will of your choice</span>
                                                    </div>

                                                </div>
                                            </NavLink>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <NavLink to="/compactwill_other" className="will-nav">
                                                <div className='will-content will-content1'>
                                                    <div className='image'><img src={icon2} alt="" /></div>
                                                    <div className='text'>PAC Compact Will
                                                        <span>Kindly select the appropriate will of your choice</span>
                                                    </div>

                                                </div>
                                            </NavLink>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <NavLink to="/testamentarywill_other" className="will-nav">
                                                <div className='will-content '>
                                                    <div className='image'><img src={icon1} alt="" /></div>
                                                    <div className='text'>PAC Testamentary Trust
                                                        <span>Kindly select the appropriate will of your choice</span>
                                                    </div>

                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                )
                                    : (will?.data?.product === "6389e036ec63dfe55b4ba888") ? (
                                        <div className='row gy-4'>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <NavLink to="flexwill_other" className="will-nav">
                                                    <div className='will-content'>
                                                        <div className='image'><img src={icon1} alt="" /></div>
                                                        <div className='text'>PAC Flex Will
                                                            <span>Kindly select the appropriate will of your choice</span>
                                                        </div>

                                                    </div>
                                                </NavLink>
                                            </div>

                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <NavLink to="/prowill_other" className="will-nav">
                                                    <div className='will-content will-content1'>
                                                        <div className='image'><img src={icon2} alt="" /></div>
                                                        <div className='text'>PAC Pro Will
                                                            <span>Kindly select the appropriate will of your choice</span>
                                                        </div>

                                                    </div>
                                                </NavLink>
                                            </div>

                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <NavLink to="/testamentarywill_other" className="will-nav">
                                                    <div className='will-content '>
                                                        <div className='image'><img src={icon1} alt="" /></div>
                                                        <div className='text'>PAC Testamentary Trust
                                                            <span>Kindly select the appropriate will of your choice</span>
                                                        </div>

                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    )
                                        : (
                                            <div className='row gy-4'>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <NavLink to="/flexwill_other" className="will-nav">
                                                        <div className='will-content '>
                                                            <div className='image'><img src={icon1} alt="" /></div>
                                                            <div className='text'>PAC Flex Will
                                                                <span>Kindly select the appropriate will of your choice</span>
                                                            </div>

                                                        </div>
                                                    </NavLink>
                                                </div>

                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <NavLink to="/prowill_other" className="will-nav">
                                                        <div className='will-content'>
                                                            <div className='image'><img src={icon1} alt="" /></div>
                                                            <div className='text'>PAC Pro Will
                                                                <span>Kindly select the appropriate will of your choice</span>
                                                            </div>

                                                        </div>
                                                    </NavLink>
                                                </div>

                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <NavLink to="/compactwill_other" className="will-nav">
                                                        <div className='will-content will-content1'>
                                                            <div className='image'><img src={icon2} alt="" /></div>
                                                            <div className='text'>PAC Compact Will
                                                                <span>Kindly select the appropriate will of your choice</span>
                                                            </div>

                                                        </div>
                                                    </NavLink>
                                                </div>


                                            </div>
                                        )
                        }


                    </div>
                </div>
            </DashboardInterface>
        </div>
    )
}

export default Will