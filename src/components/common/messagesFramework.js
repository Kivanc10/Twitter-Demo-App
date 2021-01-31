import React from "react";
import { Text, View, TouchableOpacity, StyleSheet ,Image} from "react-native"


const MessagesFramework = ({src,user,date,content}) => {
    return (
        <View style={styles.container}>
            <View style={styles.section_1}>
                <View style={styles.imageStyle}>
                    <Image
                    source = {src}
                    style = {styles.img_style}
                    />                   
                </View>
            </View>

            <View style={styles.section_2}>
                <View style={styles.nameAndDateStyle}>
                    <Text style={styles.userNameStyle}>
                        {user}
                </Text>
                    <Text style={styles.dateStyle}>
                        {date}
                </Text>
                </View>
                <View style={styles.messageTextContainer}>                   
                        <Text style={styles.messageSelfStyle}>{content}</Text>                   
                </View>
            </View>
        </View>
    )
}

/*



*/

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection : "row",
        borderBottomWidth : 1,
        borderBottomColor : "rgb(210,212,216)",
        marginTop : 10
    },
    section_1: {
        flexGrow : 2,
        justifyContent : "center"
    },
    section_2: {
        flexGrow : 4,
        flexDirection : "column"
    },
    nameAndDateStyle: {
        flexDirection: "row",
        alignContent : "flex-end"
    },
    userNameStyle: {
        fontWeight : "bold"
    },
    dateStyle: {
        opacity : 0.6,
        color : "gray",
        paddingLeft : 110
    },
    messageTextContainer: {
        paddingRight : 15,
        width : "90%"
    },
    imageStyle: {
        paddingRight : 16
    },
    messageSelfStyle : {

    },
    img_style : {
        width : 60,
        height : 60,
        borderRadius : 30
    }
})

export { MessagesFramework };