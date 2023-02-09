import { BOOKING, CREATESCHEDULE } from "../constants/actionTypes";

export const bookingReducer = (state = [], action) => {
    switch (action.type) {
        case BOOKING:
            return action.payload;
        case CREATESCHEDULE:
            return action.payload;

        default:
            return state;

    }
}

