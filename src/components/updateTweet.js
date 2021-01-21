import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as NavigationServices from "../navigationServices";
import { TextArea, MyButton } from "./common";
import { tweetChanged,updateTweet } from "../actions";
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

    render() {
        const { route , tweetForm} = this.props;
                
        return (
            <View style={styles.container}>
                <View style={styles.text_area_style}>
                    <TextArea
                        onChangeText={this.onChangeTweet.bind(this)}
                        multiline={true}
                        value={tweetForm.tweet}
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
                        onPress={() => alert("It was deleted")}
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
        alignItems: "center"
    },
    update_btn_style: {

    },
    delete_btn_style: {

    }
})

const mapStateToProps = (state) => {
    return {
        tweetForm: state.TweetForm
    }
}

export default connect(mapStateToProps, { tweetChanged,updateTweet })(UpdateTweet);