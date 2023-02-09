import React, {useEffect} from 'react';
import Interface from '../../../components/flexwillinterface/interface'
import Containerdesign from '../pacContainer/containerdesign';
import flexwillicon1 from "../../../assets/flexwillixon2.png";
import { useDispatch, useSelector } from 'react-redux';
import {  getProduct } from '../../actions/auth';

function OtherCompact() {

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
                    <Containerdesign img={flexwillicon1} name="PAC Compact Will" link="true">
                        <div className='subtitle'>Nature: </div>
                        <p>
                        Ideal for Asset Value of over N25m. It consists of Bank Account, RSA Pension, 
                        Real Estate, Shares, Life Insurance, Investments and Personal Chattels.• Price is subject to review of individual circumstances, 
                        and the target audience are Persons with Assets Value of N25m and above.
                        </p>

                        <div className='subtitle'>Features Of Fund:</div>

                        <div className='card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-3 col-sm-6'>
                                        <div className='text text1'>Cost:<span className='note'>(Price is subject to review of individual circumstances.Minimum Cost of):</span> <span className='span1'>NGN{products?.data[1]?.fund?.cost}</span></div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6'>
                                        <div className='text'>Probate fee: <span >NGN{products?.data[1]?.fund?.probateFee}</span></div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6'>
                                        <div className='text text1'>Administrative fee: <span>NGN{products?.data[1]?.fund?.adminFee}</span></div> 
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6'>
                                        <div className='text'>VAT: <span>NGN{products?.data[1]?.fund?.vat}</span></div>
                                    </div>
                                </div>
                                <div className='other-willtotal' >
                                    <div className='text' style={{ background: "#e06b4128", padding: "2px 10px" }}>Total: <span className='span1'>NGN{products?.data[1]?.fund?.totalFee}</span></div>
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

export default OtherCompact