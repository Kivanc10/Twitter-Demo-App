import {View,TextInput,StyleSheet} from "react-native";
import React from "react";

const TextArea = ({onChangeText,placeholder,value,multiline,numberOfLines}) => {
    return (
        <View styles={styles.textAreaStyles}>
            <TextInput 
            placeholder={placeholder}
            multiline = {true}
            onChangeText={onChangeText}
            value = {value}
            styles = {styles.inputStyle}
            numberOfLines = {numberOfLines}
            placeholderTextColor = "gray"
        />
        </View>
    )
}

const styles = StyleSheet.create({
    textAreaStyles : {
        borderWidth: 1,        
        height: 200
    },
    inputStyle : {
        height: 200,
        color: '#7B8D93',
        fontSize: 18,
        alignItems : "center"
    }
})

export {TextArea};