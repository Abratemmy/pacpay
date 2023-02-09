import React, { useState } from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import Interface from '../../../components/flexwillinterface/interface';

function TrustSpouseReview({ setToggleState, reviewNext, addAnotherSpouse, spouselist, editSpouseDetail }) {
    const [popupcontent, setPopupcontent] = useState({});
    const [popuptoggle, setpopuptoggle] = useState(false);

    const [getindex, setGetIndex] = useState(0)

    const changeContent = (spouse, index) => {
        console.log("index", index);
        console.log("spouse", spouse)
        setGetIndex(index)
        setPopupcontent(spouse);
        setpopuptoggle(!popuptoggle);
        if (styling === null) {
            setStyling({ position: "fixed" })
        } else {
            setStyling(null)
        }
    }

    //we do not want scrolling when modal is up, so we create a dynamic styleing with usestate hook
    const [styling, setStyling] = useState(null);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)

    const updateSpouse = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            const value = popupcontent;
            console.log("values", value)
            editSpouseDetail(value, getindex);
            setLoading(false);
            setpopuptoggle(false)

        }, 2000);

        console.log("popupcontent", popupcontent)
    }


    return (
        <div >
            <div className='container'>
                <div className="top">
                    <span><button onClick={setToggleState} className="personal-nav">
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' /></button>
                        <span className='top-title'>Spouses' Lists</span>
                    </span>

                    <div className='tiny-text'>You have access to add multiple witnesses by just clicking the plus button</div>
                </div>

                <div className="">
                    <div className='container'>
                        {spouselist?.spouse?.map((spouse, index) => {
                            return (
                                <div key={index} style={{ position: "relative" }} className="Personal-list-content">
                                    <div className='list-content-top'>
                                        <div className={(index % 2) ? 'even image' : 'image'}>{spouse.fullName.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}</div>
                                        <div className='name'>{spouse.fullName}</div>
                                    </div>

                                    <button onClick={() => changeContent(spouse, index)} className={(index % 2) ? "even nav-btn" : "nav-btn"} style={{ border: "none" }}>Edit</button>

                                    <div className='row list-content-row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Date Of Birth</label>
                                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span className='textdisplay'>{spouse.dateOfBirth}</span></div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Phone number</label>
                                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span className='textdisplay'>{spouse.mobile}</span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>


                <div className='Personal-list-button'>
                    <button onClick={addAnotherSpouse} className="general-btn">Add another spouse</button>
                    <button onClick={reviewNext} className="general-btn general-btn1">Save and Proceed</button>
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

                            <span className='top-title'>Update Spouse</span>
                        </span>

                        {/* e.stoppropagation prevent the changeContent function to have effect on the pop_up_body class */}
                        <div className='edit-content'>

                            <form onSubmit={updateSpouse}>
                                <div className='pop_up_content'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='viewContent'>
                                                <div className='label'>Full Name</div>
                                                <div className='inputBox'>
                                                    <span><BsPersonSquare className="icon" /> </span>
                                                    <input type="text" className='name' value={popupcontent.fullName}
                                                        onChange={(e) => {
                                                            setPopupcontent({ ...popupcontent, fullName: e.target.value });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='viewContent'>
                                                <div className='label'>Phone Number</div>
                                                <div className='inputBox'>
                                                    <span><BsPersonSquare className="icon" /> </span>
                                                    <input type="text" className='name' value={popupcontent.mobile}
                                                        onChange={(e) => {
                                                            setPopupcontent({ ...popupcontent, mobile: e.target.value });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='viewContent'>
                                                <div className='label'>Date of Birth</div>
                                                <div className='inputBox'>
                                                    <span><BsPersonSquare className="icon" /> </span>
                                                    <input type="text" className='name' value={popupcontent.dateOfBirth}
                                                        onChange={(e) => {
                                                            setPopupcontent({ ...popupcontent, dateOfBirth: e.target.value });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='submit'>
                                        {
                                            loading ?
                                                <button type="submit" className="general-btn" disabled style={{ border: "0", background: "var(--lightblue)" }} >
                                                    <div className='loader-spinner'>
                                                        <div className="spinner-border spinner-border-sm" role="status">
                                                            <span className="sr-only"></span>
                                                        </div>
                                                        <span >Updating...</span>
                                                    </div>
                                                </button>
                                                :
                                                <>  {success && (<div className='success'>Spouse list updated successfully</div>)}
                                                    <button type="submit" className='general-btn'>Update</button>
                                                </>
                                        }
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </Interface>
            </div>)}


        </div>
    )
}

export default TrustSpouseReview