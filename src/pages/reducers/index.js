import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { resetPasswordReducer } from "./resetpassword";
import { loggedInUserReducer } from "./loggedInUser";
// import { assetReducer } from "./assetReducer";
import { addUserReducer } from "./addUserReducer";
import { willReducer } from "./willReducer";
import { getProductReducer } from "./getProduct";
import { assetReducer } from "./assetReducer";
import { paymentReducer } from "./paymentReducer";
import { faqsReducer } from "./faqsReducer";
import { bookingReducer } from "./bookingReducer";
import { notificationReducer } from "./notificationReducer";
import { cashReducer } from "./cashReducer";
export default combineReducers({
    authReducer,
    resetPasswordReducer,
    addUserReducer,
    loggedInUserReducer,
    willReducer,
    getProductReducer,
    assetReducer,
    paymentReducer,
    faqsReducer,
    bookingReducer,
    notificationReducer,
    cashReducer,

})