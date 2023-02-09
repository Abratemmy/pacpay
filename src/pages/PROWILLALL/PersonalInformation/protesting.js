import React, { useState, useEffect } from "react";
import Personal from "../../../components/PersonalForm/personal.js"
import Children from "../../../components/PersonalForm/children.js";
import Spouse from "../../../components/PersonalForm/spouse.js";
import Guardian from "../../../components/PersonalForm/guardian.js";
import Burial from "../../../components/PersonalForm/burial.js"
import Interface from "../../../components/flexwillinterface/interface";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import line from "../../../assets/line.png"
import happy from "../../../assets/happy.png"
import { BsArrowUpRight } from "react-icons/bs";
import validation from "../../../components/PersonalForm/personalValidation";
import spousevalidation from "../../../components/PersonalForm/spouseValidation";
import childvalidation from "../../../components/PersonalForm/childrenValidation";
import guardianvalidation from "../../../components/PersonalForm/guardianValidation";
import ProSpouseReview from "./spousereview";
import ProChildReview from "./childreview";
import Physicalguardian from "../../../components/PersonalForm/physicalguardian";
import phyguardianvalidation from "../../../components/PersonalForm/physicalValidation"
import burialvalidation from "../../../components/PersonalForm/burialValidation";
import {createPersonalinformation} from "../../actions/auth.js"
import { useDispatch, useSelector } from "react-redux";


