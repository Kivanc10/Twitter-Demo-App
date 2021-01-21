import { exp } from "react-native-reanimated";
import {
    FETCH_TWEET
} from "../actions";


export default (state = {},action) => {
    switch (action.type) {
        case FETCH_TWEET:
           return action.payload
        default:
            return state;
    }
}