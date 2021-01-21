import {combineReducers} from "redux";
import AuthReducer from "./authReducer";
import TweetFormReducer from "./tweetFormReducer";
import TweetListReducer from "./tweetListReducer";

export default combineReducers({
    auth : AuthReducer,
    TweetForm : TweetFormReducer,
    TweetList : TweetListReducer
})

