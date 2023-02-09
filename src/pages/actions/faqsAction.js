import { FAQS } from "../constants/actionTypes";
import * as authapi from "../API/index.js";

export const getFAQs = () => async (dispatch) => {
    try {
        const { data } = await authapi.faqs();
        dispatch({ type: FAQS, payload: data })
        console.log("faq", data)
    } catch (error) {
        console.log(error.message)
    }
}