import { LOGGEDINUSER, UPDATELOGGEDIN } from "../constants/actionTypes";

export const loggedInUserReducer = (state = [], action) => {
    switch (action.type) {
        case LOGGEDINUSER:
            console.log(action?.payload)
            return action.payload;
        case UPDATELOGGEDIN:
            return action.payload

        default:
            return state
    }
};
