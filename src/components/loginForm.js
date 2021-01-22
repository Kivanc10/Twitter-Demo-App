import React, { Component } from "react";
import { Text, View, Image, StyleSheet ,FlatList} from "react-native";
import { Input, MyButton } from "./common";
import firebase, { auth } from "firebase";
import {emailChanged,passwordChanged,loginUser} from "../actions";
import {connect} from "react-redux";
import { withNavigation } from 'react-navigation';
import * as NavigationServices from "../navigationServices";

class LoginForm extends Component {

    componentDidMount() {
        this.props.loggedIn ? (NavigationServices.navigate("Inside")) : (null);
    }

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }
    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }
    onButtonClicked() {
            const { email, password } = this.props;
            this.props.loginUser(email,password);
    }
 
    render() {
        const { loading, error} = this.props;
        const errorMsg = error ? (
            <Text style={styles.errorStyle}>{error}</Text>
        ) : null;
        
        const user_text = this.props.loggedIn ? (this.props.user.user.email) : (this.props.email);
        const user_password = this.props.loggedIn ? (this.props.user.password) : (this.props.password);
        const try_1 = <Text>{this.props.email}</Text>
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
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={user_text}                                               
                    />

                    <Input
                        text="Şifre"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        secureTextEntry
                        value={user_password}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <MyButton
                        spinner={loading}
                        onPress={this.onButtonClicked.bind(this)}
                        text="Giriş yap"
                    />
                    {errorMsg}
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
    buttonWrapper: {
        padding: 40,
        marginTop: -40
    },
    errorStyle: {
        color: "red",
        fontSize: 20,
        paddingLeft: 48,
        paddingTop: 15
    }
})


const mapStateToProps = (state) => {
    const {email,password,error,loading,loggedIn,user} = state.auth;
    return {
        email,password,error,loading,loggedIn,user
    }
}


export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);