import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { MessagesFramework,MessagesHeader } from "./common"


class Messages extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <MessagesHeader />
                    </View>
                   <View>
                   <MessagesFramework
                        src={require("../../assets/1.jpg")}
                        user="Emma Wayne"
                        date="just now"
                        content="See you later,darling :)"
                    />

                    <MessagesFramework
                        src={require("../../assets/2.jpg")}
                        user="Jane Smith"
                        date="25 Dec 20"
                        content="Call me up as soon as possible"
                    />

                    <MessagesFramework
                        src={require("../../assets/3.jpg")}
                        user="Olivia Williams"
                        date="19 Feb"
                        content="shall we meet now ???"
                    />

                    <MessagesFramework
                        src={require("../../assets/4.jpg")}
                        user="Matt Jones"
                        date="18 Jan 20"
                        content="Did you take Sue out last night ?"
                    />

                    <MessagesFramework
                        src={require("../../assets/8.jpg")}
                        user="Harry Miller"
                        date="15 Dec 19"
                        content="We'll take strool along the Himalaya next week. Do you want to join us"
                    />

                    <MessagesFramework
                        src={require("../../assets/10.jpg")}
                        user="Clarke Johnsoon"
                        date="15 Jul 19"
                        content="We should arrange time to talk the matter over soon"
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
    },
    searchFieldStyle: {

    }
})



export default Messages;