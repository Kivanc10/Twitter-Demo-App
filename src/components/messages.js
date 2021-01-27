import React, { Component } from "react";
import { Text, View, Image, StyleSheet ,TextInput} from "react-native";
import {connect} from "react-redux";

class Messages extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Messages.js</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    searchFieldStyle : {

    }
})



export default Messages;