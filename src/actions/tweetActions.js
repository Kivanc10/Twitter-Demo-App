export const TWEET_CHANGED = "tweet_changed"
export const SEND_TWEET = "send_tweet";
import firebase from "firebase";
import { cos } from "react-native-reanimated";
const REF_DATABASE = "/tweets";
export const FETCH_TWEET = "fetch_tweet";
import * as NavigationServices from "../navigationServices";

export const tweetChanged = (tweet) => {
    return {
        type : TWEET_CHANGED,
        payload : tweet
    }
}

export const sendTweet = (tweet) => {
    const currentUser = firebase.auth().currentUser;
    const email = currentUser.email;
    return (dispatch) => {
        firebase.database().ref(REF_DATABASE)
        .push({email,tweet})
        .then(() => {
            NavigationServices.navigate("Inside");
            dispatch({
                type : SEND_TWEET
            })
        })
    }

}

export const fetchTweet = () => {
    return (dispatch) => {
        firebase.database().ref(REF_DATABASE)
        .on("value",(snapshot) => {
           // console.log(snapshot.val())
            dispatch({
                type : FETCH_TWEET,
                payload : snapshot.val()
            })
        })
    }
}


