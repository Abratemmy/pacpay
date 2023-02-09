import { ADDUSER } from "../constants/actionTypes";

export const addUserReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case ADDUSER:
            console.log(action?.data)
            localStorage.setItem('addUser', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };

        default:
            return state
    }
};