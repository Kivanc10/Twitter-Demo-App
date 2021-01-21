export const TWEET_CHANGED = "tweet_changed"
export const SEND_TWEET = "send_tweet";
export const UPDATE_TWEET = "update_tweet";
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
           //console.log("My key ==>" + snapshot.key());
            dispatch({
                type : FETCH_TWEET,
                payload : snapshot.val()
            })
        })
    }
}

//  firebase.database().ref(REF_DATABASE + '/' + uid)
/*
 email : Object.values(obj)[0],
            tweet : Object.values(obj)[1][0]
*/
export const updateTweet = ({uid,email,tweet}) => {   
  console.log("My fucking uid " + uid);
    return (dispatch) => {
        firebase.database().ref(REF_DATABASE + '/' + uid)       
        //.child(uid)
        .set({           
           email : email,
           tweet : tweet
        }).then(() => {
            NavigationServices.navigate("Inside")
            dispatch({
                type : UPDATE_TWEET
            })
        })
    }

}