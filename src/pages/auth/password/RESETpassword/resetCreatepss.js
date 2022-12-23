import React, { useState } from 'react';
import handshake from "../../../../assets/handshake.png";
import { MdOutlineEmail, MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineLock, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate, NavLink } from 'react-router-dom';
import white from "../../../../assets/whitebg.png";
import lock from "../../../../assets/lock.png";
import question from "../../../../assets/question.png"

function ResetCreatepassword() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    const [ConfirmpasswordShown, setconfirmPasswordShown] = useState(false);
    const toggleconfirmPassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setconfirmPasswordShown(!ConfirmpasswordShown);
    };

    const [values, setValues] = useState({
        password: "",
        confirmpassword: ""
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
        } else if (targets.password.length < 8) {
            errorsValue.password = "Password must be more than 8 character"
        }
        if (!targets.confirmpassword) errorsValue.confirmpassword = "Confirm Your Password"
        else if (targets.password !== targets.confirmpassword) errorsValue.confirmpassword = "Password do not match"

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
            navigate("/success_password_reset")
        }
    }

    return (
        <div className='password-container'>
            <div className="landing-page auth" >
                <div className='first'  >

                    <div className='middle'  >
                        <NavLink to="/reset_password" className="back" style={{ position: "relative" }}>
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
                                    <input type={ConfirmpasswordShown ? "text" : "password"} placeholder="Enter Confirm Password" name="confirmpassword" onChange={handleChange} />
                                    <AiFillEyeInvisible onClick={toggleconfirmPassword} className="show-icon" />
                                </div>
                                {errors ? <p className='error'> {errors.confirmpassword}</p> : ""}
                            </div>


                            <div className='button' style={{ padding: "100px 0px 20px 0px", cursor: "pointer" }}>
                                <button type="submit" className="nav-link" style={{ border: "0" }}>Set Password</button>
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

export default ResetCreatepassword