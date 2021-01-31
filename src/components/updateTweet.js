import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as NavigationServices from "../navigationServices";
import { TextArea, MyButton } from "./common";
import { tweetChanged,updateTweet,deleteTweet } from "../actions";
import { connect } from "react-redux"


/*
import {connect} from "react-redux";
import {updateTweet} from "../actions";
*/

// <Text></Text>  
class UpdateTweet extends Component {

    componentDidMount() {
        //const {tweet} = this.props.route.params; // tweetin ilk degeri
        const {route} = this.props;
        const showTweet = (route.params.tweet.tweet.tweet == undefined) ? (route.params.tweet.tweet) : (route.params.tweet.tweet.tweet);
        this.props.tweetChanged(showTweet); // acildiginda gozukmesi icin
    }

    onChangeTweet(tweet) {
        this.props.tweetChanged(tweet);
    }

    onUpdateTweet() {
        const tweetObj = {...this.props.route.params.tweet,
                            tweet : this.props.tweetForm.tweet}
        /*
        yukarıda ilk olarak mainden route ile gönderilen tweet ilk hali
        tweet : olan ise , güncellenmiş hali
        */
        this.props.updateTweet(tweetObj);
    }

    onDeleteTweet() {
        const {uid} = this.props.route.params.tweet;

        this.props.deleteTweet(uid);
    }

    render() {
        const { route , tweetForm,user} = this.props;
        const tweet_writer = this.props.route.params.tweet.email
        return (
            <View style={styles.container}>
                <View style={styles.userNameStyle}>
                <Text 
                style = {styles.userMail}
                onPress = {() => this.props.navigation.navigate("UserSelfPage",{
                    user_name : tweet_writer
                })}>{tweet_writer}</Text>
                </View>
                <View style={styles.text_area_style}>
                    <TextArea
                        onChangeText={this.onChangeTweet.bind(this)}
                        multiline={true}
                        value={tweetForm.tweet}
                        numberOfLines = {20}
                    />
                </View>
                <View style={styles.update_btn_style}>
                    <MyButton
                        spinner={false}
                        onPress={this.onUpdateTweet.bind(this)}
                        backgroundColor="rgb(29,161,242)"
                        text="Update Tweet"
                    />
                </View>

                <View style={styles.delete_btn_style}>
                    <MyButton
                        spinner={false}
                        onPress={this.onDeleteTweet.bind(this)}
                        backgroundColor="rgb(29,161,242)"
                        text="Delete Tweet"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 25
    },
    text_area_style: {
        width: 300,
        height: 400,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        alignItems: "center",
        paddingTop : 15
    },
    update_btn_style: {

    },
    delete_btn_style: {

    },
    userNameStyle : {
        backgroundColor : "rgb(29,161,242)",
        borderRadius : 15,
        padding : 3,
        marginTop : 15,
        width : "70%",        
        padding : 10,
        alignItems : "center",
        paddingBottom : 10,
        marginBottom : 15
    },
    userMail : {
        color : "white",
        fontWeight : "bold"
    }
})

const mapStateToProps = (state) => {
    return {
        tweetForm: state.TweetForm,
        user: state.auth.user.user.email
    }
}

export default connect(mapStateToProps, { tweetChanged,updateTweet,deleteTweet })(UpdateTweet);