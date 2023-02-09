import { CASH, FETCHCASH } from "../constants/actionTypes";

export const cashReducer = (state = [], action) => {
    switch (action.type) {
        case FETCHCASH:
            return action.payload;

        case CASH:
            return [...state, action.payload];

        default:
            return state;
    }
}

