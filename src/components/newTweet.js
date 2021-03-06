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
                <Text 
                onPress = {() => this.props.navigation.navigate("UserSelfPage",{
                    user_name : this.props.user
                })}
                style={styles.userTextStyle}>{user}</Text>
                </View>
               <View style = {styles.areaStyle}>
               <TextArea
                    placeholder="Bir şeyler yaz ..."
                    onChangeText={this.onTweetChanged.bind(this)}   
                    numberOfLines = {20}
                    multiline={true}
                />
               </View>
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
        padding: 25,
        borderWidth : 1
    },
    userStyle : {
        backgroundColor : "rgb(29,161,242)",
        borderRadius : 15,
        padding : 3,
        marginTop : 15,
        width : "80%",
        marginBottom : 15
    },
    userTextStyle : {
        color : "white",
        fontWeight : "bold",
        fontSize : 15,
        padding : 8,
         
    },
    userButton : {
        margin : 20
    },
    areaStyle : {
        borderWidth : 1,
        borderRadius : 25,
        paddingTop : 20,        
        alignItems : "center"
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