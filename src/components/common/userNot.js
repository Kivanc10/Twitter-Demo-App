import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,Text,StyleSheet,Image} from "react-native";

const UserNot = ({src,user}) => {
    return (
        <View style={styles.container}>
            <View style={styles.section_1}>
            <Icon name="user" size={20} color="rgb(29,161,242)" style={styles.icon2}/>
            </View>

            <View style = {styles.section_2}>
            <View style={styles.image_style}>
            <Image
            source = {src}
            style = {styles.selfImageStyle}
            />
            </View>

            <View style={styles.infoStyle}>
            <Text style={styles.user_not_style}>{user} </Text>
            <Text style={styles.ordinarytext}>followed you</Text>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        padding : 25,
        borderBottomWidth : 1,
        borderBottomColor : "rgb(210,212,216)"
    },
    section_1 : {
        flexGrow : 1,
        paddingTop : 3
    },
    section_2 : {
        flexGrow : 5,
        flexDirection : "column"
    },
    image_style : {
        marginLeft : 5
    },
    infoStyle : {
        flexDirection : "row",
        padding : 10
    },
    user_not_style : {
       fontWeight : "bold"
    },
    selfImageStyle : {
        height : 50,
        width : 50,
        borderRadius : 25
    },
    ordinarytext : {
        
    }
})

export {UserNot};