function Propersonalinfo() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [spousebuttonpopup, setspousebuttonpopup] = useState(false);

    const spousepopup = () => {
        const spouseError = spousevalidation(spouse);
        setErrors(spouseError);
        if (Object.keys(spouseError).length > 0) {
            console.log("error")
        } else {
            setspousebuttonpopup(!spousebuttonpopup)
        }   
    }


    const spouseInitial = {
        title: "",
        fullName:"",
        dateOfBirth: "",
        mobile: "",
        contactAddress: "",
        city: "",
        state:""
    }
    const [spouse, setSpouse] = useState(spouseInitial);
    const clearSpouse = () => setSpouse(spouseInitial);

    const childInitial = {
        title: "",
        fullName: "",
        dateOfBirth: "",
        mobile: "",
        gender: "",
        city: "",
        contactAddress: "",
        guardianName: "",
        guardianEmail: "",
        guardianPhone: "",
        guardianYears: "",
        guardianAddress: "",
        phyguardianName: "",
        phyguardianEmail: "",
        phyguardianMobile: "",
        phyguardianAddress: "",
    }
    const [children, setChildren] = useState(childInitial)
    const clearChildren = () => setChildren(childInitial);

    const [childpopupbtn, setchildpopupbtn] = useState(false);
    
    const checkAge=()=> {
        const current = new Date().getFullYear();
        const year = children.dateOfBirth.split("-")[0]
        const age = current - year
        if(age >= 18){
            console.log("greater")
            setchildpopupbtn(!childpopupbtn)
        }
        else{
            console.log("less");
            setToggleState(4)
        }
    }
    const childpopup = () => {
        const childError = childvalidation(children);
        setErrors(childError);
        if (Object.keys(childError).length > 0) {
            console.log("error")
        } else {
            console.log(children)
            checkAge()
          
        } 
    }

    const guardian = ()=>{
        const guardianError = guardianvalidation(children);
        setErrors(guardianError);
        if (Object.keys(guardianError).length > 0) {
            console.log("error")
        } else {
            console.log(children)
            setToggleState(5)
      
        } 
    }

    const physicalguardian = ()=>{
        const phyError = phyguardianvalidation(children);
        setErrors(phyError);
        if (Object.keys(phyError).length > 0) {
            console.log("error")
        } else {
            console.log(children)
            setchildpopupbtn(!childpopupbtn)
      
        } 
    }

    const product = JSON.parse(localStorage.getItem("willProduct"))
    // console.log("product", product)
    const initialState = {
        title: "",
        firstName: "",
        lastName: "",
        middleName: "",
        state: "",
        city: "",
        contactAddress: "",
        spouse: [],

        children: [],
        burialGround: "",
        refreshment: "",
        amount: "",
        burialcheck:"",
        product:product
    }
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState(initialState);

    const FormTitles = ["Personal Info", "Your Spouse", "Your Children", "Burial wishes"];
    const topicTitles = ["Personal Information", "Your Spouse Details", "Your Child Details", "Burial Details"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Personal formData={formData} setFormData={setFormData} errors={errors} />;
        } else if (page === 1) {
            return <Spouse spouse={spouse} setSpouse={setSpouse} errors={errors}/>;
        } else if (page === 2) {
            return <Children children={children} setChildren={setChildren} errors={errors}/>;
        } else {
            return <Burial formData={formData} setFormData={setFormData} errors={errors}/>;
        }
    };

    const { page: page_id = 1 } = useParams();

    useEffect(() => {
        console.log("pageId", page_id - 1);
        setPage(page_id - 1)
    }, [page_id])

    const [errors, setErrors] = useState({});

    const skipButton=()=>{
        if (page === FormTitles.length - 1) {
            navigate("/pro_personal_success")
        }
        else {
            setPage((currPage) => currPage + 1);
        }
    }

    const addAnotherSpouse=()=>{
        setToggleState(1)
        setspousebuttonpopup(false);
        let formDataCopy = JSON.parse(JSON.stringify(formData))
        formDataCopy.spouse[formDataCopy.spouse.length] = spouse
        setFormData(formDataCopy)
        clearSpouse();
        console.log("formdatadata123456", formData);
    }
    const addAnotherChild=()=>{
        setToggleState(1)
        setchildpopupbtn(false);
        let formDataCopy = JSON.parse(JSON.stringify(formData))
        formDataCopy.children[formDataCopy.children.length] = children
        setFormData(formDataCopy)
        clearChildren();
        console.log("formdatadata123456", formData);
    }

    const reviewNext=()=>{
        setToggleState(1)
        if (page === FormTitles.length - 1) {
            console.log(formData);
            navigate("/pro_personal_success")
        }
        else {
            
            setPage((currPage) => currPage + 1);
        }
    }

    const will = useSelector((state) => state.willReducer)
    // console.log("will", will)
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const burialError = burialvalidation(formData);
        setErrors(burialError);
        if (Object.keys(burialError).length > 0) {
            console.log("error")
        } else {
            setFormData(previousState => ({
                formData: [...previousState.formData, product]
            }));
            localStorage.setItem('PersonalInfo', JSON.stringify(formData));
            dispatch(createPersonalinformation(formData));
            console.log("submitted successfully");
            navigate("/pro_personal_success")
          
        } 
        
    }

    useEffect(() => {
        setFormData(formData)
        console.log("formdata", (formData));
    }, [formData])
    return (
        <div className="Personal">
            <Interface>
                <div className="Personal-container">

                    {
                        toggleState===2 || toggleState===3 ? ""
                        : (
                            <div>
                                <div className="top">
                                    {page === 0 ? (
                                        <span><NavLink to="/pro_personal_landing" className="personal-nav">
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

                                    {toggleState===4 ?(
                                        <div className='text'>Financial Guardian</div>
                                    ): toggleState===5 ?(
                                        <div className='text'>Physical Guardian</div>
                                    ):
                                    <div className='text'>{topicTitles[page]}</div>
                                    }
                                </div>

                                <div className="stepping-start" style={{paddingTop: "20px"}}>
                                    {FormTitles?.map((step, i) => (
                                        <div key={i} className={`step-item ${page === i  && "stepActive"} ${i < page && "complete"}`}>
                                            <div className="step">{i + 1}</div>
                                            <p className="">{step}</p>
                                        </div>
                                    ))}   
                                </div>

                                
                            </div>
                        )
                    }


                    <div className="Personal-bloc-tabs">
                        <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}><span> </span>Personal forms</div>
                        <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}><span></span> Spouse list</div>
                        <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}><span></span> Child's list</div>
                        <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}><span></span> Children guardian</div>
                        <div className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}><span></span> Physical guardian</div>

                    </div>

                    <div className={toggleState === 1 ? "PersonalFormcontent active-PersonalFormcontent" : "PersonalFormcontent"}>
                            
                        <form onSubmit={handleSubmit}>
                            
                            <div className="" style={{ paddingTop: "20px" }}>
                                
                                <div className="form-container">
                                    <div className="body">{PageDisplay()}</div>

                                    <div className="footer">
                                        <div className="skip">
                                            {
                                                (page === 1) ? (
                                                    <div className="skip-content">
                                                        PS: You don’t have a spouse? you can <span><button
                                                            className="skip-btn"
                                                            onClick={(skipButton)}
                                                        >Skip <BsArrowUpRight className="icon" /> </button></span>
                                                    </div>
                                                ) :

                                                    page === 2 ? (
                                                        <div className="skip-content">
                                                            PS: You don’t have a child? you can <span><button
                                                                className="skip-btn"
                                                                onClick={skipButton}
                                                            >Skip <BsArrowUpRight className="icon" /> </button></span>
                                                        </div>
                                                    ) :

                                                        page === 3 ? (
                                                            <div className="skip-content">
                                                                PS: You don’t want any burial refreshment? you can <span><button
                                                                    className="skip-btn"
                                                                    onClick={skipButton}
                                                                >Skip <BsArrowUpRight className="icon" /> </button></span>
                                                            </div>
                                                        ) :

                                                            ""
                                            }

                                        </div>

                                        {/* code for the save and proceed button below */}
                                        {/* <div className="proceed-btn"> */}
                                            {page ===0 ? (
                                                <span
                                                onClick={() => {
                                                    const formError = validation(formData);
                                                    setErrors(formError);

                                                    if (Object.keys(formError).length > 0) {
                                                        console.log("error")
                                                    } else {
                                                        if (page === FormTitles.length - 1) {
                                                            console.log(formData);
                                                            navigate("/pro_personal_success");
                                                        }
                                                        else {

                                                            setPage((currPage) => currPage + 1);
                                                        }
                                                    }
                                                }}
                                                className="general-btn"
                                            >
                                                {page === FormTitles.length - 1 ? "Save And Proceed" : "Save And Proceed"}
                                            </span>
                                                ): page === 1 ? (
                                                    <span onClick={spousepopup} className="general-btn">Save and Proceed</span>
                                                
                                                ): page  === 2 ?(
                                                    <span onClick={childpopup} className="general-btn">Save and Proceed</span>
                                            
                                                ) :
                                                    <button  type="submit" className="general-btn">Save and Proceed</button>
                                            }
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className={toggleState === 2 ? "PersonalFormcontent active-PersonalFormcontent" : "PersonalFormcontent"}>
                        <ProSpouseReview setToggleState={()=>setToggleState(1)} reviewNext={reviewNext} addAnotherSpouse={addAnotherSpouse}/>
                    </div>

                    <div className={toggleState === 3 ? "PersonalFormcontent active-PersonalFormcontent" : "PersonalFormcontent"}>
                        <ProChildReview setToggleState={()=>setToggleState(1)} reviewNext={reviewNext} addAnotherChild={addAnotherChild}/>
                    </div>

                    <div className={toggleState === 4 ? "PersonalFormcontent active-PersonalFormcontent" : "PersonalFormcontent"}>
                        <Guardian children={children} setChildren={setChildren} errors={errors} />
                        <div className="" style={{display:"flex", justifyContent:"flex-end"}}>
                            <button onClick={guardian} className="general-btn">Save and Proceed</button>
                        </div>
                    </div>

                    <div className={toggleState === 5 ? "PersonalFormcontent active-PersonalFormcontent" : "PersonalFormcontent"}>
                        <Physicalguardian children={children} setChildren={setChildren} errors={errors} />

                        <div className="" style={{display:"flex", justifyContent:"flex-end"}}>
                            <button onClick={physicalguardian} className="general-btn">Save and Proceed</button>
                        </div>
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
                                        onClick={addAnotherSpouse}
                                    >Yes</button>
                                    <button className="second"
                                        onClick={() => {
                                            setspousebuttonpopup(false);
                                            let formDataCopy = JSON.parse(JSON.stringify(formData))
                                            formDataCopy.spouse[formDataCopy.spouse.length] = spouse
                                        
                                            setFormData(formDataCopy)
                                            console.log("formdatadata123456", formData);

                                            if (page === FormTitles.length - 1) {
                                                console.log(formData);
                                                navigate("/pro_personal_success")
                                            }
                                            else {
                                                setspousebuttonpopup(false);
                                                setToggleState(2)
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
                                        onClick={addAnotherChild}
                                    >Yes</button>
                                    <button className="second"
                                        onClick={() => {
                                            setchildpopupbtn(false);
                                            let formDataCopy = JSON.parse(JSON.stringify(formData))
                                            formDataCopy.children[formDataCopy.children.length] = children
                                        
                                            setFormData(formDataCopy)
                                            console.log("formDataCopy", formDataCopy)
                                            if (page === FormTitles.length - 1) {
                                                console.log("formdatadata123456", formData);
                                                navigate("/pro_personal_success")
                                            }
                                            else {
                                                setspousebuttonpopup(false);
                                                setToggleState(3)
                                                console.log("formdatadata123456", formData);
                                            }
                                        }}
                                    >No</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </Interface >
        </div >
    );
}

export default Propersonalinfo;