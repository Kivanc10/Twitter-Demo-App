import React from "react";
import { Text, TextInput, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput, { createFilter } from 'react-native-search-filter';

const SearchHeader = ({onChangeText}) => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.menuIconStyle}>
            <Icon name="menu" size={35} color="rgb(29,161,242)" style={styles.icon1}/>
            </View>
            <View style={styles.searchInputStyle}>            
           <TextInput
           onChangeText = {onChangeText}
           style={styles.TextinputStyle}
           placeholderTextColor = "gainsboro"
           placeholder = "  Tweeter'da Ara"
           />
            </View>
            <View style={styles.settingIconStyle}>
          <Icon name="settings" size={30} color="rgb(29,161,242)" style={styles.icon1}/>
            </View>
        </View>
    )
}
/*
<TextInput
            onChangeText = {onChangeText}
            placeholder = "  Twitter'da Ara"
            style={styles.TextinputStyle}
            placeholderTextColor = "gainsboro"/>

            */

const styles = StyleSheet.create({
    containerStyle : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-around",       
        width : "100%",
        paddingTop : 15
    },
    menuIconStyle : {
        paddingTop : 5,
        flexGrow : 1,
        marginLeft : 10        
    },
    searchInputStyle : {
        flexGrow : 2,
        paddingRight : 35,
        paddingTop : 5
    },

    settingIconStyle : {
        flexGrow : 1,
        paddingTop : 5,
        marginRight : -45
    },
    TextinputStyle : {
        color : "white",
        backgroundColor : "gray",
        borderRadius : 15,
        padding : 3
    }

})


export {SearchHeader};