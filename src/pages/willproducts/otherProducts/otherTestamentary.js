import React, { useEffect } from 'react';
import Interface from '../../../components/flexwillinterface/interface'
import Containerdesign from '../pacContainer/containerdesign';
import flexwillicon1 from "../../../assets/flexwillixon2.png";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/auth';


function OtherTestamentary() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.getProductReducer);
    // const product = products?.data[1]?.fund

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])


    return (
        <div className='otherWill-product'>
            {products?.data?.length ?
                <Interface>
                    <div className='willproduct-page'>
                        <Containerdesign img={flexwillicon1} name="PAC Testamentary Trust" link="true">
                            <div className='subtitle'>Nature: </div>
                            <p>
                                This product is a probate Will, and the target audience are persons who wants to introduce a Trust into their Will.
                            </p>

                            <div className='subtitle'>Features Of Fund:</div>

                            <div className='card'>
                                <div className='container'>
                                    <div className='text trust'>Cost: <span>The Will be determined on a case by case basis</span></div>

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

export default OtherTestamentary