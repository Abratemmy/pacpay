import React, { useState, useEffect } from "react";
import "./form.css";
import Personal from "../../../components/PersonalForm/personal.js"
import Children from "../../../components/PersonalForm/children.js";
import Spouse from "../../../components/PersonalForm/spouse.js";
import Guardian from "../../../components/PersonalForm/guardian.js";
import Burial from "../../../components/PersonalForm/burial.js"
import Interface from "../../../components/flexwillinterface/interface";
import { TiTick } from "react-icons/ti";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import line from "../../../assets/line.png"
import happy from "../../../assets/happy.png"
import { BsArrowUpRight } from "react-icons/bs";
import validation from "../../../components/PersonalForm/personalValidation";

function Personalform() {

    const [spousebuttonpopup, setspousebuttonpopup] = useState(false);
    const spousepopup = () => {
        setspousebuttonpopup(!spousebuttonpopup)
    }

    const [childpopupbtn, setchildpopupbtn] = useState(false);
    const childpopup = () => {
        setchildpopupbtn(!childpopupbtn)
    }

    const [guardianFirstShow, setguardianFirstShow] = useState(true);
    const [guardianSecondShow, setguardianSecondShow] = useState(false);

    const guardianSecondDisplay = () => {
        setguardianFirstShow(false)
        setguardianSecondShow(true)
    }

    const initialState = {
        title: "",
        firstName: "",
        lastName: "",
        middleName: "",
        resState: "",
        resCity: "",
        resAddress: "",

        spouse: [],

        children: [],
        guardianName: "",
        guardianEmail: "",
        guardianPhone: "",
        guardianYears: "",
        guardianAddress: "",

        phyguardianName: "",
        phyguardianEmail: "",
        phyguardianPhone: "",
        phyguardianAddress: "",
        burial: "",
        refreshment: "",
        amount: "",
    }

    const [spouse, setSpouse] = useState({
        spousetitle: "",
        spouseName: "",
        spousebirth: "",
        spousephone: "",
        spouseresState: "",
        spouseresCity: "",
        spouseresAddress: "",
    })

    const clearSpouse = () => setSpouse({
        spousetitle: "",
        spouseName: "",
        spousebirth: "",
        spousephone: "",
        spouseresState: "",
        spouseresCity: "",
        spouseresAddress: "",
    })

    const [children, setChildren] = useState({
        childtitle: " ",
        childName: " ",
        childbirth: " ",
        childphone: " ",
        childGender: " ",
        childresCity: " ",
        childresAddress: " ",
    })
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState(initialState);


    const FormTitles = ["Personal Info", "Your Spouse", "Your Children", "Children's Guardian", "Burial wishes"];
    const topicTitles = ["Personal Information", "Your Spouse Details", "Your Child Details", "Financial Guardian", "Burial Details"];
    const PageDisplay = () => {
        if (page === 0) {
            return <Personal formData={formData} setFormData={setFormData} errors={errors} />;
        } else if (page === 1) {
            return <Spouse spouse={spouse} setSpouse={setSpouse} />;
        } else if (page === 2) {
            return <Children formData={formData} setFormData={setFormData} />;
        } else if (page === 3) {
            return (<Guardian formData={formData} setFormData={setFormData}
                guardianFirstShow={guardianFirstShow} guardianSecondShow={guardianSecondShow} />
            );
        } else {
            return <Burial formData={formData} setFormData={setFormData} />;
        }
    };

    const { page: page_id = 1 } = useParams();

    useEffect(() => {
        console.log("pageId", page_id - 1);
        setPage(page_id - 1)
    }, [page_id])

    const [errors, setErrors] = useState({})



    return (
        <div className="Personal">
            <Interface>
                <div className="Personal-container">
                    <div className="top">
                        {page === 0 ? (
                            <span><NavLink to="/flex_will_personal_landing" className="personal-nav">
                                <MdArrowBackIosNew className='icon' />
                                <MdArrowBackIosNew className='icon icon2' /></NavLink>
                            </span>
                        ) : (
                            <button
                                disabled={page === 0}
                                onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                }}
                                style={{ color: "var(--blueColor)", border: "none", background: "none" }}
                            >
                                <MdArrowBackIosNew className='icon' />
                                <MdArrowBackIosNew className='icon icon2' />
                            </button>
                        )}

                        <div className='text'>{topicTitles[page]}</div>

                        <button onClick={() => console.log("formdata", formData)}>checkupdate</button>
                    </div>
                    <div className="form" style={{ paddingTop: "40px" }}>
                        <div className="flex justify-between stepperss">
                            {FormTitles?.map((step, i) => (
                                <div className="stepping"
                                    key={i}
                                >
                                    <div className="progressbar"></div>
                                    <div className="step">
                                        {i - 1 < page ? (<div className="personal-iteration active"> {i + 1}</div>) : <div className="personal-iteration"> {i + 1} </div>}

                                    </div>
                                    <p className="text-gray-500">{step}</p>
                                </div>
                            ))}
                        </div>

                        <div className="form-container">
                            <div className="body">{PageDisplay()}</div>
                            <div className="footer">

                                <div className="skip">
                                    {
                                        (page === 1) ? (
                                            <div className="skip-content">
                                                PS: You don’t have a spouse? you can <span><button
                                                    className="skip-btn"
                                                    onClick={() => {
                                                        if (page === FormTitles.length - 1) {
                                                            console.log(formData);
                                                            navigate("/flex_personal_success")
                                                        }
                                                        else {
                                                            setPage((currPage) => currPage + 1);
                                                        }
                                                    }}
                                                >Skip <BsArrowUpRight className="icon" /> </button></span>
                                            </div>
                                        ) :

                                            page === 2 ? (
                                                <div className="skip-content">
                                                    PS: You don’t have a child? you can <span><button
                                                        className="skip-btn"
                                                        onClick={() => {
                                                            if (page === FormTitles.length - 1) {
                                                                console.log(formData);
                                                                navigate("/flex_personal_success")
                                                            }
                                                            else {
                                                                setPage((currPage) => currPage + 1);
                                                            }
                                                        }}
                                                    >Skip <BsArrowUpRight className="icon" /> </button></span>
                                                </div>
                                            ) :

                                                page === 4 ? (
                                                    <div className="skip-content">
                                                        PS: You don’t want any burial refreshment? you can <span><button
                                                            className="skip-btn"
                                                            onClick={() => {
                                                                if (page === FormTitles.length - 1) {
                                                                    console.log(formData);
                                                                    navigate("/flex_personal_success")
                                                                }
                                                                else {
                                                                    setPage((currPage) => currPage + 1);
                                                                }
                                                            }}
                                                        >Skip <BsArrowUpRight className="icon" /> </button></span>
                                                    </div>
                                                ) :

                                                    ""
                                    }

                                </div>

                                {page === 1 ? (
                                    <div className="">
                                        <button onClick={spousepopup} className="general-btn">Save and Proceed</button>
                                    </div>
                                ) : page === 2 ? (
                                    <div className="">
                                        <button onClick={childpopup} className="general-btn">Save and Proceed</button>
                                    </div>
                                ) :
                                    page === 3 ? (
                                        <div>
                                            {guardianSecondShow ? <button onClick={() => {
                                                if (page === FormTitles.length - 1) {
                                                    console.log(formData);
                                                    navigate("/flex_personal_success")
                                                }
                                                else {
                                                    setspousebuttonpopup(false)
                                                    setPage((currPage) => currPage + 1);
                                                }
                                            }} className="general-btn">Save And Proceed</button> :

                                                <button onClick={guardianSecondDisplay} className="proceed-btn">Save And Proceed</button>
                                            }
                                        </div>
                                    ) :
                                        page === 4 ? (
                                            <button
                                                onClick={() => {
                                                    if (page === FormTitles.length - 1) {
                                                        console.log(formData);
                                                        navigate("/flex_personal_success");
                                                    }
                                                    else {

                                                        setPage((currPage) => currPage + 1);
                                                    }
                                                }}
                                                className="general-btn"
                                            >
                                                {page === FormTitles.length - 1 ? "Save And Proceed" : "Save And Proceed"}
                                            </button>
                                        )
                                            :
                                            (
                                                <button
                                                    onClick={() => {
                                                        const formError = validation(formData);
                                                        setErrors(formError);

                                                        if (Object.keys(formError).length > 0) {
                                                            console.log("error")
                                                        } else {
                                                            if (page === FormTitles.length - 1) {
                                                                console.log(formData);
                                                                navigate("/flex_personal_success");
                                                            }
                                                            else {

                                                                setPage((currPage) => currPage + 1);
                                                            }
                                                        }
                                                    }}
                                                    className="general-btn"
                                                >
                                                    {page === FormTitles.length - 1 ? "Save And Proceed" : "Save And Proceed"}
                                                </button>
                                            )}
                            </div>

                            {spousebuttonpopup && (
                                <div className="personal-modal">
                                    <div className="personal-modalContainer">
                                        <div className="line"><img src={line} alt="" /></div>

                                        <div className="close"><button onClick={() => setspousebuttonpopup(false)}>X</button></div>

                                        <div className="emoji"><img src={happy} alt="" /></div>

                                        <div className="title">WAIT!</div>
                                        <div className="text">Do you want to upload another Spouse’s details? </div>

                                        <div className="personalmodal-btn">
                                            <button className="first"
                                                onClick={() => {
                                                    setspousebuttonpopup(false);
                                                    let formDataCopy = JSON.parse(JSON.stringify(formData))
                                                    formDataCopy.spouse[formDataCopy.spouse.length] = spouse

                                                    setFormData(formDataCopy)
                                                    console.log("formDataCopy", formDataCopy)
                                                    clearSpouse();
                                                    console.log("formdatadata123456", formData);
                                                }}
                                            >Yes</button>
                                            <button className="second"
                                                onClick={() => {

                                                    setspousebuttonpopup(false);
                                                    let formDataCopy = JSON.parse(JSON.stringify(formData))
                                                    formDataCopy.spouse[formDataCopy.spouse.length] = spouse

                                                    setFormData(formDataCopy)
                                                    console.log("formDataCopy", formDataCopy)
                                                    clearSpouse();
                                                    console.log("formdatadata123456", formData);

                                                    if (page === FormTitles.length - 1) {
                                                        console.log(formData);
                                                        navigate("/flex_personal_success")
                                                    }
                                                    else {
                                                        setspousebuttonpopup(false);

                                                        navigate("/spouse_review")
                                                    }
                                                }}
                                            >No</button>
                                        </div>
                                    </div>
                                </div>
                            )}


                            {childpopupbtn && (
                                <div className="personal-modal">
                                    <div className="personal-modalContainer">
                                        <div className="line"><img src={line} alt="" /></div>

                                        <div className="close"><button onClick={() => setchildpopupbtn(false)}>X</button></div>

                                        <div className="emoji"><img src={happy} alt="" /></div>

                                        <div className="title">WAIT!</div>
                                        <div className="text">Do you want to upload another Child’s details? </div>

                                        <div className="personalmodal-btn">
                                            <button className="first"
                                                onClick={() => {
                                                    setchildpopupbtn(false);
                                                    // clear();
                                                    console.log("formdata", formData);
                                                }}
                                            >Yes</button>
                                            <button className="second"
                                                onClick={() => {
                                                    if (page === FormTitles.length - 1) {
                                                        console.log(formData);
                                                        navigate("/flex_personal_success")
                                                    }
                                                    else {
                                                        setspousebuttonpopup(false)
                                                        navigate("/child_review")
                                                    }
                                                }}
                                            >No</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


            </Interface >
        </div >
    );
}

export default Personalform;