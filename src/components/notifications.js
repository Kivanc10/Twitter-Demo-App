import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

class Notifications extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Notifications.js</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})

export default Notifications;