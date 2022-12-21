import React, { useState } from 'react';
import "./password.css";
import handshake from "../../../assets/handshake.png";
import { MdOutlineEmail, MdArrowBackIosNew } from "react-icons/md";
import Google from "../../../assets/Google.png";
import { useNavigate, NavLink } from 'react-router-dom';
import white from "../../../assets/whitebg.png";
import lock from "../../../assets/lock.png";
import question from "../../../assets/question.png";


function Fpassword() {
    const [values, setValues] = useState({
        email: "",
    });
    const [errors, setErrors] = useState({});

    // get input values
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const navigate = useNavigate()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            console.log("submitted");
            navigate("/forgot_otp_password")
        }
    }
    return (
        <div className='password-container'>
            <div className="landing-page auth" >
                <div className='first'  >

                    <div className='middle'  >
                        <NavLink to="/login" className="back" style={{ position: "relative" }}>
                            <MdArrowBackIosNew className="icon" />
                            <MdArrowBackIosNew className="icon icon2" />
                        </NavLink>
                        <div className='auth-title'>Forget Password?</div>
                        <div className='text'>Kindly enter your email address associated with your account below</div>
                        <form onSubmit={handleSubmit} className="form-inline" style={{ marginTop: "60px" }}>
                            <div className='form-input form-div'>
                                <label>Email Address</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                    <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} />
                                </div>
                                {errors ? <p className='error'> {errors.email}</p> : ""}
                            </div>


                            <div className='button' style={{ padding: "100px 0px 20px 0px", cursor: "pointer" }}>
                                <button type="submit" className="nav-link" style={{ border: "0" }}>Proceed</button>
                            </div>

                            <div className='line'>
                                <div className="or-line">OR </div>
                                <span> <img src={Google} alt="" className='google-img' /> </span>

                            </div>
                        </form>
                    </div>
                </div>


                <div className='second'>
                    <div className='password-content'>
                        <div className='image'><img src={handshake} alt="" /></div>
                        <div className=''>
                            <div className='title'>Trustees <span>Management</span></div>
                            <p>sustaining Value from Generation<br /> to Generation</p>
                        </div>
                    </div>

                    <div className='white-bg'>
                        <img src={white} alt="" />

                    </div>
                    <div className='lock'>
                        <img src={lock} alt="" />
                    </div>
                    <div className='question'>
                        <img src={question} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Fpassword