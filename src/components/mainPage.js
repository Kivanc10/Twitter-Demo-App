import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import * as NavigationServices from "../navigationServices";
import { connect } from "react-redux";
import { fetchTweet } from "../actions";
import { Card } from "./common";
import _, { random, range } from 'lodash';
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { cos } from "react-native-reanimated";

class MainPage extends Component {
    componentDidMount() {
        this.props.fetchTweet();
    }    
    renderItem({ item }) {
        // const email = item.email;
        // const tweet = item.tweet.tweet;
        return (
            <TouchableOpacity key={item.uid}>
                <Card >
                    <Text style={styles.userName}>{item.email}</Text>
                    <Text style={styles.tweetName}>{item.tweet.tweet}</Text>
                </Card>
            </TouchableOpacity>
        )
    }
    render() {      
        const { tweetList, range } = this.props;

        return (
            // <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    data={tweetList}
                    renderItem={this.renderItem}
                    keyExtractor={range.forEach(element => {
                        
                    })}
                />
                <View style={styles.penStyle}>
                    <TouchableHighlight style={styles.textTweetStyle} onPress={() => NavigationServices.navigate("NewTweet")}>
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
    const tweetObj = state.TweetList;
    const newArray = [];
    const range = [];

    Object.keys(tweetObj).map((key, index) => {
        newArray.push(tweetObj[key]);
        range.push(key);
    })
    console.log("Range is ",range)
    return {
        tweetList: newArray,
        range
    }
}

export default connect(mapStateToProps, { fetchTweet })(MainPage);