import React from "react";
import {View,ActivityIndicator,StyleSheet} from "react-native";

const Spinner = () => {
    const {spinner} = styles;
    return (
        <View style = {spinner}>
            <ActivityIndicator color="blue"/>
        </View>
    )
}

const styles = StyleSheet.create({
    spinner : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})

export {Spinner};