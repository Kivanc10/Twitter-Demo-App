import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Input, MyButton } from "./common";

class LoginForm extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.section1}>
                    <Image source={require("../../assets/twit3.png")} style={styles.twitImage} />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                    <Text style={styles.loginText}>Twitter'a giriş yap</Text>
                </View>
                <View style={styles.loginForm}>
                    <Input
                        text="Telefon, e-posta veya kullanıcı adı"
                        onChangeText={() => { }}
                    />

                    <Input
                        text="Şifre"
                        onChangeText={() => { }}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <MyButton
                    spinner = {false}
                    onPress = {() => {}}
                    text = "Giriş yap"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    section1: {
        justifyContent: "center",
        alignItems: "center",
    },
    twitImage: {
        width: 50,
        height: 40,
        marginTop: 50
    },
    loginText: {
        fontWeight: "bold",
        color: "black",
        textAlign: "justify",
        fontSize: 19
    },
    loginForm: {
        marginTop: 10,
        padding: 40

    },
    buttonWrapper : {
        padding: 40,
        marginTop : -40
    }
})

export default LoginForm;