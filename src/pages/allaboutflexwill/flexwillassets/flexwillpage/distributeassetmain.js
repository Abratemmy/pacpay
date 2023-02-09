import React, { useState } from 'react'
import assetrsa from "../../../../assets/assetrsa.png";
import assetcash from "../../../../assets/assetcash.png";
import { NavLink } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import Interface from '../../../../components/flexwillinterface/interface';
import { BsPersonSquare } from 'react-icons/bs';

function Distributeassetmain({ setToggleState, cashlist, editCashDetail }) {

    const [popupcontent, setPopupcontent] = useState({});
    const [popuptoggle, setpopuptoggle] = useState(false);
    const [styling, setStyling] = useState(null);

    const [getindex, setGetIndex] = useState(0)

    const changeContent = (cash, index) => {
        console.log("index", index);
        console.log("spouse", cash)
        setGetIndex(index)
        setPopupcontent(cash);
        setpopuptoggle(!popuptoggle);
        if (styling === null) {
            setStyling({ position: "fixed" })
        } else {
            setStyling(null)
        }
    }

    const [showToggle, setshowToggle] = useState(2);
    const toggleTab = (index) => {
        setshowToggle(index);
    }

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)

    const updateCashDetails = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            const value = popupcontent;
            console.log("values", value)
            editCashDetail(value, getindex);
            setLoading(false);
            setpopuptoggle(false)

        }, 2000);

        console.log("popupcontent", popupcontent)
    }

    return (
        <>
            <div className='distribute-2'>
                <div className='top'>
                    <span className="personal-nav" onClick={setToggleState}>
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' />
                    </span>

                    <div className='text'>Below are the available asset you have</div>
                </div>

                <div className='distributeAssets'>
                    <div className="bloc-tabs disable-bloc">
                        <div className={showToggle === 1 ? "tabs active-tabs" : "tabs done"} onClick={() => toggleTab(1)}><span><img src={assetrsa} alt="" /> </span>RSA</div>
                        <div className={showToggle === 2 ? "tabs active-tabs " : "tabs done"} onClick={() => toggleTab(2)}><span><img src={assetcash} alt="" /></span> Cash in Bank</div>
                    </div>

                    <div className="content-tabs" style={{ marginTop: "40px" }}>
                        <div className={showToggle === 1 ? "content active-content" : "content"}>
                            <div className='distributeasset-content'>

                                <div className='text'>
                                    <span><img src={assetrsa} alt="" /></span>
                                    <div>
                                        <div className='title'>{cashlist?.rsa?.penNumber}</div>
                                        <p>You have completed the first stage of assets</p>
                                    </div>
                                </div>

                                <div className='action'>
                                    <span>Edit</span>
                                    <span>Delete</span>
                                </div>
                            </div>

                            <div className='' style={{ textAlign: "right", paddingTop: "60px", marginTop: "30px" }}>
                                <NavLink to="/flex_assets_success" className="asset-nav1" style={{ border: "none" }}>
                                    Complete
                                </NavLink>
                            </div>
                        </div>

                        <div className={showToggle === 2 ? "content active-content" : "content"}>

                            {cashlist?.cashInBank?.map((cash, index) => {
                                return (
                                    <div className='distributeasset-content' key={index}>
                                        <div className='text'>
                                            <span><img src={assetcash} alt="" /></span>
                                            <div>
                                                <div className='title'>{cash.bankName}</div>
                                                <p>You have completed the first stage of assets </p>
                                            </div>
                                        </div>

                                        <div className='action'>
                                            <span onClick={() => changeContent(cash, index)}>Edit</span>
                                            <span>Delete</span>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className='button' style={{ textAlign: "right", paddingTop: "60px", marginTop: "30px" }}>
                                <NavLink to="/flex_assets_success" className="asset-nav1" style={{ border: "none" }}>
                                    Add Cash In Bank
                                </NavLink>

                                <button type="submit" className="asset-nav1" style={{ border: "none" }}>
                                    Complete
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {popuptoggle && (<div className='pop_up_container' onClick={changeContent}>
                <Interface>
                    <div className='Editpop_up_body' onClick={(e) => e.stopPropagation()}>

                        <span className='top'>
                            <button onClick={() => setpopuptoggle(!popuptoggle)} className="personal-nav">
                                <MdArrowBackIosNew className='icon' />
                                <MdArrowBackIosNew className='icon icon2' />
                            </button>

                            <span className='top-title'>Update Cas in Bank</span>
                        </span>

                        {/* e.stoppropagation prevent the changeContent function to have effect on the pop_up_body class */}
                        <div className='edit-content'>

                            <>
                                <div className='pop_up_content'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='viewContent'>
                                                <div className='label'>Bank Name</div>
                                                <div className='inputBox'>
                                                    <span><BsPersonSquare className="icon" /> </span>
                                                    <input type="text" className='name' value={popupcontent.bankName}
                                                        onChange={(e) => {
                                                            setPopupcontent({ ...popupcontent, bankName: e.target.value });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='viewContent'>
                                                <div className='label'>BVN</div>
                                                <div className='inputBox'>
                                                    <span><BsPersonSquare className="icon" /> </span>
                                                    <input type="text" className='name' value={popupcontent.bvn}
                                                        onChange={(e) => {
                                                            setPopupcontent({ ...popupcontent, bvn: e.target.value });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='submit' onClick={updateCashDetails}>
                                        {
                                            loading ?
                                                <span className="general-btn" disabled style={{ border: "0", background: "var(--lightblue)" }} >
                                                    <div className='loader-spinner'>
                                                        <div className="spinner-border spinner-border-sm" role="status">
                                                            <span className="sr-only"></span>
                                                        </div>
                                                        <span >Updating...</span>
                                                    </div>
                                                </span>
                                                :
                                                <>  {success && (<div className='success'>Spouse list updated successfully</div>)}
                                                    <span className='general-btn'>Update</span>
                                                </>
                                        }
                                    </div>
                                </div>
                            </>

                        </div>

                    </div>
                </Interface>
            </div>)}
        </>
    )
}

export default Distributeassetmain