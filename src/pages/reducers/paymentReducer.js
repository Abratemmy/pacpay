import { PAYMENT, FETCHPAYMENT } from "../constants/actionTypes";

export const paymentReducer = (state = [], action) => {
    switch (action.type) {
        case FETCHPAYMENT:
            return action.payload;
        case PAYMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}

