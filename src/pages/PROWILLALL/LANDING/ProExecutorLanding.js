import React, { useState, useEffect } from 'react';
import WillLanding from '../../../components/willLanding/willLanding';
import { BsArrowRight, BsArrowDown, BsArrowLeft } from "react-icons/bs";
import asset from "../../../assets/flex-assets.png";
import executor11 from "../../../assets/flex-assets.png";
import personal from "../../../assets/flex-personal.png"
import executorimg from "../../../assets/executorimg.png";
import { useNavigate ,NavLink } from 'react-router-dom';
import MainModal from '../../../components/mainModal/MainModal';
import emoji from "../../../assets/emoji.png";
import { useDispatch} from 'react-redux';
import { updateExecutorPro } from "../../actions/auth"

import * as Yup from 'yup'
import { useForm } from 'react-hook-form'

function ProExecutorLanding() {
    const [buttonpopup, setbuttonpopup] = useState(false);
    const [buttonpopup1, setbuttonpopup1] = useState(false);
    const [buttonpopup2, setbuttonpopup2] = useState(false);
    const [buttonpopup3, setbuttonpopup3] = useState(false);

    const schema = Yup
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [executor, setexecutor] = React.useState({
        isPersonal: false,
        pacTrustees: false
    });

    const handleChange = (event) => {
       setexecutor(event.target.value)
    }
   
    const onSubmit = () => {
        console.log("data", executor)
        setbuttonpopup3(true);
        if(executor=== "pacTrustees"){
            JSON.stringify(localStorage.setItem("executors", true))
        }else{
            JSON.stringify(localStorage.setItem("executors", false))
        }
    }
    const getExecutor= JSON.parse(localStorage.getItem("executors"))
    
    const [executorForm, setexecutorForm] = useState({
        isPac: getExecutor
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleSubmitExecutor = (e)=>{
        e.preventDefault()
        const payload = {
            executors:{
                isPac: getExecutor
            },
            // transId:"hello hi transId"
        }
        console.log("payload", payload)
        dispatch(updateExecutorPro(payload, navigate));
    }

    useEffect(() => {
        setexecutorForm(getExecutor)
    }, [getExecutor])

    console.log("execu", executorForm)
    return (
        <div>
        <WillLanding >
            <div className='will-landingpage'>
                <div className='col-lg-5 col-md-4 col-sm-12'>
                    <NavLink to="/pro_personalinfo/1" className="navlink disable">
                        <div className="card done ">
                            <span><img src={personal} alt="" /></span>
                            <p>Personal Information</p>
                        </div>
                    </NavLink>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                    <div className="arrow">
                        <BsArrowRight className="icon icon1" />
                    </div>
                </div>

                <div className='col-lg-5 col-md-4 col-sm-12'>
                    <button className="navlink" style={{ width: "100%", border: 'none', background: "none" }}
                        onClick={() => setbuttonpopup(true)}
                    >
                        <div className="card active">
                            <span><img src={executor11} alt="" /></span>
                            <p>Executors</p>
                        </div>
                    </button>
                </div>
            </div>

            <div className='will-landingpage-2'>

                <div className='col-lg-2 col-md-2 col-sm-12 arrowstyle'>
                    <div className="arrow">
                        <BsArrowDown className="icon icon2" />
                    </div>
                </div>
                <div className='col-lg-5 col-md-4 col-sm-12 order-lg-3 order-md-3'>
                    <NavLink to="/pro_assets" className="navlink disable">
                        <div className="card ">
                            <span><img src={asset} alt="" /></span>
                            <p>Assets</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </WillLanding>

        <MainModal trigger={buttonpopup} setTrigger={setbuttonpopup}>
            <div className='modalContent'>
                <div className='modalimage'><img src={executorimg} alt="" /> </div>
                <div className='title'>APPOINT YOUR EXECUTORS</div>

                <div className='navButtton'>
                    <button onClick={() => setbuttonpopup1(true)}>Get Started</button>
                </div>
            </div>
        </MainModal>

        <MainModal trigger={buttonpopup1} setTrigger={setbuttonpopup1}>
            <div className='modalContent'>
                <div className='title'>Who are Executors?</div>
                <div className='text'>The executors are the people you have chosen to carry out the directions of your Will. The Law requires that you choose a minimum of two persons aged at least 18 years and a maximum of four persons.</div>
                <div className='navButtton'>
                    <button onClick={() => setbuttonpopup2(true)}>Continue</button>
                </div>

                <div className='last'>
                    <p>Not sure how to proceed,</p>
                    <NavLink to="/faqs" className="modal-link">OPEN FAQs</NavLink>
                </div>
            </div>
        </MainModal>

        <MainModal trigger={buttonpopup2} setTrigger={setbuttonpopup2}>
            <div className='modalContent'>
                <div className='title'>EXECUTOR</div>
                <div className='subtitle'>By checking the box below, you authorize the PAC team to act as your executor</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group group">
                        <div className='checkbox-div'>
                            <span className='spanCheck'><input type="radio" id="pro" name="executor"
                                value="pacTrustees"
                                checked={executor === 'pacTrustees'}
                                {...register('executor', { required: true })}
                                onChange={handleChange}
                            />
                            </span>
                            <label for="pro"> Select the PAC Trustees limited as your executor.</label>
                        </div>
                    </div>


                    <div className="form-group group">
                        <div className='checkbox-div'>
                            <span className='spanCheck'><input type="radio" id="propersonal" name="executor"
                            value="isPersonal"
                            checked={executor === 'isPersonal'}
                            {...register('executor', { required: true })}
                            onChange={handleChange}
                            />
                            </span>
                            <label for="propersonal"> Assign your personal Executor</label>
                        </div>
                    </div>
                    <p style={{color:"crimson", fontSize: "12px"}}>{errors.executor?.type === 'required' &&
                            'Select your executor.'
                    }</p>
                    <div className='navButtton'>
                        <button type="submit" >Continue</button>
                    </div>
                </form>

                <div className='last'>
                    <p>Not sure how to proceed,</p>
                    <NavLink to="/faqs" className="modal-link">OPEN FAQs</NavLink>
                </div>
            </div>
        </MainModal>

        <MainModal trigger={buttonpopup3} setTrigger={setbuttonpopup3}>
            <div className='modalContent'>
                <div className='title'>EXECUTOR</div>
                <div className='modalimage' style={{ marginBottom: "40px" }}><img src={emoji} alt="" style={{ width: "40%" }} /> </div>
                <div className='subtitle'>By checking the box below, you authorize the PAC team to act as your executor</div>
                
                <form onSubmit={handleSubmitExecutor}>
                    <div className='navButtton' style={{ marginBottom: "30px" }}>
                        <button className="modal-nav" tupe="submit" >Complete</button>
                        {/* <NavLink to="/flex_executor_success" className="modal-nav" >Complete</NavLink> */}
                    </div>
                </form >
                

                <div className='last'>
                    <p>Not sure how to proceed,</p>
                    <NavLink to="/faqs" className="modal-link">OPEN FAQs</NavLink>
                </div>
            </div>
        </MainModal>

    </div>
    )
}

export default ProExecutorLanding