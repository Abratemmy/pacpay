import React, { useState } from 'react';
import blacklogo from "../../assets/blacklogo.png";
import handshake from "../../assets/handshake.png";
import logo from "../../assets/logo.png";
import { MdOutlineEmail, } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import Google from "../../assets/Google.png";
import { useNavigate, NavLink } from 'react-router-dom';
import brush from "../../assets/brush.png";


function Signin() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    const [values, setValues] = useState({
        email: "",
        password: "",
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
        if (!targets.password) {
            errorsValue.password = "Password is required"
        } else if (targets.password.length < 8) {
            errorsValue.password = "Password must be more than 8 character"
        }
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
            navigate("/product_landing")
        }
    }

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);

    };

    return (
        <div className="landing-page auth" >
            <div className='first'  >
                <div className='top'>
                    <div className='logo'>
                        <div className='img1'>
                            <img src={blacklogo} alt="" />
                            <div className='black-text'>p</div>
                        </div>
                        <div className='img2'><img src={logo} alt="" /></div>
                    </div>

                    <div className='text'>How it works?</div>
                </div>

                <div className='middle'  >
                    <div className='auth-title'>Welcome Back!</div>
                    <div className='text'>Glad to see you again! Kindly fill the details below</div>
                    <form className="form-inline" onSubmit={handleSubmit}>
                        <div className='form-input form-div' style={{ padding: "10px 0px" }}>
                            <label>Email Address</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} />
                            </div>
                            {errors ? <p className='error'> {errors.email}</p> : ""}
                        </div>

                        <div className='form-input form-div'>
                            <label>Password</label>
                            <div class="inner-addon left-addon">
                                <i class="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                <input type={passwordShown ? "text" : "password"} placeholder="Enter password" name="password" onChange={handleChange} />
                                <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                            </div>
                            {errors ? <p className='error'> {errors.password}</p> : ""}
                        </div>

                        <div className='forgot-session'>
                            <div className=''>
                                <input type="checkbox" id="login" className="headerinput" onClick={toggleModal} />

                                <label for="login" className="headerlabel" >
                                    Remember me
                                </label>
                                {
                                    modal && (
                                        <div className='remember_content'>
                                            <div onClick={toggleModal} className="close"><h6>X</h6></div>
                                            <div className="">
                                                <label>Email Address</label>
                                                <div class="inner-addon left-addon">
                                                    <i class="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                                    <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} />
                                                </div>
                                                {errors ? <p className='error'> {errors.email}</p> : ""}
                                            </div>

                                            <div className=''>
                                                <label>Password</label>
                                                <div class="inner-addon left-addon">
                                                    <i class="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                                    <input type={passwordShown ? "text" : "password"} placeholder="Enter password" name="password" onChange={handleChange} />
                                                    <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                                                </div>
                                                {errors ? <p className='error'> {errors.password}</p> : ""}
                                            </div>

                                            <div className='' style={{ padding: "20px 0px", cursor: "pointer" }}>
                                                <button type="submit" onSubmit={handleSubmit} className="nav-link" style={{ border: "0" }}>save and proceed</button>
                                            </div>
                                            <div className='text' onClick={toggleModal}>Never <BsArrowUpRight className="icon" /> </div>

                                        </div>

                                    )
                                }
                            </div>
                            <NavLink to="/forgot_password" className="nav">Forgot Password?</NavLink>
                        </div>




                        <div className='button' style={{ padding: "20px 0px", cursor: "pointer" }}>
                            <button type="submit" className="nav-link" style={{ border: "0" }}>Get started</button>
                        </div>




                        <div className='line'>
                            <div className="or-line">OR </div>
                            <span> <img src={Google} alt="" className='google-img' /> </span>

                        </div>
                    </form>
                </div>

                <div className='last' style={{ bottom: "5px" }} >
                    <div className='no-acc' >
                        Don't have an account? <NavLink to="/register" className="signup"><div>Register Here</div>
                            <span><img src={brush} alt="" /></span></NavLink>
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

export default Signin