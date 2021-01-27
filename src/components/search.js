import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button, TextInput, FlatList, TouchableOpacity } from "react-native";
import { SearchHeader, Card } from "./common";
import { connect } from "react-redux";
import { fetchTweet } from "../actions";
import _ from 'lodash';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

class Search extends Component {
    state = {
        searchTerm: "",
        IsData : false,
        result : []
    }

    componentDidMount() {
        fetchTweet();
    }


    onStateChanged(text) {
        this.setState({
            searchTerm: text
        })
    }


    renderItem({ item }) {
        const { tweetList } = this.props;
        //const tweet_name = (item.tweet.tweet == undefined) ? (item.tweet) : (item.tweet.tweet);
        //const filteredEmails = tweetList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <View>
                <Text>{item.email}</Text>
            </View>
        )
    }

    onSearchUsers() {
        const { tweetList } = this.props;
        const {result} = this.state;

        
        this.setState({
            result : []
        })
    }



    render() {
        const { tweetList } = this.props;

        const result = []

        tweetList.filter((tweet) => {
            if (String(tweet.email).includes(this.state.searchTerm.toLowerCase()))
                result.unshift(tweet)
        })

       

        return (
            <View style={styles.container}>
                <View style={styles.searchFieldStyle}>
                    <SearchHeader
                        onChangeText={this.onStateChanged.bind(this)}
                    />
                </View>
                <View style={styles.searchMainImage}>
                    <Image source={require("../../assets/nature.jpg")} style={styles.mainImageStyle} />
                </View>

                <View style={styles.searchresults}>
                {this.state.searchTerm != "" ? <FlatList
                        data={result}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item) => item.uid}
                    /> : <Text>Arama çubuğuna herhangi birşey yazın</Text>}
                    
                </View>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchFieldStyle: {
        backgroundColor: "black",
        height: 65,
        paddingTop: 5
    },
    searchMainImage: {
        backgroundColor: "red",
        height: 200,
        width: "100%"
    },
    mainImageStyle: {
        height: 200,
        width: "100%"
    },
    searchresults: {
        height: 200
    },
    denemeButton: {

    }
})

const mapStateToProps = (state) => {
    const TweetList = state.TweetList;

    const tweetList = _.map(TweetList, (val, uid) => {
        return { ...val, uid };
    })

    return {
        tweetList
    }
}

export default connect(mapStateToProps, { fetchTweet })(Search);




/*

<View style={styles.searchFieldStyle}>
                    <SearchHeader />
                </View>

                <View style={styles.searchMainImage}>

                    </View>

                    <View style={styles.searchresults}>

                    </View>

                    <View style={styles.penStyle}>

                    </View>

*/
