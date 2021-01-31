import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button, TextInput, FlatList, TouchableOpacity } from "react-native";
import { SearchHeader, Card ,SearchResults} from "./common";
import { connect } from "react-redux";
import { fetchTweet } from "../actions";
import _ from 'lodash';
import * as NavigationServices from "../navigationServices";


class Search extends Component {
    state = {
        searchTerm: "",
        IsData: false,
        result: []
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
        <TouchableOpacity onPress={() => NavigationServices.navigate("UserSelfPage",{ 
            user_name : item.email
         })}>
             <SearchResults>
              <Text style={{fontWeight : "bold"}}>{item.email}</Text>
         </SearchResults>
        </TouchableOpacity>
        )
    }

    onSearchUsers() {
        const { tweetList } = this.props;
        const { result } = this.state;


        this.setState({
            result: []
        })
    }



    temp() {
        return (
            <View style={styles.image_style}>
               <View style={styles.section_1}>
               <Image
                    source={require("../../assets/search.png")}
                    style={styles.icon_1}
                />
               </View>
               <View>
                   <Text style={styles.imageText}>You can search whole users from here</Text>
               </View>
            </View>
        )
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
                    <Image source={require("../../assets/infinity.jpg")} style={styles.mainImageStyle} />
                </View>

                <View style={styles.searchresults}>
                    {this.state.searchTerm != "" ? <FlatList
                        data={result}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item) => item.uid}
                    /> : <Text>{this.temp()}</Text>}

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
        height: 350
    },
    denemeButton: {

    },
    image_style: {
        flex : 1
    },
    icon_1 : {
        height : 120,
        width : 120,
        marginLeft : 120,
        marginTop : 50
    },
    section_1 : {
        
    },
    imageText : {
        color : "rgb(93,165,249)",
        fontWeight : "bold",
        justifyContent : "center",
        marginLeft : 65,
        marginTop : 25
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
