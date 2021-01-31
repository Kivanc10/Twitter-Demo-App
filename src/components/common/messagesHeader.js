import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import {View,Text,StyleSheet} from "react-native";


const MessagesHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section_1}>
            <Icon name="menu" size={40} color="rgb(29,161,242)" style={styles.icon2}/>

            </View>

            <View style={styles.section_2}>
            <View style={styles.messageText}>
                <Text style={styles.messageMainTextStyle}>Messages</Text>
            </View>

            <View style={styles.settingsIconWrapper}>
            <Icon name="settings" size={35} color="rgb(29,161,242)" style={styles.icon2}/>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        padding : 25,
        marginLeft : 10,
        marginBottom : -20
    },
    section_1 : {
        flexGrow : 1
    },
    section_2 : {
        flexGrow : 5,
        flexDirection : "row",
        alignItems : "flex-end"
    },
    messageText : {
        flexGrow : 1,
        marginLeft : 40
    },
    settingsIconWrapper : {
        flexGrow : 2,
        marginLeft : 100,
        marginBottom : 1
    },
    messageMainTextStyle : {
        fontSize : 20,
        fontWeight : "bold",
        marginBottom : 10
    }
})


export {MessagesHeader};