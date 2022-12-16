import React from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import hiIcon from "../../../assets/hiIcon.png";
import "./containerdesign.css";

function Containerdesign({ children, name, img }) {
    return (
        <div className='' >

            <div className='product-type-page' style={{ position: "relative", height: "100vh" }}>
                <div className='first'>
                    <div className='top'>
                        <span><NavLink to="/will_products" className="will-nav">
                            <MdArrowBackIosNew className='icon' />
                            <MdArrowBackIosNew className='icon icon2' /></NavLink>
                        </span>

                        <div className='name'>Hi Name <img src={hiIcon} alt="" /></div>
                    </div>

                    <div className='middle'>
                        <div className='text'>Name: <span>{name}</span></div>
                        <div className='image'><img src={img} /></div>
                    </div>
                </div>

                <div className='product-type-container'>
                    {/* the product-type-container css is in interface.csss */}
                    <div className='content'>
                        {children}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Containerdesign