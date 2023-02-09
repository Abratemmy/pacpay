import React, { useState, useEffect } from 'react';
import DashboardInterface from '../dashboardInterface';
import Navbar from '../Navbar/Navbar';
import "./dashboard.css";
import personal from "../../../assets/flex-personal.png";
import executor from "../../../assets/flex-executor.png";
import assets from "../../../assets/flex-assets.png";
import { NavLink } from 'react-router-dom';

function Dashboard() {
    const [toggle, setToggle] = useState(false);
    const showToggle = (index) => {
        setToggle(!toggle(index))
    }

    useEffect(()=>{
      localStorage.removeItem('fromDashboard')
    }, [])
    return (
        <div>
            <DashboardInterface>
                <Navbar name="Dashboard" />
                <div className='dashboard'>
                    <div className='title'>Welcome To Trustees</div>


                    <div className='dashboard-card'>
                        <div className='row gx-5'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='card'>
                                    <div className='dashboard-content'>
                                        <div className='image-container'><img src={personal} alt="" /></div>
                                        <div className='name'>
                                            <span>Personal Information</span>
                                            <NavLink to="/view_personal" className="button">...</NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='card'>
                                    <div className='dashboard-content'>
                                        <div className='image-container image-container1'><img src={executor} alt="" /></div>
                                        <div className='name'>
                                            <span>Executors</span>
                                            <NavLink to="/view_executor" className="button">...</NavLink>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='card'>
                                    <div className='dashboard-content'>
                                        <div className='image-container'><img src={assets} alt="" /></div>
                                        <div className='name'>
                                            <span>Assets</span>
                                            <button className="button">...</button>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </DashboardInterface>
        </div>
    )
}

export default Dashboard