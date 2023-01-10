import { AUTH } from "../constants/actionTypes";
import * as authapi from "../API/index.js"

export const signin = (values, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.signIn(values);
        dispatch({ type: AUTH, data })
        navigate('/dashboard')
    } catch (error) {
        console.log(error)
    }
}


export const register = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.register(payload);
        dispatch({ type: AUTH, data })
        console.log("registerUser", data)
        const email = data.email
        navigate(`/register_pop/${email}`)
    } catch (error) {
        console.log(error)
    }
}

export const verifyEmail = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await authapi.verifyEmail(payload);
        dispatch({ type: AUTH, data })
        console.log("verifyUser", data)
        navigate('/register_success')
    } catch (error) {
        console.log(error)
    }
}
