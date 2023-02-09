import { CREATEWILL, WILL, FETCHWILL} from "../constants/actionTypes";

const initialData = {
    personalInformation:[]
}

export const willReducer = (state = [], action) => {
    switch (action.type) {
        case FETCHWILL:
            return action.payload;

        case CREATEWILL:
            return [...state, action.payload];
        
        case WILL:
            return action.payload
        
        // case WILL:
        //     return state.map((will) => will._id === action.payload._id ? action.payload : will);
        
        default:
            return state;
    }
}

