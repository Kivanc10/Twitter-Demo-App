import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Spinner } from './spinner';

const MyButton = ({ spinner, onPress, backgroundColor, text }) => {
    const content = spinner ? (
        <Spinner />
    ) : (
            <TouchableHighlight
                onPress={onPress}
                style={styles.buttonStyle}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableHighlight>
        )

    return (
        <View style={styles.buttonWrapper}>
            {content}
        </View>
    )

}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 10,
        paddingTop: 20,
        backgroundColor: 'rgb(29,161,242)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        alignItems: "center",        
        paddingLeft: 110,
        paddingBottom: 15
    }
})


export { MyButton };