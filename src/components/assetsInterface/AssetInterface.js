import React from 'react';
import "./Assetinterface.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function AssetInterface({ name, link }) {
    return (
        <div className='AssetInterface'>
            <div className='container'>
                <div className='top'>
                    <span><NavLink to={`/${link}`} className="will-nav">
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' /></NavLink>
                    </span>

                    <div className='name'>{name}</div>
                </div>
            </div>

        </div>
    )
}

export default AssetInterface