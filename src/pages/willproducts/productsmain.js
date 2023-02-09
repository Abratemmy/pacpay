import React, {useEffect } from 'react'
import Interface from '../../components/flexwillinterface/interface';
import hiIcon from "../../assets/hiIcon.png";
import flexwillicon1 from "../../assets/flexwillicon1.png";
import flexwillicon2 from "../../assets/flexwillixon2.png";
import { useNavigate } from "react-router-dom";
import "./willproduct.css";
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser, getProduct } from '../actions/auth';

function Productsmain() {
    const dispatch = useDispatch();
    const loggedinUser = useSelector((state) => state.loggedInUserReducer);
    
    // const [loggedinUser, setLoggedInUser] = useState(loggedIn)
    console.log("loggedin", loggedinUser)

    const getProductss = useSelector((state)=> state.getProductReducer);
    console.log("get products", getProductss.data)

    useEffect(() => {
       localStorage.removeItem("Users")
        dispatch(getLoggedInUser());
        dispatch(getProduct())
    }, [ dispatch])

    const navigate = useNavigate();
    const selectedItem  =(item)=>{
        if( item=== "FlexWill"){
            navigate("/pac_flex_will_main")
        }
        else if(item === "ProWill"){
            navigate("/pac_pro_will_main")
        }
        else if(item === "CompactWill"){
            navigate("/pac_compact_will_main")
        }
        else if(item === "TestamentaryTrust"){
            navigate("/pac_testamentary_trust_main")
        }
        else{
            console.log("No will product")
        }
    }


    return (
        <div>
            <Interface>

                <div className='will-products'>
                    <div className='contaiiner'>
                        <div className='top'>
                            <div className='name'>Hi {loggedinUser?.data?.firstName} <img src={hiIcon} alt="" /> </div>
                          
                            <div className='subtitle'>Will Products</div>
                        </div>

                        <div className='text'>Kindly select the appropriate will of
                            your choice before your personal information
                        </div>

                        <div className='row g-5' style={{ marginTop: "20px" }}>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className="will-container">
                                    <button onClick={()=>{selectedItem("FlexWill")}} className='will-nav'>
                                        <div className='image'><img src={flexwillicon1} alt="" /></div>
                                        <div className='will-content'>
                                            <div className='title'>PAC Flex Will</div>
                                            <p>Kindly select the appropriate will of your choice</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className="will-container">
                                    <button onClick={()=>{selectedItem("ProWill")}}  className='will-nav will-nav-darkblue'>
                                        <div className='image'><img src={flexwillicon2} alt="" /></div>
                                        <div className='will-content'>
                                            <div className='title'>PAC Pro Will</div>
                                            <p>Kindly select the appropriate will of your choice</p>
                                        </div>
                                    </button >
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 order-lg-2'>
                                <div className="will-container">
                                    <button onClick={()=>{selectedItem("CompactWill")}}  className='will-nav'>
                                        <div className='image'><img src={flexwillicon1} alt="" /></div>
                                        <div className='will-content'>
                                            <div className='title'>PAC Compact Will</div>
                                            <p>Kindly select the appropriate will of your choice</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 order-lg-1'>
                                <div className="will-container">
                                    <button onClick={()=>{selectedItem("TestamentaryTrust")}}  className='will-nav will-nav-darkblue'>
                                        <div className='image'><img src={flexwillicon1} alt="" /></div>
                                        <div className='will-content'>
                                            <div className='title'>PAC Testamentary Trust</div>
                                            <p>Click on the product to introduce Trust into your will</p>
                                        </div>
                                    </button>
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