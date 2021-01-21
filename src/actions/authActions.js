export const EMAIL_CHANGED = "email_changed";
export const PASSWORD_CHANGED = "password_changed";
export const USER_SUCCESS = "user_success";
export const LOGIN = "login";
export const USER_FAILED = "user_failed";
import firebase from "firebase";
import * as NavigationServices from "../navigationServices";




export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
}



export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN
        })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => loginSuccess(dispatch,user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => loginSuccess(dispatch,user))
                    .catch(() => loginFailed(dispatch))
            })
    }
}

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: USER_SUCCESS,
        payload: user
    })
    NavigationServices.navigate("Inside");
}

const loginFailed = (dispatch) => {
    dispatch({
        type: USER_FAILED
    })
}

