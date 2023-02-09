import React, { useState, useEffect } from 'react';
import blacklogo from "../../assets/blacklogo.png";
import handshake from "../../assets/handshake.png";
import logo from "../../assets/logo.png";
import { MdOutlineEmail, } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import Google from "../../assets/Google.png";
import { useNavigate, NavLink } from 'react-router-dom';
import brush from "../../assets/brush.png";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/auth";
import line from "../../assets/line.png";


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
            errorsValue.password = "Password is not correct"
        }
        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const state = useSelector((state) => state);
    const [ApiError, setApiError] = useState(null)

    useEffect(() => {
        setApiError(ApiError)

    }, [ApiError])
    const loading = state.authReducer.authData.loading

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [checkRoute, setCheckRoute] = useState(JSON.parse(localStorage.getItem('Users')))
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            dispatch(signin(values, navigate, checkRoute))
            setApiError(state?.authReducer?.authData?.error?.response?.data.meta.error.message)
        }
    }

    const handleSubmitPop = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            dispatch(signin(values, navigate, checkRoute))
            setApiError(state?.authReducer?.authData?.error?.response?.data.meta.error.message)
            localStorage.setItem("rememberMe", JSON.stringify(values))
        }
    }

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);

    };

    //the useEffect is used to solve the error google-sso-login-error-popup-closed-by-user
    const clientId = "103152588131-2ojr8nvsacecdqei2nucn9abaruhtceb.apps.googleusercontent.com"
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])
    const googleSucess = async (res) => {
        console.log(res)
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            // dispatch({ type: 'AUTH', data: { result, token } });
            dispatch(signin(values, navigate, checkRoute))
            // navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign in was unsuccessful. Try again later")
    }


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
                            <div className="inner-addon left-addon">
                                <i className="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} value={values.email} />
                            </div>
                            {errors ? <p className='error'> {errors.email}</p> : ""}
                        </div>

                        <div className='form-input form-div'>
                            <label>Password</label>
                            <div className="inner-addon left-addon">
                                <i className="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                <input type={passwordShown ? "text" : "password"} placeholder="Enter password" value={values.password} name="password" onChange={handleChange} />
                                <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                            </div>
                            {errors ? <p className='error'> {errors.password}</p> : ""}
                        </div>

                        <div className='forgot-session'>
                            <div className='checkbox-div'>
                                <span className='spanCheck'><input type="checkbox" id="login" className="headerinput" onClick={toggleModal} /></span>

                                <label htmlFor="login" className="headerlabel" style={{ fontWeight: "normal" }}>
                                    Remember me
                                </label>
                            </div>
                            <NavLink to="/forgot_password" className="nav">Forgot Password?</NavLink>
                        </div>


                        <div className='ApiError' style={{ top: "10px" }}>{ApiError}</div>

                        <div className='button' style={{ padding: "20px 0px", cursor: "pointer" }}>
                            {loading === true ? (<button type="submit" className="nav-link" disabled style={{ border: "0", background: "var(--lightblue)" }} >Sign in...</button>) : (
                                <button type="submit" className="nav-link" style={{ border: "0" }}>Sign in</button>
                            )}

                        </div>




                        {/* <div className='line'>
                            <div className="or-line">OR </div>
                            <span>
                                <GoogleLogin
                                    clientId={clientId}
                                    render={renderProps => (
                                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}
                                            style={{ border: "none", background: "none" }}>
                                            <img src={Google} alt="" className='google-img' />
                                        </button>
                                    )}
                                    onSuccess={googleSucess}
                                    onFailure={googleFailure}
                                    buttonText="Login"
                                    cookiePolicy='single_host_origin'
                                />
                            </span>

                        </div>
 */}

                    </form>
                </div>

                <div className='last' style={{ position: "relative", top: "30px" }} >
                    <div className='no-acc' >
                        Don't have an account? <NavLink to="/register" className="signup"><div>Register Here</div>
                            <span><img src={brush} alt="" /></span></NavLink>
                    </div>
                </div>
            </div>


            <div className='second'>
                <div className="mobile">
                    <div className='logo'>
                        <div className='img1'>
                            <img src={blacklogo} alt="" />
                            <div className='black-text'>p</div>
                        </div>
                        <div className='img2'><img src={logo} alt="" /></div>
                    </div>
                </div>
                <div className='content'>
                    <div className='image'><img src={handshake} alt="" /></div>
                    <div className=''>
                        <div className='title'>Trustees <span>Management</span></div>
                        <p>sustaining Value from Generation to Generation</p>
                    </div>
                </div>
                <div className='mobile'>
                    <div className='text'>How it works?</div>
                </div>
            </div>

            {
                modal && (
                    <form onSubmit={handleSubmitPop}>
                        <div className='remember_content'>
                            <span><img src={line} alt="" className='line' /></span>
                            <div onClick={toggleModal} className="close"><h6>X</h6></div>
                            <div className="">
                                <label>Email Address</label>
                                <div className="inner-addon left-addon">
                                    <i className="glyphicon glyphicon-user"><MdOutlineEmail className='icon' /></i>
                                    <input type="text" placeholder="Enter Email Address" name="email" value={values.email} onChange={handleChange} />
                                </div>
                                {errors ? <p className='error'> {errors.email}</p> : ""}
                            </div>

                            <div className=''>
                                <label>Password</label>
                                <div className="inner-addon left-addon">
                                    <i className="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                    <input type={passwordShown ? "text" : "password"} placeholder="Enter password" value={values.password} name="password" onChange={handleChange} />
                                    <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                                </div>
                                {errors ? <p className='error'> {errors.password}</p> : ""}
                            </div>

                            <div className='' style={{ padding: "20px 0px", cursor: "pointer", display: "flex", justifyContent: "center" }}>
                                <button type="submit" className="remembernav-link" style={{ border: "0" }}>Save and Proceed</button>
                            </div>
                            <div className='text' onClick={toggleModal}>Never <BsArrowUpRight className="icon" /> </div>
                        </div>
                    </form>
                )
            }
        </div>
    )
}

export default Signin