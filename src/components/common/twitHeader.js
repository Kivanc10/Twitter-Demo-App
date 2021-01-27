import React from "react";
import { Text, TextInput, StyleSheet, View ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TwitHeader = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.imagesStyle}>
                <View style={styles.image_one}>
                <Icon name="align-justify" size={20} color="rgb(29,161,242)" style={styles.icon1}/>
                </View>
                <View style={styles.image_two}>
                <Image style={styles.pic_two} source={require("../../../assets/twit3.png")}></Image>
                </View>
                <View style={styles.image_three}>
                <Icon name="star" size={20} color="rgb(29,161,242)" style={styles.icon1}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
     paddingBottom : 10,
     paddingTop : 10,
     borderBottomWidth : 5,      
    borderBottomColor : "aliceblue",
    //backgroundColor : "black"
    },
    imagesStyle : {
        flexDirection : "row",
        justifyContent: "space-around"
    },
    image_one : {        
     marginLeft : -32
    },
    pic_two : {
        width : 25,
        height : 20
    },
    image_two : {
        
    },
    image_three : {
      marginRight : -30
    }
})

export {TwitHeader};