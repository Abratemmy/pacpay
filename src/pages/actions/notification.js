import { NOTIFICATION, UPDATENOTIFICATION } from "../constants/actionTypes";
import * as notificationapi from "../API/index.js";


export const getNotification = () => async (dispatch) => {
    try {
        const { data } = await notificationapi.getNotification();
        dispatch({ type: NOTIFICATION, payload: data })
        console.log("notification", data)
    } catch (error) {
        console.log(error.message)
    }
}

export const updateNotification = (id, payload, showNotification, setShowNotification) => async (dispatch) => {
    console.log("NoteId", id)
    try {
        setShowNotification(true)
        const { data } = await notificationapi.updateNotification(id, payload);
        dispatch({ type: UPDATENOTIFICATION, payload: data });
        // window.location.reload(true)
        setShowNotification(!showNotification)
    } catch (error) {
        console.log(error);
    }
}