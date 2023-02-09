import React, { useState, useEffect } from 'react';
import handshake from "../../../assets/handshake.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate, NavLink } from 'react-router-dom';
import white from "../../../assets/whitebg.png";
import lock from "../../../assets/lock.png";
import question from "../../../assets/question.png"
import validator from 'validator';
import { useDispatch, useSelector } from "react-redux";
import { resetverifyEmail } from "../../actions/auth";
import md5 from 'md5-hash'


function Createpassword() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const [ConfirmpasswordShown, setconfirmPasswordShown] = useState(false);
    const toggleconfirmPassword = () => {
        setconfirmPasswordShown(!ConfirmpasswordShown);
    };


    const resetpassworduser= JSON.parse(localStorage.getItem('resetpassword'));
    const resetcode = resetpassworduser.passwordResetCode
    // const hashedpasswordresetCode = bcrypt.hashSync(resetcode, 10)
    // const secret="k4WQ,]+.C/dJ6z9a";
    const hashedpasswordresetCode = md5(resetcode);
    console.log(hashedpasswordresetCode)
   
   
    const [values, setValues] = useState({
        email:resetpassworduser.email,
        passwordResetCode: resetpassworduser.passwordResetCode,
        password: "",
        password_confirm: "",
        hash: hashedpasswordresetCode
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
        if (!targets.password) {
            errorsValue.password = "Password is required"
        } 
        // else if (!validator.isStrongPassword(targets.password, {
        //     minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1
        // })) errorsValue.password = "Password must contain a minimum of 8 characters and must be Alphanumeric"


        if (!targets.password_confirm) errorsValue.password_confirm = "Confirm Your Password"
        else if (targets.password !== targets.password_confirm) errorsValue.password_confirm = "Password do not match"

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };
    const state = useSelector((state) => state);
    const [ApiError, setApiError]= useState(null)
    console.log("Api error", ApiError)
    
    useEffect(()=>{  
        setApiError(ApiError)
        
    },[ApiError])
    const loading= state.authReducer.authData.loading

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            console.log("values", values);
            dispatch(resetverifyEmail(values, navigate))
            setApiError(state?.authReducer?.authData?.error?.response?.data.meta.error.messages || state?.authReducer?.authData?.error?.response?.data.meta.error.message)
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
                        <div className='auth-title'>Create A New Password</div>
                        <div className='text'>Your new password must be different from the previous one</div>
                        <form onSubmit={handleSubmit} className="form-inline" style={{ marginTop: "60px" }}>

                            <div className='form-input form-div' style={{ padding: "20px 0px" }}>
                                <label>Password</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                    <input type={passwordShown ? "text" : "password"} placeholder="Enter password" name="password" onChange={handleChange} />
                                    <AiFillEyeInvisible onClick={togglePassword} className="show-icon" />
                                </div>
                                {errors ? <p className='error'> {errors.password}</p> : ""}
                            </div>

                            <div className='form-input form-div'>
                                <label>Confirm Password</label>
                                <div class="inner-addon left-addon">
                                    <i class="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                                    <input type={ConfirmpasswordShown ? "text" : "password"} placeholder="Enter Confirm Password" name="password_confirm" onChange={handleChange} />
                                    <AiFillEyeInvisible onClick={toggleconfirmPassword} className="show-icon" />
                                </div>
                                {errors ? <p className='error'> {errors.password_confirm}</p> : ""}
                            </div>


                            <div className='ApiError' style={{top:"10px"}}>{ApiError}</div>

                          
                            {loading === true ? (
                                <div className='button' style={{ margin: "100px 0px 20px 0px", cursor: "pointer"}}>
                                    <button type="submit" className="nav-link" disabled style={{ border: "0", background:"var(--lightblue)" }}>Setting Password ...</button>
                                </div>) : (
                                <div className='button' style={{ margin: "100px 0px 20px 0px", cursor: "pointer" }}>
                                    <button type="submit" className="nav-link" style={{ border: "0" }}>Set Password</button>
                                </div>
                                )
                            }

                           

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

export default Createpassword