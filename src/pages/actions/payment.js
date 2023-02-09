
import * as paymentapi from "../API/index.js";
import { FETCHPAYMENT } from "../constants/actionTypes.js";

export const chargeCard = (payload, setPaytackModal) => async (dispatch) => {
    try {
        const { data } = await paymentapi.chargeCard(payload);
        dispatch({ type: FETCHPAYMENT, payload: data });
        setPaytackModal(true)
    } catch (error) {
        console.log(error)
    }
}

export const store = (payload, navigate) => async (dispatch) => {
    try {
        const { data } = await paymentapi.store(payload);
        dispatch({ type: FETCHPAYMENT, payload: data });
        navigate("/flex_review_success")
        console.log("paymentData", data)
    } catch (error) {
        console.log(error)
    }
}