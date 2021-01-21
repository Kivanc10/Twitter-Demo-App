import { View, StyleSheet, Text } from "react-native";
import React, { Component } from "react";
import { TextArea, MyButton } from "./common";
import { connect } from 'react-redux';
import { compose } from "redux";
import {tweetChanged,sendTweet} from "../actions";


class NewTweet extends Component {
    onTweetChanged(tweet) {
        this.props.tweetChanged(tweet);
    }
    onSendTweet() {
        const {tweet,sendTweet} = this.props;
        sendTweet(tweet);
    }
    render() {
        const { user } = this.props;
        return (
            <View style={styles.newTweetContainer}>
                <View style={styles.userStyle}>
                <Text style={styles.userTextStyle}>{user}</Text>
                </View>
                <TextArea
                    placeholder="Type something"
                    onChangeText={this.onTweetChanged.bind(this)}
                />
                <MyButton
                    onPress={this.onSendTweet.bind(this)}
                    text="Send Tweet"
                    backgroundColor="aqua"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    newTweetContainer: {
        flex: 1,
        padding: 25
    },
    userStyle : {
        backgroundColor : "rgb(29,161,242)",
        borderRadius : 15,
        padding : 3,
        marginTop : 15,
        width : "50%"
    },
    userTextStyle : {
        color : "white",
        fontWeight : "bold",
        fontSize : 15,
        padding : 8
    }
})

const mapStateToProps = (state) => {
    // const data = state.auth.user.user.email
    // console.log(typeof data);

    return {
        user: state.auth.user.user.email,
        tweet : state.TweetForm
    }
}

export default connect(mapStateToProps,{tweetChanged,sendTweet})(NewTweet)