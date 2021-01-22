import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image, TouchableHighlight, ScrollView } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTweet } from "../actions";
import _ from 'lodash';
import { Card } from "./common";
import { color } from "react-native-reanimated";
import * as NavigationServices from "../navigationServices";


class UserSelfPage extends Component {
    componentDidMount() {
        this.props.fetchTweet();
    }

    renderItem({ item }) {
        const tweet_name = (item.tweet.tweet == undefined) ? (item.tweet) : (item.tweet.tweet);
        return (
            <TouchableOpacity onPress={() => { }}>
                <Card>
                    <Text style={styles.usertweetEmailStyle}>{item.email}</Text>
                    <Text style={styles.usertweetNameStyle}>{tweet_name}</Text>
                </Card>
            </TouchableOpacity>
        )
    }

    render() {
        const { route, tweetList } = this.props;

        const newArray = tweetList.filter((tweet) => {
            return tweet.email == route.params.user_name
        })

        let following = parseInt(Math.random() * 100);
        let followers = parseInt(Math.random() * 100);

        // const atIndex = route.params.user_name.search("\@");
        // const userName = route.params.user_name.substring(0,atIndex).toUpperCase();
        // const dot = route.params.user_name.search("\[.]");
        // const userLastName = route.params.user_name.email.substring(atIndex+1,dot).toUpperCase();
        // const fullName = userName + " " + userLastName;
        return (
            <View style={styles.containerStyle}>
                <View style={styles.upSectionStyle}>
                    <View style={styles.upImageStyle}>
                        <Image
                            source={require("../../assets/nature.jpg")}
                            style={styles.upSelfImageStyle}
                        />
                    </View>
                    <View style={styles.userImageStyle}>
                        <TouchableOpacity onPress={() => alert("User image")}>
                            <Image
                                style={styles.selfImageStyle}
                                source={require("../../assets/user_image.jpg")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoStyle}>
                        {/* <Text>{fullName}</Text> */}
                        <Text style={styles.userNameStyle}>{route.params.user_name}</Text>
                        <Text style={styles.biographyStyle}>Biography</Text>
                        <View style={styles.followAndFollowers}>
                            <Text style={{ fontWeight: "bold", color: "white" }}>{following}</Text><Text style={styles.following}> Following </Text>
                            <Text style={{ fontWeight: "bold", color: "white" }}>{followers}</Text><Text style={styles.followers}> Followers </Text>
                        </View>

                        <Text style={styles.userTweetIndicator}>Tweets</Text>

                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={styles.tweetStyle}>
                        <FlatList
                            data={newArray}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.uid}
                        />
                    </View>
                    <View style={styles.penStyle}>
                        <TouchableHighlight style={styles.textTweetStyle} onPress={() => NavigationServices.navigate("NewTweet")}>
                            <Image source={require("../../assets/original.png")} style={styles.tweetImage} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: "black",

    },
    upSectionStyle: {

    },
    tweetStyle: {


    },
    infoStyle: {
        marginLeft: 10,
        height: 120,
        paddingTop: 15
    },
    upImageStyle: {
        width: "100%",
        height: 175,
        backgroundColor: "papayawhip"
    },
    upSelfImageStyle: {
        width: "100%",
        height: 175,
    },
    userImageStyle: {
        height: 80,
        width: 80,
        borderWidth: 0,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: -20,
    },
    selfImageStyle: {
        height: 80,
        width: 80,
        borderRadius: 50,
        paddingRight: 3
    },
    userNameStyle: {
        fontWeight: "bold",
        color: "darkgrey",
        opacity: 0.9,
    },
    biographyStyle: {
        color: "white",
        paddingTop: 5,
        fontWeight: "bold"
    },
    usertweetEmailStyle: {
        color: "gray"
    },
    usertweetNameStyle: {
        color: "white",
        marginTop: 25
    },
    following: {
        color: "gray"
    },
    followers: {
        color: "gray"
    },
    followAndFollowers: {
        flexDirection: "row",
        paddingTop: 5
    },
    tweetImage: {
        borderRadius: 20,
        height: 60,
        width: 60
    },
    penStyle: {
        width: "20%",
        position: "absolute",
        bottom: 10,
        right: 5,
        top: 200,
        paddingTop: 50
    },
    userTweetIndicator: {
        color: "rgb(29,161,242)",
        fontWeight: "bold",
        textDecorationLine: "underline",
        textDecorationStyle: "dashed",
        paddingTop : 5
    },
    
})

const mapStateToProps = (state) => {
    const TweetList = state.TweetList;

    const tweetList = _.map(TweetList, (val, uid) => {
        return { ...val, uid }
    })


    return {
        tweetList
    }
}

export default connect(mapStateToProps, { fetchTweet })(UserSelfPage);





