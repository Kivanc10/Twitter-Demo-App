import React from "react";
import {Text,View,Image,StyleSheet} from "react-native"


const SearchResults = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.section_1}>
            <Image
            source = {require("../../../assets/12.jpg")}
            style = {styles.imageStyle}
            />
            </View>

            <View style={styles.section_2}>
            {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        borderWidth : 1,
        borderColor : "rgb(210,212,216)",
        padding : 35
    },
    section_1 : {
        flexGrow : 1
    },
    section_2 : {
        flexGrow : 5,
        marginTop : 20,
        marginLeft : 15
    },
    imageStyle : {
        width : 70,
        height : 70,
        borderRadius : 35
    }
})

export {SearchResults};