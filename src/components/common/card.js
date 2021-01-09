import {Text,View,StyleSheet,Image} from "react-native";
import React from "react";
import { exp } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/FontAwesome';


const Card = (props) => {
    const myIcon1 = <Icon name="comments" size={20} color="gray" style={styles.icon1}/>;
    const myIcon2 = <Icon name="retweet" size={20} color="gray" style={styles.icon1}/>;
    const myIcon3 = <Icon name="heart" size={20} color="gray" style={styles.icon1}/>;
    return (
        <View style= {styles.cardWrapper}>
            <View style = {styles.cardWrapper_two}>
            <View style={styles.imageStyle}>
            <Image source = {require("../../../assets/twitterEgg.jpg")}  style={styles.image}/>
            </View>
            <View style={styles.textStyle}>
                {props.children}
            </View>
            </View>
            <View style={styles.iconStyles}>
            {myIcon1}
            {myIcon2}
            {myIcon3}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper : {        
        flex: 1,
        marginTop : 20
    },
    cardWrapper_two : {
        flexDirection : "row",
    },
    imageStyle : {
        flexGrow : 1,
        height : 100,
        height : 100
    },
    image : {
        height : 50,
        width : 50,
        borderRadius : 25
    },
    textStyle : {
        flexGrow : 3
    },
    iconStyles : { 
        flexDirection : "row",
        paddingLeft : 60,
        width : "90%"
    },
    icon1 : {
        paddingTop : 10,
        flexGrow : 1
    }
})

export {Card};