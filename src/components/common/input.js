import React from "react";
import { Text, TextInput, StyleSheet, View } from 'react-native';

const Input = ({text,secureTextEntry,onChangeText,value}) => {
    const {inputWrapper,textStyle,inputStyle} = styles;
    return (
        <View style={inputWrapper}>
            <Text style={textStyle}>{text}</Text>
            <TextInput 
            style={inputStyle}
            secureTextEntry = {secureTextEntry}
            onChangeText = {onChangeText}
            value = {value} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper : {
        flexDirection : "column",
        height : 50,
        width : "auto",
        borderBottomWidth : 1,
        borderBottomColor : "#657786",
        paddingLeft : 15,
        marginTop : 30
    },
    textStyle : {
        fontSize : 10,
        color : "#657786",
        textAlign : "left",
    },
    inputStyle : {
        fontSize : 15,
        fontWeight : "bold"
    }
})

export { Input };