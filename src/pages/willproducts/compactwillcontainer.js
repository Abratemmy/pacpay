import React, { useEffect } from 'react';
import Interface from '../../components/flexwillinterface/interface'
import Containerdesign from './pacContainer/containerdesign';
import flexwillicon1 from "../../assets/flexwillicon1.png";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../actions/auth';

function Compactwillcontainer() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.getProductReducer);
    // const product = products?.data[1]?.fund

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div>
            {products?.data?.length ?
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
                                        <div className='text text1'>Cost:<span className='note'>(Price is subject to <br />review of individual circumstances.<br /> Minimum cost of):<span className='span1'>NGN{products?.data[1]?.fund?.cost}</span></span> </div>
                                        <div className='text'>Probate fee: <span >NGN{products?.data[1]?.fund?.probateFee}</span></div>
                                    </div>

                                    <div className='second-content'>
                                        <div className='text text1'>Administrative fee: <span>NGN{products?.data[1]?.fund?.adminFee}</span></div>
                                        <div className='text'>VAT: <span>NGN{products?.data[1]?.fund?.vat}</span></div>
                                    </div>

                                    <div className='total' >
                                        <div className='text' style={{ background: "#e06b4128", width: "63%", padding: "2px 10px" }}>Total: <span className='span1'>NGN{products?.data[1]?.fund?.totalFee}</span></div>
                                    </div>
                                </div>

                                <div className='general-btn'>
                                    <NavLink to="/compact_personal_landing" className="genaral-navlink">
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

export default Compactwillcontainer