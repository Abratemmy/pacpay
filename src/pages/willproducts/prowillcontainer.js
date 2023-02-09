import React, { useEffect } from 'react';
import Interface from '../../components/flexwillinterface/interface'
import Containerdesign from './pacContainer/containerdesign';
import flexwillicon2 from "../../assets/flexwillixon2.png";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../actions/auth';

function Prowillcontainer() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.getProductReducer);


    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div>
            {products?.data?.length ?
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
                                        <div className='text text1'>Cost: <span className='span1'>NGN{products?.data[2]?.fund?.cost}</span></div>
                                        <div className='text'>Probate fee: <span >NGN{products?.data[2]?.fund?.probateFee}</span></div>
                                    </div>

                                    <div className='second-content'>
                                        <div className='text text1'>Administrative fee: <span>NGN{products?.data[2]?.fund?.adminFee}</span></div>
                                        <div className='text'>VAT: <span>NGN{products?.data[2]?.fund?.vat}</span></div>
                                    </div>

                                    <div className='total' >
                                        <div className='text' style={{ background: "#e06b4128", width: "63%", padding: "2px 10px" }}>Total: <span className='span1'>NGN{products?.data[2]?.fund?.totalFee}</span></div>
                                    </div>
                                </div>

                                <div className=' general-btn'>
                                    <NavLink to="/pro_personal_landing" className="genaral-navlink">
                                        Proceed
                                    </NavLink>
                                </div>
                            </div>
                        </Containerdesign>
                    </div>
                </Interface>
                : (
                    <div className="will-loading" style={{ paddingBottom: "30px", textAlign: "center", margin: "40px 0px", color: "green" }}>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default Prowillcontainer