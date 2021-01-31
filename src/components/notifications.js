import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { NotificationsHeader, LikedYou, UserNot, Retweet } from "./common"


class Notifications extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <NotificationsHeader />
                    </View>

                    <View>


                        <UserNot
                            src={require("../../assets/3.jpg")}
                            user="Olivia"
                        />


                        <LikedYou
                            src={require("../../assets/7.jpg")}
                            user="Matt"
                        />

                        <Retweet
                            src={require("../../assets/4.jpg")}
                            user="Jefferson"
                        />

                        <LikedYou
                            src={require("../../assets/11.jpg")}
                            user="Matt"
                        />

                        <LikedYou
                            src={require("../../assets/10.jpg")}
                            user="Clarke"
                        />

                        <UserNot
                            src={require("../../assets/9.jpg")}
                            user="Jamie"
                        />


                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Notifications;