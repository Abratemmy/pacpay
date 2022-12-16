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
import Landing from "../../landing/landing";


function Personalform() {

    const [buttonpopup, setbuttonpopup] = useState(false);
    const popup = () => {
        setbuttonpopup(!buttonpopup)
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
        spouse: {
            spousetitle: "",
            spouseName: "",
            spousebirth: "",
            spousephone: "",
            spouseresState: "",
            spouseresCity: "",
            spouseresAddress: ""
        },
        child: [{
            childtitle: "",
            childName: "",
            childbirth: "",
            childphone: "",
            childGender: "",
            childresCity: "",
            childresAddress: ""
        }],
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
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState(initialState);



    const clear = () => {
        setFormData(initialState)

    }

    const FormTitles = ["Personal Info", "Your Spouse", "Your Children", "Children's Guardian", "Burial wishes"];
    const topicTitles = ["Personal Information", "Your Spouse Details", "Your Child Details", "Financial Guardian", "Burial Details"];
    const PageDisplay = () => {
        if (page === 0) {
            return <Personal formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <Spouse formData={formData} setFormData={setFormData} />;
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


    return (
        <div className="Personal">
            <Interface>
                <div className="Personal-container">
                    <div className="top">
                        <span><NavLink to="/pac_flex-will_product_main" className="personal-nav">
                            <MdArrowBackIosNew className='icon' />
                            <MdArrowBackIosNew className='icon icon2' /></NavLink>
                        </span>

                        <div className='text'>{topicTitles[page]}</div>
                    </div>
                    <div className="form" style={{ paddingTop: "40px" }}>
                        <div className="flex justify-between stepperss">
                            {FormTitles?.map((step, i) => (
                                <div className=""
                                    key={i}
                                >
                                    <div className="step">
                                        {i - 1 < page ? (<div className="color"> {i + 1}</div>) : i + 1}
                                        <p className="text-gray-500">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="form-container">
                            <div className="body">{PageDisplay()}</div>
                            <div className="footer">
                                <div className="skip">
                                    {
                                        (page == 1) || page == 2 || page == 4 ? (
                                            <div className="skip-content">
                                                PS: You don’t have a child? you can <span><button
                                                    onClick={() => {
                                                        if (page === FormTitles.length - 1) {
                                                            console.log(formData);
                                                            navigate("/flex_personal_success")
                                                        }
                                                        else {
                                                            setPage((currPage) => currPage + 1);
                                                        }
                                                    }}
                                                >Skip</button></span>
                                            </div>
                                        ) : ""
                                    }

                                </div>

                                {page === 1 ? (
                                    <div className="">

                                        <button onClick={popup}>Save and Proceed</button>
                                    </div>
                                ) :
                                    page === 3 ? <div>
                                        {guardianSecondShow ? <button onClick={() => {
                                            if (page === FormTitles.length - 1) {
                                                console.log(formData);
                                                navigate("/flex_personal_success")
                                            }
                                            else {
                                                setbuttonpopup(false)
                                                setPage((currPage) => currPage + 1);
                                            }
                                        }}>Save And Proceed</button> :

                                            <button onClick={guardianSecondDisplay}>Save And Proceed</button>
                                        }

                                    </div>
                                        :
                                        (
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
                                            >
                                                {page === FormTitles.length - 1 ? "Save And Proceed" : "Save And Proceed"}
                                            </button>
                                        )}
                            </div>

                            {buttonpopup && (
                                <div className="personal-modal">
                                    <div className="personal-modalContainer">
                                        <div className="line"><img src={line} alt="" /></div>

                                        <div className="close"><button onClick={() => setbuttonpopup(false)}>X</button></div>

                                        <div className="emoji"><img src={happy} alt="" /></div>

                                        <div className="title">WAIT!</div>
                                        <div className="text">Do you want to upload another Spouse’s details? </div>

                                        <div className="personalmodal-btn">
                                            <button className="first"
                                                onClick={() => {
                                                    setbuttonpopup(false);
                                                    // clear();
                                                    console.log("formdata", formData);
                                                    console.log("dghh")
                                                }}
                                            >Yes</button>
                                            <button className="second"
                                                onClick={() => {
                                                    if (page === FormTitles.length - 1) {
                                                        console.log(formData);
                                                        navigate("/flex_personal_success")
                                                    }
                                                    else {
                                                        setbuttonpopup(false)
                                                        navigate("/spouse_review")
                                                        // setPage((currPage) => currPage + 1);
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