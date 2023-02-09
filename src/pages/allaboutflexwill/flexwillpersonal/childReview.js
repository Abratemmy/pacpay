import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import MainModal from '../../../components/mainModal/MainModal';
import Interface from '../../../components/flexwillinterface/interface';

function ChildReview({ setToggleState, addAnotherChild, reviewNext, childlist, editChildrenDetail, editFinancialDetail }) {
    const [popupcontent, setPopupcontent] = useState({});
    const [financial, setFinancial] = useState({})
    const [popuptoggle, setpopuptoggle] = useState(false);

    const [getindex, setGetIndex] = useState(0)

    const changeContent = (children, index) => {
        console.log("index", index);
        console.log("children", children)
        setGetIndex(index)
        setPopupcontent(children);
        setFinancial(children.financialGuardian)
        setpopuptoggle(!popuptoggle);
        if (styling === null) {
            setStyling({ position: "fixed" })
        } else {
            setStyling(null)
        }
    }
    console.log("fina", financial)

    const [styling, setStyling] = useState(null);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)

    const updateChildren = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            const value = popupcontent;
            console.log("values", value)
            editChildrenDetail(value, getindex);
            setLoading(false);
            setpopuptoggle(false)
        }, 2000);

        console.log("popupcontent", popupcontent)
    }

    const [loading1, setLoading1] = useState(false);
    const updateFinancial = (e) => {
        e.preventDefault();
        setLoading1(false);
        setTimeout(() => {
            const value = financial;
            console.log("values", value)
            editFinancialDetail(value);
            setLoading1(false);
            setpopuptoggle(false)
        }, 2000);

    }
    return (
        <div>

            <div className=' container'>
                <div className="top">
                    <span><button onClick={setToggleState} className="personal-nav">
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' /></button>
                        <span className='top-title'>Childs' Lists</span>
                    </span>


                    <div className='tiny-text'>You have access to add multiple witnesses by just clicking the plus button</div>
                </div>

                <div className="">
                    <div className='container'>

                        {childlist?.children?.map((children, index) => {
                            return (
                                <div key={index} style={{ position: "relative" }} className="Personal-list-content">
                                    <div className='list-content-top'>
                                        <div className={(index % 2) ? 'even image' : 'image'}>{children.fullName.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}</div>
                                        <div className='name'>{children.fullName} <span>{children.title}</span></div>
                                    </div>

                                    <button onClick={() => changeContent(children, index)} className={(index % 2) ? "even nav-btn" : "nav-btn"} style={{ border: "none" }}>Edit</button>

                                    <div className='row list-content-row' style={{ position: "relative" }}>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Date Of Birth</label>
                                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span>{children.dateOfBirth}</span></div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Phone number</label>
                                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span>{children.mobile}</span></div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Gender</label>
                                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span>{children.gender}</span></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12' style={{ position: "relative" }}>
                                            <div className='list-input'>
                                                <label>Contact Address</label>
                                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span>{children.contactAddress}</span></div>
                                            </div>

                                        </div>
                                        <div className='blur'>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>




                <div className='Personal-list-button'>
                    <button onClick={addAnotherChild} className="general-btn">Add another child</ button>
                    <button onClick={reviewNext} className="general-btn general-btn1" style={{ border: "none" }}>Save and Proceed</button>
                </div>
            </div>

            {popuptoggle && (
                <div className='pop_up_container' onClick={changeContent}>
                    <Interface>
                        <div className='Editpop_up_body' onClick={(e) => e.stopPropagation()}>

                            <span className='top'>
                                <button onClick={() => setpopuptoggle(!popuptoggle)} className="personal-nav">
                                    <MdArrowBackIosNew className='icon' />
                                    <MdArrowBackIosNew className='icon icon2' />
                                </button>

                                <span className='top-title'>Update Children</span>
                            </span>

                            <div className='edit-content'>
                                <form onSubmit={updateChildren}>
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
                                                    <div className='label'>Contact Address</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <input type="text" className='name' value={popupcontent.contactAddress}
                                                            onChange={(e) => {
                                                                setPopupcontent({ ...popupcontent, contactAddress: e.target.value });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='viewContent'>
                                                    <div className='label'>Gender</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /></span>
                                                        <select name="title" placeholder='Select an option'
                                                            value={popupcontent.gender}
                                                            onChange={(e) => {
                                                                setPopupcontent({ ...popupcontent, gender: e.target.value });
                                                            }}
                                                        >
                                                            <option >Select Option </option>
                                                            <option value="m"><i className="fa fa-email"></i>Male</option>
                                                            <option value="f"><i className="fa fa-home"></i>Female</option>

                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className='viewContent'>
                                                    <div className='label'>Disability</div>
                                                    <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /></span>
                                                        <select name="title" placeholder='Select an option'
                                                            value={popupcontent.isDisabled}
                                                            onChange={(e) => {
                                                                setPopupcontent({ ...popupcontent, isDisabled: e.target.value });
                                                            }}
                                                        >
                                                            <option >Select Option </option>
                                                            <option value="false">false</option>
                                                            <option value="true"><i class="fa fa-email"></i>true</option>

                                                        </select>
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
                                                        <>  {success && (<div className='success'>Child list updated successfully</div>)}
                                                            <button type="submit" className='general-btn'>Update</button>
                                                        </>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>

                            {popupcontent.financialGuardian && <div className='edit-content'>
                                <form onSubmit={updateFinancial}>
                                    <div className='pop_up_content'>
                                        <div className='row'>
                                            {popupcontent.financialGuardian && (<div className='title'>Financial guardian </div>)}

                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='viewContent'>
                                                    {popupcontent.financialGuardian && <div className='label'>Full Name</div>}
                                                    {popupcontent.financialGuardian && <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <input type="text" className='name' value={financial.fullName}
                                                            onChange={(e) => {
                                                                setFinancial({ ...financial, fullName: e.target.value });
                                                            }}
                                                        />
                                                    </div>}
                                                </div>
                                            </div>

                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <div className='viewContent'>
                                                    {popupcontent.financialGuardian && <div className='label'>Duration</div>}
                                                    {popupcontent.financialGuardian && <div className='inputBox'>
                                                        <span><BsPersonSquare className="icon" /> </span>
                                                        <input type="text" className='name' value={financial.duration}
                                                            onChange={(e) => {
                                                                setFinancial({ ...financial, duration: e.target.value });
                                                            }}
                                                        />
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='submit'>
                                        {
                                            loading1 ?
                                                <button type="submit" className="general-btn" style={{ border: "0", background: "var(--lightblue)" }} >
                                                    <div className='loader-spinner'>
                                                        <div className="spinner-border spinner-border-sm" role="status">
                                                            <span className="sr-only"></span>
                                                        </div>
                                                        <span >Updatinghh...</span>
                                                    </div>
                                                </button>
                                                :
                                                <>  {success && (<div className='success'>child financial guardian updated successfully</div>)}
                                                    <button type="submit" className='general-btn'>Update</button>
                                                </>
                                        }
                                    </div>
                                </form>
                            </div>}
                        </div>
                    </Interface>
                </div>
            )}

        </div>
    )
}

export default ChildReview