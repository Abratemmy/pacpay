import React from 'react';
import "./topasset.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Topasset({ name, backBtn }) {
    return (
        <div className='topasset'>
            <div className='container'>
                <div className='top'>
                    <span><NavLink to="/flex_will_assets_landing" className="will-nav" style={{ background: "none", border: "none" }}>
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' /></NavLink>
                    </span>

                    <div className='name'>{name}</div>
                </div>
            </div>
        </div>
    )
}

export default Topasset