import React, {useEffect} from 'react'
import DashboardInterface from '../dashboardInterface'
import Navbar from '../Navbar/Navbar';
import "./viewpersonal.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getUserWill } from '../../actions/auth';
import { NavLink } from 'react-router-dom';

function ViewExecutor() {
    const dispatch = useDispatch();
    const will= useSelector((state)=> state.willReducer);
    const willPersonal= will?.data?.personalInformation
    const willExecutor = will?.data?.executors
    console.log("executor", typeof (willExecutor?.isPac))
    console.log("get will", will)


    //to get product below
    const product = useSelector((state)=> state.getProductReducer); 
    console.log("helllfof", product)
    useEffect(() => {
        localStorage.setItem('fromDashboard', JSON.stringify("true"));
        dispatch(getUserWill())
        dispatch(getProduct())
    }, [ dispatch])

  return (
    <div>
        <DashboardInterface>
            {!will?.data  ? (
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
                ): (
                    <><Navbar name="Dashboard" />
                    
                    <div className='viewPersonal'>
                        <div className='subtitle'>Executor</div>

                        <div className='details'>
                            <div className='executor-top'>
                                <div className='top'>
                                    <div className='image'>{willPersonal.firstName.charAt(0)}{willPersonal.lastName.charAt(0)}</div>
                                    <div className='name'>{willPersonal.firstName} {willPersonal.lastName} <span>Account verified</span></div>
                                </div>

                                <div>
                                {
                                    (will?.data?.product === "63899d66a8bb8ed74726bc13") ? <div className='navLink'><NavLink to="/flex_will_executor_landing"  className='executorEdit'>Edit</NavLink></div> :
                                    (will?.data?.product === "6389ccf5fe1ddde2b630042c") ? <div className='navLink'><NavLink to="/pro_executor_landing"  className='executorEdit'>Edit</NavLink></div> :
                                    (will?.data?.product === "6389e036ec63dfe55b4ba888") ? <div className='navLink'><NavLink to="/compact_executor_landing" className='executorEdit'>Edit</NavLink></div> :
                                    <div className='navLink'><NavLink to="/trust_executor_landing"  className='executorEdit'>Edit</NavLink></div>
                                }
                                </div>
                            </div>

                            <div className='executors'>
                                { (willExecutor.isPac === true) ? <div className='executor'>You have choosen the PAC Trustees limited as 
                                your executor</div> :
                                    <div className='executor'>You assign your own personal executor</div>
                                }
                                

                                
                                
                            </div>
                        </div>
                    </div>
                    
                    </>
                )}
        </DashboardInterface>
    </div>
  )
}

export default ViewExecutor