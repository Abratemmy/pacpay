import { WILL } from "../constants/actionTypes";

export const assetReducer = (state = [], action) => {
    switch (action.type) {
        case WILL:
            return action.payload;
        default:
            return state;
    }
}
 