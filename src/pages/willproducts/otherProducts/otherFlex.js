import React, {useEffect} from 'react';
import Interface from '../../../components/flexwillinterface/interface'
import Containerdesign from '../pacContainer/containerdesign';
import flexwillicon1 from "../../../assets/flexwillicon1.png";
import { useDispatch, useSelector } from 'react-redux';
import {  getProduct } from '../../actions/auth';

import "./otherproduct.css"

function OtherFlex() {
    const dispatch= useDispatch();
    const products = useSelector((state)=> state.getProductReducer);
    // const product = products?.data[1]?.fund

    useEffect(() => {
         dispatch(getProduct())
     }, [ dispatch])

  return (
    <div className='otherWill-product'>
        {products?.data?.length ?
            <Interface>
                <div className='willproduct-page'>
                    <Containerdesign img={flexwillicon1} name="PAC Pro Will" link="true">
                        <div className='subtitle'>Nature: </div>
                        <p>
                        Ideal for Asset Value of N25m and below. It consists of Bank Account, RSA Pension, Real Estate, Shares, Life Insurance, Investments and 
                        Personal and the target audience are Persons with Assets Value of N25m and below.
                        </p>

                        <div className='subtitle'>Features Of Fund:</div>

                        <div className='card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-3 col-sm-6'>
                                        <div className='text text1'>Cost:<span className='span1'>NGN{products?.data[3]?.fund?.cost}</span></div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6'>
                                        <div className='text'>Probate fee: <span >NGN{products?.data[3]?.fund?.probateFee}</span></div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6'>
                                        <div className='text text1'>Administrative fee: <span>NGN{products?.data[3]?.fund?.adminFee}</span></div> 
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6'>
                                        <div className='text'>VAT: <span>NGN{products?.data[3]?.fund?.vat}</span></div>
                                    </div>
                                </div>
                                <div className='other-willtotal' >
                                    <div className='text' style={{ background: "#e06b4128", padding: "2px 10px" }}>Total: <span className='span1'>NGN{products?.data[3]?.fund?.totalFee}</span></div>
                                </div>
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

export default OtherFlex