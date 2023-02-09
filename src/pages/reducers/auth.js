import { LOGOUT, LOADING, SUCCESS, FAILED} from "../constants/actionTypes";

let authData= {loading: false, error: null, data: null} 

export const authReducer = (state = { authData}, action) => {
    switch (action.type) {
        case LOADING:
            console.log(action?.data)
            console.log("AUTHDATA", authData)             
            return { ...state, authData: { ...authData, loading : true } };
        case SUCCESS:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: { ...authData, loading : false, data: action?.data} };
        case FAILED:
            return { ...state, authData: { ...authData, loading : false, error: action?.error} };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state
    }
};
