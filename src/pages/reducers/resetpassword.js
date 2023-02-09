import { RESETPASSWORD } from "../constants/actionTypes";



export const resetPasswordReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case RESETPASSWORD:
            console.log(action?.data)
            // localStorage.setItem('resetpassword', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };

        default:
            return state
    }
};