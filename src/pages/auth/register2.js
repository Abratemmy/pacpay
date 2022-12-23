import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { MdArrowBackIosNew, MdLocalPhone } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import Google from "../../assets/Google.png";
import handshake from "../../assets/handshake.png";
import brush from "../../assets/brush.png";
import Countryform from '../../components/country/countryform';
import data from "../../components/country/country.js"

function Register2() {

    const [values, setValues] = useState({
        phone: "",
        location: "",
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
        if (!targets.phone) errorsValue.phone = "Your phone number is required";
        // if (!targets.location) errorsValue.location = "Your Location is required";

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
            navigate("/register_pop")
        }
    }

    return (
        <div className="landing-page auth" style={{ paddingBottom: "20px" }} >
            <div className="first">
                <div className='middle' >
                    <NavLink to="/register" style={{ color: "var(--blueColor)" }}>
                        <MdArrowBackIosNew className="icon" />
                        <MdArrowBackIosNew className="icon icon2" style={{ position: "relative", left: "-9px" }} />
                    </NavLink>
                    <div className='auth-title' style={{ marginTop: "30px" }}>Welcome To Trustee!</div>
                    <div className='text'>Kindly create an account with us</div>
                    <form className="form-inline" onSubmit={handleSubmit}>

                        <div className='form-input form-div'>
                            <label>Phone Number</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><MdLocalPhone className='icon' /></i>
                                <input type="text" placeholder="Enter Phone Number" name="phone" onChange={handleChange} />
                            </div>
                            {errors ? <p className='error'> {errors.phone}</p> : ""}
                        </div>

                        <div className='form-input form-div' style={{ paddingBottom: "30px" }}>

                            <Countryform />
                            {/* {errors ? <p className='error'> {errors.location}</p> : ""} */}

                        </div>

                        <div className='button' style={{ paddingTop: "10px", cursor: "pointer" }}>
                            <button type="submit" className="nav-link" style={{ border: "0" }}>Register</button>
                        </div>

                        <div className='line' style={{ padding: "50px 0px" }}>
                            <div className="or-line">OR </div>
                            <span> <img src={Google} alt="" className='google-img' /> </span>

                        </div>
                    </form>

                    <div className='last' style={{ bottom: "0px" }} >
                        <div className='no-acc' >
                            Already have an account? <NavLink to="/login" className="signup"><div>Login Here</div>
                                <span><img src={brush} alt="" /></span></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='second'>
                <div className='content'>
                    <div className='image'><img src={handshake} alt="" /></div>
                    <div className=''>
                        <div className='title'>Trustees <span>Management</span></div>
                        <p>sustaining Value from Generation to Generation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register2