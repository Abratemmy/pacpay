import React, { useState } from 'react'
import WillLanding from '../../../components/willLanding/willLanding';
import { BsArrowRight } from "react-icons/bs";
import executor from "../../../assets/flex-assets.png";
import emoji from "../../../assets/emoji.png";
import personal from "../../../assets/flex-personal.png"
import { NavLink } from 'react-router-dom';
import MainModal from '../../../components/mainModal/MainModal';
import executorimg from "../../../assets/executorimg.png";

function TrustExecutorLanding() {

    const [buttonpopup, setbuttonpopup] = useState(false);
    const [buttonpopup1, setbuttonpopup1] = useState(false);
    const [buttonpopup2, setbuttonpopup2] = useState(false);
    const [buttonpopup3, setbuttonpopup3] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setbuttonpopup3(true)
    }

    return (
        <div>
            <WillLanding >
                <div className='will-landingpage'>
                    <div className='col-lg-5 col-md-4 col-sm-12'>
                        <NavLink to="/trust_personalinfo/1" className="navlink disable">
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
                                <span><img src={executor} alt="" /></span>
                                <p>Executors</p>
                            </div>
                        </button>
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
                    <form onSubmit={handleSubmit}>
                        <div className="form-group group">
                            <input type="checkbox" id="pro" />
                            <label for="pro"> Select the PAC Trustees limited as your executor.</label>
                        </div>

                        <div className="form-groupb group">
                            <input type="checkbox" id="propersonal" />
                            <label for="propersonal"> Assign your personal Executor</label>
                        </div>
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

                    <div className='navButtton' style={{ marginBottom: "30px" }}>
                        <NavLink to="/trust_executor_sucess" className="modal-nav" >Complete</NavLink>
                    </div>

                    <div className='last'>
                        <p>Not sure how to proceed,</p>
                        <NavLink to="/faqs" className="modal-link">OPEN FAQs</NavLink>
                    </div>
                </div>
            </MainModal>

        </div>
    )
}

export default TrustExecutorLanding