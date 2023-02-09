import { GETPRODUCT } from "../constants/actionTypes";

export const getProductReducer = (state = [], action) => {
    switch (action.type) {
        case GETPRODUCT:
            console.log(action?.payload)
            return action.payload;

        default:
            return state
    }
};