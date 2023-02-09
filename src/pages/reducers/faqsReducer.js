import { FAQS } from "../constants/actionTypes";

export const faqsReducer = (state = [], action) => {
    switch (action.type) {
        case FAQS:
            console.log(action?.payload)
            return action.payload;

        default:
            return state
    }
};
