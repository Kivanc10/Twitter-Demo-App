import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import * as NavigationServices from "../navigationServices";
import { connect } from "react-redux";
import { fetchTweet } from "../actions";
import { Card,TwitHeader } from "./common";
import _, { random, range } from 'lodash';
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { cos } from "react-native-reanimated";
// this.props.navigation.navigate
// NavigationServices.navigate("UpdateTweet")
class MainPage extends Component {
    componentDidMount() {
        this.props.fetchTweet();
    } 

    renderItem({ item }) {
        // const email = item.email;
        // const tweet = item.tweet.tweet;
        const tweet_name = (item.tweet.tweet == undefined) ? (item.tweet) : (item.tweet.tweet);
        return (
            <TouchableOpacity key={item.uid} onPress = {() => NavigationServices.navigate("UpdateTweet",{ tweet: item })}>
                <Card >
                    <Text style={styles.userName}>{item.email}</Text>
                    <Text>{tweet_name}</Text>
                </Card>
            </TouchableOpacity>
        )
    }
    render() {      
        const { tweetList, range } = this.props;

        return (
            // <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <TwitHeader />
                <FlatList
                    data={tweetList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.uid}
                />
                <View style={styles.penStyle}>
                    <TouchableHighlight style={styles.textTweetStyle} onPress={() => NavigationServices.navigate("NewTweet",{
                        params : item
                    })}>
                        <Image source={require("../../assets/original.png")} style={styles.tweetImage} />
                    </TouchableHighlight>
                </View>
            </View>

            // </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        margin: 20
    },
    tweetImage: {
        borderRadius: 25,
        height: 60,
        width: 60,
        marginTop: -20,
        marginLeft: -20
    },
    userName: {
        color: "gray",
        opacity: 0.8
    },
    tweetName: {
        marginTop: 20,
        fontWeight: "bold",
        fontFamily: "monospace",
        width: 150
    },

    tweetImage : {
        borderRadius : 20,
        height : 60,
        width : 60
    },
    penStyle : {
        width : "20%",
        position : "absolute",
        bottom : 10,
        right : 5
    }
})
const mapStateToProps = (state) => {
   
    
    const tweetList = _.map(state.TweetList,(val,uid) => {
        return {...val,uid}
    });
    

    return {
        tweetList
    }
}

export default connect(mapStateToProps, { fetchTweet })(MainPage);