import { FETCHWILL, LOGGEDINUSER, CREATEWILL, LOADING, SUCCESS, FAILED, WILL, GETPRODUCT, UPDATELOGGEDIN } from "../constants/actionTypes";
import * as authapi from "../API/index.js";


export const signin = (values, navigate, checkRoute) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await authapi.signIn(values);
        dispatch({ type: SUCCESS, data });
        const token = data.meta.token
        localStorage.setItem('token', JSON.stringify(token));

        console.log("routeData", data)
        if (data?.data?.auth?.accountVerified === false) {
            const { email } = data?.data?.auth;
            console.log("otpEmail", email);
            const { resendOtp } = await authapi.resendRegisterOtp({ email });

            console.log("resendOtp", resendOtp)
            dispatch({ type: SUCCESS, resendOtp })
            navigate("/register_pop")
        } else if (checkRoute) {
            navigate('/product_landing')
        }

        else {
            navigate('/dashboard')
        }


    } catch (error) {
        dispatch({ type: FAILED, error })
        console.log(error)
    }
}


export const register = (payload, navigate) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await authapi.register(payload);
        dispatch({ type: SUCCESS, data });
        localStorage.setItem('Users', JSON.stringify(data));
        console.log("registerUser", data)
        navigate(`/register_pop`)
    } catch (error) {
        dispatch({ type: FAILED, error })
        console.log(error)
    }
}

// const token= data.meta.token
// const { userInfo } = await authapi.addUser(userdata, token);
// dispatch({ type: ADDUSER, userInfo });
// console.log("userdata", userInfo)

export const verifyEmail = (values, navigate) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await authapi.verifyEmail(values);
        dispatch({ type: SUCCESS, data })
        console.log("verifyUser", data)
        navigate('/register_success')
    } catch (error) {
        dispatch({ type: FAILED, error })
        console.log(error)
    }
}

export const resendRegisterOtp = (payload, setOtpSuccess, setOtpLoading) => async (dispatch) => {
    try {
        const { data } = await authapi.resendRegisterOtp(payload);
        dispatch({ type: SUCCESS, data });
        setOtpLoading(false)
        setOtpSuccess(true)
        console.log("resgiterotp", data)
    } catch (error) {
        dispatch({ type: FAILED, error })
        console.log(error)
    }
}


export const sendResetCode = (values, buttonpop) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await authapi.sendResetCode(values);
        dispatch({ type: SUCCESS, data });
        buttonpop()
    } catch (error) {
        dispatch({ type: FAILED, error })
        console.log(error)
    }
}

export const resetverifyEmail = (values, navigate) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await authapi.resetverifyEmail(values);
        dispatch({ type: SUCCESS, data })
        console.log("verifyUser", data)
        navigate("/createpassword_success")
    } catch (error) {
        dispatch({ type: FAILED, error })
        console.log(error)
    }
}

export const getLoggedInUser = () => async (dispatch) => {
    try {
        const { data } = await authapi.getLoggedinUser();
        dispatch({ type: LOGGEDINUSER, payload: data })
        console.log("loggedinuser", data)
    } catch (error) {
        console.log(error.message)
    }
}

export const updateLoggedInUser = (id, payload, setImageModal, setLoading, loading) => async (dispatch) => {
    try {
        const { data } = await authapi.updateUser(id, payload);
        dispatch({ type: UPDATELOGGEDIN, payload: data });
        setLoading(false)
        console.log("setLoading", loading)
        setImageModal(false)
    } catch (error) {
        console.log(error);
    }
}

export const createPersonalinformation = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.createPersonalinformation(payload);
        dispatch({ type: CREATEWILL, payload: data });
        console.log("It has been submitted");

        navigate("/flex_personal_success")
    } catch (error) {
        console.log(error)
    }
}
export const createPersonalinformationPRO = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.createPersonalinformation(payload);
        dispatch({ type: CREATEWILL, payload: data });
        console.log("It has been submitted");

        navigate("/pro_personal_success")
    } catch (error) {
        console.log(error)
    }
}

export const createPersonalinformationCOM = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.createPersonalinformation(payload);
        dispatch({ type: CREATEWILL, payload: data });
        console.log("It has been submitted");

        navigate("/compact_personal_success")
    } catch (error) {
        console.log(error)
    }
}

export const createPersonalinformationTrust = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.createPersonalinformation(payload);
        dispatch({ type: CREATEWILL, payload: data });
        console.log("It has been submitted");

        navigate("/trust_personal_success")
    } catch (error) {
        console.log(error)
    }
}


export const getProduct = () => async (dispatch) => {
    try {
        const { data } = await authapi.getProduct();
        dispatch({ type: GETPRODUCT, payload: data })
        localStorage.setItem('willProduct', JSON.stringify(data));
        console.log("GETpRODUCT", data)
    } catch (error) {
        console.log(error.message)
    }
}

export const updateExecutor = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.updateWill(payload);
        dispatch({ type: WILL, payload: data });
        navigate('/flex_executor_success')
        console.log("SUBMITTED")
    } catch (error) {
        console.log(error);
    }
}

export const updateExecutorCom = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.updateWill(payload);
        dispatch({ type: WILL, payload: data });
        navigate('/compact_executor_success')
        console.log("SUBMITTED")
    } catch (error) {
        console.log(error);
    }
}

export const updateExecutorPro = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.updateWill(payload);
        dispatch({ type: WILL, payload: data });
        navigate('/pro_executor_success')
        console.log("SUBMITTED")
    } catch (error) {
        console.log(error);
    }
}

export const updateExecutorTrust = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.updateWill(payload);
        dispatch({ type: WILL, payload: data });
        navigate('/trust_executor_sucess')
        console.log("SUBMITTED")
    } catch (error) {
        console.log(error);
    }
}

export const updateAsset = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.updateWill(payload);
        dispatch({ type: WILL, payload: data });
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const getUserWill = () => async (dispatch) => {
    try {
        const { data } = await authapi.getUserWill();
        dispatch({ type: FETCHWILL, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}
