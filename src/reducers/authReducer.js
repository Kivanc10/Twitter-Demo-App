import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_SUCCESS,
    LOGIN,
    USER_FAILED
} from "../actions";

const INITIAL_STATE = {
    email : "",
    password : "",
    user : {},
    error : "",
    loading : false,
    loggedIn : false
}

export default (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state , email : action.payload};
        case PASSWORD_CHANGED:
            return { ...state , password : action.payload}
        case USER_SUCCESS:
            return {...state , ...INITIAL_STATE, loggedIn : true ,user : action.payload}
        case LOGIN : 
            return {...state , loading : true , loggedIn : false ,error : ""}
        case USER_FAILED:
            return {...state , loading : false , loggedIn : false , error : "Authentication failed"}
        default:
            return state;
    }
}