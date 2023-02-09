import { NOTIFICATION, UPDATENOTIFICATION } from "../constants/actionTypes";

export const notificationReducer = (state = [], action) => {
    switch (action.type) {
        case NOTIFICATION:
            console.log(action?.payload)
            return action.payload;
        case UPDATENOTIFICATION:
            return action.payload
        default:
            return state
    }
};
