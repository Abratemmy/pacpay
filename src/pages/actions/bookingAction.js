import * as userwill from "../API/index.js";
import { BOOKING } from "../constants/actionTypes.js";


export const updateBooking = (payload, navigate, setLoading) => async (dispatch) => {
    try {
        const { data } = await userwill.updateWill(payload);
        dispatch({ type: BOOKING, payload: data });
        setLoading(false)
        navigate('/booking_success')
        console.log("SUBMITTED")
    } catch (error) {
        console.log(error);
    }
}